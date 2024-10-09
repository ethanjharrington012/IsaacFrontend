import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faSpotify, faApple } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faSpotify, faApple)

const app = createApp(App);
app.use(router); // Tell the app to use the router
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
