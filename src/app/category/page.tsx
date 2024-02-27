import CategoryItems from "@/components/category/CategoryItems";
import CategoryModal from "@/components/category/CategoryModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DialogTrigger } from "@/components/ui/dialog";
import { db } from "@/utils/db";
import { indexCategories } from "@/utils/db/queries/categories.queries";

export default async function categoryPage() {
  const categories = await indexCategories();
  return (
    <div className="flex justify-center items-center">
      <Card className="border-none">
        <CardHeader className="space-y-2">
          <CardTitle className="text-center">
            Lista de Categorias de Tarefas
          </CardTitle>

          <CategoryModal>
            <DialogTrigger>
              <Button className="font-normal w-full">Adicionar Tarefas</Button>
            </DialogTrigger>
          </CategoryModal>
          <CardDescription>
            Tenha acesso a todos agrupamentos de tarefas
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full grid sm:grid-cols-2  gap-4">
          {categories.map((category) => (
            <CategoryItems key={category.id} categoryName={category.name} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
