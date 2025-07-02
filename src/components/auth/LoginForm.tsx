'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { login } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Signing In...' : 'Sign In'}
    </Button>
  );
}

export function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">Admin Login</CardTitle>
        <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="admin@profolioflow.com"
              required
              defaultValue="admin@profolioflow.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              name="password" 
              type="password" 
              required 
              defaultValue="password123"
            />
          </div>
          {state?.error && (
            <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Login Failed</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}
          <LoginButton />
        </form>
      </CardContent>
    </Card>
  );
}
