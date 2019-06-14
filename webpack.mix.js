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
    proxy: process.env.MIX_DEV_URL
});

mix.styles([
    'resources/assets/app/css/animate.css',
    'resources/assets/app/css/bootstrap.min.css',
    'resources/assets/app/css/dropify.min.css',
    'resources/assets/app/css/flag-icons.min.css',
    'resources/assets/app/css/font-awesome.min.css',
    'resources/assets/app/css/jquery.toast.css',
    'resources/assets/app/css/linea.css',
    'resources/assets/app/css/material.css',
    'resources/assets/app/css/materialdesignicons.min.css',
    'resources/assets/app/css/simple-line-icons.css',
    'resources/assets/app/css/spinners.css',
    'resources/assets/app/css/style.css',
    'resources/assets/app/css/sweetalert.css',
    'resources/assets/app/css/themify-icons.css',
    'resources/assets/app/css/weather-icons.min.css',
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