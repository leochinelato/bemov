'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Importar o ícone X
import { navitems } from '@/data/NavItems';

// Componentes da UI
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetClose, // Importar o SheetClose
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Button } from './ui/button';


const Navigation = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-4">
      <div className="container mx-auto flex justify-center items-center">

        {/* Menu para Telas Grandes (Desktop) */}
        <div className="hidden md:flex">
          {/* ...código do menu desktop sem alterações... */}
          <NavigationMenu>
            <NavigationMenuList>
              {navitems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Menu para Telas Pequenas (Mobile) */}
        <div className="md:hidden flex w-full justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/80 backdrop-blur-lg border-gray-800 text-white p-0"
              onCloseAutoFocus={(event) => event.preventDefault()}
            >
              {/* Header com o título e o novo botão de fechar */}
              <SheetHeader className="p-6 border-b border-gray-700">
                <SheetTitle className="text-2xl font-bold tracking-tighter">BE.MOV</SheetTitle>
              </SheetHeader>

              {/* Botão de fechar personalizado */}
              <SheetClose asChild>
                <Button variant="ghost" size="icon" className="absolute top-4 right-4">
                  <span className="sr-only">Fechar menu</span>
                </Button>
              </SheetClose>

              {/* Navegação com links maiores e mais espaçados */}
              <nav className="flex flex-col gap-2 p-6">
                {navitems.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md p-3 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
};

export default Navigation;