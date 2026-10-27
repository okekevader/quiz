import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Quiz</CardTitle>
          <CardDescription>
            Next.js, TypeScript, Tailwind and shadcn/ui are all set up.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Questions will go here.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Start quiz</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
