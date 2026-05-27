import { defineConfig } from "tsup";

export default defineConfig({
  entry: { index: "src/app.ts" },
  outDir: "dist",
  format: ["esm"],
  target: "node20",
  platform: "node",
  bundle: true,
  splitting: false,
  sourcemap: false,
  clean: true,
  external: ["express", "cors"],
});
