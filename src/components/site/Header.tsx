'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Articles", href: "#articles" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-headline font-bold text-primary">
          ProfolioFlow
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                </a>
            ))}
        </nav>

        <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col gap-6 p-6">
                         <Link href="/" className="text-2xl font-headline font-bold text-primary mb-4" onClick={() => setIsMenuOpen(false)}>
                            ProfolioFlow
                        </Link>
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                                {link.name}
                            </a>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
