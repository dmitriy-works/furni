function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
}