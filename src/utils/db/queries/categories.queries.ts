"use server";

import { auth } from "@/utils/auth";
import { db } from "@/utils/db";


export const indexCategories = async()=>{
    const session = await auth()
    return db.category.findMany({
        where: {
            userId: session?.user?.id
        }
    })
}