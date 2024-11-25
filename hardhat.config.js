/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
/**
* @type import('hardhat/config').HardhatUserConfig
*/
module.exports = {
   solidity: {
      version: "0.8.28",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: "https://eth-goerli.alchemyapi.io/v2/KRFK0ZhTJvlkdhnAZnkh-iNO8aoL7QRI",
         accounts: ["40fb46ac9c1bd392bd3aee2efa2fd243b85cca3d44867b4b224f21835c754e05"]
      }
   },
}