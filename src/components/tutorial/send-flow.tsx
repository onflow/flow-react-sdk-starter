"use client";

import { useFlowCurrentUser, useFlowMutate, useFlowConfig } from "@onflow/react-sdk";
import { useState } from "react";
import TRANSFER_FLOW_TRANSACTION from "@cadence/transactions/TransferFlow.cdc";

export function SendFlow({ stepNumber = 4 }: { stepNumber?: number }) {
  const { user } = useFlowCurrentUser();
  const { flowNetwork } = useFlowConfig();
  const address = user?.addr;
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const network = flowNetwork || "testnet";

  const { mutate, isPending, isSuccess, error, data } = useFlowMutate();

  const handleSend = () => {
    if (!recipient || !amount) {
      alert("Please fill in both recipient address and amount");
      return;
    }
    // Convert amount to proper decimal format (UFix64 requires decimal notation)
    const formattedAmount = parseFloat(amount).toFixed(8);
    // Ensure recipient address has 0x prefix
    const formattedRecipient = recipient.startsWith("0x") ? recipient : `0x${recipient}`;
    mutate({
      cadence: TRANSFER_FLOW_TRANSACTION,
      args: (arg, t) => [
        arg(formattedAmount, t.UFix64),
        arg(formattedRecipient, t.Address),
      ],
    });
  };

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-[rgb(241,245,249)] dark:bg-white/[0.04] p-6 sm:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-[#ec4899]/10 dark:bg-[#ec4899]/20 flex items-center justify-center">
            <span className="text-lg font-bold text-[#ec4899]">{stepNumber}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
              Send FLOW
            </h3>
            <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
              Transfer tokens using{" "}
              <code className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 text-xs font-mono">
                useFlowMutate
              </code>
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          {!address ? (
            <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5">
              <p className="text-sm text-black/50 dark:text-white/50">
                Connect your wallet to send FLOW
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="space-y-2 -mt-2">
                <label className="text-xs font-medium text-black/70 dark:text-white/70">
                  Recipient Address
                </label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="0x..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-black border border-black/10 dark:border-white/10 text-sm text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#ec4899]/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-black/70 dark:text-white/70">
                  Amount (FLOW)
                </label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "" || /^\d*\.?\d*$/.test(value)) {
                      setAmount(value);
                    }
                  }}
                  placeholder="0.00"
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-black border border-black/10 dark:border-white/10 text-sm text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#ec4899]/50"
                />
              </div>

              <button
                onClick={handleSend}
                disabled={isPending || !recipient || !amount}
                className="w-full px-4 py-2.5 rounded-full bg-[#ec4899] hover:bg-[#ec4899]/90 disabled:bg-black/20 dark:disabled:bg-white/20 disabled:cursor-not-allowed cursor-pointer text-white text-sm font-medium transition-colors"
              >
                {isPending ? "Sending..." : "Send FLOW"}
              </button>

              {isSuccess && (
                <div className="mt-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-between">
                  <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                    Transaction successful!
                  </p>
                  {network !== "emulator" && (
                    <a
                      href={`https://${network === "mainnet" ? "" : "testnet."}flowscan.io/transaction/${data}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-green-600 dark:text-green-400 underline hover:no-underline whitespace-nowrap"
                    >
                      View on FlowScan
                    </a>
                  )}
                </div>
              )}

              {error && (
                <div className="mt-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-xs text-red-600 dark:text-red-400">
                    Transaction failed. Please try again.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
