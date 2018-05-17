import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from "@/components/Welcome"
import Hardrock from "@/components/Hardrock"
import Heavymetal from "@/components/Heavymetal"
import PsychedelicRock from "@/components/PsychedelicRock"
import Grunge from "@/components/Grunge"
import ProgRock from "@/components/ProgRock"
import Punk from "@/components/Punk"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
     {
      path: '/Hardrock',
      name: 'Hardrock',
      component: Hardrock
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome
    },
     {
      path: '/Heavymetal',
      name: 'Heavymetal',
      component: Heavymetal
    },
    {
      path: '/Grunge',
      name: 'Grunge',
      component: Grunge
    },
     {
      path: '/PsychedelicRock',
      name: 'PsychedelicRock',
      component: PsychedelicRock
    },
    {
      path: '/Punk',
      name: 'Punk',
      component: Punk
    },
     {
      path: '/ProgRock',
      name: 'ProgRock',
      component: ProgRock
    }
  ]
})






