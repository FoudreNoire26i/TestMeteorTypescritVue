import Vue from 'vue'
import Vuex from "vuex"

import '../imports/ui/plugins'

import Vuetify from "vuetify";
import colors from 'vuetify/es5/util/colors';

import Router from "vue-router";
import Home from "../imports/ui/views/Home/Home.vue"


import { Meteor } from "meteor/meteor"
import App from '../imports/ui/App/App.vue'

Vue.use(Vuex)

Vue.use(Vuetify);
let vuetify = new Vuetify({
  theme: {
    themes : {
      light : {
        primary: "#E0a141",
        accent: colors.green.lighten1,
        error: colors.red.lighten1
      },
      dark : {
        primary: "#E0a141",
        accent: colors.green.darken1,
        error: colors.red.darken1
      }
    }
  }
})

Vue.use(Router);
export var router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      component: Home,
      meta: { }
    },
  ]
})

Meteor.startup(() => {
  new Vue({
    vuetify,
    router,
    el: '#app',
    render: h => h(App)
  })
})
