import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewArticlePage() {
  return (
    <Card>
      <CardHeader>
          <CardTitle className="font-headline">Article Management Removed</CardTitle>
          <CardDescription>
            The admin panel has been removed. To add a new article,
            please modify the static array in <code>src/lib/articles.ts</code>.
          </CardDescription>
      </CardHeader>
    </Card>
  );
}
