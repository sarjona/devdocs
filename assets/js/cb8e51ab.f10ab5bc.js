"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1237],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5640:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"NodeJS"},s=void 0,d={unversionedId:"tools/nodejs",id:"tools/nodejs",title:"NodeJS",description:"Moodle development tools require the installation and use of NodeJS, which is a JavaScript runtime environment available for most operating systems.",source:"@site/docs/tools/nodejs.md",sourceDirName:"tools",slug:"/tools/nodejs",permalink:"/dinodevdocs/docs/tools/nodejs",editUrl:"https://github.com/andrewnicols/dinodevdocs/edit/main/docs/tools/nodejs.md",tags:[],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1649690875,formattedLastUpdatedAt:"11/04/2022",frontMatter:{title:"NodeJS"},sidebar:"docs",previous:{title:"Moodle Development Kit",permalink:"/dinodevdocs/docs/tools/mdk"},next:{title:"PHP CodeSniffer",permalink:"/dinodevdocs/docs/tools/phpcs"}},u={},c=[{value:"Node Version Manager",id:"node-version-manager",level:2},{value:"Grunt",id:"grunt",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Moodle development tools require the installation and use of ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS"),", which is a JavaScript runtime environment available for most operating systems."),(0,a.kt)("p",null,"Moodle requires version 16.14 of NodeJS, which is otherwise known as ",(0,a.kt)("inlineCode",{parentName:"p"},"lts/gallium"),"."),(0,a.kt)("p",null,"Use of ",(0,a.kt)("a",{parentName:"p",href:"#node-version-manager"},"NVM")," for installation of NodeJS is highly recommended over direct installation."),(0,a.kt)("h2",{id:"node-version-manager"},"Node Version Manager"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"NVM")," is the Node Version Manager. Its purpose is to simplify the installation, and use different versions of NodeJS."),(0,a.kt)("p",null,"Moodle includes a ",(0,a.kt)("inlineCode",{parentName:"p"},".nvmrc")," which ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm")," can use to select the correct version of NodeJS."),(0,a.kt)("p",null,"To use the correct version of NodeJS for the current version of Moodle, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm install")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm use")," commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ nvm install\nFound '/Users/nicols/Sites/public_html/sm/.nvmrc' with version <lts/gallium>\nv16.14.0 is already installed.\nNow using node v16.14.0 (npm v8.3.1)\n")),(0,a.kt)("h2",{id:"grunt"},"Grunt"),(0,a.kt)("p",null,"As part of it's build stack, Moodle uses the ",(0,a.kt)("a",{parentName:"p",href:"https://gruntjs.com"},"Grunt")," task runner."),(0,a.kt)("p",null,"Grunt is composed of a set of tasks, defined within the Moodle code repository in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Gruntfile.js")," file, and a grunt CLI tool which must also be installed."),(0,a.kt)("p",null,"To install the grunt CLI tool you can install it globally using npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g grunt-cli\n$ grunt stylelint\n")),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," command to install it on demand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx grunt stylelint\n")))}m.isMDXComponent=!0}}]);