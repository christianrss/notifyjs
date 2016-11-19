module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
		  options: {
		    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
		  },
		  dist: {
		    files: {
		      'dist/notify.min.js': ["src/notify.js", "src/*.js"]
		    }
		  }
		},
		compress: {
			dist: {
				options: {
					mode: "zip",
					level: 1,
					archive: "dist/<%= pkg.name %>-<%= pkg.version %>.zip",
					pretty: true
				},
				src: [
					"examples/**/*.*",
					"dist/**/*.js",
					"Gruntfile.js",
					"package.json",
					"README.md",
					"CHANGES.md",
					"src/**/*.*"
				]
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compress');

	grunt.registerTask('default', []);
	grunt.registerTask('release', ['uglify', 'compress']);

};
