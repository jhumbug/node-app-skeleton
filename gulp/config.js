var dest = "./public";
var app = './ui';
var node_modules = './node_modules';

var ftpConfig = require('./.ftppass');

module.exports = {
    nodemon: {
        options: {
            "verbose": true,
            script: './bin/www',
            ignore: [".git", 'public', 'ui', 'node_modules', 'gulp']
        }
    },
    less: {
        src: app + "/styles/app.less",
        watchSrc: app + "/styles/*.less",
        dest: dest + "/css/",
        settings: {
            paths: [
                app + '/styles/',
                node_modules + '/'
            ]
        }
    },
    images: {
        src: app + "/images/**",
        dest: dest + "/images"
    },
    vendor: {
        src: [
            node_modules + '/modernizr/dist/modernizr-build.js'
        ],
        dest: dest + '/js/vendor'
    },
    fonts: {
        src: [
            app + "/fonts/**",
            node_modules + '/font-awesome/fonts/**'
        ],
        dest: dest + "/fonts"
    },
    browserify: {
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: app + '/scripts/app.js',
            dest: dest,
            outputName: 'js/app.js',
            // Additional file extentions to make optional
            extensions: ['.ejs'],
            // list of modules to make require-able externally
            require: ['jquery', 'lodash', 'keymaster']
        }]
    },
    production: {
        cssSrc: dest + '/css/*.css',
        jsSrc: dest + '/js/*.js',
        cssDest: dest + '/css/',
        jsDest: dest + '/js/'
    },
    deploy: {
        src: dest + '/**',
        dev: {
            host: ftpConfig.adultswimdev.host,
            user: ftpConfig.adultswimdev.username,
            pass: ftpConfig.adultswimdev.password,
            remotePath: '/dev/site'
        },
        staging: {
            host: ftpConfig.adultswimstaging.host,
            user: ftpConfig.adultswimstaging.username,
            key: ftpConfig.adultswimstaging.keyLocation,
            remotePath: '/dev/site'
        },
        production: {
            host: ftpConfig.adultswimproduction.host,
            user: ftpConfig.adultswimproduction.username,
            key: ftpConfig.adultswimproduction.keyLocation,
            remotePath: '/dev/site'
        }
    }
};
