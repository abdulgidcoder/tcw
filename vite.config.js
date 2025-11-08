import { defineConfig } from "vite";
import fileIncludePlugin from "vite-file-include";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

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
        // ... all other entries
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {},
  css: {
    preprocessorOptions: {
      scss: {
        // This ensures all SCSS files get variables globally
        additionalData: `@use "@/assets/scss/variables.scss" as *;`
      },
    },
  },
  plugins: [
    fileIncludePlugin({
      baseDir: "./src",
      context: {
        title: 'معهد التميز الكندي - TCW'
      },
      customFunctions: {
        uppercase: (str) => str.toUpperCase(),
        currentYear: () => new Date().getFullYear(),
        loadSvg: function (svgFile, classes = "") {
          try {
            const cleanPath = svgFile.startsWith("/") ? svgFile.slice(1) : svgFile;
            const svgPath = path.join(__dirname, "src", "assets/images/icons", cleanPath);

            if (!fs.existsSync(svgPath)) {
              console.error(`SVG file not found at path: ${svgPath}`);
              return "";
            }

            const svgContent = fs
              .readFileSync(svgPath, "utf-8")
              .replace(/<\?xml.*?\?>/g, "")
              .replace(/<!--[\s\S]*?-->/g, "")
              .trim();

            return `<span class='app-icon ${classes}'>${svgContent}</span>`;
          } catch (error) {
            console.error(`Error loading SVG file ${svgFile}:`, error);
            return "";
          }
        },
      },
    }),
  ],
});
