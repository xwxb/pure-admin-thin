// 最简代码，也就是这些字段必须有information
export default {
  path: "/editor",
  name: "Editor",
  meta: {
    title: "编辑器",
    icon: "ep:edit"
  },
  children: [
    {
      path: "/editor/index",
      name: "Editor",
      component: () => import("@/views/editor/index.vue"),
      meta: {
        title: "编辑器"
      }
    }
  ]
};
