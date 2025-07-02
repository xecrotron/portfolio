
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';

import type { Article } from '@/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SeoKeywords } from './SeoKeywords';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

const articleFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long."),
  content: z.string().min(50, "Content must be at least 50 characters long."),
  imageUrl: z.string().url("Please enter a valid image URL."),
});

type ArticleFormData = z.infer<typeof articleFormSchema>;

type ArticleFormProps = {
  article?: Article;
  action: (prevState: any, formData: FormData) => Promise<any>;
};

function SubmitButton({ isEditing }: { isEditing: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (isEditing ? 'Updating...' : 'Creating...') : (isEditing ? 'Update Article' : 'Create Article')}
    </Button>
  );
}

export function ArticleForm({ article, action }: ArticleFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [state, formAction] = useFormState(action, undefined);

  const methods = useForm<ArticleFormData>({
    resolver: zodResolver(articleFormSchema),
    defaultValues: {
      title: article?.title || '',
      content: article?.content || '',
      imageUrl: article?.imageUrl || 'https://placehold.co/600x400.png',
    },
  });

  const { register, formState: { errors } } = methods;

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Success!",
        description: `Article ${article ? 'updated' : 'created'} successfully.`,
      });
      router.push('/admin');
    }
  }, [state, router, toast, article]);

  return (
    <FormProvider {...methods}>
      <form action={formAction}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">{article ? 'Edit Article' : 'Create New Article'}</CardTitle>
                <CardDescription>Fill in the details below to {article ? 'update the' : 'create a new'} article.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" {...register('title')} />
                  {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea id="content" {...register('content')} rows={15} />
                  {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Image URL</Label>
                  <Input id="imageUrl" {...register('imageUrl')} />
                  {errors.imageUrl && <p className="text-sm text-destructive">{errors.imageUrl.message}</p>}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg">Actions</CardTitle>
                </CardHeader>
                <CardContent>
                    <SubmitButton isEditing={!!article} />
                    <Button variant="outline" type="button" onClick={() => router.back()} className="ml-2">Cancel</Button>
                </CardContent>
                {state?.error && (
                    <CardFooter>
                        <Alert variant="destructive">
                            <Terminal className="h-4 w-4" />
                            <AlertTitle>An error occurred</AlertTitle>
                            <AlertDescription>{state.error}</AlertDescription>
                        </Alert>
                    </CardFooter>
                )}
              </Card>
              <SeoKeywords />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
