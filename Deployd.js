echo "
unknown_chain = { key = \"${TENDERLY_ACCESS_KEY}\", chain = 20327, url = \"https://virtual.mainnet.rpc.tenderly.co/9ff5bc0e-57bb-41cd-8ef8-3e34d6b70c7f\" }" >> foundry.toml

forge create Counter \
--private-key $PRIVATE_KEY  \
--rpc-url https://virtual.mainnet.rpc.tenderly.co/9ff5bc0e-57bb-41cd-8ef8-3e34d6b70c7f \
--etherscan-api-key $TENDERLY_ACCESS_KEY \
--verify \
--verifier-url https://virtual.mainnet.rpc.tenderly.co/9ff5bc0e-57bb-41cd-8ef8-3e34d6b70c7f/verify/etherscan
