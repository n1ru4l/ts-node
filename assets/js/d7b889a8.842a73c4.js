"use strict";(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[320],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return N}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(a),N=r,k=m["".concat(p,".").concat(N)]||m[N]||d[N]||s;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1451:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),l=["components"],o={title:"npx and yarn dlx"},p=void 0,i={unversionedId:"recipes/npx-and-yarn-dlx",id:"recipes/npx-and-yarn-dlx",title:"npx and yarn dlx",description:"Using npx or yarn dlx is a great ways to publish reusable TypeScript tools to GitHub without precompiling or packaging.",source:"@site/docs/recipes/npx-and-yarn-dlx.md",sourceDirName:"recipes",slug:"/recipes/npx-and-yarn-dlx",permalink:"/ts-node/docs/recipes/npx-and-yarn-dlx",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/recipes/npx-and-yarn-dlx.md",tags:[],version:"current",frontMatter:{title:"npx and yarn dlx"}},c={},d=[],m={toc:d};function N(e){var t=e.components,a=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Using ",(0,s.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npx"},(0,s.kt)("inlineCode",{parentName:"a"},"npx"))," or ",(0,s.kt)("a",{parentName:"p",href:"https://yarnpkg.com/cli/dlx"},(0,s.kt)("inlineCode",{parentName:"a"},"yarn dlx"))," is a great ways to publish reusable TypeScript tools to GitHub without precompiling or packaging."),(0,s.kt)("p",null,"Check out our working example: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node-npx-example"},"TypeStrong/ts-node-npx-example")),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"npx typestrong/ts-node-npx-example --help")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"npx typestrong/ts-node-npx-example --first Arthur --last Dent"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npx typestrong/ts-node-npx-example --help")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npx typestrong/ts-node-npx-example --first Arthur --last Dent")))))),(0,s.kt)("p",null,"TODO publish demo and link to it\nTODO test demo:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"uninstall global ts-node"),(0,s.kt)("li",{parentName:"ul"},"try running demo"),(0,s.kt)("li",{parentName:"ul"},"does ts-node need to be installed globally?")),(0,s.kt)("p",null,"This boilerplate is a good starting point:"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light with-title",style:{backgroundColor:"#ffffff",color:"#24292e"},title:"package.json"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},"package.json"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"bin"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"./cli.ts"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"dependencies"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"ts-node"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"latest"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"@swc/core"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"latest"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"@swc/helpers"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"latest"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"@tsconfig/node16"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"latest"')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  }")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"}"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:"package.json"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},"package.json"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"bin"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./cli.ts"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"dependencies"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"ts-node"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"latest"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"@swc/core"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"latest"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"@swc/helpers"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"latest"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"@tsconfig/node16"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"latest"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light with-title",style:{backgroundColor:"#ffffff",color:"#24292e"},title:"tsconfig.json"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},"tsconfig.json"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"extends"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"@tsconfig/node16/tsconfig.json"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"ts-node"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"swc"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,s.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"true")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  }")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"}"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:"tsconfig.json"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},"tsconfig.json"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"extends"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@tsconfig/node16/tsconfig.json"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"ts-node"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"swc"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"true")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light with-title twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"},title:"cli.ts"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},"cli.ts"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"#!/usr/bin/env ts-node")),(0,s.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"var console: Console"},"console"),"."),(0,s.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(method) Console.log(...data: any[]): void"},"log")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"Hello world!"'),(0,s.kt)("span",{parentName:"div",style:{color:"#24292E"}},")"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord with-title twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:"cli.ts"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},"cli.ts"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"#!/usr/bin/env ts-node")),(0,s.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"var console: Console"},"console")),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,s.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"(method) Console.log(...data: any[]): void"},"log")),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"Hello world!"),(0,s.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,s.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")")))))),(0,s.kt)("p",null,"If you require native ESM support, use ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-node-esm")," in your shebang and follow the configuration instructions for ESM: ",(0,s.kt)("a",{parentName:"p",href:"/ts-node/docs/imports#native-ecmascript-modules"},"Native ECMAScript modules")),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light with-title twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"},title:"cli.ts"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},"cli.ts"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"#!/usr/bin/env ts-node-esm"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki nord with-title twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:"cli.ts"},(0,s.kt)("div",{parentName:"pre",className:"code-title"},"cli.ts"),(0,s.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#616E88"}},"#!/usr/bin/env ts-node-esm")))))))}N.isMDXComponent=!0}}]);