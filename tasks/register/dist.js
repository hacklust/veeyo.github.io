module.exports = function (grunt) {
  grunt.registerTask('dist', [
    'compile',
    'autoprefixer',
    'minify',
    'sails-linker:distJs',
    'sails-linker:distStyles',
    'htmlmin',
    'clean:dist',
    'copy:dist',
    'copy:ghpage'
  ]);
};