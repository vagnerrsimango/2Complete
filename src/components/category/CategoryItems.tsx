import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface TaskProps {
  categoryName: string;
}

function CategoryItems({ categoryName }: TaskProps) {
  return (
    <Link href="/category/tasks">
      <Card className="bg-slate-200 flex flex-col items-center justify-center space-y-2  p-2">
        <CardContent className="p-4">
          <p>{categoryName}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CategoryItems;
