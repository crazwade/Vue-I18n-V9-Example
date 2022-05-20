<template>
  <div class="locale-changer">
    語言選單 : <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
        {{ locale }}
      </option>
    </select>
  </div>
  <Home />
  <div>-------------</div>
    <pre>{{ JSON.stringify(langJson, null, 2) }}</pre>
  <div>-------------</div>

</template>

<script>
import { ref } from 'vue';
import message from './store/message';
import Home from './views/Home.vue';

export default {
  components: {
    Home,
  },
  setup() {
    const langJson = ref(message);

    return {
      langJson,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
