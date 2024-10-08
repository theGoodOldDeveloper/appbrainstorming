import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  /* Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent, */
} from "@nextui-org/react";
import HeaderAuth from "./header-auth";
/* import { auth } from "@/auth";
import * as actions from "@/actions"; */

export default function Header() {
  /* export default async function Header() {
  const session = await auth(); */

  /* let authContent: React.ReactNode;
  if (session?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.user.image || ""} />
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
  } */

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Brainstorming
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
      {/* <NavbarContent justify="end">{authContent}</NavbarContent> */}
    </Navbar>
  );
}
