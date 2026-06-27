import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: ['src/index.ts'],
	globalName: 'XScripts',
	format: ['esm', 'cjs'],
	dts: true,
	minify: false,
	exports: true,
	unbundle: false,
	treeshake: true,
	outDir: 'dist',
	checks: {
		pluginTimings: false,
	},
	deps: {
		onlyBundle: ['toolbox-x', 'minimist'],
	},
});
