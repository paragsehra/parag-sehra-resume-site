
import React from 'react';
import { Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full bg-transparent"
      aria-label="Theme toggle (disabled)"
    >
      <Moon size={20} />
    </Button>
  );
};

export default ThemeToggle;
