Vue.component('li-navbar', {
    props: ['question', 'answer'],
    data() {
        return {
            styles: {
                romanNumeral: {
                    'color': '#784dc8'
                },
                question: {
                    'color': 'white'
                },
                answer: {
                    'color': '#989898'
                }
            }
        }
    },
    template: `
        <li class="nav-item">
            <span :style=styles.romanNumeral>{{this.romanize(this.$vnode.key+1)}}.</span>
            <span :style=styles.question>{{question}}</span>
            <div :style=styles.answer>{{answer}}</div>
        </li>
    `,
    methods: {
        romanize: function (num) {
            if (isNaN(num))
                return NaN;
            var digits = String(+num).split(""),
                key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                       "","I","II","III","IV","V","VI","VII","VIII","IX"],
                roman = "",
                i = 3;
            while (i--)
                roman = (key[+digits.pop() + (i * 10)] || "") + roman;
            return Array(+digits.join("") + 1).join("M") + roman;
        }
    }
})

const frequentlyAskedQuestions = new Vue({
    el: '#frequentlyAskedQuestions',
    data: {
        styles: {
            title: {
                'color': 'white',
                'font-size': '35px'
            },
            description: {
                'color': 'white'
            }
        },
        title: 'Frequently Asked Questions',
        data: data
    },
    template: `
        <div id="faq" class="container pt-4">
            <div :style=styles.title>{{title}}</div>
            <div :style=styles.description>{{data.frequentlyAskedQuestions.description}}</div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li-navbar v-for="(item, index) in data.frequentlyAskedQuestions.questions" :key="index" :question=item.question :answer=item.answer></li-navbar>
            </ul>
        </div>
    `
})