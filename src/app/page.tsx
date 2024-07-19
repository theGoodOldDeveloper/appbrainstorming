import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <div>
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

      <Profile />
    </div>
  );
}
