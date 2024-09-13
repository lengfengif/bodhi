import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const COURSE: AppRouteRecordRaw = {
  path: '/course',
  name: 'course',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.course',
    icon: 'icon-settings',
    requiresAuth: true,
    order: 4,
  },
  children: [
    {
      path: 'learn',
      name: 'learn',
      component: () => import('@/views/course/index.vue'),
      meta: {
        locale: 'menu.form.step',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default COURSE;
