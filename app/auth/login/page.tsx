import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background text-foreground transition-colors duration-300 px-4">
      <Card className="w-full max-w-lg bg-card shadow-lg rounded-xl p-8">
        <CardHeader className="text-2xl font-bold mb-6 text-center">Sign In</CardHeader>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
          >
             Phone Number
          </label>
          <Input
            type='number'
            id="phone"
            placeholder="Enter your email or phone"
            className='py-5'
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium mb-2"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            className='py-5'
             
          />
        </div>

         <Button className='py-5 cursor-pointer hover:bg-primary/50'>Sign In</Button>
        <p className="text-center text-sm text-foreground/80 mt-4">
          Don't have an account?{' '}
          <Link href="/sign_up" className="text-accent hover:underline">
            Sign Up
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Page;