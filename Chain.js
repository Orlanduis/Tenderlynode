import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({ automaticVerifications: true });

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
    virtual_mainnet: {
      url: "https://virtual.mainnet.rpc.tenderly.co/9ff5bc0e-57bb-41cd-8ef8-3e34d6b70c7f",
      chainId: 20327,
      currency: "VETH"
    },
  },
  tenderly: {
    // https://docs.tenderly.co/account/projects/account-project-slug
    project: "rolistoken",
    username: "Antiproject",
  },
};

export default config;
