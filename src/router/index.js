import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: { name: "mellenyek" },
    },

    {
      path: '/mellenyek',
      name: 'mellenyek',
      component: () => import('../App.vue')
    },
  ]
})

export default router
