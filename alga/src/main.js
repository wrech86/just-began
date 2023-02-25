import { createApp } from 'vue';
import App from './App.vue'
import Vant from 'vant';
import router from './router/router';
import 'vant/lib/index.css';
import 'amfe-flexible'
import './assets/font/font.css'
const app = createApp(App);
app.use(Vant);
app.use(router)
app.mount('#app')
