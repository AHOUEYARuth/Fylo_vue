import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Feature from "./views/Feature.vue";
import Sign from "./views/Sign.vue";
import Team from "./views/Team.vue";

const routes = [
    {
        path:'/' ,
        component: Home
    },
    {
        path:'/feature' ,
        component: Feature
    },
    {
        path:'/sign' ,
        component: Sign
    },
    {
        path:'/team' ,
        component: Team
    }
]
export default createRouter({
    history: createWebHistory() ,
    routes
})