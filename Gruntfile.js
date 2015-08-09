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
        tasks: ['coffee', 'uglify']
      },
      css: {
        files: ['assets/**/*.scss'],
        tasks: ['sass', 'cssmin']
      },
    },
    uglify: {
      my_target: {
        files: {
          'assets/javascripts/app.min.js': ['assets/javascripts/mustache.js', 'assets/javascripts/tasks.js']
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'assets/stylesheets/app.min.css': ['assets/stylesheets/bootstrap-yeti.css', 'assets/stylesheets/tasks.css']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['coffee', 'sass', 'uglify', 'cssmin', 'watch'])
};