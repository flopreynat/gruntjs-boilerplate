module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
      all: 'js/*.js'
    },

    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          'build/js/myscript.js': ['js/libs/jquery.js','js/libs/*.js','js/*.js']
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/css/global.min.css': 'scss/global.scss'
        }
      }
    },

    autoprefixer: {
      dist: {
        files: {
          'build/css/global.min.auto.css': 'build/css/global.min.css'
        }
      }
    },

    imagemin: {
      dist: {
        options: {
          cache: false
        },
        files: [{
          expand: true,
          cwd: 'images',
          src: ['*.{png,jpg,gif}'],
          dest: 'build/images/'
        }]
      }
    },

    includes: {
      files: {
        src: ['pages/*.html'],
        dest: 'build',
        flatten: true,
        cwd: '.',
        options: {
          silent: true,
        }
      }
    },

    copy: {
      main: {
        src: 'fonts/*.{eot,svg,ttf,woff}',
        dest: 'build/',
      },
    },

    watch: {
      js: {
        files: 'js/*.js',
        tasks: ['jshint','uglify'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass','autoprefixer'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      files: '**/*.html',
      tasks: ['includes'],
      options: {
        spawn: false,
        livereload: true
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['jshint','uglify','sass','autoprefixer','imagemin','includes','copy']);

};