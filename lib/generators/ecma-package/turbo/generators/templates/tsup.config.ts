import { cp, writeFile } from "node:fs/promises";
import { defineConfig } from "tsup";
import { PackageJson } from "type-fest";

export default defineConfig((options) => {
	return {
		entry: ["./src/index.ts"],
		format: ["esm", "cjs"],
		target: "node16",
		platform: "node",
		dts: true,
		outDir: "dist",
		publicDir: "public",
		tsconfig: "./tsconfig.json",
		shims: true,
		config: false,
		splitting: true,
		minify: !options.watch,
		// esbuildOptions(opts) {
		// 	opts.target = "node16";
		// 	opts.platform = "node";
		// 	opts.logLevel = "verbose";
		// 	opts.keepNames = true;
		// },
		sourcemap: true,
		clean: true,
		async onSuccess() {
			const json = await import("./package.json");
			const pkg = json.default as PackageJson;
			if (pkg.files) {
				for await (const file of pkg.files) {
					await cp(`./${file}`, `dist/${file}`);
				}
			}
			pkg.main = "index.js";
			pkg.types = "index.d.ts";
			pkg.exports = {
				".": {
					import: "./index.js",
					require: "./index.cjs",
					default: "./index.js",
					types: "./index.d.ts"
				}
			};
			delete pkg.devDependencies;
			delete pkg.scripts;
			await writeFile("dist/package.json", JSON.stringify(pkg, null, 2), {
				encoding: "utf-8"
			});
			await cp("./README.md", "./dist/README.md");
		}
	};
});
