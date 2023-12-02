import type { JestConfigWithTsJest } from "ts-jest";

// Add your ESM modules here
const esModules = [""].join("|");

const config: JestConfigWithTsJest = {
	verbose: true,
	testRegex: "(__test__\\/.*|(\\.|/)(test|spec))\\.c?ts$",
	preset: "ts-jest/presets/default-esm",
	extensionsToTreatAsEsm: [".ts", ".mts", ".cts"],
	moduleFileExtensions: ["js", "ts", "cts"],
	transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
	coverageDirectory: ".coverage",
	collectCoverage: true,
	coverageReporters: ["text", "json"],
	coverageProvider: "v8",
	rootDir: ".",
	transform: {
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				useESM: true,
				tsconfig: "node_modules/@configs/tsconfig/test.json"
			}
		]
	},
	setupFilesAfterEnv: ["<rootDir>/jest.globals.ts"],
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1"
	}
};

export default config;
