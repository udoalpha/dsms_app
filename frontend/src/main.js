import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import {Avatar, Button, setConfig, frappeRequest, resourcesPlugin } from 'frappe-ui'

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(resourcesPlugin)
app.component('Avatar', Avatar)
app.component('Button', Button)
app.mount('#app')//The .mount() method requires a container argument, which is the HTML element where Vue will inject its content.
