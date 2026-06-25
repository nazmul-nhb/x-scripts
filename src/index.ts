#!/usr/bin/env node

import minimist from 'minimist';
import { cpSync, existsSync } from 'node:fs';

const commands = ['name', 'destination', 'copy'];

const argv = minimist(process.argv.slice(2), {
	// unknown(arg) {
	// 	if (commands.includes(arg.replace('--', ''))) return false;
	// 	return false;
	// },
	'--': false,
	string: commands,
	boolean: ['force'],
	alias: {
		n: 'name',
		f: 'force',
		d: 'destination',
	},
	default: {
		force: false,
	},
});

// for (const cmd of argv._) {
// 	if (cmd === 'copy') console.info('Copying...');
// 	if (cmd === 'destination') console.info('Destination...');
// 	if (cmd === 'name') console.info('Name...');
// }

// console.info(process.argv.slice(2));
// console.info(argv);
// console.info(`Hello ${argv.name}`);

if (argv.copy) {
	if (existsSync(argv.copy)) {
		// const { name, ext, base } = parse(argv.copy);

		cpSync(argv.copy, argv.d ?? argv.copy, {
			recursive: true,
			force: argv.force,
		});

		console.info(`Successfully copied ${argv.copy}`);
	} else {
		console.error(`File ${argv.copy} not found`);
	}
}
