import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import express  from 'express';
// import http from 'http';

// const app = express();
//const server = http.createServer(app);

const app = createApp(App)
app.use(router)
app.mount('#app')

server.listen(3000)