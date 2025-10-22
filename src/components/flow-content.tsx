"use client";

import { useFlowConfig } from "@onflow/react-sdk";
import { WalletConnect } from "./tutorial/wallet-connect";
import { FaucetFunding } from "./tutorial/faucet-funding";
import { FlowBalance } from "./tutorial/flow-balance";
import { SendFlow } from "./tutorial/send-flow";

export function FlowContent() {
  const { flowNetwork } = useFlowConfig();
  const isTestnet = flowNetwork === "testnet";

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl w-full space-y-12 sm:space-y-16 lg:space-y-20">
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white tracking-tight leading-none px-4">
              Build on Flow
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-black/50 dark:text-white/50 max-w-3xl mx-auto leading-relaxed font-light px-4">
              A minimal Next.js starter template for building decentralized
              applications on Flow
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 max-w-7xl mx-auto">
            <WalletConnect />
            {isTestnet && <FaucetFunding />}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
              <FlowBalance stepNumber={isTestnet ? 3 : 2} />
              <SendFlow stepNumber={isTestnet ? 4 : 3} />
            </div>
          </div>

          <div className="space-y-8 sm:space-y-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white text-center">
              Learn more
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto px-4 sm:px-0">
              <a
                href="https://react.flow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[rgb(241,245,249)] dark:bg-white/[0.04] p-5 sm:p-6 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:scale-[1.02] transition-all duration-500 ease-out"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-black dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold text-black dark:text-white">
                      Documentation
                    </h3>
                    <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                      React SDK hooks and components
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://developers.flow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[rgb(241,245,249)] dark:bg-white/[0.04] p-5 sm:p-6 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:scale-[1.02] transition-all duration-500 ease-out"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-black dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold text-black dark:text-white">
                      Developers
                    </h3>
                    <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                      Flow blockchain resources
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/onflow/fcl-js/tree/master/packages/react-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[rgb(241,245,249)] dark:bg-white/[0.04] p-5 sm:p-6 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:scale-[1.02] transition-all duration-500 ease-out"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-black dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold text-black dark:text-white">
                      React SDK
                    </h3>
                    <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                      View source on GitHub
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://cadence-lang.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[rgb(241,245,249)] dark:bg-white/[0.04] p-5 sm:p-6 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 hover:scale-[1.02] transition-all duration-500 ease-out"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-black dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-semibold text-black dark:text-white">
                      Cadence
                    </h3>
                    <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                      Smart contract language
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center pt-4 sm:pt-6 px-4 pb-16 sm:pb-20">
              <div className="flex items-center justify-center gap-4">
                <p className="text-xs sm:text-sm text-black/30 dark:text-white/30 font-light">
                  Built with Next.js and @onflow/react-sdk
                </p>
                <a
                  href="https://github.com/onflow/flow-react-sdk-starter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition-colors"
                  aria-label="View source on GitHub"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
