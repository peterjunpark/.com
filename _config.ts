import lume from "lume/mod.ts";

const site = lume();

site.add("public/styles.css", "styles.css");
site.copy("public/fonts", "fonts");

export default site;
