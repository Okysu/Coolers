import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // 自定义配置路由
    router: {
        mode: 'hash', // 使用 'hash' 主要是为了适配以相对路径打开的静态站点， 必须使用 'hash' 否则路由跳转不生效
        extendRoutes(routes, resolve) {
            routes.push({
                path: '/',
                redirect: {
                    name: 'home'
                }
            })
        }
    },

})
