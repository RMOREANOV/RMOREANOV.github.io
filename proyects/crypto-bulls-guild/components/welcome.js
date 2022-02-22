Vue.component('background', {
    props: [],
    data() {
        return {
            styles: {
                container: {
                    'left': '0',
                    'right': '0',
                    'text-align': 'center',
                    'bottom': '0px',
                    'height': '180%',
                    'background': 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(71,11,85,1) 100%)',
                    'z-index': '-2'
                }
            },
            proyectName: data.proyect.name
        }
    },
    template: `
        <div class="position-absolute" :style="styles.container"></div>
    `
})

Vue.component('mint', {
    props: [],
    data() {
        return {
            styles: {
                textContainer: {
                    'font-size': '22px'
                },
                sliderContainer: {
                    'width': '400px',
                    'height': '60px'
                },
                textInicial: {
                    'color': '#ff705c'
                },
                textMiddle: {
                    'font-size': '16px',
                    'color': 'gray'
                },
                textFinal: {
                    'color': 'white'
                },
                buttonContainer: {
                    'width': '275px',
                    'height': '60px',
                    'opacity': '0'
                },
                buttonDefault: {
                    'font-size': '12.5px',
                    'border-radius': '36px',
                    'color': '#fff'
                },
                buttonConnectMetamask: {
                    'background-color': 'rgb(141,51,216)',
                    'transition': 'background-color .15s ease-in-out',
                    'border': '2px solid rgb(157,83,221)'
                },
                buttonInstallMetamask: {
                    'box-shadow': '0 0 20px #961607',
                    'border': '2px solid #ff7969'
                },
                textMetamask: {
                    'color': '#3399ff',
                    'text-decoration': 'underline'
                },
                sliderFloatValue: {
                    'width': '40px',
                    'height': '30px',
                    'background-color': 'white',
                    'color': 'red',
                    'border-radius': '4px',
                    'top': '0px'
                },
                sliderBar: {
                    'width': '100%',
                    'height': '20px',
                    'margin-left': '9.5px',
                    'margin-right': '9.5px'
                },
                sliderTextValue: {
                    'marginTop': '4px',
                    'color': '#9435e3',
                    'font-size': '17px'
                },
                sliderBackground: {
                    'left': '0',
                    'bottom': '6px',
                    'right': '0',
                    'margin': 'auto',
                    'height': '8px',
                    'background-color': 'rgb(32,32,32)',
                    'border-radius': '8px',
                    'z-index': '-1'
                },
                sliderProgress: {
                    'left': '0',
                    'bottom': '6px',
                    'margin': 'auto',
                    'height': '8px',
                    'background': 'linear-gradient(90deg,#9187ff 0%,#9435e3 100%)',
                    'border-radius': '8px',
                    'z-index': '-1',
                    'width': '0%'
                },
                sliderCircle: {
                    'background': '#9435e3',
                    'border': '6px solid white',
                    'border-radius': '50%',
                    'bottom': '0',
                    'left': '0',
                    'margin': 'auto',
                    'width': '20px',
                    'height': '20px',
                    'z-index': '-1'
                },
                sliderTriangle: {
                    'border-left': '6px solid transparent',
                    'border-right': '6px solid transparent',
                    'border-top': '5px solid #fff',
                    'top': '100%',
                    'left': '50%',
                    'transform': 'translateX(-50%)',
                    'z-index': '-1'
                },
                mintedTotal: {
                    'font-size': '14px',
                    'color': 'rgb(107,67,142)',
                },
                mintedFinal: {
                    'color': 'rgb(193,196,190)',
                }
            },
            data: data,
            mintAmount: 1,
            chainId: data.proyect.chainId,
            account: null,
            network: data.networks[data.proyect.network],
            metamaskButtonName: 'default',
            cost: '-.--',
            maxSupply: '--',
            totalSupply: '--',

        }
    },
    template: `
        <div class="d-flex flex-column justify-content-center mt-4">
            <div class="d-flex justify-content-center" :style=styles.textContainer>
                <span :style=styles.textInicial>MINT PRICE</span><span>&nbsp;</span><span :style=styles.textFinal>IS {{cost}} {{data.proyect.tokenSymbol}}</span>
            </div>
            <div class="d-flex justify-content-center mt-2" :style=styles.textContainer>
                <span :style=styles.textMiddle>Mint the {{data.proyect.nftName}} using <b>Metamask</b> Wallet</span>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <div class="d-flex align-self-center position-relative":style=styles.sliderContainer>
                    <div class="d-flex align-items-center justify-content-center position-absolute" :style=styles.sliderFloatValue>
                        <span :style=styles.sliderTextValue>{{mintAmount}}</span>
                        <div class="position-absolute" :style=styles.sliderTriangle></div>
                    </div>
                    <div class="w-100 h-100 d-flex align-items-center justify-content-center">
                        <div class="align-self-end position-relative" :style=styles.sliderBar>
                            <input class="w-100 opacity-0 align-self-end" type="range" min="1" max="20" v-model="mintAmount" v-on:input="changeSlider">
                            <div class="w-100 position-absolute" :style=styles.sliderBackground></div>
                            <div class="position-absolute" :style=styles.sliderProgress></div>
                            <div class="position-absolute" :style=styles.sliderCircle></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
                <div :style=styles.buttonContainer>
                    <div v-if="metamaskButtonName=='default'" class="w-100 h-100">
                        <div id="btnInstallMetamask" class="d-flex align-items-center justify-content-center w-100 h-100" :style="[styles.buttonDefault, styles.buttonInstallMetamask]">
                            <span class="d-flex">YOU NEED TO INSTALL<span>&nbsp;</span><a href="https://metamask.io/download.html" :style=styles.textMetamask target="_blank">METAMASK</a></span>
                        </div>
                    </div>
                    <div v-if="metamaskButtonName=='connect'" class="w-100 h-100">
                        <button id="btnDefault" class="btn w-100 h-100 text-uppercase" :style="[styles.buttonDefault, styles.buttonConnectMetamask]" v-on:click="connect">Connect Metamask</button>
                    </div>
                    <div v-if="metamaskButtonName=='switch'" class="w-100 h-100">
                        <button id="btnDefault" class="btn w-100 h-100 text-uppercase" :style="[styles.buttonDefault, styles.buttonConnectMetamask]" v-on:click="switchNetwork">Switch {{this.data.proyect.network}}</button>
                    </div>
                    <div v-if="metamaskButtonName=='add'" class="w-100 h-100">
                        <button id="btnDefault" class="btn w-100 h-100 text-uppercase" :style="[styles.buttonDefault, styles.buttonConnectMetamask]" v-on:click="addNetwork">Add {{this.data.proyect.network}}</button>
                    </div>
                    <div v-if="metamaskButtonName=='mint'" class="w-100 h-100">
                        <button id="btnDefault" class="btn w-100 h-100 text-uppercase" :style="[styles.buttonDefault, styles.buttonConnectMetamask]" v-on:click="mintNFTs">Mint {{mintAmount}} {{mintAmount!=1?data.proyect.nftName:data.proyect.nftName.slice(0,-1)}}</button>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-4" :style=styles.mintedTotal>{{totalSupply}}<span :style=styles.mintedFinal>/{{maxSupply}} MINTED</span></div>

        </div>
    `,
    methods: {
        changeSlider: function() {
            this.styles.sliderFloatValue.left="calc("+(this.mintAmount-1)*90/19+"%)"
            this.styles.sliderCircle.left="calc("+(this.mintAmount-1)*95/19+"%)"
            this.styles.sliderProgress.width=(this.mintAmount-1)*100/19+"%"
        },
        async connect() {
            try {
                await ethereum.request({method: 'eth_requestAccounts'})
                this.metamaskButtonName='switch'
                try {
                    const chainId = await ethereum.request({method: 'eth_chainId'})
                    if(chainId==this.network.chainId){
                        this.metamaskButtonName='mint'
                        this.styles.buttonContainer.opacity=1
                        await this.getAccount()
                    }else{
                        this.metamaskButtonName='switch'
                        await this.switchNetwork()
                    }
                } catch (error) {
                    console.log(error)
                    this.styles.buttonContainer.opacity=1
                }
            } catch (error) {
                console.error(error);
                this.styles.buttonContainer.opacity=1
            }
        },
        async switchNetwork() {
            try {
                await ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: this.network.chainId }],
                });
                this.metamaskButtonName='mint'
                this.styles.buttonContainer.opacity=1
                await this.getAccount()
            } catch (error) {
                console.error(error);
                if(error.code==4902){
                    this.metamaskButtonName='add'
                    await this.addNetwork()
                }
            }
        },
        async addNetwork() {
            var network = { ...this.network}
            delete network.shortName
            try {
                await ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [ network ],
                });
                this.metamaskButtonName='switch'
                await this.switchNetwork()
                this.styles.buttonContainer.opacity=1
            } catch (error) {
                console.error(error);
                this.styles.buttonContainer.opacity=1
            }
        },
        async getAccount() {
            var accounts = await ethereum.request({method: 'eth_requestAccounts'})
            this.account = accounts[0]
        },
        async mintNFTs() {
            try {
                var abiInterface = new ethers.utils.Interface(this.data.proyect.contract.abi);
                var functionData = abiInterface.encodeFunctionData("mint", [this.mintAmount]);
                const transactionParameters = {
                    from: this.account,
                    to: this.data.proyect.contract.address,
                    gas: ethers.utils.hexlify(120000),
                    value: ethers.utils.hexlify(ethers.utils.parseEther((this.cost*this.mintAmount).toString())),
                    data: functionData,
                    chainId: this.network.chainId
                };
                const txHash = await ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [transactionParameters],
                });
                console.log(txHash)
            } catch (error) {
                console.error(error);
            }
        },
        async getTotalSupplyCost(contract) {
            let cost = await contract.cost();
            let totalSupply = await contract.totalSupply();
            this.cost = ethers.utils.formatUnits(cost, "ether")
            this.totalSupply=ethers.utils.formatUnits(totalSupply, "wei")
        }
    },
    async created() {       
        const provider = new ethers.providers.JsonRpcProvider(this.network.rpcUrls[0]);
        const contract = new ethers.Contract(this.data.proyect.contract.address, this.data.proyect.contract.abi, provider)
        let maxSupply = await contract.maxSupply();
        this.maxSupply=ethers.utils.formatUnits(maxSupply, "wei")
        
        await this.getTotalSupplyCost(contract)
        setInterval(async () => {
            await this.getTotalSupplyCost(contract)
        }, 1000);
        const { ethereum } = window;
        if(ethereum && ethereum.isMetaMask){
            this.metamaskButtonName='connect'
        }
        this.styles.buttonContainer.opacity=1
    }
})

