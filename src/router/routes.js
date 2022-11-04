const routes = [
   {
      path: '/',
      component: () => import('./../layouts/PublicLayout.vue'),
      children: [
         {
            name: 'homePage',
            path: '',
            component: () => import('./../pages/HomePage.vue'),
         },
      ],
   },
   {
      path: '/auth',
      component: () => import('./../layouts/AuthLayout.vue'),
      children: [
         {
            name: 'authPage',
            path: 'page',
            component: () => import('./../pages/AuthPage.vue'),
         },
      ],
   },
]

export default routes
