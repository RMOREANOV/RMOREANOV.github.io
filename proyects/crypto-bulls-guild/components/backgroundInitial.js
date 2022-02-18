const backgroundInitial = new Vue({
    el: '#backgroundInitial',
    data: {
        styles: {
            container: {
                'background-color': 'red',
                'height': '300px'
            }
        },
        proyectName: data.proyect.name,
    },
    template: `
        <div class="container" :style="styles.container">
            
        </div>
    `
})