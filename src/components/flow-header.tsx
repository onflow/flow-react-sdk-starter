"use client";

import { Connect } from "@onflow/react-sdk";

export function FlowHeader() {
  return (
    <header className="w-full bg-white dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flow.svg" alt="Flow" className="h-9 w-9" />
            <span className="text-base font-semibold text-black dark:text-white">
              Flow Starter
            </span>
          </div>

          <Connect variant="secondary" />
        </div>
      </div>
    </header>
  );
}
