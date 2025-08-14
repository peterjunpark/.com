import lume from "lume/mod.ts";
import transformImages from "lume/plugins/transform_images.ts";

const site = lume({
    // Don't empty _site/ before the build.
    emptyDest: false,
    server: {
        port: 6969,
    },
});

site.use(transformImages());

site.add("public/styles.css", "styles.css");
site.add("public/cursors", "cursors");
site.add("public/fonts", "fonts");

export default site;
