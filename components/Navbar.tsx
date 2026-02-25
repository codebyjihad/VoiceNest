'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <header className="bg-gray-200 dark:bg-black text-primary-foreground border-b border-border shadow-sm transition-colors duration-300">
      <nav className="container max-w-7xl mx-auto flex items-center justify-between p-3">
      
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity"
        >
          Voice<span className="text-accent"> Nest</span>
        </Link>

      
        <Link href="/sign_in" className="ml-4">
          <Button className='cursor-pointer'>
            Sign Up
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;