import { createApp } from 'vue'
import './style.css';
import App from './App.vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
//import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);


app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
});

app.use(VueAxios, axios);

app.config.globalProperties.$axios = axios;

app.mount('#app');
