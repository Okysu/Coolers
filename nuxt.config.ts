import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'CoolersFun - 冷却工坊',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'keywords', name: 'keywords', content: '前端, Python, Java, AI, 人工智能, 后端' }
        ],
    },
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
