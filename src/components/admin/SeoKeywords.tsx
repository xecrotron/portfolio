'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { getSeoKeywordsAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function SeoKeywords() {
  const { watch } = useFormContext();
  const { toast } = useToast();
  const articleContent = watch('content');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setKeywords([]);
    const result = await getSeoKeywordsAction({ articleContent });
    
    if(result.error) {
      toast({
        variant: 'destructive',
        title: 'Error generating keywords',
        description: result.error,
      });
    } else {
      setKeywords(result.keywords);
    }
    
    setLoading(false);
  };

  return (
    <div className="space-y-2">
      <Label>SEO Keyword Suggestions (AI)</Label>
      <div className="p-4 border rounded-md bg-muted/50 space-y-4">
        <p className="text-sm text-muted-foreground">
          Generate SEO keywords based on the article content to improve search rankings.
        </p>
        <Button 
          type="button" 
          onClick={handleGenerate} 
          disabled={!articleContent || articleContent.length < 50 || loading}
          variant="outline"
        >
          <Wand2 className="mr-2 h-4 w-4" />
          {loading ? 'Generating...' : 'Generate Keywords'}
        </Button>
        {keywords.length > 0 && (
          <div className="space-y-2">
             <Label>Suggested Keywords:</Label>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <Badge key={keyword} variant="secondary">{keyword}</Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
