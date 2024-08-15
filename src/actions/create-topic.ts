'use server';

import type { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letters or dashed without spaces",
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createTopic(formState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {
  const name = formData.get("name");
  const description = formData.get("description");
  console.log(name, description);
  console.log('-------------------');

  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  }); // this is the return type from a server action

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors
    }
  }
/* NOTE: https://www.udemy.com/course/next-js-the-complete-developers-guide/learn/lecture/40834590#notes
3 minutes 30 seconds into the video */

const session = await auth();
if (!session || !session.user) {
  return {
    errors: {
      _form: ["You must be signed in to create a topic 😎"],
    },
  };
}

let topic: Topic;
try {
  topic = await db.topic.create({
    data: {
      slug: result.data.name,
      description: result.data.description,
      /* userId: session.user.id */
    }
  })
} catch (err:unknown) {
  if (err instanceof Error) {
    return {
      errors: {
        _form: [err.message],
      },
    };
  } else {
    return {
      errors: {
        _form: ["Unknown error"],
      },
    };
  }
}

revalidatePath('/')
redirect(paths.topicShow(topic.slug));

  /* return { errors: {} }; */

}
/* 
INFO: validation DATA from ZOD 😊 
https://www.udemy.com/course/next-js-the-complete-developers-guide/learn/lecture/40969842#notes
 */

/* "use server";

import { auth } from "@/auth";
import { z } from "zod";
import type { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/db";
import paths from "@/paths";
import { revalidatePath } from "next/cache";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letters or dashed without spaces",
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[]; // show error if the the user is not authenticated
  };
}

// :Promise<CreateTopicFormState>  => This is the return type from a server action

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to create a topic"],
      },
    };
  }

  // this entire thing including let topic with try and catch is a pattern so follow it
  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["something went wrong"],
        },
      };
    }
  }

  revalidatePath("/");
  redirect(paths.topicShow(topic.slug));
}
 */