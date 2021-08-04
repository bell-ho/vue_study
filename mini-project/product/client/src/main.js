import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import mixins from "./mixins";
import store from './store';
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


createApp(App).use(router).mixin(mixins).use(store).use(VueSweetalert2).mount('#app')

window.Kakao.init("ce805e75a214c61af40eb18cd685910b");
