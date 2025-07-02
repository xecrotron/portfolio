'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Article } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { deleteArticleAction } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";


export function ArticleTable({ articles }: { articles: Article[] }) {
  const router = useRouter();
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    setIsDeleting(id);
    const result = await deleteArticleAction(id);
    if (result.success) {
      toast({ title: "Success", description: "Article deleted successfully." });
      router.refresh();
    } else {
      toast({ variant: "destructive", title: "Error", description: result.error });
    }
    setIsDeleting(null);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead className="hidden md:table-cell">Created At</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {articles.map((article) => (
          <TableRow key={article.id}>
            <TableCell className="font-medium">{article.title}</TableCell>
            <TableCell className="hidden md:table-cell">
              {new Date(article.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-right">
              <Button asChild variant="ghost" size="icon">
                <Link href={`/admin/articles/edit/${article.id}`}>
                  <Pencil className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Link>
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={isDeleting === article.id}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete the article.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleDelete(article.id)}
                      disabled={isDeleting === article.id}
                      className="bg-destructive hover:bg-destructive/90"
                    >
                      {isDeleting === article.id ? 'Deleting...' : 'Delete'}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
