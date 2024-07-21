"use client";

import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = (
      <div className="animate-slow-blink text-red-500 font-bold">
        loading... 😊
      </div>
    );
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit" color="danger" variant="flat">
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <form action={actions.signIn}>
          <NavbarItem>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </NavbarItem>
        </form>
        <form action={actions.signIn}>
          <NavbarItem>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </form>
      </>
    );
  }

  return authContent;
}
