import lume from "lume/mod.ts";
import transformImages from "lume/plugins/transform_images.ts";

const site = lume({
    src: "./src",
    location: new URL("https://peterjunpark.com"),
    // Don't empty _site/ before the build.
    emptyDest: false,
    server: { port: 6969 },
}, {
    markdown: {
        rules: {
            link_open: function (tokens, idx, options, env, self) {
                // Get the token for the <a> tag
                const token = tokens[idx];
                // Add the contenteditable="false" attribute
                token.attrSet("contenteditable", "false");
                return self.renderToken(tokens, idx, options);
            },
        },
    },
});

site.use(transformImages())
    .add("styles")
    .add("scripts")
    .add("public/cursors", "cursors")
    .add("public/fonts", "fonts");

export default site;
