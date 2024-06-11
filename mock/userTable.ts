import { defineFakeRoute } from "vite-plugin-fake-server/client";
import { faker } from "@faker-js/faker/locale/zh_CN";

export default defineFakeRoute([
  {
    url: "/user/list",
    method: "get",
    response: ({ query }) => {
      let list = [
        {
          id: 1,
          username: "admin",
          email: faker.internet.email(),
          ip: faker.internet.ipv4(),
          loginTime: faker.date.recent()
        },
        {
          id: 2,
          username: faker.internet.userName(),
          email: faker.internet.email(),
          ip: faker.internet.ipv4(),
          loginTime: faker.date.recent()
        },
        {
          id: 3,
          username: faker.internet.userName(),
          email: faker.internet.email(),
          ip: faker.internet.ipv4(),
          loginTime: faker.date.recent()
        }
      ];
      if (query.username)
        list = list.filter(item => item.username === query.username);

      return {
        success: true,
        data: {
          list,
          total: list.length, // 总条目数
          pageSize: 10, // 每页显示条目个数
          currentPage: 1 // 当前页数
        }
      };
    }
  }
]);
