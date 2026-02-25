import { Card, CardHeader } from '@/components/ui/card';
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
          <input
            type='number'
            id="phone"
            placeholder="Enter your email or phone"
            className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
          />
        </div>

        <button className="w-full py-3 bg-accent text-primary-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors cursor-pointer">
          Sign In
        </button>

        <p className="text-center text-sm text-foreground/80 mt-4">
          Don't have an account?{' '}
          <a href="#" className="text-accent hover:underline">
            Sign Up
          </a>
        </p>
      </Card>
    </div>
  );
};

export default Page;