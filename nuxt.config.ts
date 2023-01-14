// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'LOreal ACD',
            meta: [
                {name: 'description', content: 'Medical site'},
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {name: "format-detection", content: "telephone=no"}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ],
            noscript: [
                // <noscript>JavaScript is required</noscript>
                { children: 'JavaScript is required' }
            ],
        }
    },

    css: [
        '~/assets/fonts/Lato/stylesheet.css',
        '~/assets/styles/main.scss',
        // '~assets/styles/colors.scss'
    ],

    // vite: {
    //     css: {
    //         preprocessorOptions: {
    //             scss: {
    //                 additionalData: '@use "@/assets/styles/colors.scss" as *;'
    //             }
    //         },
    //     }
    // }
})
