/*
 * grunt-interactive-shell
 * https://github.com/devex-web-frontend/grunt-interactive-shell
 *
 * Copyright (c) 2014 devex-web-frontend
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('default', 'test');

};
