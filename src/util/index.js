// utilsPlugin.js
import utils from './globalMethod'; // 根据实际路径调整

export default {
  install(app) {
    app.config.globalProperties.$utils = utils;
  }
};