import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
    optimizeDeps: { exclude: ["fsevents"] },
    plugins: [imagetools()],
});
