var data = {
    "proyect": {
        "tittleName": "Crypto Bulls Guild",
        "nftName": "Crypto Bulls",
        "description": "When a wraith daddy and a banshee mommy love each other very much, something magical happens. Out of the cabbage patch next to the graveyard rises a brand new generation of revenants! At pre-K, Baby Ghosts make friends and discover the world, until one day, the whole daycare is exorcised and all Baby Ghosts are released!",
        "tokenSymbol": "ETH",
        "network": "Ethereum Testnet",
        "social": {
            "opensea": "https://opensea.io/collection/babyghosts",
            "discord": "https://discord.gg/BabyGhosts",
            "twitter": "https://twitter.com/BabyGhosts_NFT"
        },
        "contract": {
            "address": "0x02692838Dc69690782435eB6B468583476ADDD3D",
            "abi": [
                {
                    "inputs": [
                      {
                        "internalType": "uint256",
                        "name": "_mintAmount",
                        "type": "uint256"
                      }
                    ],
                    "name": "mint",
                    "outputs": [],
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "totalSupply",
                    "outputs": [
                      {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "maxSupply",
                    "outputs": [
                      {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "cost",
                    "outputs": [
                      {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                      {
                        "internalType": "uint256",
                        "name": "_cost",
                        "type": "uint256"
                      }
                    ],
                    "name": "setCost",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                  "inputs": [],
                  "name": "withdraw",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
                }
            ]
        }
    },
    "frequentlyAskedQuestions": {
        "description": "Each Baby Ghost is unique and programmatically generated from over 140 possible traits, including backgrounds, skins, eyes, disguises, accessories...",
        "questions": [
            {
                "question": "What is an NFT?",
                "answer": "NFT stands for “Non-fungible token” and is a cool way of saying it’s a truly unique digital item that YOU can buy, own, and trade."
            },
            {
                "question": "What is Metamask?",
                "answer": "Metamask is a crypto-wallet that can store your Ethereum, and is needed to purchase and mint a Baby Ghost. Having a wallet gives you an Ethereum address (i.e. 0xSPOO….666), this is where your NFT will be stored. Learn more about Metamask and how easy it is to use over here! (https://metamask.io)."
            },
            {
                "question": "How to mint with Metamask on a computer?",
                "answer": 'If you are using a mobile phone to mint our lovely Baby Ghosts, you need to use the Metamask application built-in browser to mint our NFTs. Therefore, please launch the Metamask application, click the 3 lines on the top left menu in the application and select "Browser". It will open a web browser and you will be able to navigate back to babyghosts.com to do the minting.'
            },
            {
                "question": "BuyingNFT for the first time?",
                "answer": 'Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button "MINT" on the scary banner to connect your wallet and approve the transaction on Metamask. That’s it !'
            },
            {
                "question": "Are Baby Ghosts a good investment?",
                "answer": 'Well, yeah! At least we believe that Baby Ghosts have a long life of haunting ahead of them, and will keep growing as the project doesn’t end here! Hopefully Baby Ghosts go to the moon, but like anything in life, don’t spend money you can’t afford not to have.'
            }
        ]
    },
    "marketplace": {
        "openSea": {
            "mainnet": "https://opensea.io/assets/",
            "testnet": "https://testnets.opensea.io/assets/"
        }
    },
    "networks": {
        "Ethereum": {
            "chainId": "0x1",
            "chainName": "Ethereum Network",
            "nativeCurrency": {name: "ETH", symbol: "ETH", decimals: 18},
            "rpcUrls": ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
            "blockExplorerUrls": ["https://etherscan.io"]
        },
        "Ethereum Testnet": {
            "chainId": "0x4",
            "chainName": "Rinkeby Network",
            "nativeCurrency": {name: "ETH", symbol: "ETH", decimals: 18},
            "rpcUrls": ["https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
            "blockExplorerUrls": ["https://rinkeby.etherscan.io"]
        },
        "Polygon": {
            "chainId": "0x89",
            "chainName": "Polygon Network",
            "nativeCurrency": {name: "MATIC", symbol: "MATIC", decimals: 18},
            "rpcUrls": ["https://polygon-rpc.com"],
            "blockExplorerUrls": ["https://www.polygonscan.com/"]
        },
        "Polygon Testnet": {
            "chainId": "0x13881",
            "chainName": "Polygon Mumbai Testnet",
            "nativeCurrency": {name: "tMATIC", symbol: "tMATIC", decimals: 18},
            "rpcUrls": ["https://rpc-mumbai.maticvigil.com"],
            "blockExplorerUrls": ["https://mumbai.polygonscan.com/"]
        },
        "BSC": {
            "chainId": '0x38',
            "chainName": 'Binance Smart Chain',
            "nativeCurrency": { name: 'BNB', symbol: 'BNB', decimals: 18},
            "rpcUrls": ["https://bsc-dataseed1.binance.org"],
            "blockExplorerUrls": ["https://bscscan.com/"]
        },
        "BSC Testnet": {
            "chainId": '0x38',
            "chainName": 'Binance Smart Chain Tesnet',
            "nativeCurrency": { name: 'tBNB', symbol: 'tBNB', decimals: 18},
            "rpcUrls": ["https://data-seed-prebsc-1-s1.binance.org:8545"],
            "blockExplorerUrls": ["https://testnet.bscscan.com"]
        }
    }
}