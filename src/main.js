import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import messages from './store/message';

const i18n = createI18n({
  locale: '中文',
  messages,
});

createApp(App).use(router).use(i18n).mount('#app');
