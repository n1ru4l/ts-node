"use strict";(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[827],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return N}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),d=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),N=s,k=m["".concat(i,".").concat(N)]||m[N]||c[N]||o;return t?n.createElement(k,r(r({ref:a},p),{},{components:t})):n.createElement(k,r({ref:a},p))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2175:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return i},default:function(){return N},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=t(7462),s=t(3366),o=(t(7294),t(3905)),r=["components"],l={title:"Usage"},i=void 0,d={unversionedId:"usage",id:"usage",title:"Usage",description:"Command Line",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/ts-node/docs/usage",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/usage.md",tags:[],version:"current",frontMatter:{title:"Usage"},sidebar:"primarySidebar",previous:{title:"Installation",permalink:"/ts-node/docs/installation"},next:{title:"Configuration",permalink:"/ts-node/docs/configuration"}},p={},c=[{value:"Command Line",id:"command-line",level:2},{value:"Shebang",id:"shebang",level:2},{value:"node flags and other tools",id:"node-flags-and-other-tools",level:2},{value:"Programmatic",id:"programmatic",level:2}],m={toc:c};function N(e){var a=e.components,t=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"command-line"},"Command Line"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"# Execute a script as `node` + `tsc`.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"ts-node script.ts")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"# Starts a TypeScript REPL.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"ts-node")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"# Execute code with TypeScript.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"ts-node -e "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},"'console.log(\"Hello, world!\")'")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"# Execute, and print, code with TypeScript.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"ts-node -p -e "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},"'\"Hello, world!\"'")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"# Pipe scripts to execute with TypeScript.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"echo"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},"'console.log(\"Hello, world!\")'"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"|"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," ts-node")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"# Equivalent to ts-node --transpileOnly")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"ts-node-transpile-only script.ts")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"# Equivalent to ts-node --cwdMode")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"ts-node-cwd script.ts")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"# Equivalent to ts-node --esm")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"ts-node-esm script.ts"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"# Execute a script as `node` + `tsc`.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"ts-node script.ts")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"# Starts a TypeScript REPL.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"ts-node")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"# Execute code with TypeScript.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"ts-node -e "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},'console.log("Hello, world!")'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"# Execute, and print, code with TypeScript.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"ts-node -p -e "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},'"Hello, world!"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"# Pipe scripts to execute with TypeScript.")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"echo"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},'console.log("Hello, world!")'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"|"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ts-node")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"# Equivalent to ts-node --transpileOnly")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"ts-node-transpile-only script.ts")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"# Equivalent to ts-node --cwdMode")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"ts-node-cwd script.ts")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"# Equivalent to ts-node --esm")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"ts-node-esm script.ts")))))),(0,o.kt)("h2",{id:"shebang"},"Shebang"),(0,o.kt)("p",null,"To write scripts with maximum portability, ",(0,o.kt)("a",{parentName:"p",href:"./configuration#via-tsconfigjson-recommended"},"specify options in your ",(0,o.kt)("inlineCode",{parentName:"a"},"tsconfig.json"))," and omit them from the shebang."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"#!/usr/bin/env ts-node")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// ts-node options are read from tsconfig.json")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"var console: Console"},"console"),"."),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(method) Console.log(...data: any[]): void"},"log")),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"Hello, world!"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},")"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"#!/usr/bin/env ts-node")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// ts-node options are read from tsconfig.json")),(0,o.kt)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"var console: Console"},"console")),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(method) Console.log(...data: any[]): void"},"log")),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"Hello, world!"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")")))))),(0,o.kt)("p",null,"Including options within the shebang requires the ",(0,o.kt)("a",{parentName:"p",href:"https://manpages.debian.org/bullseye/coreutils/env.1.en.html#S"},(0,o.kt)("inlineCode",{parentName:"a"},"env -S")," flag"),", which is available on recent versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"env"),". (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node/pull/1448#issuecomment-913895766"},"compatibility"),")"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"#!/usr/bin/env -S ts-node --files")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// This shebang works on Mac and Linux with newer versions of env")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// Technically, Mac allows omitting `-S`, but Linux requires it"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"#!/usr/bin/env -S ts-node --files")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// This shebang works on Mac and Linux with newer versions of env")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// Technically, Mac allows omitting `-S`, but Linux requires it")))))),(0,o.kt)("p",null,"To test your version of ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," for compatibility with ",(0,o.kt)("inlineCode",{parentName:"p"},"-S"),":"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"# Note that these unusual quotes are necessary")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"/usr/bin/env --debug "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},"'-S echo foo bar'"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"# Note that these unusual quotes are necessary")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"/usr/bin/env --debug "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"-S echo foo bar"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'")))))),(0,o.kt)("h2",{id:"node-flags-and-other-tools"},"node flags and other tools"),(0,o.kt)("p",null,"You can register ts-node without using our CLI: ",(0,o.kt)("inlineCode",{parentName:"p"},"node -r ts-node/register")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"node --loader ts-node/esm")),(0,o.kt)("p",null,"In many cases, setting ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#cli_node_options_options"},(0,o.kt)("inlineCode",{parentName:"a"},"NODE_OPTIONS"))," will enable ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node")," within other node tools, child processes, and worker threads.  This can be combined with other node flags."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"NODE_OPTIONS="),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"-r ts-node/register --no-warnings"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," node ./index.ts"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"NODE_OPTIONS="),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"-r ts-node/register --no-warnings"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," node ./index.ts")))))),(0,o.kt)("p",null,"Or, if you require native ESM support:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"NODE_OPTIONS="),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"--loader ts-node/esm"'))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"NODE_OPTIONS="),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"--loader ts-node/esm"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')))))),(0,o.kt)("p",null,"This tells any node processes which receive this environment variable to install ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node"),"'s hooks before executing other code."),(0,o.kt)("p",null,"If you are invoking node directly, you can avoid the environment variable and pass those flags to node."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"node --loader ts-node/esm --inspect ./index.ts"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"node --loader ts-node/esm --inspect ./index.ts")))))),(0,o.kt)("h2",{id:"programmatic"},"Programmatic"),(0,o.kt)("p",null,"You can require ts-node and register the loader for future requires by using ",(0,o.kt)("inlineCode",{parentName:"p"},"require('ts-node').register({ /* options */ })"),"."),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("a",{parentName:"p",href:"/ts-node/docs/api"},"API")," for more features."))}N.isMDXComponent=!0}}]);