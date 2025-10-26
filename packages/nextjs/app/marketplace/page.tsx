"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MarketplaceGrid } from "~~/components/example-ui/MarketplaceGrid";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";

const Marketplace: NextPage = () => {
  const { isConnected } = useAccount();
  const { data: marketplaceContract } = useDeployedContractInfo("NFTMarketplace");

  if (!isConnected) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <h2 className="card-title justify-center">NFT Marketplace</h2>
            <p>Please connect your wallet to browse the marketplace</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">🛒 NFT Marketplace</h1>
        <p className="text-center text-gray-600">
          Buy and sell NFTs with live USD price display powered by RedStone Oracle
        </p>
      </div>

      {!marketplaceContract && (
        <div className="alert alert-warning shadow-lg max-w-2xl mx-auto mb-6">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div>
              <h3 className="font-bold">NFTMarketplace Not Deployed</h3>
              <div className="text-xs">
                Deploy the marketplace contract first:{" "}
                <code className="bg-base-300 px-2 py-1 rounded">yarn deploy --network liskSepolia</code>
              </div>
            </div>
          </div>
        </div>
      )}

      <MarketplaceGrid />
    </div>
  );
};

export default Marketplace;
