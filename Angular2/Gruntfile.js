module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            clean: ['appCompiled/*']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean']);

};