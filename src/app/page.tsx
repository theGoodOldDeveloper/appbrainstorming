import TopicCreateForm from "@/components/topics/topic-create-form";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2"> Top Post</h1>
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
}

/* 
      <form action={actions.signIn}>
        <Button type="submit" color="success">
          Sign In! 👑
        </Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit" color="danger">
          Sign Out! 💰
        </Button>
      </form>
      
      {session?.user ? (
        <div>Signed In: {JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}

*/
/* //INFO
import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";
*/
//NOTE: add async to the function
//export default async function Home() {}
/* 
const session = await auth();

  return (
    <div>
      <div className="bg-red-200">
        <div>Content in server side</div>
        {session?.user ? (
          <div className="text-blue-400 text-3xl font-extrabold p-2">
            Signed In
          </div>
        ) : (
          <div className="text-purple-400 text-3xl font-extrabold p-2">
            Signed Out
          </div>
        )}
      </div>

      <Profile />
    </div>
  );
//INFO
*/
