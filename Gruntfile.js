/**
 * Created by mohsom on 17.11.2014.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immned: true,
                latedef: true,
                rewcap: true,
                roarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    $: true,
                    console: true,
                    Backbone: true,
                    _: true
                }
            }
        },
        concat: {
            dist: {
                src: ["js/lib/jquery/jquery-2.1.1.min.js", "js/lib/underscore/underscore.js", "js/lib/backboneJS/backbone.js", "js/lib/backboneJS/backbone.LocalStorage.js", "js/lib/bootstrap.min.js", "js/models/link.js", "js/collection/links.js", "js/views/linkView.js", "js/views/app.js", "js/main.min.js"],
                dest: "js/main1.min.js"
            }
        },
        uglify: {
            build: {
                src: "js/main1.min.js",
                dest: "release/js/main1.min.js"
            }
        },
        cssmin: {
            with_banner: {
                files: {
                    "release/css/style.min.css": ["css/style.min.css"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["js/*.js", "js/collection/*.js", "js/model/*.js", "js/views/*js"],
                tasks: ["jshint", "removelogging", "concat", "removelogging", "uglify", "cssmin", "htmlmin"]
            },
            css: {
                files: "css/*.css",
                tasks: ["cssmin"]
            },
            html:{
                files: "index.html",
                tasks: ["htmlmin"]
            }
        },
        removelogging: {
            dist: {
                src: "release/js/main1.min.js",
                dest: "release/js/main1.min.js"
            }
        },
        htmlmin: {
            options: {
                removeComments: true
            },
            dev: {
                files: {
                    'release/index.html': 'index.html'
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-remove-logging");
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask("default", ["jshint", "removelogging", "concat", "removelogging", "uglify", "cssmin", "htmlmin", "watch"]);
    grunt.registerTask("build-app", ["jshint", "removelogging", "concat", "uglify", "cssmin", "htmlmin"])
};