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
