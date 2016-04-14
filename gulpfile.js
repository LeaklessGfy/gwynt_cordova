// ####################### CONFIGURATION #######################
var themeR = 'app/www/';
var path = {
    css: themeR + "css/",
    js: themeR + "js/",
    img: themeR + "img/"
};


// ####################### REQUIRES #######################
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify');


// ####################### TASKS #######################
gulp.task('styles', function () {
    return gulp.src(path.css + 'src/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.css))
        //.pipe(notify({ message: 'Styles task complete', onLast: true }));
});

gulp.task('vendorsJS', function () {
    return gulp.src(path.js + 'lib/**/*.js')
        .pipe(concat('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.js))
        //.pipe(notify({ message: 'Vendor scripts task complete', onLast: true }));
});

gulp.task('serviceJs', function () {
    return gulp.src(path.js + 'service/**/*.js')
        .pipe(concat('service.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.js))
    //.pipe(notify({ message: 'Custom scripts task complete', onLast: true }));
});

gulp.task('apiJs', function () {
    return gulp.src(path.js + 'api/**/*.js')
        .pipe(concat('api.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.js))
    //.pipe(notify({ message: 'Custom scripts task complete', onLast: true }));
});

gulp.task('scriptsJs', function () {
    return gulp.src(path.js + 'src/**/*.js')
        .pipe(concat('master.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.js))
        //.pipe(notify({ message: 'Custom scripts task complete', onLast: true }));
});

gulp.task('img', function () {
    return gulp.src(path.img+'src/**/*.{png,jpg,jpeg,gif,svg}')
        .pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
        .pipe(gulp.dest(path.img))
        //.pipe( notify( { message: 'Images task complete', onLast: true } ) );
});

gulp.task('watch', function () {
    gulp.watch(path.css + '**/*.scss', ['styles']);
    gulp.watch(path.js + '**/*.js', ['scriptsJs']);
});

gulp.task('default', ['styles','vendorsJS','serviceJs','apiJs','scriptsJs','img']);


