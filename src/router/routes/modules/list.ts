import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/list',
  name: 'list',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.list',
    requiresAuth: true,
    icon: 'icon-list',
    order: 2,
  },
  children: [
    {
      path: 'search-table', // The midline path complies with SEO specifications
      name: 'SearchTable',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        locale: 'menu.list.searchTable',
        requiresAuth: true,
        roles: ['*'],
      },
      children: [
        {
          path: 'personalData', // The midline path complies with SEO specifications
          name: 'personalData',
          component: () => import('@/views/list/search-table/components/personalData.vue'),
          meta: {
            locale: 'menu.list.searchTable',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'myAchievement', // The midline path complies with SEO specifications
          name: 'myAchievement',
          component: () => import('@/views/list/search-table/components/myAchievement.vue'),
          meta: {
            locale: 'menu.list.searchTable',
            requiresAuth: true,
            roles: ['*'],
          },
        },
        {
          path: 'myExam', // The midline path complies with SEO specifications
          name: 'myExam',
          component: () => import('@/views/list/search-table/components/myExam.vue'),
          meta: {
            locale: 'menu.list.searchTable',
            requiresAuth: true,
            roles: ['*'],
          },
        },
      ],
    },
    {
      path: 'card',
      name: 'Card',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.list.cardList',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;
