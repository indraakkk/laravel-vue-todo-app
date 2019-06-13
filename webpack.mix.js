const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Browsersync Reloading
mix.browserSync({
    proxy:'http://laravel-vue-todo.local'
});

mix.styles([
    'resources/assets/app/css/font-awesome.css',
    'resources/assets/app/css/ionicons.css',
    'resources/assets/app/css/flag-icon.min.css',
    'resources/assets/app/css/slim.css',
    'resources/assets/app/css/custom.css',
    ], 
    'public/css/app.css');

mix.autoload({
    jquery: ['$', 'window.jQuery',"jQuery", "window.$", "jquery", "window.jquery"],
    'popper.js/dist/umd/popper.js': ['Popper']
}).js([
    'resources/assets/app/js/bootstrap.js',
    'resources/assets/app/js/jquery.cookie.js',
    'resources/assets/app/js/slim.js',
    'resources/client/app/app.js',
    ], 
    'public/js/app.js');