import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle className="font-headline">Article Management Removed</CardTitle>
          <CardDescription>
            The admin panel has been removed. To add, edit, or delete articles,
            please modify the static array in <code>src/lib/articles.ts</code>.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p>This UI is no longer in use.</p>
      </CardContent>
    </Card>
  );
}
