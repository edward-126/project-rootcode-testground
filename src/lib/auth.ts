// import { NextRequest, NextResponse } from "next/server";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// export interface AuthenticatedUser {
//   id: string;
//   email: any;
//   userName: any;
// }

// export const getAuthenticatedUser = async (
//   req: NextRequest,
// ): Promise<AuthenticatedUser | null> => {
//   const { getUser } = getKindeServerSession();
//   const user = await getUser();

//   if (!user) {
//     return null;
//   }

//   return {
//     id: user.id,
//     email: user.email,
//     userName: user.username,
//   };
// };

import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getAuthenticatedUser = async (
  req: NextRequest,
): Promise<string | null> => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return null;
  }

  return user.id;
};
