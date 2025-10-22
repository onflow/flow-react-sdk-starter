# Flow React SDK Starter

A minimal Next.js starter template for building Flow blockchain applications using `@onflow/react-sdk`. This starter includes interactive tutorials and examples to help you get started quickly.

## Features

- **Next.js** with App Router and Turbopack
- **Flow React SDK** `@onflow/react-sdk` pre-configured
- **FlowProvider** wrapper with Testnet configuration
- **Interactive tutorials** with working examples:
  - Wallet connection with official Connect component
  - Testnet faucet integration
  - Balance checking with `useFlowQuery`
  - Token transfers with `useFlowMutate`
- **Network indicator** showing current Flow network (Testnet/Mainnet/Emulator)
- **Responsive design** optimized for mobile, tablet, and desktop

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout with FlowProvider
│   ├── page.tsx                    # Main landing page (Server Component)
│   └── globals.css                 # Global styles
└── components/
    ├── flow-provider-wrapper.tsx   # FlowProvider configuration
    ├── flow-header.tsx             # Header with Connect component & network indicator
    ├── flow-content.tsx            # Main content component (Client Component)
    └── tutorial/
        ├── wallet-connect.tsx      # Step 1: Wallet connection tutorial
        ├── faucet-funding.tsx      # Step 2: Testnet faucet integration
        ├── flow-balance.tsx        # Step 3: Balance query example (useFlowQuery)
        └── send-flow.tsx           # Step 4: Token transfer example (useFlowMutate)
```

## FlowProvider Configuration

The `FlowProvider` is configured in `src/components/flow-provider-wrapper.tsx` with **Flow Testnet** by default.

To switch networks, update the config:

**Mainnet:**

```typescript
accessNodeUrl: "https://rest-mainnet.onflow.org",
discoveryWallet: "https://fcl-discovery.onflow.org/mainnet/authn",
flowNetwork: "mainnet",
```

**Emulator:**

```typescript
accessNodeUrl: "http://localhost:8888",
discoveryWallet: "http://localhost:8701/fcl/authn",
discoveryAuthnEndpoint: "http://localhost:8701/fcl/authn",
flowNetwork: "emulator",
```

## Running on Flow Emulator

The Flow Emulator allows you to run a local Flow blockchain for development and testing. The Connect button works seamlessly with the emulator's dev wallet.

### Prerequisites

Install the Flow CLI ([full installation guide](https://developers.flow.com/build/tools/flow-cli/install)):

```bash
# macOS (Homebrew - recommended)
brew install flow-cli

# macOS/Linux (pre-built binary)
sudo sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)"

# Windows (PowerShell)
iex "& { $(irm 'https://raw.githubusercontent.com/onflow/flow-cli/master/install.ps1') }"
```

Verify installation:

```bash
flow version
```

### Project Setup for Emulator

This project has been initialized with `flow init`, which created the necessary Cadence development environment:

```bash
cadence/
├── contracts/
│   └── Counter.cdc              # Example smart contract
├── scripts/
│   └── GetCounter.cdc           # Script to read contract state
├── transactions/
│   └── IncrementCounter.cdc     # Transaction to modify state
└── tests/
    └── Counter_test.cdc         # Contract tests

flow.json                        # Flow configuration file
emulator-account.pkey            # Emulator account private key
```

### Starting the Emulator

**IMPORTANT**: You must start BOTH the Flow Emulator AND the Dev Wallet before trying to connect your wallet in the application.

1. **Start the Flow Emulator (Terminal 1):**

   ```bash
   flow emulator start
   ```

   This starts the Flow Emulator on `http://localhost:8888`. Keep this terminal window open.

2. **Start the Dev Wallet (Terminal 2):**

   Open a **new terminal** and run:

   ```bash
   flow dev-wallet
   ```

   This starts the Dev Wallet on `http://localhost:8701`. Keep this terminal window open as well.

3. **Configure FlowProvider for Emulator**

   The `src/components/flow-provider-wrapper.tsx` is already configured for the emulator with the `flowJson` prop:

   ```typescript
   import flowJSON from "../../flow.json";

   export function FlowProviderWrapper({ children }: FlowProviderWrapperProps) {
     return (
       <FlowProvider
         config={{
           // Emulator configuration
           accessNodeUrl: "http://localhost:8888",
           discoveryWallet: "http://localhost:8701/fcl/authn",
           flowNetwork: "emulator",

           // App metadata
           appDetailTitle: "Flow React SDK Starter",
           appDetailUrl:
             typeof window !== "undefined" ? window.location.origin : "",
           appDetailIcon: "https://avatars.githubusercontent.com/u/62387156?v=4",
           appDetailDescription:
             "A Next.js starter template for Flow blockchain applications",

           // Optional configuration
           computeLimit: 1000,
         }}
         flowJson={flowJSON}
       >
         {children}
       </FlowProvider>
     );
   }
   ```

   The `flowJson` prop automatically loads contract addresses and account configuration from `flow.json`, making it easier to work with deployed contracts on the emulator.

4. **Start the NextJS Development Server (Terminal 3):**

   Open another terminal and run:

   ```bash
   npm run dev
   ```

5. **Connect with Dev Wallet:**

   Click the "Connect Wallet" button - it will open the Flow Dev Wallet UI at `http://localhost:8701`. The dev wallet comes with pre-funded test accounts ready to use.

## Tutorial Examples

The starter includes interactive tutorial components that demonstrate core Flow SDK features:

### 1. Wallet Connection

```typescript
import { Connect } from "@onflow/react-sdk";

// Official Connect component with wallet discovery
<Connect />
```

Get [Flow Wallet](https://wallet.flow.com) to get started.

### 2. Query Balance (useFlowQuery)

```typescript
import { useFlowCurrentUser, useFlowQuery } from "@onflow/react-sdk";

const { user } = useFlowCurrentUser();
const { data: balance, isLoading, error, refetch } = useFlowQuery({
  cadence: FLOW_BALANCE_SCRIPT,
  args: (arg, t) => [arg(user?.addr || "", t.Address)],
});
```

The `useFlowQuery` hook executes Cadence scripts to read blockchain data.

### 3. Send Transaction (useFlowMutate)

```typescript
import { useFlowMutate } from "@onflow/react-sdk";

const { mutate, isPending, isSuccess, error } = useFlowMutate();

const handleSend = () => {
  const formattedAmount = parseFloat(amount).toFixed(8);
  mutate({
    cadence: TRANSFER_FLOW_TRANSACTION,
    args: (arg, t) => [arg(formattedAmount, t.UFix64), arg(recipient, t.Address)],
  });
};
```

The `useFlowMutate` hook executes Cadence transactions that modify blockchain state.

## Resources

- [Flow Wallet](https://wallet.flow.com) - Official Flow wallet
- [Flow Testnet Faucet](https://faucet.flow.com/fund-account) - Get free testnet tokens
- [Flow React SDK Documentation](https://react.flow.com) - Complete SDK reference
- [Flow Developer Portal](https://developers.flow.com) - Developer resources
- [Cadence Documentation](https://cadence-lang.org) - Smart contract language
- [FCL GitHub](https://github.com/onflow/fcl-js) - Flow Client Library
- [FlowScan](https://testnet.flowscan.io) - Testnet block explorer
