// 最简代码，也就是这些字段必须有
export default {
  path: "/edtior",
  meta: {
    title: "编辑器"
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
