"use client";

import { useFlowCurrentUser } from "@onflow/react-sdk";
import { useState } from "react";

export function FaucetFunding() {
  const { user } = useFlowCurrentUser();
  const address = user?.addr;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-[rgb(241,245,249)] dark:bg-white/[0.04] p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-[#a855f7]/10 dark:bg-[#a855f7]/20 flex items-center justify-center">
          <span className="text-lg font-bold text-[#a855f7]">2</span>
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              Get Testnet Funds
            </h3>
            <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
              Fund your wallet with testnet FLOW tokens to start experimenting.
              Use the faucet to get free tokens.
            </p>
          </div>

          {address ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-black/5 dark:bg-white/5">
                <code className="flex-1 text-xs font-mono text-black/70 dark:text-white/70 truncate">
                  {address}
                </code>
                <button
                  onClick={handleCopy}
                  className="flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-black dark:text-white transition-colors cursor-pointer"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <a
                href="https://faucet.flow.com/fund-account"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#a855f7] hover:bg-[#a855f7]/90 text-white text-sm font-medium transition-colors"
              >
                Open Faucet
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5">
              <p className="text-sm text-black/50 dark:text-white/50">
                Connect your wallet first to see your address
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
