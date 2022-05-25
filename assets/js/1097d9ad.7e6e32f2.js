"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[39379],{1485:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return p}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=a(13904),r=["components"],d={title:"Quick start",sidebar_position:1,documentationDraft:"https://github.com/moodle/devdocs/issues/149"},c=void 0,m={unversionedId:"gettingstarted/quickstart",id:"gettingstarted/quickstart",title:"Quick start",description:"A quick start to Moodle development",source:"@site/docs/gettingstarted/quickstart.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/quickstart",permalink:"/devdocs/docs/gettingstarted/quickstart",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/gettingstarted/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653493107,formattedLastUpdatedAt:"25/05/2022",sidebarPosition:1,frontMatter:{title:"Quick start",sidebar_position:1,documentationDraft:"https://github.com/moodle/devdocs/issues/149"},sidebar:"docs",previous:{title:"Introduction",permalink:"/devdocs/docs/"},next:{title:"Technical requirements",permalink:"/devdocs/docs/gettingstarted/requirements"}},l={},p=[{value:"A quick start to Moodle development",id:"a-quick-start-to-moodle-development",level:2},{value:"Docker",id:"docker",level:3},{value:"MacOS",id:"macos",level:3},{value:"Homebrew",id:"homebrew",level:4},{value:"MacPorts",id:"macports",level:4},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3}],v={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,(0,n.Z)({frontMatter:d},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("h2",{id:"a-quick-start-to-moodle-development"},"A quick start to Moodle development"),(0,i.kt)("p",null,"There are several ways to get started with Moodle depending on whether you prefer to use a container environment like\ndocker, or to run Moodle on your machine directly."),(0,i.kt)("p",null,"Several tools have been created by Moodle developers to make the development process easier for everyone. We welcome you\nto try these out and see if they help in your own workflows."),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"TODO")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Get someone to write a guide to installing a development environment using Docker.\nIt is safe to assume that Docker has already been installed."))),(0,i.kt)("h3",{id:"macos"},"MacOS"),(0,i.kt)("p",null,"If you prefer to have all of your development directly on your machine, without the use of Docker, then there are two\nmain approaches. Many prefer to install packages using ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),", whilst others prefer\n",(0,i.kt)("a",{parentName:"p",href:"https://www.macports.org/"},"MacPorts"),". Both are powerful approaches and the choice is yours."),(0,i.kt)("h4",{id:"homebrew"},"Homebrew"),(0,i.kt)("p",null,"We can highly recommend this guide, courtesy of ",(0,i.kt)("a",{parentName:"p",href:"https://getgrav.org/"},"Grav"),".\nIt details installing your web development environment on MacOS using Homebrew:"),(0,i.kt)("p",null,"  ",(0,i.kt)("a",{parentName:"p",href:"https://getgrav.org/blog/macos-monterey-apache-multiple-php-versions"},"https://getgrav.org/blog/macos-monterey-apache-multiple-php-versions")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"TODO")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Get someone to write a guide to installing a development environment using MacOS with Brew"))),(0,i.kt)("h4",{id:"macports"},"MacPorts"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"TODO")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Get someone to write a guide to installing a development environment using MacPorts"))),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"TODO")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Get someone to write a guide to installing a development environment using at least one flavour of Linux"))),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"TODO")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Get someone to write a guide to installing a development environment using Windows"))))}h.isMDXComponent=!0}}]);