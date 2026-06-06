import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });

  const md = markdownIt({ html: true, typographer: true });
  md.use(markdownItAnchor, {
    level: [2, 3],
    // Plain-ASCII slugs: "What is Software Ergonomics?" -> "what-is-software-ergonomics"
    slugify: (s) =>
      s
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-"),
  });
  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
}
