import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  const { ethers } = require("ethers");
  const GoerliRPCprovider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/1cKgSVpJw0WpbpesrGWzVE9nMLu4JNYt");
  const greenAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Snapshot","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"snapshotId","type":"uint256"}],"name":"balanceOfAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"snapshot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"snapshotId","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}];
  const greenContractAddress = "0x0a1F326739A2044803624b579B19E19dE36CcD84";
  const myAddress = "0x5b133baD621F9cE287E00Ad4967fF44801713981";
  const BScmainnetRPCprovider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org");
  const bnbAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}];
  const BNBContractAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
  const EthereumMainnetRPCprovider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/xo9hMwt7O8G7lSzZ7877pVht6MQyrenS");
  const etherAbi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "removeOwner",
        "outputs": [],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "isOwner",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "m_numOwners",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "resetSpentToday",
        "outputs": [],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "addOwner",
        "outputs": [],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "m_required",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_h",
                "type": "bytes32"
            }
        ],
        "name": "confirm",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newLimit",
                "type": "uint256"
            }
        ],
        "name": "setDailyLimit",
        "outputs": [],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "execute",
        "outputs": [
            {
                "name": "_r",
                "type": "bytes32"
            }
        ],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_operation",
                "type": "bytes32"
            }
        ],
        "name": "revoke",
        "outputs": [],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newRequired",
                "type": "uint256"
            }
        ],
        "name": "changeRequirement",
        "outputs": [],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_operation",
                "type": "bytes32"
            },
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "hasConfirmed",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "kill",
        "outputs": [],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "changeOwner",
        "outputs": [],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "m_dailyLimit",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_owners",
                "type": "address[]"
            },
            {
                "name": "_required",
                "type": "uint256"
            },
            {
                "name": "_daylimit",
                "type": "uint256"
            }
        ],
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "operation",
                "type": "bytes32"
            }
        ],
        "name": "Confirmation",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "operation",
                "type": "bytes32"
            }
        ],
        "name": "Revoke",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "oldOwner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnerChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnerAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "oldOwner",
                "type": "address"
            }
        ],
        "name": "OwnerRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "newRequirement",
                "type": "uint256"
            }
        ],
        "name": "RequirementChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Deposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "SingleTransact",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "operation",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "MultiTransact",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "operation",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "initiator",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "ConfirmationNeeded",
        "type": "event"
    }
];
  const etherContractAddress = "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe";
  const BScTestnetRPCprovider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545");
  const patoTokenABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Snapshot","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"snapshotId","type":"uint256"}],"name":"balanceOfAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"snapshot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"snapshotId","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}];
  const patoTokenContractAddress = "0x532DDd8581481DB7e5c4A0E0a213BeE8A8717e78";

  //here we are reading smart contracts using inbuilt functions
  const readUsingInbuiltFunctions = async () => {
        const theblock = await GoerliRPCprovider.getBlockNumber(greenContractAddress)
        console.log("Contract block is: ", theblock);

        const mybalance = await GoerliRPCprovider.getBalance(myAddress);
        console.log("my account balance is: ", mybalance);
      
        const balance = await GoerliRPCprovider.getBalance(
        "0xF977814e90dA44bFA03b6295A0616a897441aceC");
        console.log("Account balance of unknown account: ", balance);

        const balanceInEther = ethers.utils.formatEther(mybalance);
        console.log("My account balance in ether:", balanceInEther);

        const getGreenNetwork = await GoerliRPCprovider.getNetwork(greenContractAddress);
        console.log("These are the network details of Green token: ", getGreenNetwork);

        const getGreenFees = await GoerliRPCprovider.getFeeData(greenContractAddress);
        console.log("This is the fee structure of Green token: ", getGreenFees);

        const greenFeeBalanceInGwei = ethers.utils.formatUnits(getGreenFees.maxFeePerGas, "gwei");
        console.log("Green max fee balance in gwei:", greenFeeBalanceInGwei);
        
        const greenFeeBalanceInEthers = ethers.utils.formatUnits(getGreenFees.maxFeePerGas, "ether");
        console.log("Green max fee balance in ether:", greenFeeBalanceInEthers);
        
        };

        readUsingInbuiltFunctions();

      //here we are reading smart contracts using ABI
       const readUsingABI = async () => {
       const greenContract = new ethers.Contract(greenContractAddress, greenAbi, GoerliRPCprovider);
       const BScContract = new ethers.Contract(BNBContractAddress, bnbAbi, BScmainnetRPCprovider);
       const EthereumContract = new ethers.Contract(etherContractAddress, etherAbi, EthereumMainnetRPCprovider);
       const patoTokenContract = new ethers.Contract(patoTokenContractAddress, patoTokenABI, BScTestnetRPCprovider);
       try {
        console.log("we are reading the total supply: " + await greenContract.totalSupply());
        console.log("we are reading the name of the token: " + await greenContract.name());
        console.log("we are reading the token symbol: " + await greenContract.symbol());
        
        console.log("we are reading the name of the coin: " + await BScContract.name());
        console.log("we are reading the total supply: " + await BScContract.totalSupply());
        console.log("we are reading the token symbol: " + await BScContract.symbol());
        
        console.log("we are reading the number of Ethereum owners: " + await EthereumContract.m_numOwners());
        console.log("we are reading the daily limit: " + await EthereumContract.m_dailyLimit());
        console.log("we are reading the required transactions: " + await EthereumContract.m_required());

        console.log("we are reading the name of the token: " + await patoTokenContract.name());
        console.log("we are reading the total supply of the pato token: " + await patoTokenContract.totalSupply());
        const theTotalSupply = await patoTokenContract.totalSupply();
        console.log("This is the total supply of the pato token in ethers units " + ethers.utils.formatEther(theTotalSupply));
        console.log("we are reading the pato token symbol: " + await patoTokenContract.symbol());
        console.log("we are reading the address of the owner of pato token: " + await patoTokenContract.owner());
         
       } catch (error) {
        console.log(error);
       }
       };
       readUsingABI();
  
       //here we write to smart contracts from our local environment
       const writingToContracts = async () => {
        const ethereum = (window as any).ethereum;
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        })
        const provider = new ethers.providers.Web3Provider(ethereum)
        const walletAddress = accounts[0]    // first account in MetaMask
        const signer = provider.getSigner(walletAddress)
        const greenTokenContractwrite = new ethers.Contract(greenContractAddress, greenAbi, signer);
            try {
            const writeToGreenContract = await greenTokenContractwrite.connect(signer).transfer("0x0A9c2Ab6F4dd5Fbeb544c3d76dC0a65A7E79be79", "5000000");
            await writeToGreenContract.wait();

           } catch (error) {
            console.log(error);
           }
           };
           writingToContracts();

           //to connect to metamask
          const connectMetamask = async () => {
                

           };
           connectMetamask();

       }
    

export default Home;
