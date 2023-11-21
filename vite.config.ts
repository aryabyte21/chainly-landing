import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "@svgr/rollup";

export default defineConfig({
  base: "/",
  plugins: [react(), svgrPlugin()],
  server: {
    open: true,
    port: 3000,
  },
});
