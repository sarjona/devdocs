"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7459],{5673:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=n(8066),s=n(8215),r=n(9877),d=["components"],c={title:"JavaScript"},m=void 0,p={unversionedId:"guides/javascript/index",id:"version-4.0/guides/javascript/index",title:"JavaScript",description:"Moodle makes heavy use of JavaScript to improve the experience for its users.",source:"@site/versioned_docs/version-4.0/guides/javascript/index.md",sourceDirName:"guides/javascript",slug:"/guides/javascript/",permalink:"/devdocs/docs/4.0/guides/javascript/",editUrl:"https://github.com/moodle/devdocs/edit/main/versioned_docs/version-4.0/guides/javascript/index.md",tags:[],version:"4.0",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1652851319,formattedLastUpdatedAt:"18/05/2022",frontMatter:{title:"JavaScript"},sidebar:"docs",previous:{title:"Setup and installation",permalink:"/devdocs/docs/4.0/gettingstarted/setup"},next:{title:"Naming conventions",permalink:"/devdocs/docs/4.0/policy/naming"}},u={},h=[{value:"Useful References",id:"useful-references",level:2},{value:"Modules",id:"modules",level:2},{value:"Writing your first module",id:"writing-your-first-module",level:2},{value:"Listen to a DOM Event",id:"listen-to-a-dom-event",level:3},{value:"Including JavaScript from your pages",id:"including-javascript-from-your-pages",level:2},{value:"Including from a template",id:"including-from-a-template",level:3},{value:"Including from PHP",id:"including-from-php",level:3},{value:"Passing data to your Module",id:"passing-data-to-your-module",level:2},{value:"Using data attributes",id:"using-data-attributes",level:3},{value:"Promises",id:"promises",level:2},{value:"Examples",id:"examples",level:3},{value:"Working with Strings",id:"working-with-strings",level:2},{value:"Templates",id:"templates",level:2},{value:"Modals",id:"modals",level:2},{value:"Notifications",id:"notifications",level:2},{value:"AJAX Calls",id:"ajax-calls",level:2},{value:"Preferences",id:"preferences",level:2},{value:"Prefetch",id:"prefetch",level:2},{value:"Tools",id:"tools",level:2},{value:"Grunt",id:"grunt",level:3},{value:"Installing grunt",id:"installing-grunt",level:4},{value:"Using grunt",id:"using-grunt",level:4},{value:"ESLint",id:"eslint",level:3},{value:"Glossary",id:"glossary",level:2}],v={toc:h};function k(e){var t=e.components,n=(0,i.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Moodle makes heavy use of JavaScript to improve the experience for its users."),(0,o.kt)("p",null,"All new JavaScript in Moodle should use the ES2015+ module format, which is\ntranspiled into the CommonJS format.\nModules are loaded in the browser using the RequireJS loader."),(0,o.kt)("p",null,"All Moodle JavaScript can use the same Mustache templates and translated strings which are available to Moodle PHP code, and the standard Moodle web service framework can be used to fetch and store data."),(0,o.kt)("p",null,"This guide covers how to get started with JavaScript in Moodle, and introduces key concepts and features including module format and structure, including your code, using templates, using translation features, tooling, and handling events."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may see the terms ",(0,o.kt)("inlineCode",{parentName:"p"},"ES6")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ES2015")," used interchangably.\nES2015 is the 6th generation of the Ecma Script specification.\nES2015 respresents a big change from previous versions of the Ecma Script\nspecification."))),(0,o.kt)("h2",{id:"useful-references"},"Useful References"),(0,o.kt)("p",null,"Moodle uses vanilla JavaScript combined with helpers for performing common actions, and a small collection of libraries\nfor serving and managing dependencies."),(0,o.kt)("p",null,"The JavaScript documentation available on the Mozilla Developer Network is one of the best reference documentations\navailable. You may find the following references particularly useful:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},"MDN JavaScript guide"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"},"MDN JavaScript Reference"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devhints.io/es6"},"ES2015+ Cheatsheet"))),(0,o.kt)("h2",{id:"modules"},"Modules"),(0,o.kt)("p",null,"JavaScript in Moodle is structured into ES2015 modules which are transpiled into the CommonJS format."),(0,o.kt)("p",null,"Like our PHP classes and Mustache templates, our JavaScript modules each belong to a particular {term}",(0,o.kt)("inlineCode",{parentName:"p"},"component"),"\nand must be named according to our standard ",(0,o.kt)("a",{parentName:"p",href:"../policy/naming#javascript"},"name and namespace conventions"),"."),(0,o.kt)("p",null,"The naming scheme for Moodle's JavaScript fits into the pattern:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"[component_name]/[optional/sub/namespace/][modulename]")),(0,o.kt)("p",null,"The first directory in any subfolder must be either a Moodle API, or ",(0,o.kt)("inlineCode",{parentName:"p"},"local"),"."),(0,o.kt)("p",null,"The following are examples of valid module names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// For a module named `discussion` in the `mod_forum` component:\nmod_forum/discussion\n\n// For a module named `grader` in the `mod_assign` component which is\n// part of the `grades` API:\nmod_assign/grades/grader\n\n// For a module named `confirmation` in the `block_newsitems` component\n// which is a modal and not part of a core API:\nblock_newsitems/local/modal/confirmation\n\n// For a module name `selectors` in the `core_user` component and relates\n// to the `participants` module:\ncore_user/local/participants/selectors\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When structuring a new module you may find it clearer to create a main entry-point module with related modules stored in\na subdirectory."),(0,o.kt)("p",{parentName:"div"},"For example when creating a new module which controls interactions on the Participants page and which is part of\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"core_user")," component you will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"participants")," module.\nThe full namespace for this module will be ",(0,o.kt)("inlineCode",{parentName:"p"},"core_user/participants"),"."),(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"core_user/participants")," module may interact with DOM elements which are identified by CSS Selectors.\nThe Moodle convention is to place the selectors in a ",(0,o.kt)("inlineCode",{parentName:"p"},"selectors")," module."),(0,o.kt)("p",{parentName:"div"},"The module will also call a set of Web Services.\nThe Moodle convention is to place calls to Web Services in a ",(0,o.kt)("inlineCode",{parentName:"p"},"repository")," module."),(0,o.kt)("p",{parentName:"div"},"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"participants")," isn't a formal API in Moodle you must create your submodules in the ",(0,o.kt)("inlineCode",{parentName:"p"},"local/participants"),"\ndirectory."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},".\n\u251c\u2500\u2500 local\n\u2502\xa0\xa0 \u2514\u2500\u2500 participants\n\u2502\xa0\xa0     \u251c\u2500\u2500 repository.js       // core_user/local/participants/selectors\n\u2502\xa0\xa0     \u2514\u2500\u2500 selectors.js        // core_user/local/participants/repository\n\u2514\u2500\u2500 participants.js             // core_user/participants\n")))),(0,o.kt)("h2",{id:"writing-your-first-module"},"Writing your first module"),(0,o.kt)("p",null,"The convention in Moodle is to have one JavaScript Module which is your initial entrypoint.\nThis usually provides a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," which you then ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export"},"export")," from the module.\nThis ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," function will be called by Moodle."),(0,o.kt)("p",null,"Your module will probably also have one or more dependencies which you will ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),"."),(0,o.kt)("p",null,"As you start to build out the structure of your code you will start to export more functions, as well as Objects,\nClasses, and other data structures."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide isn't intended to teach you how to write JavaScript.\nIf you are new to JavaScript, you may want to start with the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"},"MDN JavaScript\nbasics guide"),"."))),(0,o.kt)("p",null,"A module which calls to the browser ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," function would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="mod/example/lib/amd/src/helloworld.js"',title:'"mod/example/lib/amd/src/helloworld.js"'},"export const init = () => {\n    window.console.log('Hello, world!');\n};\n")),(0,o.kt)("p",null,"In this example a new variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," is created and exported using\nthe ES2015 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export"},"export")," keyword.\nThe variable is assigned an arrow function expression which takes no\narguments, and when executed will call the browser ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log")," function\nwith the text ",(0,o.kt)("inlineCode",{parentName:"p"},'"Hello, world!"'),"."),(0,o.kt)("h3",{id:"listen-to-a-dom-event"},"Listen to a DOM Event"),(0,o.kt)("p",null,"Usually you will want to perform an action in response to a user\ninteracting with the page."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"},"document.addEventListener()")," method to do\nthis."),(0,o.kt)("p",null,"To add a ",(0,o.kt)("inlineCode",{parentName:"p"},"click")," listener to the entire body you would write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="mod/example/lib/amd/src/helloworld.js"',title:'"mod/example/lib/amd/src/helloworld.js"'},"export const init = () => {\n    document.addEventListener('click', e => {\n        window.console.log(e.target);\n    });\n};\n")),(0,o.kt)("p",null,"In this example any time that a user clicks anywhere on the document the item\nthat was clicked on will be logged to the browser console."),(0,o.kt)("p",null,"Usually you won't want to listen for every click in the document but only for\nsome Elements in the page."),(0,o.kt)("p",null,"If you wanted to display a browser alert every time a user clicks on a button,\nyou might have a template like the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mustache",metastring:'title="mod/example/templates/helloworld.mustache"',title:'"mod/example/templates/helloworld.mustache"'},' <button data-action="mod_example/helloworld-update_button">Click me</button>\n')),(0,o.kt)("p",null,"You can write a listener which looks for clicks to this button:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="mod/example/lib/amd/src/helloworld.js"',title:'"mod/example/lib/amd/src/helloworld.js"'},"const Selectors = {\n    actions: {\n        showAlertButton: '[data-action=\"mod_example/helloworld-update_button\"]',\n    },\n};\n\nexport const init = () => {\n    document.addEventListener('click', e => {\n        if (e.target.closest(Selectors.actions.showAlertButton)) {\n            window.alert(\"Thank you for clicking on the button\");\n        }\n    });\n};\n")),(0,o.kt)("p",null,"This example shows several conventions that are used in Moodle:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CSS Selectors are often stored separate to the code in a ",(0,o.kt)("inlineCode",{parentName:"li"},"Selectors"),"\nobject. This allows you to re-use a Selector and to group them\ntogether in different ways. It also places all selectors in one place so\nthat they're easier to update."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Selectors")," object is stored in a ",(0,o.kt)("inlineCode",{parentName:"li"},"const")," variable which is ","_","not","_","\nexported. This means that it's private and only available within your\nmodule."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"data-*")," attribute is used to identify the button in the JavaScript\nmodule.\nMoodle advises not to use class selectors when attaching event listeners because\nso that it's easier to restyle for different themes without any changes to\nthe JavaScript later."),(0,o.kt)("li",{parentName:"ul"},"A namespace is used for the ",(0,o.kt)("inlineCode",{parentName:"li"},"data-action")," to identify what the button is intended for."),(0,o.kt)("li",{parentName:"ul"},"By using ",(0,o.kt)("inlineCode",{parentName:"li"},"e.target.closest()")," you can check whether the element that was\nclicked on, or any of its parent elements matches the supplied CSS Selector.")),(0,o.kt)("p",null,"Instead of having one event listener for every button in your page, you can\nhave one event listener which checks which button was pressed.\nIf you have a template like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mustache",metastring:'title="mod/example/templates/helloworld.mustache"',title:'"mod/example/templates/helloworld.mustache"'},' <div>\n     <button data-action="mod_example/helloworld-update_button">Click me</button>\n     <button data-action="mod_example/helloworld-big_red_button">Do not click me</button>\n </div>\n')),(0,o.kt)("p",null,"Then you can write one event listener which looks at all buttons on the page.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="mod/example/lib/amd/src/local/helloworld/selectors.js"',title:'"mod/example/lib/amd/src/local/helloworld/selectors.js"'},'export default {\n    actions: {\n        showAlertButton: \'[data-action="mod_example/helloworld-update_button"],\n        bigRedButton: \'[data-action="mod_example/helloworld-big_red_button"],\n    },\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="mod/example/lib/amd/src/helloworld.js"',title:'"mod/example/lib/amd/src/helloworld.js"'},"import Selectors from './local/helloworld/selectors';\n\nconst registerEventListeners = () => {\n    document.addEventListener('click', e => {\n        if (e.target.closest(Selectors.actions.showAlertButton)) {\n            window.alert(\"Thank you for clicking on the button\");\n        }\n\n        if (e.target.closest(Selectors.actions.bigRedButton)) {\n            window.alert(\"You shouldn't have clicked on that one!\");\n        }\n    });\n};\n\nexport const init = () => {\n    registerEventListeners();\n};\n")),(0,o.kt)("p",null,"You will notice several key differences in this example when compared with the previous one:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The list of Selectors has been moved to a new Module which is included using\nthe ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/import"},"import")," keyword.\nThe new ",(0,o.kt)("inlineCode",{parentName:"li"},"selectors")," module is a dependency of the ",(0,o.kt)("inlineCode",{parentName:"li"},"helloworld")," module."),(0,o.kt)("li",{parentName:"ul"},"The call to ",(0,o.kt)("inlineCode",{parentName:"li"},"document.addEventListener")," has been moved to a new\n",(0,o.kt)("inlineCode",{parentName:"li"},"registerEventListeners")," function.\nThis is another Moodle convention which encourages you to structure your\ncode so that each part has clear responsibilities."),(0,o.kt)("li",{parentName:"ul"},"One event listener is present and it checks if the Element clicked on was\none that it's interested in.")),(0,o.kt)("h2",{id:"including-javascript-from-your-pages"},"Including JavaScript from your pages"),(0,o.kt)("p",null,"Once you have written a JavaScript module you need a way to include it within your content."),(0,o.kt)("p",null,"Moodle has three main ways to include your JavaScript and the best way will depend on your content. These are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"from a template via ",(0,o.kt)("inlineCode",{parentName:"li"},"requirejs"),";"),(0,o.kt)("li",{parentName:"ul"},"from PHP via the output requirements API; and"),(0,o.kt)("li",{parentName:"ul"},"from other JavaScript via ",(0,o.kt)("inlineCode",{parentName:"li"},"import")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"requirejs"),".")),(0,o.kt)("h3",{id:"including-from-a-template"},"Including from a template"),(0,o.kt)("p",null,"Most recent code in Moodle makes heavy use of Mustache templates and you will often find that your JavaScript is\ndirectly linked to the content of one of your templates."),(0,o.kt)("p",null,"All JavaScript in Mustache templates must be places in a ",(0,o.kt)("inlineCode",{parentName:"p"},"{{#js}}")," tag.\nThis tag ensures that all JavaScript is called in a consistent and reliable way."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You shouldn't add too much JavaScript directly to a template.\nJavaScript placed directly into Templates isn't transpiled for consistent use in all browsers and it isn't passed through minification processes.\nSome browser-specific features won't be available."))),(0,o.kt)("p",null,"This simplest form of this is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mustache",metastring:"title=mod/forum/templates/discussion.mustache",title:"mod/forum/templates/discussion.mustache"},"<div>\n    <!\u2014- Your template content goes here. \u2014->\n</div>\n\n{{#js}}\nrequire(['mod_forum/discussion'], function(Discussion) {\n    Discussion.init();\n});\n{{/js}}\n")),(0,o.kt)("p",null,"Any time that this template is rendered and placed on the page the ",(0,o.kt)("inlineCode",{parentName:"p"},"mod_forum/discussion")," module will be fetched and the ",(0,o.kt)("inlineCode",{parentName:"p"},"init()")," function called on it."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Since Moodle 4.0")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Moodle no longer supports Internet Explorer. It's now safe to use {term}",(0,o.kt)("inlineCode",{parentName:"p"},"Arrow functions<Arrow functions>"),"."))),(0,o.kt)("p",null,"Often you may want to link the JavaScript to a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"DOMElement")," in the template.\nYou can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"{{uniqid}}")," Mustache tag to give that DOM Element a unique ID and then pass that into the Module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mustache",metastring:"title=mod/forum/templates/discussion.mustache",title:"mod/forum/templates/discussion.mustache"},'<div id="mod_forum-discussion-wrapper-{{uniqid}}">\n    <!\u2014- Your template content goes here. \u2014->\n</div>\n\n{{#js}}\nrequire([\'mod_forum/discussion\'], function(Discussion) {\n    Discussion.init(document.querySelector("mod_forum-discussion-wrapper-{{uniqid}}"));\n});\n{{/js}}\n')),(0,o.kt)("p",null,"In this example you have added a new ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"div")," element.\nYou then fetch the DOM Element using this id and pass it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," function."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"{{uniqid}}")," tag gives a new unique string for each rendered template including all its children.\nIt isn't a true unique id and must be combined with other information in the template to make it unique."))),(0,o.kt)("h3",{id:"including-from-php"},"Including from PHP"),(0,o.kt)("p",null,"Much of Moodle's code still creates HTML content in PHP directly.\nThis might be a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"echo")," statement or using the ",(0,o.kt)("inlineCode",{parentName:"p"},"html_writer")," output functions.\nA lot of this content is being migrated to use Mustache Templates which are the recommended approach for new content."),(0,o.kt)("p",null,"Where content is generated in PHP you will need to include your JavaScript at the same time."),(0,o.kt)("p",null,"Although several older ways to include JavaScript from PHP, it",(0,o.kt)("inlineCode",{parentName:"p"},"s strongly\nrecommended that all new JavaScript only use the"),"js_call_amd",(0,o.kt)("inlineCode",{parentName:"p"},"function on the"),"page_requirements_manager`.\nThis has a similar format to the version used in Templates:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// Call the `init` function on `mod_forum/discussion`.\n$PAGE->requires->js_call_amd('mod_forum/discussion', 'init');\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"js_call_amd")," function turns this into a ",(0,o.kt)("inlineCode",{parentName:"p"},"requirejs")," call."),(0,o.kt)("p",null,"You can also pass arguments to your function by passing an array as the third argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"js_call_amd"),", for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// Call the `init` function on `mod_forum/discussion`.\n$PAGE->requires->js_call_amd('mod_forum/discussion', 'init', [$course->id]);\n")),(0,o.kt)("p",null,"If you pass a multi-dimensional array as the third argument, then you can use Array destructuring within the JavaScript to get named values."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"php-js_call_admin-args",label:"PHP",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$PAGE->requires->js_call_amd('mod_forum/discussion', 'init', [[\n    'courseid' => $course->id,\n    'categoryid' => $course->category,\n]]);\n"))),(0,o.kt)(s.Z,{value:"js-js_call_admin-args",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const init = ({courseid, category}) => {\n    window.console.log(courseid);\n    window.console.log(category);\n};\n")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A limit applies to the length of the parameters passed in the third argument.\nIf data is already available elsewhere in the DOM, you should avoid passing it as a parameter."))),(0,o.kt)("h2",{id:"passing-data-to-your-module"},"Passing data to your Module"),(0,o.kt)("p",null,"You will often need to work with data as part of your JavaScript module.\nThis might be simple data, like the a database id, or it may be more complex\nlike full Objects."),(0,o.kt)("p",null,"Moodle provides several ways to achieve this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you can pass a small amount of data into the module initialisation, but this is no longer recommended"),(0,o.kt)("li",{parentName:"ul"},"you can store this data in the DOM as a data attribute which is fetched in your code"),(0,o.kt)("li",{parentName:"ul"},"a Moodle Web Service can be used to fetch more complex data structures dynamically")),(0,o.kt)("h3",{id:"using-data-attributes"},"Using data attributes"),(0,o.kt)("p",null,"The easiest way to pass data is to use data attributes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{eval-rst}"},".. TODO::\n\n    Document the main ways that we pass data.\n\n    Focus on:\n\n        * data- attributes in HTML being ready\n        * the limitations of the data passed into `js_call_amd`\n        * web services\n\n\n")),(0,o.kt)("h2",{id:"promises"},"Promises"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{eval-rst}"},".. TODO::\n\n    We should document things like:\n\n        * Use ``then`` and ``catch`` consistently (thennables)\n        * Don't use ``catch`` if you are returning a Promise just by habit - only use it if you mean to\n        * You _must_ return at the end of a thennable\n        * It's generally a good idea to return a Promise from a fucntion if the function is primarily tasked with\n          creating that Promise\n")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You shouldn't use the ",(0,o.kt)("inlineCode",{parentName:"p"},"done"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fail"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"always")," functions on Promises.\nThese are a jQuery feature which isn't present in the Native Promise implementation."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{language:"js",title:"Create a modal in a function",mdxType:"CodeBlock"},"const getModal = questionBody => {\n    return ModalFactory.create({\n        title: getString('mytitle', 'mod_example'),\n        body: renderTemplate('mod_example/example_body', questionBody),\n        removeOnClose: true,\n    })\n    .then(modal => {\n        modal.show();\n\n        return modal;\n    });\n};\n"),(0,o.kt)("h2",{id:"working-with-strings"},"Working with Strings"),(0,o.kt)("p",null,"One of the most helpful core modules is ",(0,o.kt)("inlineCode",{parentName:"p"},"core/str")," which allows you to fetch and render language Strings in JavaScript."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"core/str")," module has two main functions, which both return Promises containing the resolved string."),(0,o.kt)("p",null,"Strings are fetched on request from Moodle, and are then cached in LocalStorage."),(0,o.kt)(l.Z,{language:"js",title:"Example",mdxType:"CodeBlock"},"import {get_string as getString} from 'core/str';\n\ngetString('close', 'core')\n.then(closeString => {\n    window.console.log(closeString);\n\n    return closeString;\n})\n.catch();\n"),(0,o.kt)("h2",{id:"templates"},"Templates"),(0,o.kt)("h2",{id:"modals"},"Modals"),(0,o.kt)("h2",{id:"notifications"},"Notifications"),(0,o.kt)("h2",{id:"ajax-calls"},"AJAX Calls"),(0,o.kt)("h2",{id:"preferences"},"Preferences"),(0,o.kt)("h2",{id:"prefetch"},"Prefetch"),(0,o.kt)("h2",{id:"tools"},"Tools"),(0,o.kt)("p",null,"Moodle uses common and popular tools to ensure code quality, and to improve the\nend-user experience."),(0,o.kt)("p",null,"Most of the Moodle JavaScript tooling requires ",(0,o.kt)("a",{parentName:"p",href:"../tools/nodejs"},"NodeJS"),"."),(0,o.kt)("h3",{id:"grunt"},"Grunt"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gruntjs.com/"},"Grunt")," is a command-line tool used to compile JavaScript, and CSS, and to lint JavaScript, CSS, and Behat tests."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Rather than running ",(0,o.kt)("inlineCode",{parentName:"p"},"grunt")," on the entire Moodle source every time you make changes, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"grunt watch"),"\nin the background to build just the files you change as you write them."))),(0,o.kt)("h4",{id:"installing-grunt"},"Installing grunt"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"globalgrunt",label:"Global",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm -g install grunt-cli\n")))),(0,o.kt)("h4",{id:"using-grunt"},"Using grunt"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npx_grunt",label:"NPX",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx grunt\n"))),(0,o.kt)(s.Z,{value:"global_grunt",label:"Global",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grunt\n")))),(0,o.kt)("h3",{id:"eslint"},"ESLint"),(0,o.kt)("h2",{id:"glossary"},"Glossary"),(0,o.kt)("p",null,":::glossary\nArrow functions"),(0,o.kt)("p",null,"  An arrow function is a shorthand way of writing a regular function.\nThese have several small but important differences to regular functions which make them easier to use in most\ncases, but unsuitable in some others."),(0,o.kt)("p",null,"  They're not suitable for use in code which isn't transpiled as Internet Explorer doesn't offer any support for\nthem."),(0,o.kt)("p",null,"  For more information see the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"},"MDN documentation for Arrow function expressions"),".\n:::"),(0,o.kt)("p",null,"% ------------------------------------------------------------------------\n% Links used on the current page go here.\n% All links must be namespaced in the format:\n%\n%     ",(0,o.kt)("inlineCode",{parentName:"p"},"guides_javascript-[domain_or_acronym]-[specialty]"),"\n%\n% These links should be kept sorted alphabetically"))}k.isMDXComponent=!0}}]);