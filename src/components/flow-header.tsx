"use client";

import { Connect, useFlowConfig } from "@onflow/react-sdk";

export function FlowHeader() {
  const { flowNetwork } = useFlowConfig();

  return (
    <header className="w-full">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flow.svg" alt="Flow" className="h-9 w-9" />
            <span className="text-base font-semibold text-black dark:text-white">
              Flow Starter
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[rgb(241,245,249)] dark:bg-[rgb(30,30,30)]">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    flowNetwork === "testnet"
                      ? "#00ef8b"
                      : flowNetwork === "mainnet"
                      ? "#3b82f6"
                      : "#a855f7",
                }}
              ></div>
              <span className="text-sm font-medium text-black dark:text-white capitalize">
                {flowNetwork}
              </span>
            </div>
            <Connect />
          </div>
        </div>
      </div>
    </header>
  );
}
