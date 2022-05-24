"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[5015],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1804:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],r={title:"Testing",description:"All the information related to testing during the Moodle development.",tags:["Processes","Core development","Testing","Quality assurance"]},l=void 0,d={unversionedId:"development/process/testing",id:"development/process/testing",title:"Testing",description:"All the information related to testing during the Moodle development.",source:"@site/general/development/process/testing.md",sourceDirName:"development/process",slug:"/development/process/testing",permalink:"/devdocs/general/development/process/testing",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/process/testing.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Core development",permalink:"/devdocs/general/tags/core-development"},{label:"Testing",permalink:"/devdocs/general/tags/testing"},{label:"Quality assurance",permalink:"/devdocs/general/tags/quality-assurance"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653356434,formattedLastUpdatedAt:"24/05/2022",frontMatter:{title:"Testing",description:"All the information related to testing during the Moodle development.",tags:["Processes","Core development","Testing","Quality assurance"]},sidebar:"process",previous:{title:"Integration review",permalink:"/devdocs/general/development/process/integration-review"},next:{title:"Testing instructions guide",permalink:"/devdocs/general/development/process/testing/guide"}},c={},p=[{value:"Manual testing",id:"manual-testing",level:2},{value:"Code testing",id:"code-testing",level:3},{value:"Integration functional testing",id:"integration-functional-testing",level:3},{value:"QA testing",id:"qa-testing",level:3},{value:"Automated testing",id:"automated-testing",level:2},{value:"Unit tests",id:"unit-tests",level:3},{value:"Acceptance tests",id:"acceptance-tests",level:3},{value:"Continuous integration testing",id:"continuous-integration-testing",level:3},{value:"Regression testing",id:"regression-testing",level:3}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page is the top level page regarding all testing activities around the Moodle project. Testing is essential to make sure that developed code does what it is meant to do, without causing new problems."),(0,i.kt)("h2",{id:"manual-testing"},"Manual testing"),(0,i.kt)("h3",{id:"code-testing"},"Code testing"),(0,i.kt)("p",null,"Code is tested as part of reviewing at some key parts of the ",(0,i.kt)("a",{parentName:"p",href:"/general/development/process"},"Moodle development process"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Development"),". The developer of some code should test their own work on a wide variety of environments for correctness and performance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Peer review"),". Developers often test each others work early in the development process"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Integration review"),". The integration team tests code weekly while they are evaluating suitability for integration into Moodle.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"More info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We recommend that you follow the ",(0,i.kt)("a",{parentName:"p",href:"./testing/guide"},"Testing instructions guide")," to help you write clear manual testing instructions."))),(0,i.kt)("h3",{id:"integration-functional-testing"},"Integration functional testing"),(0,i.kt)("p",null,"Moodle has a dedicated team of testers who perform most of the manual testing for integration issues. Developers submitting patches ",(0,i.kt)("strong",{parentName:"p"},"should always cover the patch with unit tests and/or Behat behavioural tests"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"More info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We recommend that you follow the ",(0,i.kt)("a",{parentName:"p",href:"/general/development/process/testing/integrated-issues"},"Testing of integrated issues guide")," to get a better understanding of how testing integrated issues works."))),(0,i.kt)("h3",{id:"qa-testing"},"QA testing"),(0,i.kt)("p",null,"Once all major features for a new Moodle release have landed, Moodle performs a Quality Assurance test cycle. This test cycle is typically performed by volunteers from the Moodle community who systematically test each available feature to ensure that it still works as intended. This process typically lasts 4-6 weeks and happens once per Major release."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"More info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We recommend that you follow the ",(0,i.kt)("a",{parentName:"p",href:"/general/development/process/testing/qa"},"QA testing guide")," to know more about the Quality Assurance test cycle."))),(0,i.kt)("p",null,"For major theme changes, additional manual tests may be run."),(0,i.kt)("h2",{id:"automated-testing"},"Automated testing"),(0,i.kt)("h3",{id:"unit-tests"},"Unit tests"),(0,i.kt)("p",null,"PHPUnit tests are supported as part of the code from Moodle 2.3 onwards. These are automated tests of very low-level code functionality that a developer should write as part of any new code."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"More info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We recommend that you follow ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/PHPUnit_integration"},"PHPUnit integration")," to help you run and write unit tests."))),(0,i.kt)("h3",{id:"acceptance-tests"},"Acceptance tests"),(0,i.kt)("p",null,"Moodle uses a framework called Behat to automatically test the user-interface. Tests can be written for each plugin, and for Moodle core."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To run the existing tests, read ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Running_acceptance_test"},"Running acceptance test"),". You really need to do this first."),(0,i.kt)("li",{parentName:"ul"},"To write new tests, read ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Writing_acceptance_tests"},"Writing acceptance tests"),"."),(0,i.kt)("li",{parentName:"ul"},"To define new steps that can you used when writing tests, see ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Writing_new_acceptance_test_step_definitions"},"Writing new acceptance test step definitions"),".")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Because Behat tests work through the Moodle user interface, they are a bit slow. Therefore, you should probably also use PHPUnit to test the detailed edge cases in your code."))),(0,i.kt)("h3",{id:"continuous-integration-testing"},"Continuous integration testing"),(0,i.kt)("p",null,"As soon as code is added to the integration repository, the continuous integration server tests the new code for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Coding guidelines"),(0,i.kt)("li",{parentName:"ul"},"PHPUnit tests"),(0,i.kt)("li",{parentName:"ul"},"SimpleTest unit tests on older versions of Moodle"),(0,i.kt)("li",{parentName:"ul"},"Detect unresolved merge conflicts"),(0,i.kt)("li",{parentName:"ul"},"Compare databases upgraded from previous versions"),(0,i.kt)("li",{parentName:"ul"},"Check the version.php is correct")),(0,i.kt)("p",null,"A failure here notifies the integrators that the build has failed."),(0,i.kt)("h3",{id:"regression-testing"},"Regression testing"),(0,i.kt)("p",null,"Every day, an automated build in a test server runs a large number of tests concerning key functions of Moodle, to make sure that everything still works and that some new fix in Moodle hasn't caused problems elsewhere."),(0,i.kt)("p",null,"These tests must pass completely before a new release can be made."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Unit_tests"},"Unit tests")," using the PHPUnit framework"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Acceptance_testing"},"Acceptance testing")," using the Behat framework"),(0,i.kt)("li",{parentName:"ul"},"Performance testing using JMeter.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Moodle uses a sponsored version of ",(0,i.kt)("a",{parentName:"p",href:"https://www.browserstack.com/"},"BrowserStack")," for testing on multiple browsers."))))}u.isMDXComponent=!0}}]);