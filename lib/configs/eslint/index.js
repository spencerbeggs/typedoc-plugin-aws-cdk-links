import babelParser from "@babel/eslint-parser";
import jsPlugin from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import tsdocPlugin from "eslint-plugin-tsdoc";
import turboPlugin from "eslint-plugin-turbo";
import globals from "globals";

const config = [
	{
		files: ["**/*.{js,jsx,cjs,mjs}"],
		ignores: ["**/dist/**"],
		plugins: {
			import: importPlugin,
			turbo: turboPlugin,
			prettier: prettierPlugin
		},
		languageOptions: {
			sourceType: "module",
			parser: babelParser,
			parserOptions: {
				requireConfigFile: false,
				babelOptions: {
					babelrc: false,
					configFile: false,
					// your babel options
					presets: ["@babel/preset-env"]
				}
			},
			globals: {
				...globals.node
			}
		},
		settings: {
			"import/resolver": {
				typescript: {}
			},
			"import/parsers": {
				"@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"]
			}
		},
		rules: {
			...jsPlugin.configs.recommended.rules,
			...turboPlugin.configs.recommended.rules,
			...importPlugin.configs.recommended.rules,
			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
					"newlines-between": "never",
					alphabetize: {
						order: "asc",
						caseInsensitive: true
					}
				}
			],
			"import/no-mutable-exports": "error",
			"import/no-namespace": "error",
			"import/newline-after-import": ["error", { count: 1 }],
			// "import/resolver": [
			// 	"error",
			// 	{
			// 		node: {
			// 			extensions: [".js", ".jsx", ".ts", ".tsx"]
			// 		}
			// 	}
			// ],
			"import/extensions": [
				"error",
				"ignorePackages",
				{
					js: "never",
					jsx: "never",
					ts: "never",
					tsx: "never"
				}
			]
		}
	},
	{
		files: ["**/*.{ts,tsx}"],
		ignores: ["**/dist/**"],
		plugins: {
			import: importPlugin,
			turbo: turboPlugin,
			"@typescript-eslint": typescriptPlugin,
			prettier: prettierPlugin,
			tsdoc: tsdocPlugin
		},
		languageOptions: {
			sourceType: "module",
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: "module"
			},
			globals: {
				...globals.node
			}
		},
		settings: {
			"import/resolver": {
				typescript: {
					project: "./tsconfig.json"
				}
			}
		},
		rules: {
			...turboPlugin.configs.recommended.rules,
			...typescriptPlugin.configs["eslint-recommended"].rules,
			...typescriptPlugin.configs.recommended.rules,
			...importPlugin.configs.recommended.rules,
			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
					"newlines-between": "never",
					alphabetize: {
						order: "asc",
						caseInsensitive: true
					}
				}
			],
			"import/no-mutable-exports": "error",
			"import/no-namespace": "error",
			"import/newline-after-import": ["error", { count: 1 }],
			// "import/resolver": [
			// 	"error",
			// 	{
			// 		node: {
			// 			extensions: [".js", ".jsx", ".ts", ".tsx"]
			// 		}
			// 	}
			// ],
			"import/extensions": [
				"error",
				"ignorePackages",
				{
					js: "never",
					jsx: "never",
					ts: "never",
					tsx: "never"
				}
			]
		}
	}
];

export default config;
