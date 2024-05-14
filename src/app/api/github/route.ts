import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const something = req;
  try {
    const user = auth();
    const userId = "user_2gLnvjSFVWkXbJUDEv6HrjyRNBB";
    console.log(user);

    const email = "benjaminmargolius@gmail.com";
    const provider = "oauth_github";
    // this returns an array of OauthAccessToken objects I'm just getting the first one
    // const response = await clerkClient.users.getUserOauthAccessToken(
    //   userId ?? "",
    //   provider,
    // );

    // const OauthAccessToken = response.data[0];

    // console.log(OauthAccessToken);

    // if (!OauthAccessToken)
    //   return new NextResponse("Unauthorized NO TOKEN", { status: 401 });

    // const { token } = OauthAccessToken;

    // console.log("Oauth", OauthAccessToken);

    // if (!token) {
    //   return new NextResponse("Unauthorized NO TOKEN", { status: 401 });
    // }

    // console.log(token);
    // const res = await fetch(` https://api.github.com/search/users?q=${email}`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then(async (data) => {
    //     const res = await fetch(data.items[0].repos_url);
    //     return res.json();
    //   });

    // console.log("filterd");
    // console.log(res.filter((repo: unknown) => repo.private === true));

    return new NextResponse("Authorized", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Unauthorized", { status: 401 });
  }
}
