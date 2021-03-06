import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import { routes } from './routes/client/routes';
import App from './App.vue';
import './index.css';

window.axios = axios;
const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes
});

app.use(router);
app.mount('#app');
