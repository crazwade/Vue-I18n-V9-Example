# Example of vue-i18n
[Example](https://crazwade.github.io/Vue-I18n-V9-Example/dist/)

```
"dependencies": {
    "core-js": "^3.6.5",
    "vue": "^3.0.0",
    "vue-i18n": "^9.1.10",
  },
```

## 📔 Documentation
About Vue I18n v8.x, See [here](https://kazupon.github.io/vue-i18n/)

If you want to read Vue I18n v9 docs, See [here](https://vue-i18n.intlify.dev/)

### ⚠️ NOTICE
This repository is for Vue I18n v8.x and Vue 2

If you want to know about how to usage for Vue I18n v9 on Vue 3, [See the this repository](https://github.com/intlify/vue-i18n-next))

## NPM
```
npm install vue-i18n@9
```

## main.js
```
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import messages from './store/message';

const i18n = createI18n({
  locale: '中文',
  messages,
});

createApp(App).use(i18n).mount('#app');
```

## messages.js
```
const messages = {
  英文: {
    message: {
      hello: 'hello world',
      morning: '{name}, good morning',
      afternoon: '{1}, good afternoon',
      night: "{account}{'@'}{domain}",
      linked: '@:message.morning @:message.hello',
      html: 'html <br> br',
    },
  },
  日文: {
    message: {
      hello: 'こんにちは、Sekai',
      morning: '{name}, おはようございます',
      afternoon: '{2}, こんにちは',
      night: "{account}{'@'}{domain}",
      linked: '@:message.morning @:message.hello',
      html: 'html <br> br',
    },
  },
  中文: {
    message: {
      hello: '你好 世界',
      morning: '{name}, 早安',
      afternoon: '{0}, 午安',
      night: "{account}{'@'}{domain}",
      linked: '@:message.morning @:message.hello',
      html: 'html <br> br',
    },
  },
};

export default messages;
```

## use
```
<div class="home">
    <h3>
      <p>
        Basic used : {{ $t("message.hello") }}
      </p>
    </h3>
    <h3>
      <p>
        Named interpolation : {{ $t("message.morning", { name: playerName}) }}
      </p>
    </h3>
    <h3>
      <p>
        List interpolation : {{ $t("message.afternoon", ['⚾️','🏀','⚽️']) }}
      </p>
    </h3>
    <h3>
      <p>
        Literal interpolation :{{ $t("message.night",
        { account: playerName, domain: emailDomain }) }}
      </p>
    </h3>
    <h3>
      <p>
        Linked messages :{{ $t("message.linked", { name: playerName}) }}
      </p>
    </h3>
    <h3>
      <div>
        <!-- HTML messages(br) : <span v-html="$t('message.html')" /> -->
      </div>
    </h3>
  </div>
  ```
