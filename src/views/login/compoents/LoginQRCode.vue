<script setup lang="ts">
import Motion from "../utils/motion";
import ReQrcode from "@/components/ReQrcode";
import { ref } from "vue";

// const api = "https://47.94.10.223:12301/auth/qrcode/uuid";
const qrCodeData = ref("admin");

// const refreshQRCode = () => {
//   fetch(api)
//     .then(res => res.json())
//     .then(data => {
//       qrCodeData.value = data.uuid;
//       console.log(data.uuid);
//     });
// };

// onMounted(() => {
//   refreshQRCode(); // 初始加载二维码数据

//   setInterval(() => {
//     refreshQRCode(); // 每20秒刷新二维码数据
//   }, 20000);
// });

// const checkAPI = "https://47.94.10.223:12301/auth/qrcode/status";
// // 每三秒检查一次，如果返回结果是 data.message == "success" 则登录成功
// setInterval(() => {
//   fetch(checkAPI)
//     .then(res => res.json())
//     .then(data => {
//       if (data.message === "success") {
//         useUserStoreHook().loginByUsername({
//           username: "admin",
//           password: "admin123"
//         });
//       }
//     });
// }, 3000);
</script>

<template>
  <Motion class="-mt-2 -mb-2">
    <ReQrcode :text="qrCodeData" />
  </Motion>
</template>
