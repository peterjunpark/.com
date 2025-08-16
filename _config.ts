import lume from "lume/mod.ts";
import transformImages from "lume/plugins/transform_images.ts";

const site = lume({
    src: "./src",
    location: new URL("https://peterjunpark.com"),
    // Don't empty _site/ before the build.
    emptyDest: false,
    server: { port: 6969 },
});

site.use(transformImages())
    .add("styles")
    .add("public/cursors", "cursors")
    .add("public/fonts", "fonts");

export default site;
