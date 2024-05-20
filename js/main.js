const { createApp } = Vue;

createApp({
    data() {
        return {
            titolo: 'Ciao VUE JS, benvenuto!',
            foto: 'https://www.quotidianodelsud.it/wp-content/uploads/2020/07/sherlock-holmes.jpg',
        };
    }
}).mount('#app');