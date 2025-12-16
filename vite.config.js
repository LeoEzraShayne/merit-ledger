import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0", // 监听所有网络接口，允许局域网访问
    port: 5173,
    strictPort: false, // 如果端口被占用，自动尝试下一个端口
  },

  // 构建配置
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // CSS 文件保持原样
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "css/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
