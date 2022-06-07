"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[13793],{17437:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var o=r(83117),a=r(80102),s=(r(67294),r(3905)),l=r(13904),n=["components"],i={title:"Moodle 3.2.4",tags:["Release notes","Moodle 3.2"],sidebar_position:4,moodleVersion:"3.2.4"},d=void 0,u={unversionedId:"releases/3.2/3.2.4",id:"releases/3.2/3.2.4",title:"Moodle 3.2.4",description:"Release date: 10 July 2017",source:"@site/general/releases/3.2/3.2.4.md",sourceDirName:"releases/3.2",slug:"/releases/3.2/3.2.4",permalink:"/devdocs/general/releases/3.2/3.2.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.2/3.2.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.2",permalink:"/devdocs/general/tags/moodle-3-2"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654586859,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:4,frontMatter:{title:"Moodle 3.2.4",tags:["Release notes","Moodle 3.2"],sidebar_position:4,moodleVersion:"3.2.4"},sidebar:"releaseNotes",previous:{title:"Moodle 3.2.3",permalink:"/devdocs/general/releases/3.2/3.2.3"},next:{title:"Moodle 3.2.5",permalink:"/devdocs/general/releases/3.2/3.2.5"}},p={},m=[{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,n);return(0,s.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,o.Z)({frontMatter:i},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 10 July 2017"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.2.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.2.4"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58136"},"MDL-58136"),' - Show only "in progress" courses in the My courses list in Booost flat navigation'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56046"},"MDL-56046")," - Fixed bug when downloading Quiz statistics report and other multiple-sheet reports"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58646"},"MDL-58646"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59122"},"MDL-59122")," - Number of performance improvements in Boost cache rebuilding"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58310"},"MDL-58310"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59312"},"MDL-59312"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58103"},"MDL-58103"),' - Correctly display AJAX errors and ignore interrupted requests caused by page unload (occasional "undefined" popup)')),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=355554"},"MSA-17-0006")," User fullname disclosure on user preferences page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=355556"},"MSA-17-0015")," Course creators are able to change system default settings for courses"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=355557"},"MSA-17-0016")," Authentication bypass vulnerability with old CAS servers")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46322"},"MDL-46322")," - Assignment: Only enrolled users may be assigned as markers, if admins/managers can view course but are not enrolled they will not be assigned"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58729"},"MDL-58729")," - Performance impovement in MySQL collation change script (follow up for Full UTF-8 Support in MySQL)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57957"},"MDL-57957")," - Assignment: Fixed bug with feedback files not being shown to students if assignment has no grading"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57021"},"MDL-57021")," - Use normal password form field during sign up, adding new user and enrolling in a course"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49988"},"MDL-49988")," - Wiki: line breaks in HTML source code should not affect page layout"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58811"},"MDL-58811")," - Quiz: fixed bug preventing quiz duplication if questions have file links in their texts")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.2.4"},"Notes de mise \xe0 jour de Moodle 3.2.4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.2.4"},"Notas de Moodle 3.2.4"))))}h.isMDXComponent=!0}}]);