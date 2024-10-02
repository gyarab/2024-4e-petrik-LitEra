new Vue({
    el: '#app',
    data: {
    message: 'Vítejte na historické časové ose!',
    zoomLevel: 50, // Počáteční zoom časové osy
    showSettings: false // Pro zobrazení modal okna s nastavením
    },
    methods: {
    adjustZoom() {
        // Úprava velikosti časové osy na základě slideru
        const timeline = this.$refs.timeline;
        timeline.style.transform = `scale(${this.zoomLevel / 50})`;
    },
    openSettings() {
        this.showSettings = true;
    },
    closeSettings() {
        this.showSettings = false;
    }
    }
});
