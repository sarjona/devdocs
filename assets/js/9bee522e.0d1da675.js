"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[518],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},148:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"Roadmap",tags:["Core development"]},s=void 0,p={unversionedId:"community/roadmap",id:"community/roadmap",title:"Roadmap",description:"Introduction",source:"@site/general/community/roadmap.md",sourceDirName:"community",slug:"/community/roadmap",permalink:"/devdocs/general/community/roadmap",editUrl:"https://github.com/andrewnicols/devdocs/edit/main/general/community/roadmap.md",tags:[{label:"Core development",permalink:"/devdocs/general/tags/core-development"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1652326048,formattedLastUpdatedAt:"12/05/2022",frontMatter:{title:"Roadmap",tags:["Core development"]},sidebar:"community",previous:{title:"Mission",permalink:"/devdocs/general/community/mission"},next:{title:"Support channels",permalink:"/devdocs/general/channels"}},d={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Where this roadmap comes from",id:"where-this-roadmap-comes-from",level:3},{value:"The big picture",id:"the-big-picture",level:3},{value:"User experience and flow",id:"user-experience-and-flow",level:4},{value:"Enabling all our developers",id:"enabling-all-our-developers",level:4},{value:"Better integrations between Moodle products",id:"better-integrations-between-moodle-products",level:4},{value:"Better integration with the world",id:"better-integration-with-the-world",level:4},{value:"Roadmap timeline",id:"roadmap-timeline",level:3},{value:"Notes on the Moodle LMS releases",id:"notes-on-the-moodle-lms-releases",level:3},{value:"Moodle 4.0 in April 2022",id:"moodle-40-in-april-2022",level:4},{value:"Moodle 3.11",id:"moodle-311",level:4},{value:"Release support time-frames",id:"release-support-time-frames",level:4},{value:"Past releases",id:"past-releases",level:2},{value:"See also",id:"see-also",level:3}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The Moodle Project is designed to have a positive effect on the world by supporting and empowering the educators who are teaching students in all sectors, in all countries."),(0,o.kt)("p",null,"To do this, our team at Moodle HQ looks to the world, talks with our community, and creates solutions in the forms of products that fit our values of ",(0,o.kt)("strong",{parentName:"p"},"education"),", ",(0,o.kt)("strong",{parentName:"p"},"openness"),", ",(0,o.kt)("strong",{parentName:"p"},"respect"),", ",(0,o.kt)("strong",{parentName:"p"},"integrity")," and ",(0,o.kt)("strong",{parentName:"p"},"innovation"),"."),(0,o.kt)("p",null,"This document summarises, for a broad audience, the best current plans on the future technical development of the Moodle's open source learning platform, consisting of Moodle LMS, Moodle Workplace LMS, MoodleCloud, MoodleNet, Moodle Apps, and Moodle Educator Certificates."),(0,o.kt)("h3",{id:"where-this-roadmap-comes-from"},"Where this roadmap comes from"),(0,o.kt)("p",null,"Proposals for improvements and new features come from a variety of different places."),(0,o.kt)("p",null,"Feedback from the community is extremely important and you can reach us by"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"creating new issues on ",(0,o.kt)("a",{parentName:"li",href:"http://tracker.moodle.org"},"tracker"),","),(0,o.kt)("li",{parentName:"ul"},"joining the ",(0,o.kt)("a",{parentName:"li",href:"https://moodleassociation.org/"},"Moodle Users Association")," to vote on a new project for each release,"),(0,o.kt)("li",{parentName:"ul"},"discussing your ideas on the ",(0,o.kt)("a",{parentName:"li",href:"https://moodle.org/forums"},"forums"),","),(0,o.kt)("li",{parentName:"ul"},"creating new solutions as a plugin in the ",(0,o.kt)("a",{parentName:"li",href:"https://moodle.org/plugins"},"Moodle Plugins directory"),","),(0,o.kt)("li",{parentName:"ul"},"or meeting us in person at one of our ",(0,o.kt)("a",{parentName:"li",href:"https://moodle.com/events/"},"MoodleMoots"))),(0,o.kt)("p",null,"Moodle also has an extensive network of ",(0,o.kt)("a",{parentName:"p",href:"https://moodle.com/partners"},"Moodle Partners"),". Moodle Partners are service providers that are certified by Moodle HQ to provide high quality Moodle services for schools, institutions and organisations. We work closely with our partners to determine the needs of Moodle Users and improve the platform."),(0,o.kt)("p",null,"Our Roadmap is built via our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Roadmap_process"},"Roadmap process"),". This process is continuously evolving but it always seeks to involve all our key stakeholders - students, teachers, admins, institutions, and of course our partners and supporters."),(0,o.kt)("h3",{id:"the-big-picture"},"The big picture"),(0,o.kt)("p",null,"Working on the Moodle learning platform involves millions of moving parts, and every release generally includes hundreds of improvements. However, there are ",(0,o.kt)("strong",{parentName:"p"},"four main goals")," that we are focussing on for the next two years:"),(0,o.kt)("h4",{id:"user-experience-and-flow"},"User experience and flow"),(0,o.kt)("p",null,"The entire user experience from onboarding, into daily teaching/learning and expert customisation of Moodle is the core value of what makes Moodle useful or not in the real world, in fully online and blended modes."),(0,o.kt)("p",null,"While we're working on hundreds of smaller, annoying issues, we are also doing some major re-thinking around what an LMS should be in the next decade and beyond as a tool to empower educators and learners."),(0,o.kt)("h4",{id:"enabling-all-our-developers"},"Enabling all our developers"),(0,o.kt)("p",null,"Our significant community of engaged developers are an amazing group of over 1000 people - many of them make a living being part of the Moodle community."),(0,o.kt)("p",null,"We are of course working on ways to make Moodle programming easier and better, with better training and support as well as improved APIs, plugins, integrations and support for modern technologies."),(0,o.kt)("p",null,'However, a particularly exciting initiative is the new Moodle Plugins Service, due in 2021, which will provide an "app store" experience on which all developers can build financial sustainability for their work, while teachers will have easier access to use hundreds of new plugins in their courses via the web interface, without needing to convince their admins to install code. This will help the entire plugins ecosystem.'),(0,o.kt)("h4",{id:"better-integrations-between-moodle-products"},"Better integrations between Moodle products"),(0,o.kt)("p",null,"The current Moodle products already integrate with each other, of course, but there is much more to be done to make them work together more seamlessly, as part of one platform, so that our users have a better experience and also so that they become more aware of solutions to their problems."),(0,o.kt)("h4",{id:"better-integration-with-the-world"},"Better integration with the world"),(0,o.kt)("p",null,"Moodle is never used alone, and it is a part of many ecosystems at many levels. We must connect to all kinds of other systems, we must of course comply with new legislation such as the GDPR, Accessibility and much more."),(0,o.kt)("p",null,"In particular though, we are committed to helping to promote ",(0,o.kt)("a",{parentName:"p",href:"https://openedtech.global/"},(0,o.kt)("span",{class:"underline"},"Open EdTech"))," and to work closely with qualified Open EdTech products and major stakeholders to design and build an open architecture for a long-term future."),(0,o.kt)("h3",{id:"roadmap-timeline"},"Roadmap timeline"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"2021"),(0,o.kt)("th",{parentName:"tr",align:null},"Moodle LMS"),(0,o.kt)("th",{parentName:"tr",align:null},"Moodle Workplace"),(0,o.kt)("th",{parentName:"tr",align:null},"Moodle Apps"),(0,o.kt)("th",{parentName:"tr",align:null},"MoodleCloud"),(0,o.kt)("th",{parentName:"tr",align:null},"MoodleNet"),(0,o.kt)("th",{parentName:"tr",align:null},"Moodle Academy"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Q1"),(0,o.kt)("td",{parentName:"tr",align:null},"Minor release(s)"),(0,o.kt)("td",{parentName:"tr",align:null},"Dashboards"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Q2")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Moodle 3.11",(0,o.kt)("ul",null,(0,o.kt)("li",null,"Student activity completion (MUA)"),(0,o.kt)("li",null,"Open Badges v2.1 (Badge Connect API)"),(0,o.kt)("li",null,"Accessibility toolkit integration"))),(0,o.kt)("li",null,"Minor release(s)"))),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Learn Moodle Teaching Next Level"),(0,o.kt)("li",null,"Learn Moodle 3.11 Basics (MOOC)")))))),(0,o.kt)("p",null,"| ",(0,o.kt)("strong",{parentName:"p"},"Q3"),"\n| **Minor release(s)\n|\n|\n|\n|\n|"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://moodle.academy"},"Moodle.Academy")," launched.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://moodle.academy/mod/page/view.php?id=57&forceview=1"},"First Educator courses released"),".\n|-\n| ",(0,o.kt)("strong",{parentName:"p"},"Q4"),"\n| ",(0,o.kt)("strong",{parentName:"p"},"Minor release(s)"),"\n|\n|\n| ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("br",null))),(0,o.kt)("br",null),"| |"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://moodle.academy/mod/page/view.php?id=57&forceview=1"},"Further Educator courses released"),".\n|-\n| ",(0,o.kt)("strong",{parentName:"p"},"2022"),"\n| ",(0,o.kt)("strong",{parentName:"p"},"Moodle LMS"),"\n| ",(0,o.kt)("strong",{parentName:"p"},"Moodle Workplace"),"\n| ",(0,o.kt)("strong",{parentName:"p"},"Moodle Apps"),"\n| ",(0,o.kt)("strong",{parentName:"p"},"MoodleCloud"),"\n| ",(0,o.kt)("strong",{parentName:"p"},"MoodleNet"),"\n| ",(0,o.kt)("strong",{parentName:"p"},"Moodle Academy"),"\n|-\n| ",(0,o.kt)("strong",{parentName:"p"},"Q1"),"\n|",(0,o.kt)("strong",{parentName:"p"},"Minor releases(s)"),"\n|\n|\n|\n|\n|")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://moodle.academy/mod/page/view.php?id=59&forceview=1"},"First Developer Beginner courses released"),".\n|-\n| ",(0,o.kt)("strong",{parentName:"p"},"Q2"),"\n|",(0,o.kt)("strong",{parentName:"p"},"Moodle 4.0")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UX improvements")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigation"),(0,o.kt)("li",{parentName:"ul"},"Course experience"),(0,o.kt)("li",{parentName:"ul"},"Onboarding"),(0,o.kt)("li",{parentName:"ul"},"Other wins (calendar / timeline block)"),(0,o.kt)("li",{parentName:"ul"},"UI consistency via component library")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LTI 1.3 Advantage Tool / Provider implementation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"BigBlueButton integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Atto accessibility improvements (MUA)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Workplace Report Builder integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Site admin presets"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Minor release(s)"),"\n| ",(0,o.kt)("strong",{parentName:"p"},"Release 4.0"),"\n| ",(0,o.kt)("strong",{parentName:"p"},"Release 4.0")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Improved"),"\nMoodle LMS 4.0 compatibility"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Moodle Workplace 4.0 compatibility")),(0,o.kt)("p",null,"Classroom tools with friendly UX\n| ",(0,o.kt)("strong",{parentName:"p"},"Release 4.0"),"\n|\n|"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://moodle.academy/mod/page/view.php?id=57&forceview=1"},"Further Educator courses released"),"*."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://moodle.academy/mod/page/view.php?id=58&forceview=1"},"First Administrator courses released"),"*."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://moodle.academy/mod/page/view.php?id=59&forceview=1"},"Further Developer courses released"),"*."),(0,o.kt)("li",{parentName:"ul"},"Learn Moodle courses migrated to ",(0,o.kt)("a",{parentName:"li",href:"https://moodle.academy"},"Moodle.Academy"),"."),(0,o.kt)("li",{parentName:"ul"},"Program certificates available for purchase."),(0,o.kt)("li",{parentName:"ul"},"Translations in languages other than English.")),(0,o.kt)("p",null,"*"," A course in each learning pathway (Educator, Administrator, Developer) will introduce changes in Moodle 4.0.\n|-\n| ",(0,o.kt)("strong",{parentName:"p"},"Q3"),"\n|",(0,o.kt)("strong",{parentName:"p"},"Minor release(s)"),"\n|\n|\n|\n|\n|\n|-\n| ",(0,o.kt)("strong",{parentName:"p"},"Q4"),"\n| ",(0,o.kt)("strong",{parentName:"p"},"Moodle 4.1")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UX improvements")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Course activities"),(0,o.kt)("li",{parentName:"ul"},"Gradebook"),(0,o.kt)("li",{parentName:"ul"},"Global UX (tables/filters)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"New")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improved integration with MoodleNet and other Moodle sites"),(0,o.kt)("li",{parentName:"ul"},"Improved integration with 3rd party platforms/tools"),(0,o.kt)("li",{parentName:"ul"},"Database improvements (MUA)\n|\n| ",(0,o.kt)("strong",{parentName:"li"},"Release 4.1"),"\n| ",(0,o.kt)("strong",{parentName:"li"},"Release 4.1"),"\n|\n|\n|}")),(0,o.kt)("h3",{id:"notes-on-the-moodle-lms-releases"},"Notes on the Moodle LMS releases"),(0,o.kt)("h4",{id:"moodle-40-in-april-2022"},"Moodle 4.0 in April 2022"),(0,o.kt)("p",null,"For our very large new releases such as 1.0, 2.0, 3.0 and now 4.0, we often take longer so that we can tackle more significant chunks of important core work, giving us the opportunity sometimes to make more serious changes to UX or architecture. Moodle 4.0 will focus on UX improvements."),(0,o.kt)("p",null,"As part of a significant UX and design change, the current focus is on three main UX projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_4.0_navigation_improvements"},"Improved navigation"),", search and menus - MDL-69588"),(0,o.kt)("li",{parentName:"ul"},"Making it easier to create and manage courses - MDL-70907"),(0,o.kt)("li",{parentName:"ul"},"Making it easier for students to know what they need to do to complete a course, and know what's next")),(0,o.kt)("p",null,"Other projects include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LTI 1.3 Advantage Tool / Provider implementation - MDL-69542"),(0,o.kt)("li",{parentName:"ul"},"BigBlueButton integration - MDL-70658"),(0,o.kt)("li",{parentName:"ul"},"a community proposal for the question bank being discussed and shaped by a consortium of universities - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Question_bank_improvements_for_Moodle_4.0"},"Question bank improvements for Moodle 4.0"),"."),(0,o.kt)("li",{parentName:"ul"},"Integration of the ",(0,o.kt)("a",{parentName:"li",href:"https://moodle.org/plugins/block_admin_presets"},"admin presets")," tool to enable saving, loading, and sharing of Moodle site configurations - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Site_admin_presets"},"Site admin presets"),".")),(0,o.kt)("h4",{id:"moodle-311"},"Moodle 3.11"),(0,o.kt)("p",null,"In 2021 the majority of HQ developers will be focused on the UX improvements that are scheduled for Moodle 4.0. This means that the Moodle 3.11 release is anticipated to contain mostly community contributed improvements and a couple smaller HQ developments."),(0,o.kt)("p",null,"Note that while we will endeavour to include all community contributions in the 3.11 release, we may defer some improvements to a later release depending on the complexity, size, and impact on other scheduled work."),(0,o.kt)("p",null,"Scheduled projects for Moodle 3.11 are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Student_activity_completion"},"Student activity completion")," (MUA) - MDL-70469"),(0,o.kt)("li",{parentName:"ul"},"Open Badges v2.1 (Badge Connect API) - MDL-71117"),(0,o.kt)("li",{parentName:"ul"},"Brickfield accessibility toolkit integration - MDL-71041")),(0,o.kt)("h4",{id:"release-support-time-frames"},"Release support time-frames"),(0,o.kt)("p",null,"We are extending security support on Moodle 3.9 and Moodle 3.11 to November 2023. We are also extending general bug fix support on Moodle 3.11 by 6 months to November 2022. This will provide additional support and time for sites to make the transition to Moodle 4.0 or Moodle 4.1."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"(Scheduled) Release date"),(0,o.kt)("th",{parentName:"tr",align:null},"Full support period ends"),(0,o.kt)("th",{parentName:"tr",align:null},"Security support period ends"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Moodle 3.9 (LTS)"),(0,o.kt)("td",{parentName:"tr",align:null},"15 June 2020"),(0,o.kt)("td",{parentName:"tr",align:null},"10 May 2021"),(0,o.kt)("td",{parentName:"tr",align:null},"13 Nov 2023 (ext 6M)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Moodle 3.10"),(0,o.kt)("td",{parentName:"tr",align:null},"9 Nov 2020"),(0,o.kt)("td",{parentName:"tr",align:null},"8 Nov 2021"),(0,o.kt)("td",{parentName:"tr",align:null},"9 May 2022")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Moodle 3.11"),(0,o.kt)("td",{parentName:"tr",align:null},"17 May 2021"),(0,o.kt)("td",{parentName:"tr",align:null},"14 Nov 2022 (ext 6M)"),(0,o.kt)("td",{parentName:"tr",align:null},"13 Nov 2023 (ext 12M)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Moodle 4.0"),(0,o.kt)("td",{parentName:"tr",align:null},"Apr 2022"),(0,o.kt)("td",{parentName:"tr",align:null},"May 2023"),(0,o.kt)("td",{parentName:"tr",align:null},"Nov 2023")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Moodle 4.1 (LTS)"),(0,o.kt)("td",{parentName:"tr",align:null},"Nov 2022"),(0,o.kt)("td",{parentName:"tr",align:null},"Nov 2023"),(0,o.kt)("td",{parentName:"tr",align:null},"Nov 2025")))),(0,o.kt)("h2",{id:"past-releases"},"Past releases"),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Releases"},"Releases")," page for information about past releases."),(0,o.kt)("p",null,"After Moodle 2.0 we switched to time-based releases rather than feature-based releases (see our ",(0,o.kt)("a",{parentName:"p",href:"/devdocs/general/development/process"},"development process"),"). Because of this, the details above on future releases are an indication of current priorities only, and are targeted to be released in the upcoming releases. Anything not ready by the next release date will generally be pushed to the following major release."),(0,o.kt)("h3",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Releases"},"Releases")," - versions of Moodle that have already been released"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Releases#General_release_calendar"},"Key dates relating to future releases"))))}c.isMDXComponent=!0}}]);