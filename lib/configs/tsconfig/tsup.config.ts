import { cp } from "node:fs/promises";
import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["index.ts"],
	format: "esm",
	outDir: "dist",
	publicDir: "public",
	shims: true,
	splitting: false,
	sourcemap: true,
	clean: true,
	async onSuccess() {
		const { files } = await import("./package.json");
		for await (const file of files) {
			await cp(`./${file}`, `dist/${file}`);
		}
	}
});
