import { GithubLog, GoogleLogin } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Google, Github } from "@/components/common/icons";
import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    redirect("/category");
  }
  return (
    <main className="flex justify-center items-center h-screen ">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Obtenha acesso</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-2">
          <form action={GoogleLogin}>
            <Button className="flex justify-center items-center flex-row gap-2 w-full">
              <Google /> Google
            </Button>
          </form>
          <form action={GithubLog}>
            <Button
              className="flex justify-center items-center flex-row gap-2 w-full"
              type="submit"
            >
              <Github /> Github
            </Button>
          </form>
        </CardContent>
        <CardFooter />
      </Card>
    </main>
  );
}
