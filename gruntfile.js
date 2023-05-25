module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    watch: {
      less: {
        files: ["production/*.less"],
        tasks: ["less:production"],
      },
      uglify: {
        files: ["production/main.js"],
        tasks: ["uglify"],
      },
    },
    less: {
      production: {
        options: {
          compress: true,
        },
        files: {
          "./final/main.min.css": "./production/style.less",
        },
      },
    },
    uglify: {
      target: {
        files: {
          "final/main.min.js": "./production/main.js",
        },
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["watch"]);
};