Vue.component('sliders', {
    props: [],
    data() {
        return {
            styles: {
                nftName: {
                    'color': 'white',
                    'font-size': '45px'
                },
                description: {
                    'width': '600px',
                    'font-size': '18px',
                    'color': 'white',
                    'text-align': 'center'
                },
                overflowImages: {
                    'overflow': 'hidden',
                    'height':'770px'
                },
                containerImages: {
                    'width': '30000px'
                },
                imageList1: {
                    'animation': 'listImageMoveNormal 60s linear infinite'
                },
                imageList2: {
                    'animation': 'listImageMoveInvert 60s linear infinite',
                    'top': '260px'
                },
                imageList3: {
                    'animation': 'listImageMoveNormal 60s linear infinite',
                    'top': '520px'
                },
                image: {
                    'padding-right': '10px',
                    'width': '250px',
                    'height': '250px'
                }
            },
            data: data
        }
    },
    template: `
        <div id="sliders" class="d-flex flex-column mt-4">
            <div class="d-flex justify-content-center" :style=styles.nftName>{{data.proyect.nftName}}</div>
            <div class="d-flex justify-content-center mt-3 pe-4 ps-4">
                <div id="descriptionNFT" :style=styles.description>{{data.proyect.description}}</div>
            </div>
            <div class="position-relative mt-4" :style=styles.overflowImages>
                <div class="d-flex flex-column" :style=styles.containerImages>
                    <div class="d-flex mb-2 position-absolute" :style=styles.imageList1>
                        <div v-for="(n, index) in 20" :style=styles.image>
                            <img v-if="n<=10" class="w-100 h-100" v-bind:src="'images/sliders/'+n+'.png'">
                            <img v-else class="w-100 h-100" v-bind:src="'images/sliders/'+(n-10)+'.png'">
                        </div>
                    </div>
                    <div class="d-flex mb-2 position-absolute" :style=styles.imageList2>
                        <div v-for="(n, index) in 20" :style=styles.image>
                            <img v-if="n<=10" class="w-100 h-100" v-bind:src="'images/sliders/'+(n+10)+'.png'">
                            <img v-else class="w-100 h-100" v-bind:src="'images/sliders/'+(n)+'.png'">
                        </div>
                    </div>
                    <div class="d-flex position-absolute" :style=styles.imageList3>
                        <div v-for="(n, index) in 20" :style=styles.image>
                            <img v-if="n<=10" class="w-100 h-100 p-0" v-bind:src="'images/sliders/'+(n+20)+'.png'">
                            <img v-else class="w-100 h-100 p-0" v-bind:src="'images/sliders/'+(n+10)+'.png'">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    methods: {
        
    },
    created() {
        
    }
})

const welcome = new Vue({
    el: '#welcome',
    data: {
        styles: {
            welcome: {
                'color': '#ff6265',
                'font-size': '18px'
            },
            tittleName: {
                'color': 'white',
                'font-size': '45px'
            },
            imagesContainer: {
                'height': '400px'
            },
            images: {
                leftImage: {
                    'height': '300px',
                    'transform': 'scaleX(-1)',
                    'margin-right': '-200px',
                    'z-index': '-1'
                },
                centerImage: {
                    'height': '400px'
                },
                rightImage: {
                    'height': '300px',
                    'margin-left': '-200px',
                    'z-index': '-1'
                }
            }
        },
        tittleName: data.proyect.tittleName
    },
    template: `
        <div id="welcome" class="pt-4">
            <div class="d-flex justify-content-center" :style=styles.welcome>Welcome to</div>
            <div class="d-flex justify-content-center" :style=styles.tittleName>{{tittleName}}</div>
            <div id="welcomeImagesContainer" :style=styles.imagesContainer class="d-flex justify-content-center">
                <img id="welcomeImagesLeft" :style=styles.images.leftImage class="mt-auto" src="images/welcome/1.png">
                <img id="welcomeImagesCenter":style=styles.images.centerImage src="images/welcome/2.png">
                <img id="welcomeImagesRight" :style=styles.images.rightImage class="mt-auto" src="images/welcome/3.png">
                <background></background>
            </div>
            <mint></mint>
            <sliders></sliders>
        </div>
    `
})