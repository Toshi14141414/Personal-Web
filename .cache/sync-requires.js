const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-layout-post-layout-js": hot(preferDefault(require("/Users/Toshi/Documents/HanyuXuWeb/src/layout/PostLayout.js"))),
  "component---src-layout-project-layout-js": hot(preferDefault(require("/Users/Toshi/Documents/HanyuXuWeb/src/layout/ProjectLayout.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Toshi/Documents/HanyuXuWeb/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Toshi/Documents/HanyuXuWeb/src/pages/404.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/Users/Toshi/Documents/HanyuXuWeb/src/pages/experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Toshi/Documents/HanyuXuWeb/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/Toshi/Documents/HanyuXuWeb/src/pages/projects.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/Toshi/Documents/HanyuXuWeb/src/pages/resume.js"))),
  "component---src-pages-things-js": hot(preferDefault(require("/Users/Toshi/Documents/HanyuXuWeb/src/pages/things.js")))
}

