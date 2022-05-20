<template>
  <div>
    取新的名字: <input type="text" :placeholder="playerName" v-model="newName" @change="named">
  </div>
  <div>
    更換信箱 Domain: <select name="email" v-model="newMail" @change="mailed">
      <option value="domain.com" checked>domain.com</option>
      <option value="gmail.com">gmail.com</option>
      <option value="yahoo.com.tw">yahoo.com.tw</option>
      <option value="ipaddress.com">ipaddress.com</option>
    </select>
  </div>
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
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    const newName = ref('');
    const newMail = ref('domain.com');
    const playerName = ref('Jacky');
    const emailDomain = ref(newMail.value);

    const named = () => {
      playerName.value = newName.value;
    };
    const mailed = () => {
      emailDomain.value = newMail.value;
    };
    return {
      playerName,
      emailDomain,
      named,
      mailed,
      newName,
      newMail,
    };
  },
};
</script>

<style lang="scss">
</style>
