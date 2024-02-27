"use server";

import { signIn } from "@/utils/auth";

export async function GithubLog() {
    return signIn("github") 
}

export async function GoogleLogin() {
    return signIn("google") 
}