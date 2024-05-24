import {createRouter, createWebHistory} from "vue-router";

import main_layout from "../layout/main-layout.vue";
import introduction_content from "../page/introduction-content.vue";

const ROOT_URL = "/";
const routes = [
    {
        path: ROOT_URL, name: 'main_layout', component: main_layout,
        children: [
            { path: ROOT_URL + '', name: 'introduction_content', component: introduction_content },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
