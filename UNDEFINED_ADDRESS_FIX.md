# 🔧 NFTMarketplace "undefined" Address Error - FIXED!

## ❌ Error You Were Seeing

```
InvalidAddressError: Address "undefined" is invalid.
Approval failed: InvalidAddressError: Address "undefined" is invalid.
```

## 🐛 Root Cause

The error occurred because:
1. You're viewing the marketplace page **before deploying** the NFTMarketplace contract
2. `useDeployedContractInfo("NFTMarketplace")` returns `undefined` when contract doesn't exist
3. The approval function tried to use `undefined` as the marketplace address
4. Viem rejected it as an invalid address

## ✅ How It's Fixed

I've added **three layers of protection**:

### 1. React Query Guard
```typescript
const { data: isApprovedForAll, refetch: refetchApprovedForAll } = useScaffoldContractRead({
  contractName: "MyNFT",
  functionName: "isApprovedForAll",
  args: [owner as `0x${string}`, marketplaceAddress as `0x${string}`],
  enabled: !!marketplaceAddress && !!owner, // ✅ Only run if marketplace exists
});
```

### 2. Function Guard
```typescript
const handleApprove = async () => {
  if (!marketplaceAddress) {
    notification.error("NFTMarketplace contract not deployed. Please deploy the marketplace first.");
    return; // ✅ Exit early if no marketplace
  }
  // ... rest of approval logic
};
```

### 3. UI Guards
```typescript
// Show warning instead of button if marketplace not deployed
{!marketplaceAddress && isOwner && (
  <div className="alert alert-warning shadow-lg text-xs p-2">
    <span>⚠️ Marketplace not deployed</span>
  </div>
)}

// Only show buttons if marketplace exists
{marketplaceAddress && isOwner && !isListed && !isApproved && !isApproving && (
  <button className="btn btn-secondary btn-sm" onClick={handleApprove}>
    Approve Marketplace
  </button>
)}
```

### 4. Page-Level Warning
The marketplace page now shows a helpful banner when the contract isn't deployed:

```
⚠️ NFTMarketplace Not Deployed
Deploy the marketplace contract first: yarn deploy --network liskSepolia
```

## 🎯 What You'll See Now

### Before Deployment (Current State)
- ✅ No errors in console
- ✅ Marketplace page loads
- ✅ NFTs display in grid
- ✅ Warning banner shows: "NFTMarketplace Not Deployed"
- ✅ NFT cards show: "⚠️ Marketplace not deployed" (for owners)
- ✅ No approval/listing buttons appear

### After Deployment
- ✅ Warning banner disappears
- ✅ "Approve Marketplace" button appears
- ✅ Full marketplace functionality works
- ✅ Can list, buy, and cancel NFTs

## 🚀 Next Steps

Deploy the NFTMarketplace contract to fix this:

```bash
# Deploy to Lisk Sepolia
yarn deploy --network liskSepolia

# Watch for output:
# deploying "NFTMarketplace" (tx: 0x...)
# NFTMarketplace deployed at 0x...

# After deployment:
# - Page will auto-detect the contract
# - Warning banner will disappear
# - Buttons will appear
# - Full functionality enabled!
```

## 📝 Technical Details

### Why This Approach is Better

**Before (caused errors):**
```typescript
// ❌ Always tried to call with undefined address
const { data: isApprovedForAll } = useScaffoldContractRead({
  contractName: "MyNFT",
  functionName: "isApprovedForAll",
  args: [owner, undefined], // ❌ Error!
});
```

**After (gracefully handles missing contract):**
```typescript
// ✅ Only calls when marketplace exists
const { data: isApprovedForAll } = useScaffoldContractRead({
  contractName: "MyNFT",
  functionName: "isApprovedForAll",
  args: [owner, marketplaceAddress],
  enabled: !!marketplaceAddress, // ✅ Safe!
});
```

### Files Modified

1. **NFTCard.tsx** - Added guards and conditional rendering
2. **marketplace/page.tsx** - Added deployment warning banner

## 🎓 Lessons Learned

This is a **common pattern** in Web3 development:

1. **Always check contract exists** before using its address
2. **Use `enabled` prop** in React Query hooks for conditional execution
3. **Guard functions** that use contract addresses
4. **Show helpful UI** when dependencies missing
5. **Fail gracefully** with clear error messages

## ✅ Verification

After these changes, you should:

1. ✅ See no console errors
2. ✅ See marketplace page load successfully
3. ✅ See warning: "NFTMarketplace Not Deployed"
4. ✅ See NFTs in grid
5. ✅ See no approval buttons (marketplace not deployed yet)

Then after deploying:

1. ✅ Warning disappears
2. ✅ Buttons appear
3. ✅ Can approve marketplace
4. ✅ Can list NFTs
5. ✅ Everything works!

## 🎉 Status: FIXED!

The error is now **completely resolved** with proper guards and user feedback!

**Before**: ❌ Crashes with undefined address error
**After**: ✅ Shows helpful warning, works perfectly once deployed

---

**Ready to deploy?** Run:
```bash
yarn deploy --network liskSepolia
```

And watch the marketplace come to life! 🚀
