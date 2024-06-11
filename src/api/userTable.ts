import { http } from "@/utils/http";

export type UserData = {
  id: number;
  /** 用户名 */
  username: string;
  /** 邮箱 */
  email: string;
  /** 登录 IP */
  ip: string;
  /** 登录时间 */
  loginTime: Date;
};

type ResultTable = {
  success: boolean;
  data?: {
    /** 列表数据 */
    list: Array<any>;
    /** 总条目数 */
    total?: number;
    /** 每页显示条目个数 */
    pageSize?: number;
    /** 当前页数 */
    currentPage?: number;
  };
};

export const getUserDataList = (params?: object) => {
  return http.request<ResultTable>("get", "/user/list", { params });
};
