const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/insculpt/Documents/ReactApps/Mehlu_li/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/insculpt/Documents/ReactApps/Mehlu_li/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/insculpt/Documents/ReactApps/Mehlu_li/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/insculpt/Documents/ReactApps/Mehlu_li/src/pages/index.js"))),
  "component---src-pages-qrmenu-js": hot(preferDefault(require("/home/insculpt/Documents/ReactApps/Mehlu_li/src/pages/qrmenu.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/home/insculpt/Documents/ReactApps/Mehlu_li/src/pages/services.js")))
}

