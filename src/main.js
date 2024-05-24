import app from "./App.vue";

import { createApp } from "vue";

import router from "./router/router";

import './style-sheet/style.scss';

createApp( app ).use( router ).mount('#app')
