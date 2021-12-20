//注册i8n实例并引入语言文件
import { createI18n } from 'vue-i18n'; //引入vue-i18n组件
import en from './en'
import zh from  './zh'
const i18n = createI18n({
  locale: 'zh_CN', //默认显示的语言
  messages: {
    zh_CN: zh, //引入语言文件
    en_US: en,
  },
});
export default i18n; //将i18n暴露出去，在main.ts中引入挂载
