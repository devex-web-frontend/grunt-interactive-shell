/*
 * grunt-interactive-shell
 * https://github.com/devex-web-frontend/grunt-interactive-shell
 *
 * Copyright (c) 2014 mankdev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	var spawn = require('child_process').spawn,
		spawnCfg = {
			env: process.env,
			cwd: process.cwd(),
			stdio: [process.stdin, process.stdout, process.stderr]
		},
		isWinShell = (process.platform === 'win32'),
		shell = isWinShell ? 'cmd' : 'sh',
		shellFlag = isWinShell ? '/c' : '-c';

	if (isWinShell) {
		spawnCfg.windowsVerbatimArguments = true;
	}

	grunt.registerMultiTask('shell', 'Running shell commands interactively', function() {
		var resolve = this.async(),
			command = this.data.command,
			subProcess = spawn(shell, [shellFlag, command], spawnCfg);

		grunt.log.writeln('>$ '.green + command.cyan);


		subProcess.on('close', function(code, signal) {
			if (code) {
				grunt.fail.fatal('Child process, spawned by ' + command.whiteBG + ' closed with code ' + code, code);
			}
			resolve();
		});
	});

};
