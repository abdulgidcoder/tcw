import { defineConfig } from "vite";
import fileIncludePlugin from "vite-file-include";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path"; 
// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  base: "./",
  root: "src",
  build: {
    outDir: "../dist",
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "assets/app.js",
        chunkFileNames: "assets/app.js",
        assetFileNames: "assets/app.[ext]",
      },
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        main2: path.resolve(__dirname, "src/index2.html"),
        about: path.resolve(__dirname, "src/about.html"),
        contact: path.resolve(__dirname, "src/contact.html"),
        company: path.resolve(__dirname, "src/company.html"),
        inquiries: path.resolve(__dirname, "src/inquiries.html"),
        privacy: path.resolve(__dirname, "src/privacy-policy.html"),
        project: path.resolve(__dirname, "src/single-project.html"),
        projects: path.resolve(__dirname, "src/projects.html"),
        terms: path.resolve(__dirname, "src/terms-conditions.html"),
        pricing: path.resolve(__dirname, "src/pricing.html"),
        updates: path.resolve(__dirname, "src/project-updates.html"),
        login: path.resolve(__dirname, "src/login.html"),
        register: path.resolve(__dirname, "src/register.html"),
        error: path.resolve(__dirname, "src/404.html"),
        sitemap: path.resolve(__dirname, "src/sitemap.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {   
    hmr: false,
  },
  plugins: [
    fileIncludePlugin({
      baseDir: "src", 
    }),
  ], 
});
