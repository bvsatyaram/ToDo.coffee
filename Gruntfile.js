module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'assets/javascripts/tasks.js': 'assets/javascripts/src/tasks.coffee'
        }
      },
    },
    sass: {
      dist: {
        files: {
          'assets/stylesheets/tasks.css': 'assets/stylesheets/src/tasks.scss'
        }
      }
    },
    watch: {
      js: {
        files: ['assets/**/*.coffee'],
        tasks: ['coffee', 'concat:js']
      },
      css: {
        files: ['assets/**/*.scss'],
        tasks: ['sass', 'concat:css']
      },
    },
    concat: {
      js: {
        src: ['assets/javascripts/mustache.js', 'assets/javascripts/tasks.js'],
        dest: 'assets/javascripts/app.js',
      },
      css: {
        src: ['assets/stylesheets/bootstrap-yeti.css', 'assets/stylesheets/tasks.css'],
        dest: 'assets/stylesheets/app.css',
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['coffee', 'sass', 'concat', 'watch'])
};