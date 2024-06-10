export default {
  path: "/table",
  redirect: "/table/userTable",
  meta: {
    icon: "ep:menu",
    title: "表操作",
    rank: 6
  },
  children: [
    {
      path: "/table/userTable",
      name: "UserTable",
      component: () => import("@/views/table/user-table/index.vue"),
      meta: {
        title: "用户表"
      }
    }
  ]
} satisfies RouteConfigsTable;
