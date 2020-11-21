// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
//引入IVIEW组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
//引入vue-easytable
import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
//引入axios
import axios from 'axios'
import Axios from 'axios';
Vue.prototype.$ajax = axios

// 设置全局的axios
Vue.prototype.$axios=Axios
// 设置基本路径
Axios.defaults.baseURL='/api'

// 设置post请求的数据类型
Axios.defaults.headers.post['Content-Type']='application/json'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})