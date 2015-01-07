module.exports = function (grunt) {
  grunt.registerTask('compile', [
    'clean:dev',
    'sass:dev',
    'coffee:dev',
    'copy:dev'
  ]);
};