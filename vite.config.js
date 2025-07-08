import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "./",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        product: "product.html",
        about: "about.html",
        blog: "blog.html",
      },
    },
  },
});
