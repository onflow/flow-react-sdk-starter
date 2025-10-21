"use client";

import { Connect } from "@onflow/react-sdk";

export function WalletConnect() {
  return (
    <div className="rounded-2xl sm:rounded-3xl bg-[rgb(241,245,249)] dark:bg-white/[0.04] p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-[#00ef8b]/10 dark:bg-[#00ef8b]/20 flex items-center justify-center">
          <span className="text-lg font-bold text-[#00ef8b]">1</span>
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              Connect Your Wallet
            </h3>
            <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
              Start by connecting your Flow wallet.{" "}
              <a
                href="https://wallet.flow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d97a] hover:underline font-bold"
              >
                Get Flow Wallet
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Connect />
          </div>
        </div>
      </div>
    </div>
  );
}
