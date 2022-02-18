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
            slider: {
                'value': 1
            },
            nftName: data.proyect.nftName,
            mintPrice: data.proyect.mintPrice,
            tokenSymbol: data.proyect.tokenSymbol,
            chainId: data.proyect.chainId,
            contractNFTAddress: data.contractNFT.address,
            contractNFTAbi: data.contractNFT.abi,
            contractNFTFunction: data.contractNFT.function,
            blockchainExplorerURL: data.blockchainExplorer.url,
            blockchainExplorerQuery: data.blockchainExplorer.query,
            blockchainExplorerApiKey: data.blockchainExplorer.apiKey,
            account: null,
            networks: data.networks,
            metamaskButtonName: 'default',
            totalMinted: '-'
        }
    },
    template: `
        <div class="d-flex flex-column justify-content-center mt-4">
            <div class="d-flex justify-content-center" :style=styles.textContainer>
                <span :style=styles.textInicial>MINT PRICE</span><span>&nbsp;</span><span :style=styles.textFinal>IS {{mintPrice}} {{tokenSymbol}}</span>
            </div>
            <div class="d-flex justify-content-center mt-2" :style=styles.textContainer>
                <span :style=styles.textMiddle>Mint the {{nftName}} using <b>Metamask</b> Wallet</span>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <div class="d-flex align-self-center position-relative":style=styles.sliderContainer>
                    <div class="d-flex align-items-center justify-content-center position-absolute" :style=styles.sliderFloatValue>
                        <span :style=styles.sliderTextValue>{{ slider.value }}</span>
                        <div class="position-absolute" :style=styles.sliderTriangle></div>
                    </div>
                    <div class="w-100 h-100 d-flex align-items-center justify-content-center">
                        <div class="align-self-end position-relative" :style=styles.sliderBar>
                            <input class="w-100 opacity-0 align-self-end" type="range" min="1" max="20" v-model="slider.value" v-on:input="changeSlider">
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
                        <button id="btnDefault" class="btn w-100 h-100" :style="[styles.buttonDefault, styles.buttonConnectMetamask]" v-on:click="connect">CONNECT METAMASK</button>
                    </div>
                    <div v-if="metamaskButtonName=='switch'" class="w-100 h-100">
                        <button id="btnDefault" class="btn w-100 h-100" :style="[styles.buttonDefault, styles.buttonConnectMetamask]" v-on:click="switchNetwork">SWITCH {{this.getNetwork().shortName}}</button>
                    </div>
                    <div v-if="metamaskButtonName=='add'" class="w-100 h-100">
                        <button id="btnDefault" class="btn w-100 h-100" :style="[styles.buttonDefault, styles.buttonConnectMetamask]" v-on:click="addNetwork">ADD {{this.getNetwork().shortName}}</button>
                    </div>
                    <div v-if="metamaskButtonName=='mint'" class="w-100 h-100">
                        <button id="btnDefault" class="btn text-uppercase w-100 h-100" :style="[styles.buttonDefault, styles.buttonConnectMetamask]" v-on:click="mintNFTs">MINT {{slider.value}} {{nftName}}</button>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-4" :style=styles.mintedTotal>{{totalMinted}}<span :style=styles.mintedFinal>/10000 MINTED</span></div>

        </div>
    `,
    methods: {
        changeSlider: function() {
            this.styles.sliderFloatValue.left="calc("+(this.slider.value-1)*90/19+"%)"
            this.styles.sliderCircle.left="calc("+(this.slider.value-1)*95/19+"%)"
            this.styles.sliderProgress.width=(this.slider.value-1)*100/19+"%"
        },
        async connect() {
            try {
                await ethereum.request({method: 'eth_requestAccounts'})
                this.metamaskButtonName='switch'
                try {
                    const chainId = await ethereum.request({method: 'eth_chainId'})
                    if(chainId==this.chainId){
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
                    params: [{ chainId: this.chainId }],
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
            var network = { ...this.getNetwork()}
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
        getNetwork() {
            var network = this.networks.find(network => {return network.chainId == this.chainId})
            return network?network:{chainName:""}
        },
        async getAccount() {
            var accounts = await ethereum.request({method: 'eth_requestAccounts'})
            this.account = accounts[0]
        },
        async mintNFTs() {
            try {
                //0x89
                var abiInterface = new ethers.utils.Interface(this.contractNFTAbi);
                var functionData = abiInterface.encodeFunctionData(this.contractNFTFunction, [ethers.utils.parseEther(this.slider.value.toString())]);
                const transactionParameters = {
                    from: this.account,
                    to: this.contractNFTAddress,
                    gas: ethers.utils.hexlify(240000),
                    value: ethers.utils.hexlify(ethers.utils.parseEther((this.mintPrice*this.slider.value).toString())),
                    data: functionData,
                    chainId: this.chainId
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
        async getTotalMinted(){
            var url=this.blockchainExplorerURL+this.contractNFTAddress+this.blockchainExplorerQuery+this.blockchainExplorerApiKey
            let response = await fetch(url);
            let data = await response.json();
            if(data.status=='1'){
                this.totalMinted=data.result.length
            }
        }
    },
    async created() {
        await this.getTotalMinted()
        setInterval(async () => {
            await this.getTotalMinted()
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
            nftName: data.proyect.nftName,
            description: data.proyect.description
        }
    },
    template: `
        <div id="sliders" class="d-flex flex-column mt-4">
            <div class="d-flex justify-content-center" :style=styles.nftName>{{nftName}}</div>
            <div class="d-flex justify-content-center mt-3 pe-4 ps-4">
                <div id="descriptionNFT" :style=styles.description>{{description}}</div>
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