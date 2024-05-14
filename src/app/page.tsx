import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { checkEnvironment as getBaseUrl } from "@/lib/utils";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default async function Home() {
  console.log(getBaseUrl() + "/api/github");
  await fetch(getBaseUrl() + "/api/github");

  return (
    <main className="">
      <div>
        <MaxWidthWrapper>
          <ClerkLoading>
            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </ClerkLoaded>
          <Card>
            <CardHeader>
              <CardTitle>Select a project</CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="Search projects" />
            </CardContent>
          </Card>
        </MaxWidthWrapper>
      </div>
    </main>
  );
}
