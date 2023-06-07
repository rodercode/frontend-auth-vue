/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import VueRouter, {Route} from 'vue-router'
  declare module 'vue/types/vue'{
    interface Vue{
      $router:VueRouter
    }
  }
  const component: DefineComponent<{}, {}, any>
  export default component
}
