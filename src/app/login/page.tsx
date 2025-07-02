import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background p-4">
        <div className="absolute top-4 left-4">
            <Link href="/" className="inline-flex items-center text-primary hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Site
            </Link>
        </div>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Login Removed</CardTitle>
            <CardDescription>This page is no longer in use as the admin panel has been removed.</CardDescription>
          </CardHeader>
        </Card>
    </main>
  );
}
