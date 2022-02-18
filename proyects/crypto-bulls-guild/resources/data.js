var data = {
    "proyect": {
        "tittleName": "Crypto Bulls Guild",
        "nftName": "Crypto Bulls",
        "description": "When a wraith daddy and a banshee mommy love each other very much, something magical happens. Out of the cabbage patch next to the graveyard rises a brand new generation of revenants! At pre-K, Baby Ghosts make friends and discover the world, until one day, the whole daycare is exorcised and all Baby Ghosts are released!",
        "mintPrice": 0.01,
        "tokenSymbol": "ETH",
        "chainId": "0x4"
        //"chainId": "0x4"
    },
    "contractNFT": {
        "address": "0xA4d7CaBA39aD147ca62e583ee486f5B9906eab63",
        "abi": [
            "function makeAnEpicNFT(uint256 amount) payable",
        ],
        "function": "makeAnEpicNFT"
    },
    "blockchainExplorer": {
        "url": "https://api-rinkeby.etherscan.io/api?module=account&action=tokennfttx&contractaddress=",
        "query": "&apikey=",
        "apiKey": "Q3AVI9S29M5NMPSUCFE99MR6DT27MHGWP4"
    },
    "networks": [
        {
            "chainId": "0x89",
            "chainName": "Polygon Network",
            "shortName": "POLYGON",
            "nativeCurrency": {name: "MATIC", symbol: "MATIC", decimals: 18},
            "rpcUrls": ["https://polygon-rpc.com"],
            "blockExplorerUrls": ["https://www.polygonscan.com/"]
        },
        {
            "chainId": "0x13881",
            "chainName": "Polygon Mumbai Testnet",
            "shortName": "POLYGON TEST",
            "nativeCurrency": {name: "tMATIC", symbol: "tMATIC", decimals: 18},
            "rpcUrls": ["https://rpc-mumbai.maticvigil.com"],
            "blockExplorerUrls": ["https://mumbai.polygonscan.com/"]
        },
        {
            "chainId": '0x38',
            "chainName": 'Binance Smart Chain',
            "shortName": "BSC",
            "nativeCurrency": { name: 'BNB', symbol: 'BNB', decimals: 18},
            "rpcUrls": ["https://bsc-dataseed.binance.org"],
            "blockExplorerUrls": ["https://bscscan.com/"]
        }
    ],
    "social": {
        "opensea": "https://opensea.io/collection/babyghosts",
        "discord": "https://discord.gg/BabyGhosts",
        "twitter": "https://twitter.com/BabyGhosts_NFT"
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
    }
}