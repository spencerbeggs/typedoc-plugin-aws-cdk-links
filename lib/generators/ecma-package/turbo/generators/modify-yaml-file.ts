import { readFile, writeFile } from "node:fs/promises";
import { PlopTypes } from "@turbo/gen";
import { load, dump } from "js-yaml";

interface PNPMWorkspaceYAML {
	packages: string[];
}

export interface AddPNPMWorkspacePackageAction extends PlopTypes.ActionConfig {
	type: "add-pnpm-workspace-package"; // Point to this action
	/** Overrides, create non existing */
	force: boolean;
	path: string; // File to modify
}

export async function modifyYAMLFile(yamlPath: string, packagePath: string) {
	try {
		// Read the YAML file
		const fileContents = await readFile(yamlPath, "utf8");

		// Parse the YAML content
		const data = load(fileContents) as PNPMWorkspaceYAML;

		// Modify the data
		const pkgs = new Set(data.packages);
		pkgs.add(packagePath);
		data.packages = Array.from(pkgs);

		// Convert the modified object back to YAML
		const newYaml = dump(data);

		// Write the modified YAML back to the file
		await writeFile(yamlPath, newYaml, "utf8");

		return `Package '${packagePath}' added to pnpm-workspace.yaml`;
	} catch (e) {
		console.error(e);
		return "Error modifying pnpm-workspace.yaml";
	}
}
