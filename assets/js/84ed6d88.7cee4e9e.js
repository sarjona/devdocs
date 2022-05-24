"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3111],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return o?n.createElement(h,r(r({ref:t},d),{},{components:o})):n.createElement(h,r({ref:t},d))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9601:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=o(7462),i=o(3366),a=(o(7294),o(3905)),r=["components"],l={title:"Contributing",description:"Information on how to contribute to this documentation",tags:["contributing","documentation","guide"]},s=void 0,u={unversionedId:"documentation/contributing",id:"documentation/contributing",title:"Contributing",description:"Information on how to contribute to this documentation",source:"@site/general/documentation/contributing.md",sourceDirName:"documentation",slug:"/documentation/contributing",permalink:"/devdocs/general/documentation/contributing",editUrl:"https://github.com/moodle/devdocs/edit/main/general/documentation/contributing.md",tags:[{label:"contributing",permalink:"/devdocs/general/tags/contributing"},{label:"documentation",permalink:"/devdocs/general/tags/documentation"},{label:"guide",permalink:"/devdocs/general/tags/guide"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653356434,formattedLastUpdatedAt:"24/05/2022",frontMatter:{title:"Contributing",description:"Information on how to contribute to this documentation",tags:["contributing","documentation","guide"]},sidebar:"documentation",previous:{title:"Welcome",permalink:"/devdocs/general/documentation/"},next:{title:"Code of conduct",permalink:"/devdocs/general/documentation/code-of-conduct"}},d={},c=[{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Get Involved",id:"get-involved",level:2},{value:"Triaging Issues and Pull Requests",id:"triaging-issues-and-pull-requests",level:3},{value:"Our Development Process",id:"our-development-process",level:2},{value:"Issues",id:"issues",level:2},{value:"Bugs",id:"bugs",level:3},{value:"Documentation requests",id:"documentation-requests",level:3},{value:"Contributing",id:"contributing",level:3},{value:"Development",id:"development",level:2},{value:"Quick start with Gitpod",id:"quick-start-with-gitpod",level:3},{value:"Installation",id:"installation",level:3},{value:"Style guidelines",id:"style-guidelines",level:3},{value:"Pull Requests",id:"pull-requests",level:2},{value:"Commit Messages",id:"commit-messages",level:3},{value:"Versioned Docs",id:"versioned-docs",level:3},{value:"Licensing",id:"licensing",level:3}],p={toc:c};function m(e){var t=e.components,o=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://moodle.org"},"Moodle")," Developer Resources is the (un)official source for all Moodle documentation. It's here to make your life as a Moodle Developer easier. To serve that purpose it has to be up-to-date, and as accurate and complete as possible. Every contribution is important in achieving that goal and we hope that you are able to be a part of that mission."),(0,a.kt)("p",null,"If you are new to Open Source contributions, or you are interested in learning how to run or contribute to an open source project, then these resources from the ",(0,a.kt)("a",{parentName:"p",href:"https://opensource.guide/"},"Open Source Guides")," website may give you some help and insight into common practices. It has a collection of resources for individuals, communities, and companies who are interested in open source contributions. The following guides may be especially useful to you:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://opensource.guide/how-to-contribute/"},"How to Contribute to Open Source")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://opensource.guide/building-community/"},"Building Welcoming Communities"))),(0,a.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,a.kt)("p",null,"Moodle is in the process of updating and modernising its ",(0,a.kt)("a",{parentName:"p",href:"/devdocs/general/documentation/code-of-conduct"},"Code of Conduct"),". If you would like to be a part of this process, please see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs/issues/47"},"GitHub issue")," and give us your thoughts."),(0,a.kt)("h2",{id:"get-involved"},"Get Involved"),(0,a.kt)("p",null,"Anyone can get involved with, and add to, these resources - you don't have to be a developer or documentation aficionado. Here are a few ideas to get started:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Look at our list of ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/moodle/devdocs/labels/good%20first%20issue"},"good first issues")),(0,a.kt)("li",{parentName:"ul"},"Fix typos and grammatical errors"),(0,a.kt)("li",{parentName:"ul"},"Document new Moodle features"),(0,a.kt)("li",{parentName:"ul"},"Mark a deprecated feature as deprecated"),(0,a.kt)("li",{parentName:"ul"},"Raise issues in GitHub for ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/moodle/devdocs/issues/new?assignees=&labels=documentation%2C+help+wanted%2C+enhancement&template=documentation-request.yml&title=%5Bdocs%5D+Create+documentation+for+%5BFeature%5D"},"features which need to be documented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#triaging-issues-and-pull-requests"},"Triage existing issues"))),(0,a.kt)("p",null,"If you need help, please reach out to us and we will do our best to advise you."),(0,a.kt)("h3",{id:"triaging-issues-and-pull-requests"},"Triaging Issues and Pull Requests"),(0,a.kt)("p",null,"One of the many ways that you can contribute is to help triage the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs/issues?q=is%3Aissue+is%3Aopen+label%3Aneeds-triage"},"list of pending issues"),"."),(0,a.kt)("p",null,"When doing so you should may want to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ask for more information if you believe the issue does not provide all the details required to solve it."),(0,a.kt)("li",{parentName:"ul"},"Suggest ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/moodle/devdocs/labels"},"labels")," to can help categorise issues."),(0,a.kt)("li",{parentName:"ul"},"Flag issues that are stale or that should be closed."),(0,a.kt)("li",{parentName:"ul"},"Review code.")),(0,a.kt)("h2",{id:"our-development-process"},"Our Development Process"),(0,a.kt)("p",null,"While our development of Moodle is managed in the ",(0,a.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/"},"Moodle Tracker"),", all development of these Developer Resources takes place in this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs"},"GitHub repository"),". All work takes place in public, in this repository."),(0,a.kt)("p",null,"We make use of GitHub actions for our continuous integration and have a range of unit tests, end-to-end tests, style and lint tests, and build tests."),(0,a.kt)("h2",{id:"issues"},"Issues"),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs/issues/new/choose"},"creating a new issue"),", always make sure to fill out the issue template."),(0,a.kt)("h3",{id:"bugs"},"Bugs"),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs/issues"},"GitHub Issues")," for our documentation bugs. If you would like to report a problem, take a look around and see if someone already opened an issue about it. If you are certain this is a new, unreported bug, you can submit a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs/issues/new?template=documentation-bug.yml"},"bug report"),"."),(0,a.kt)("p",null,"Please provide as much information as possible and, if you are able to, provide screenshots. Fixes are always welcomed."),(0,a.kt)("h3",{id:"documentation-requests"},"Documentation requests"),(0,a.kt)("p",null,"If you would like to request documentation for new features, or the migration of documentation from the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev"},"legacy devdocs")," you can use the appropriate issue templates."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/moodle/devdocs/issues/new?template=documentation-migration-request.yml"},"Request to migrate legacy documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/moodle/devdocs/issues/new?template=documentation-request.yml"},"Request to create new documentation"))),(0,a.kt)("p",null,"For migrated documentation, if you can provide updated code examples, then this will make it easier to prioritise your issue."),(0,a.kt)("h3",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"We welcome contributions to these developer resources. If you've not contributed before and would like to do so, then you may like to look at our list of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs/labels/good%20first%20issue"},"good first issues")," to get you started."),(0,a.kt)("p",null,"If you have domain-specific knowledge in an area which has outstanding documentation then the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs/labels/help%20wanted"},(0,a.kt)("inlineCode",{parentName:"a"},"help wanted"))," search may give you some inspiration."),(0,a.kt)("p",null,"If you only wish to make a small change, you may want to use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files#editing-files-in-another-users-repository"},"GitHub Edit interface")," and to open a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"pull request"),"."),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Our documentation is built using ",(0,a.kt)("a",{parentName:"p",href:"https://docusarus.io"},"Docusaurus"),", a powerful open source documentation project written in JavaScript."),(0,a.kt)("p",null,"It's easy to get your development environment set up using ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn"),", and we we recommend that you use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"NVM")," for your NodeJS version management. You can check our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moodle/devdocs/blob/main/.nvmrc"},".nvmrc")," for the best version of NodeJS to use."),(0,a.kt)("p",null,"We also have a ",(0,a.kt)("a",{parentName:"p",href:"#Quick-start-with-Gitpod"},"Gitpod")," configuration if you want to jump straight in and have a go"),(0,a.kt)("h3",{id:"quick-start-with-gitpod"},"Quick start with Gitpod"),(0,a.kt)("p",null,"Gitpod is a free, cloud-based, development environment providing VS Code and a suitable development environment right in your browser."),(0,a.kt)("p",null,"By ",(0,a.kt)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/moodle/devdocs"},"launching your workspace")," you can automatically:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"clone our devdocs repo"),(0,a.kt)("li",{parentName:"ul"},"install all dependencies"),(0,a.kt)("li",{parentName:"ul"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn start"))),(0,a.kt)("p",null,"You can write and preview your contributions from right within your browser, and\neven commit them and create a pull request."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/moodle/devdocs"},(0,a.kt)("img",{parentName:"a",src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,a.kt)("p",null,"GitHub has also launched their own lightweight online editor which integrates tightly with GitHub. Take a look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.dev/moodle/devdocs"},"github.dev"),"."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To install a local development environment:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ensure you have:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"NVM")),(0,a.kt)("li",{parentName:"ol"},"The most appropriate version of NodeJS by running ",(0,a.kt)("inlineCode",{parentName:"li"},"nvm install")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn")))),(0,a.kt)("li",{parentName:"ol"},"After cloning the repository, run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn install")," in the root of the repository. This will install all dependencies as well as build all local packages."),(0,a.kt)("li",{parentName:"ol"},"To start a development server, run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn start"),".")),(0,a.kt)("h3",{id:"style-guidelines"},"Style guidelines"),(0,a.kt)("p",null,"A set of writing and coding style guidelines for this documentation will be documented in more detail in the ",(0,a.kt)("a",{parentName:"p",href:"/devdocs/general/documentation/style-guides"},"style guides"),"."),(0,a.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,a.kt)("p",null,"All pull requests should be opened against the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch, and pushed to your own GitHub fork of the repository."),(0,a.kt)("p",null,"When you open your pull request we will automatically run a number of continuous integration jobs against your branch to check for errors and you'll be notified if any of these fail. We recommend looking out for any failures and fixing them as soon as you can."),(0,a.kt)("p",null,"The project maintainers will review your code and may provide feedback before it's merged into the project."),(0,a.kt)("h3",{id:"commit-messages"},"Commit Messages"),(0,a.kt)("p",null,"Every commit tells a story, and the commit message is the key narration of that story. It can be extremely useful to have a bit more information about your changes so try to provide any extra information that might be useful. For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you remove some old documentation, or part of a file, it may be useful to explain why it is no longer necessary."),(0,a.kt)("li",{parentName:"ul"},"When you add a new documentation for a new feature, it may be useful to include the Moodle Tracker issue in your commit message to tie everything together."),(0,a.kt)("li",{parentName:"ul"},"When noting the deprecation of a Moodle feature, it may be useful to include a link to the Moodle Tracker issue.")),(0,a.kt)("p",null,"The first line of your commit should meet the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[<type>] <area>: <subject>\n")),(0,a.kt)("p",null,"We currently use the following types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo")," - For anything related to the repository, or documentation system"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docs")," - For changes to the developer resource documentation itself")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<area>")," tag is primarily used for ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," changes to describe the section of documentation you have made changes to."),(0,a.kt)("h3",{id:"versioned-docs"},"Versioned Docs"),(0,a.kt)("p",null,"Some of this documentation related to a specific version of Moodle:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"general")," - This section is not documented at all"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docs")," - Relates to the current Moodle development branch, known as ",(0,a.kt)("inlineCode",{parentName:"li"},"master")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-X.Y")," - Related to a specific major version of Moodle")),(0,a.kt)("p",null,"If you are documenting a feature which should be documented across older versions, we request that you backport it to the relevant stable versions."),(0,a.kt)("h3",{id:"licensing"},"Licensing"),(0,a.kt)("p",null,"By contributing to the Moodle Developer Resources, you agree that your contributions will be licensed under the GPLv3 license."),(0,a.kt)("p",null,"The following header should be present in all non-documentation code files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Copyright (c) Moodle Pty Ltd.\n *\n * Moodle is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License as published by\n * the Free Software Foundation, either version 3 of the License, or\n * (at your option) any later version.\n *\n * Moodle is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Moodle.  If not, see <http://www.gnu.org/licenses/>.\n */\n")))}m.isMDXComponent=!0}}]);