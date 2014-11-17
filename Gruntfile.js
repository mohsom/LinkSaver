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
            },
            "<%=pkg.name%>": {
                src: ["js/models/*.js", "js/collection/*.js", "js/views/*.js"]
            }
        },
        concat: {
            dist: {
                src: ["js/lib/jquery/jquery-2.1.1.min.js", "js/lib/underscore/underscore.js", "js/lib/backboneJS/backbone.js", "js/lib/backboneJS/backbone.LocalStorage.js", "js/models/link.js", "js/collection/links.js", "js/views/linkView.js", "js/views/app.js", "js/main.js"],
                dest: "release/js/main.js"
            }
        },
        uglify: {
            build: {
                src: "release/js/main.js",
                dest: "release/js/main.min.js"
            }
        },
        cssmin: {
            with_banner: {
                files: {
                    "release/css/style.min.css": ["css/style.css"]
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.registerTask("default", ["concat", "uglify", "cssmin", "jshint"]);
};