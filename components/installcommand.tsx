"use client";

import React from 'react';
import { toast } from 'sonner';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstallCommand: React.FC = () => {
    const handleCopy = () => {
        const command = 'brew install --cask chlorite';
        navigator.clipboard.writeText(command).then(() => {
            toast.success('Command successfully copied!');
        });
    };

    return (
        <div className="relative flex items-center w-full sm:w-auto">
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg pl-2 pr-10 py-2 flex items-center w-full">
                <Terminal className="h-4 w-4 mr-2 text-muted-foreground" />
                <code className="text-sm text-muted-foreground">brew install --cask chlorite</code>
            </div>
            <Button
                variant="ghost"
                size="icon"
                className="absolute right-1"
                onClick={handleCopy}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                <span className="sr-only">Copy</span>
            </Button>
        </div>
    );
};

export default InstallCommand;
