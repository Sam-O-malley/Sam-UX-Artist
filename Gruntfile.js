
    
module.exports = function(grunt) {
  // Do grunt-related things in here

  grunt.initConfig({
      sass: {
          dist: {
              options:{
                  sourcemap: 'none',
                  style:'expanded',
                  noCache:true

                  },
                  files: {
                  'css/style.css':'sass/main.scss'
              }
          }
      },
      
      cssmin:{
          target:{
              files: [{
                  expand: true,
                  cwd: 'css/',
                  src: ['*.css', '!*.min.css'],
                  dest: 'css/',
                  ext: '.min.css'
              }]
          }
      },
      watch: {
          css: {
              files: ['css/style.css'],
              tasks: ['cssmin']
          },
          
          sass:{
              files: ['sass/style.scss'],
              tasks: ['sass']
          }
      }
  });
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


      grunt.registerTask('compile',['sass']);
      grunt.registerTask('min',['cssmin']);
      grunt.registerTask('default',['sass','cssmin']);
      grunt.registerTask('w','watch');

      //if activated you can't install any new packages
      //unless you control c


};

