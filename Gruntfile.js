module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			dist: {
				options: {
					transform: [
						["babelify", {
							loose: "all"
						}]
					]
				},
				files: {
					"./dist/app.js": ["./modules/*.js", "./modules/**/*.js"]
				}
			}
		},
		handlebars: {
			all: {
				namespace: 'Learnings.Templates',
				files: {
					'./dist/tmp.js': ['./modules/**/*.hbs']
				}
			}
		},
		watch: {
			scripts: {
				files: ["./modules/*.js", "./modules/**/*.js", "./modules/**/*.hbs"],
				tasks: ["handlebars", "browserify"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-contrib-handlebars');

	grunt.registerTask("default", ["watch"]);
	grunt.registerTask("build", ["browserify"]);
};