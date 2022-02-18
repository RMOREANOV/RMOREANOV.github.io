Vue.component('li-navbar', {
    props: ['value'],
    data() {
        return {
            isOver: false,
            styles: {
                item: {
                    "color": "rgba(255,255,255,0.8)"
                }
            }
        }
    },
    template: `
        <li class="nav-item">
            <a class="nav-link nav-item" :style=styles.item type="button" v-bind:value="value" v-on:click="scrollIntoView">{{value}}</a>
        </li>
    `,
    methods: {
        mouseOver:function(e){
            this.isOver=true
        },
        mouseleave:function(e){
            this.isOver=false
        },
        scrollIntoView: function(e){
            let element = document.querySelector("#"+e.target.getAttribute("value").toLowerCase());
            element.scrollIntoView({ behavior: "smooth" });
        },
        
    }
})

const navbar = new Vue({
    el: '#navbar',
    data: {
        styles: {
            iconContainer: {
                'width': '60px',
                'height': '60px'
            },
            icon: {
                'height': '100%'
            },
            navbarSocial: {
                'transition': 'opacity .15s ease-in-out'
            }
        },
        items: [
            {value: 'Welcome'},
            {value: 'Goals'},
            {value: 'Rarity'},
            {value: 'Team'},
            {value: 'FAQ'}
        ],
        social: data.social,
    },
    template: `
        <nav class="navbar navbar-expand-md">
            <div class="container-fluid">
                <a class="navbar-brand" href="javascript:window.location.href=window.location.href">
                    <div :style=styles.iconContainer>
                        <img :style=styles.icon src="icon.png">
                    </div>
                </a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li-navbar v-for="(item, index) in items" :key="index" :value=item.value></li-navbar>
                    </ul>
                </div>
                <div>
                    <a class="navbarSocial" :style=styles.navbarSocial :href=social.opensea target="_blank"><img src="images/navbar/opensea.svg"></a>
                    <a class="navbarSocial" :style=styles.navbarSocial :href=social.discord target="_blank"><img src="images/navbar/discord.svg"></a>
                    <a class="navbarSocial" :style=styles.navbarSocial :href=social.twitter target="_blank"><img src="images/navbar/twitter.svg"></a>
                </div>
            </div>
        </nav>
    `,
    methods: {
        loadNavBarState: function() {
            
        }
    },
    created(){
        
    }
})