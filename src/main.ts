import { createApp } from 'vue';
import App from './App.vue';

// Import Tailwind dan AOS
import './assets/styles/tailwind.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inisialisasi AOS
AOS.init();

const app = createApp(App);
app.mount('#app');
