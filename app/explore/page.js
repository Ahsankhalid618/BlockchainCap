"use client"
import { useState } from 'react';
import styles from "./explore.module.css"

export default function NFTViewer() {
  const [address, setAddress] = useState('');
  const [nftData, setNftData] = useState([]);  // Initialize as empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchNFTData = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://restapi.nftscan.com/api/v2/assets/${address}?show_attribute=false&sort_field=&sort_direction=`, {
        method: 'GET',
        headers: {
          'X-API-KEY': 'HQi0yitmeeF4junQpjE6yli3'  // Use environment variables in production
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (Array.isArray(data)) {
        setNftData(data);
      } else if (data && Array.isArray(data.assets)) {
        setNftData(data.assets);
      } else {
        setNftData(["No data found"]);
      }
    } catch (e) {
      setError(`Failed to fetch NFT data: ${e instanceof Error ? e.message : e}`);
      setNftData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <h1>NFT Etherium Contracts</h1>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter NFT Contract Address"
        className='w-1/3 p-2 border border-gray-300 rounded '
      />
      <button className='bg-blue-500 hover:bg-blue-700 mt-6 text-white font-bold py-2 px-4 rounded' onClick={fetchNFTData} disabled={!address || loading}>
        {loading ? 'Loading...' : 'Fetch NFT Data'} 
      </button>

      {error && <p className={styles.error}>{error}</p>}

      {nftData.map((nft, index) => (
        <div className={styles.results}>
         <h2 className={styles.nftTitle}>{nft.contract_name || "Unnamed NFT"}</h2>
            <div className="w-full flex flex-coloumn">
              <img
                className="w-50 h-50"
                src={nft.image_uri ? `https://ipfs.io/ipfs/${nft.image_uri}` : '/placeholder-image.png'}
                alt={nft.contract_name || "NFT Image"}
              />
            </div>
        </div>
      ))}
    </div>
  );
}
