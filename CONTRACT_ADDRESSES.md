# 📋 Week 5 Submission - Contract Addresses

## 🎯 Your Deployed Contracts

All contracts deployed to **Lisk Sepolia Testnet**

---

## 📍 Contract Addresses

### 🛒 NFTMarketplace (Week 5 - NEW!)
```
0x9D58bB1F496564d23bc6825d237753517fcC3e55
```
**Blockscout**: https://sepolia-blockscout.lisk.com/address/0x9D58bB1F496564d23bc6825d237753517fcC3e55

### 🎨 MyNFT (Week 1)
```
0xCb0346542c8AB22f15431c59FFA6c089e28866C2
```
**Blockscout**: https://sepolia-blockscout.lisk.com/address/0xCb0346542c8AB22f15431c59FFA6c089e28866C2

### 🔮 PriceFeed (Week 4)
```
0xaC1C5689EfA7f17452fA14e4f48471C07CA0cb13
```
**Blockscout**: https://sepolia-blockscout.lisk.com/address/0xaC1C5689EfA7f17452fA14e4f48471C07CA0cb13

---

## 🔍 Next Step: Verify Contracts

### Verify NFTMarketplace
```bash
yarn hardhat-verify --network liskSepolia \
  --contract contracts/NFTMarketplace.sol:NFTMarketplace \
  0x9D58bB1F496564d23bc6825d237753517fcC3e55
```

### Verify MyNFT (if not already done)
```bash
yarn hardhat-verify --network liskSepolia \
  --contract contracts/MyNFT.sol:MyNFT \
  0xCb0346542c8AB22f15431c59FFA6c089e28866C2
```

### Verify PriceFeed (if not already done)
```bash
yarn hardhat-verify --network liskSepolia \
  --contract contracts/PriceFeed.sol:PriceFeed \
  0xaC1C5689EfA7f17452fA14e4f48471C07CA0cb13
```

---

## 📝 Week 5 Submission Checklist

When submitting your Week 5 challenge, provide:

- [ ] **Frontend URL**: `https://your-app.vercel.app/marketplace`
  
- [ ] **NFTMarketplace Address**: 
  ```
  0x9D58bB1F496564d23bc6825d237753517fcC3e55
  ```

- [ ] **MyNFT Address**: 
  ```
  0xCb0346542c8AB22f15431c59FFA6c089e28866C2
  ```

- [ ] **PriceFeed Address**: 
  ```
  0xaC1C5689EfA7f17452fA14e4f48471C07CA0cb13
  ```

- [ ] **Blockscout Verification Links**:
  - NFTMarketplace: https://sepolia-blockscout.lisk.com/address/0x9D58bB1F496564d23bc6825d237753517fcC3e55
  - MyNFT: https://sepolia-blockscout.lisk.com/address/0xCb0346542c8AB22f15431c59FFA6c089e28866C2
  - PriceFeed: https://sepolia-blockscout.lisk.com/address/0xaC1C5689EfA7f17452fA14e4f48471C07CA0cb13

- [ ] **GitHub Repository**: Your repo link

- [ ] **Transaction Hash**: Link to a marketplace transaction (list/buy/cancel)

---

## 🧪 Testing Your Marketplace

Visit: **http://localhost:3000/marketplace**

You should now see:
- ✅ No warning banner
- ✅ All NFTs displayed in grid
- ✅ "Approve Marketplace" button (for owners)
- ✅ Full marketplace functionality

### Test Flow:
1. **Approve** marketplace for your NFTs
2. **List** an NFT with a price (see USD equivalent!)
3. **Buy** an NFT with a different account
4. **Cancel** a listing

---

## 🚀 Deploy to Vercel

```bash
# Build to check for errors
yarn build

# Commit and push
git add .
git commit -m "feat: deploy NFTMarketplace to Lisk Sepolia"
git push origin main

# Auto-deploys to Vercel
```

Your marketplace will be live at: `https://your-app.vercel.app/marketplace`

---

## 🎯 Key Features to Show

When testing/demoing your marketplace:

✅ **Escrowless Design** - NFTs stay with seller until bought
✅ **Oracle Integration** - Live USD prices displayed
✅ **Smart Approval Flow** - Loading states prevent errors
✅ **Security Features** - ReentrancyGuard, CEI pattern
✅ **Event-Driven Updates** - Real-time UI updates
✅ **Responsive Design** - Works on all screen sizes

---

## 📊 Quick Stats

| Component | Status | Address |
|-----------|--------|---------|
| NFTMarketplace | ✅ Deployed | 0x9D58bB1F496564d23bc6825d237753517fcC3e55 |
| MyNFT | ✅ Deployed | 0xCb0346542c8AB22f15431c59FFA6c089e28866C2 |
| PriceFeed | ✅ Deployed | 0xaC1C5689EfA7f17452fA14e4f48471C07CA0cb13 |
| Network | ✅ Lisk Sepolia | Chain ID: 4202 |
| Frontend | 🟡 Ready to Deploy | `/marketplace` |

---

## 💡 Tips for Submission

1. **Screenshot Your Marketplace**
   - Show NFTs listed with prices
   - Show USD equivalent display
   - Show "Listed" badges

2. **Record a Transaction**
   - List an NFT
   - Get transaction hash from MetaMask
   - Link to it on Blockscout

3. **Tweet About It** (Bonus Points!)
   - Share your marketplace
   - Use #LiskSEA
   - Tag @LiskHQ

4. **Add to Portfolio**
   - Production-ready marketplace
   - OpenSea-style architecture
   - Full-stack Web3 project

---

## 🎉 You're Almost Done!

### Remaining Tasks:
1. ✅ ~~Deploy contracts~~ DONE!
2. ⏳ Verify contracts on Blockscout
3. ⏳ Test complete marketplace flow
4. ⏳ Deploy frontend to Vercel
5. ⏳ Submit Week 5 challenge

**Next Command:**
```bash
yarn hardhat-verify --network liskSepolia \
  --contract contracts/NFTMarketplace.sol:NFTMarketplace \
  0x9D58bB1F496564d23bc6825d237753517fcC3e55
```

---

**Congratulations on deploying your NFT Marketplace! 🎉**
