import lume from "lume/mod.ts";

const site = lume({
    server: {
        port: 6969,
    },
});

site.add("public/styles.css", "styles.css");
site.copy("public/fonts", "fonts");

export default site;
