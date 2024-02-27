"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sun } from "@phosphor-icons/react";
import { useSession } from "next-auth/react";

function Profile() {
  const { data: session, status } = useSession();
  console.log(session);
  if (status === "loading") {
    return <p></p>;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={session?.user?.image ?? ""} />
          <AvatarFallback> {session?.user?.name}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col items-center">
        <DropdownMenuLabel className="text-black font-extralight">
          {session?.user?.name}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="font-normal text-black">
          <Sun />
        </DropdownMenuItem>
        <DropdownMenuItem className="font-normal text-black">
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Profile;
