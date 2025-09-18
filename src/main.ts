import './assets/css/tailwindcss.css';
import './assets/css/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from './stores';
import { setupRouter } from './router';

async function bootstrap() {
  const app = createApp(App);

  setupStore(app);

  await setupRouter(app);

  app.mount('#app');
}

bootstrap();
