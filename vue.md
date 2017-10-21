---
title: Vue.js
---

```
npm config set proxy "http://IP:PORT"
npm config set https-proxy "http://IP:PORT"

npm install -g vue-cli
npm install -g webpack-dev-server

# install Python???
npm install --global --production windows-build-tools

vue init webpack my-project
cd my-project
npm run dev
```

```
npm install jquery --save-dev
npm install jquery-ui --save-dev

# build/webpack.base.conf.js View file @ 131f931
 'use strict'
 const path = require('path')
 const utils = require('./utils')
+const webpack = require('webpack')
 const config = require('../config')
 const vueLoaderConfig = require('./vue-loader.conf')

@@ -78,5 +79,13 @@ module.exports = {
     net: 'empty',
     tls: 'empty',
     child_process: 'empty'
-  }
+  },
+  plugins: [
+    new webpack.ProvidePlugin({
+      $: 'jquery',
+      jquery: 'jquery',
+      jQuery: 'jquery',
+      'window.jQuery': 'jquery'
+    })
+  ]
 }
```

## Links
 * [How to include jQuery into Vue.js](https://maketips.net/tip/223/how-to-include-jquery-into-vuejs)
 * [jquery-ui and webpack, how to manage it into module?](https://stackoverflow.com/questions/33998262/jquery-ui-and-webpack-how-to-manage-it-into-module)
 * [Styling with Inline CSS Styles in Vue.js](https://codingexplained.com/coding/front-end/vue-js/styling-inline-css-styles)
 * [Using Bootstrap with Vue.js](http://vuetips.com/bootstrap)
 * [How to add ESLint to your Vue project](https://codeburst.io/tutorial-how-to-add-eslint-to-your-vue-js-project-ccfb84fab9)
 * [Install Node Canvas on Windows](https://github.com/Automattic/node-canvas/wiki/Installation---Windows#install-with-chocolatey)
 
## Fix slow 'npm install'
```
npm config set strict-ssl false 

https://npm.taobao.org/
```
