// pages/api/[address].js
import { ErcType, EvmChain, NftscanEvm } from "nftscan-api";

export default async function handler(req, res) {
  const { address } = req.query;

  const config = {
    apiKey: HQi0yitmeeF4junQpjE6yli3, // Use environment variable for API Key
    chain: "eth", // Assuming Ethereum Mainnet; adjust as needed
  };

  const evm = new NftscanEvm(config);
  try {
    const nfts = await evm.getNFTsByContract(address);
    res.status(200).json(nfts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch NFT data" });
  }
}
