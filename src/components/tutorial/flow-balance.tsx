"use client";

import {
  useFlowCurrentUser,
  useFlowQuery,
  useFlowConfig,
} from "@onflow/react-sdk";

const FLOW_BALANCE_SCRIPT = `
import FungibleToken from 0xFungibleToken
import FlowToken from 0xFlowToken

access(all) fun main(address: Address): UFix64 {
    let account = getAccount(address)
    let vaultRef = account.capabilities
        .get<&FlowToken.Vault>(/public/flowTokenBalance)
        .borrow()
        ?? panic("Could not borrow Balance reference to the Vault")
    return vaultRef.balance
}
`;

const CONTRACT_ADDRESSES: Record<string, Record<string, string>> = {
  testnet: {
    FungibleToken: "0x9a0766d93b6608b7",
    FlowToken: "0x7e60df042a9c0868",
  },
  mainnet: {
    FungibleToken: "0xf233dcee88fe0abe",
    FlowToken: "0x1654653399040a61",
  },
  emulator: {
    FungibleToken: "0xee82856bf20e2aa6",
    FlowToken: "0x0ae53cb6e3f42a79",
  },
};

export function FlowBalance({ stepNumber = 3 }: { stepNumber?: number }) {
  const { user } = useFlowCurrentUser();
  const { flowNetwork } = useFlowConfig();
  const address = user?.addr;
  const network = flowNetwork || "testnet";

  // Ensure address has 0x prefix
  const formattedAddress = address
    ? address.startsWith("0x")
      ? address
      : `0x${address}`
    : "";

  const script = FLOW_BALANCE_SCRIPT.replace(
    /0xFungibleToken/g,
    CONTRACT_ADDRESSES[network].FungibleToken
  ).replace(/0xFlowToken/g, CONTRACT_ADDRESSES[network].FlowToken);

  const {
    data: balance,
    isLoading,
    error,
    refetch,
  } = useFlowQuery({
    cadence: script,
    args: (arg, t) => [arg(formattedAddress, t.Address)],
  });

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-[rgb(241,245,249)] dark:bg-white/[0.04] p-6 sm:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-[#22d3ee]/10 dark:bg-[#22d3ee]/20 flex items-center justify-center">
            <span className="text-lg font-bold text-[#22d3ee]">
              {stepNumber}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              Check Balance
            </h3>
            <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
              Query your FLOW token balance using{" "}
              <code className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 text-xs font-mono">
                useFlowQuery
              </code>
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          {!address ? (
            <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5">
              <p className="text-sm text-black/50 dark:text-white/50">
                Connect your wallet to see balance
              </p>
            </div>
          ) : isLoading ? (
            <div className="p-6 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#22d3ee]"></div>
            </div>
          ) : error ? (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-sm text-red-600 dark:text-red-400">
                Error loading balance
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#22d3ee]/10 to-[#22d3ee]/5 border border-[#22d3ee]/20">
                <div className="text-center">
                  <p className="text-sm text-black/50 dark:text-white/50 mb-1">
                    Balance
                  </p>
                  <p className="text-3xl font-bold text-black dark:text-white">
                    {balance ? String(balance) : "0.00"}
                  </p>
                  <p className="text-sm text-black/40 dark:text-white/40 mt-1">
                    FLOW
                  </p>
                </div>
              </div>
              <button
                onClick={() => refetch()}
                className="w-full px-4 py-2.5 rounded-full bg-[#22d3ee] hover:bg-[#22d3ee]/90 text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Refresh
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
