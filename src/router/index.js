import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: _import('login/index'), hidden: true},
  {path: '/404', component: _import('errorPage/404'), hidden: true},
  { path: '/401', component: _import('errorPage/401'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [{
      path: 'home',
      name:'home',
      component: _import('home/index'),
      meta: { title: '首页', icon: 'dashboard', noCache: true }
    }]
  },

  {
    path: '/complexTable',
    component: Layout,
    redirect: '/complexTable/table',
    meta: {title: 'complexTable', icon: 'example'},
    children: [
      {
        path: 'table',
        name: 'Table',
        component: _import('table/index'),
        meta: {title: 'Table', icon: 'table'}
      },
      {
        path: 'tree',
        name: 'Tree',
        component: _import('tree/index'),
        meta: {title: 'Tree', icon: 'tree'}
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'components',
    meta: {title: '组件', icon: 'component'},
    children: [
      {
        path: 'tinymce',
        name: 'tinymce-demo',
        component: _import('components-demo/tinymce'),
        meta: {title: '富文本编辑器'}
      },
      {
        path: 'backToTop',
        name: 'backToTop-demo',
        component: _import('components-demo/backToTop'),
        meta: {title: '返回顶部'}
      },
      {
        path: 'dropzone',
        name: 'dropzone-demo',
        component: _import('components-demo/dropzone'),
        meta: {title: 'dropzone'}
      },
      {
        path: 'sticky',
        name: 'sticky-demo',
        component: _import('components-demo/sticky'),
        meta: {title: 'sticky'}
      },
      {
        path: 'avatarUpload',
        name: 'avatarUpload-demo',
        component: _import('components-demo/avatarUpload'),
        meta: {title: '图片裁剪上传'}
      },
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: _import('form/index'),
        meta: {title: 'Form', icon: 'form'}
      }
    ]
  },
  {
    path:'/excel',
    component:Layout,
    redirect:'/excel/export-excel',
    name:'excel',
    meta: {title: 'excel', icon: 'excel'},
    children:[
      {
        path:'export-excel',
        component:_import('excel/export-excel'),name:'exportExcel',meta:{title:'exportExcel'}
      },
      {
        path:'select-excel',
        component:_import('excel/select-excel'),name:'selectExcel',meta:{title:'selectExcel'}
      },
      {
        path:'upload-excel',
        component:_import('excel/upload-excel'),name:'uploadExcel',meta:{title:'uploadExcel'}
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      { path: '401', component: _import('errorPage/401'), name: 'page401', meta: { title: 'page401', noCache: true }},
      { path: '404', component: _import('errorPage/404'), name: 'page404', meta: { title: 'page404', noCache: true }}
    ]
  },
  // {
  //   path: '/controlBoard',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'control-board',
  //       name: 'control board',
  //       component: _import('controlBoard/control-board'),
  //       meta: {title: '控制台', icon: 'dashboard'}
  //     }
  //   ]
  // },
  // {
  //   path: '/controlBoard1',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'control-board1',
  //       name: 'control board1',
  //       component: _import('controlBoard1/control-board'),
  //       meta: {title: '控制台1', icon: 'dashboard'}
  //     }
  //   ]
  // },

]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/platform',
    component: Layout,
    redirect: '/platform/financialInstitution',
    meta: {role: ['editor']},
    children: [{
      path: 'index',
      component: _import('platform/financialInstitution/index'),
      name: 'financialInstitution',
      meta: {
        title: '金融机构平台',
        role: ['editor'],
        icon: 'component'
      }
    }]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export const asyncRouterMap1 = [
  {
    path: '/platform',
    component: Layout,
    redirect: '/platform/controlBoard',
    meta: {role: ['super']},
    children: [{
      path: 'index',
      component: _import('platform/controlBoard/index'),
      name: 'controlBoard',
      meta: {
        title: '采购商平台',
        role: ['super'],
        icon: 'component'
      }
    }]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export const asyncRouterMap2 = [
  {
    path: '/platform',
    component: Layout,
    redirect: '/platform/controlBoard1',
    meta: {role: ['admin']},
    children: [{
      path: 'index',
      component: _import('platform/controlBoard1/index'),
      name: 'controlBoard1',
      meta: {
        title: '贸易商平台',
        role: ['admin'],
        icon: 'component'
      }
    }]
  },
  {path: '*', redirect: '/404', hidden: true}
]
