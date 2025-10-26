# ⚠️ Expected TypeScript Errors (Before Deployment)

## Current Status

You will see TypeScript errors in the following files **BEFORE deploying**:
- `packages/nextjs/app/marketplace/page.tsx`
- `packages/nextjs/components/example-ui/MarketplaceGrid.tsx`
- `packages/nextjs/components/example-ui/NFTCard.tsx`

## Why These Errors Occur

The errors occur because:
1. NFTMarketplace contract hasn't been deployed yet
2. TypeScript types are generated from deployment artifacts
3. The type system doesn't know about `"NFTMarketplace"` contract yet

## Example Errors

```typescript
Type '"NFTMarketplace"' is not assignable to type '"BuyMeACoffee" | "MyNFT" | ...
Type '"getListing"' is not assignable to type '"symbol" | "name" | ...
```

## ✅ How to Fix

These errors will **automatically resolve** after you:

### Step 1: Deploy NFTMarketplace

```bash
# Deploy to local chain (testing)
yarn deploy

# OR deploy to Lisk Sepolia (production)
yarn deploy --network liskSepolia
```

### Step 2: Generate Types

The deployment automatically runs `99_generateTsAbis.ts` which:
- Reads deployment artifacts from `packages/hardhat/deployments/`
- Generates TypeScript types in `packages/nextjs/contracts/deployedContracts.ts`
- Updates type definitions for all hooks

### Step 3: Verify Types Generated

After deployment, check:

```bash
# Check deployedContracts.ts was updated
cat packages/nextjs/contracts/deployedContracts.ts | grep NFTMarketplace
```

You should see:
```typescript
NFTMarketplace: {
  address: "0x...",
  abi: [...],
}
```

## 🎯 Deployment Order Matters

If you see errors after deployment, ensure you deployed in the correct order:

1. ✅ MyNFT (Week 1) - Must exist first
2. ✅ PriceFeed (Week 4) - Must exist for oracle
3. ✅ NFTMarketplace (Week 5) - Deployed last

The marketplace deployment script (`04_deploy_marketplace.ts`) requires MyNFT to be deployed first.

## 🐛 Troubleshooting

### Error persists after deployment?

```bash
# 1. Regenerate ABIs manually
cd packages/hardhat
yarn hardhat run deploy/99_generateTsAbis.ts

# 2. Restart TypeScript server in VS Code
# Press: Ctrl+Shift+P
# Type: "TypeScript: Restart TS Server"

# 3. Clear next.js cache
cd packages/nextjs
rm -rf .next
yarn dev
```

### Contract deployed but types not updating?

Check deployment artifacts exist:
```bash
ls packages/hardhat/deployments/localhost/NFTMarketplace.json
# OR for testnet:
ls packages/hardhat/deployments/liskSepolia/NFTMarketplace.json
```

If missing, redeploy:
```bash
yarn deploy --reset
```

## 📝 Summary

**Status**: ⏳ **Errors expected until deployment**

**Action Required**:
1. Deploy NFTMarketplace contract
2. Types will auto-generate
3. Errors will disappear
4. Marketplace will work!

**This is normal** and part of the Scaffold-ETH 2 development workflow.

---

## 🚀 Ready to Deploy?

Follow these commands:

```bash
# Test locally first
yarn chain          # Terminal 1
yarn deploy         # Terminal 2 (types generated here!)
yarn start          # Terminal 3

# Then deploy to testnet
yarn deploy --network liskSepolia
```

After deployment, all TypeScript errors will be resolved! ✅
