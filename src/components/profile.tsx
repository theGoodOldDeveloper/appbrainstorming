"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return <div>From client:😈 {JSON.stringify(session.data.user)}</div>;
  }

  return <div>From client:😈 user is NOT signed in</div>;
}

/* 
"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return (
      <div>
        Signed in as {session.data.user.email}{" "}
        <span className="bg-cyan-200 ">(clientComponent)</span>
      </div>
    );
  }

  return (
    <div>
      Client: Signed out <span className="bg-rose-200"> (clientComponent)</span>
    </div>
  );
}

*/
