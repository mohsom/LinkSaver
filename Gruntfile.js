/**
 * Created by mohsom on 17.11.2014.
 */
module.exports=function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        jshint:{
            options:{
                curly:true,
                eqeqeq:true,
                immned:true,
                latedef:true,
                rewcap:true,
                
            }
        }
    });
};