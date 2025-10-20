# Flow React SDK Starter

A minimal Next.js starter template for building Flow blockchain applications using `@onflow/react-sdk`.

## Features

- **Next.js** with App Router
- **Flow React SDK** (`@onflow/react-sdk`) pre-configured
- **TypeScript** support
- **Tailwind CSS** for styling
- **FlowProvider** wrapper with Testnet configuration

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
│   ├── page.tsx                    # Main landing page
│   └── globals.css                 # Global styles
└── components/
    ├── flow-provider-wrapper.tsx   # FlowProvider configuration
    └── flow-header.tsx             # Header with Connect component
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
flowNetwork: "emulator",
```

## Building Your Application

This starter provides a minimal foundation. Add your own components and pages as needed:

```typescript
// Example: Create a new page
import { FlowHeader } from "@/components/flow-header";

export default function MyPage() {
  return (
    <div>
      <FlowHeader />
      {/* Your content here */}
    </div>
  );
}
```

## Resources

- [Flow React SDK Documentation](https://react.flow.com)
- [Flow Developer Portal](https://developers.flow.com)
- [Cadence Documentation](https://cadence-lang.org)
- [FCL GitHub](https://github.com/onflow/fcl-js)
