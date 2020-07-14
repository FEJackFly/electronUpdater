/*
 * @Author: JackFly
 * @since: 2020-07-14 10:50:53
 * @lastTime: 2020-07-14 10:51:08
 * @FilePath: /electron-updater/vue.config.js
 * @message:配置文件
 */

module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ["github"],
      },
    },
  },
};
