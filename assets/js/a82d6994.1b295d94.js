"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[75777],{99333:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var o=a(83117),r=a(80102),s=(a(67294),a(3905)),l=a(13904),i=["components"],n={title:"Moodle 3.3.6",tags:["Release notes","Moodle 3.3"],sidebar_position:6,moodleVersion:"3.3.6"},d=void 0,p={unversionedId:"releases/3.3/3.3.6",id:"releases/3.3/3.3.6",title:"Moodle 3.3.6",description:"Release date: 17 May 2018",source:"@site/general/releases/3.3/3.3.6.md",sourceDirName:"releases/3.3",slug:"/releases/3.3/3.3.6",permalink:"/devdocs/general/releases/3.3/3.3.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.3/3.3.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.3",permalink:"/devdocs/general/tags/moodle-3-3"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654608238,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:6,frontMatter:{title:"Moodle 3.3.6",tags:["Release notes","Moodle 3.3"],sidebar_position:6,moodleVersion:"3.3.6"},sidebar:"releaseNotes",previous:{title:"Moodle 3.3.5",permalink:"/devdocs/general/releases/3.3/3.3.5"},next:{title:"Moodle 3.3.7",permalink:"/devdocs/general/releases/3.3/3.3.7"}},m={},u=[{value:"GDPR preparation",id:"gdpr-preparation",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,o.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 17 May 2018"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.3.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.3.6"),"."),(0,s.kt)("h2",{id:"gdpr-preparation"},"GDPR preparation"),(0,s.kt)("p",null,"Plugins are available for Moodle 3.3 and 3.4 to help Moodle sites to comply with GDPR - ",(0,s.kt)("a",{parentName:"p",href:"https://moodle.org/plugins/tool_dataprivacy"},"Data privacy"),", ",(0,s.kt)("a",{parentName:"p",href:"https://moodle.org/plugins/tool_policy"},"Policies"),". In Moodle 3.5 they will be included in the standard distribution. Work on changes in core is almost completed, the new minor release with the remaining components will follow in several days."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61306"},"MDL-61306")," - Implement privacy API in various components and standard plugins for user data export and deletion")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58697"},"MDL-58697"),' - Assignment: Fixed incorrect "No submission" status if group submission changed to individual submission'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61724"},"MDL-61724")," - File resource: Fixed download problem for files with long names"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55532"},"MDL-55532")," - Show grade category name in Grades Export"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61714"},"MDL-61714")," - GDPR and privacy: Change default age of digital consent according to current legislation on each country"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52989"},"MDL-52989")," - Lesson: Fixed regression in cluster navigation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60196"},"MDL-60196")," - Display custom external tool icon in activity chooser"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61800"},"MDL-61800")," - A bug which led to the failure of some Scheduled Tasks in certain circmstances has been fixed."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61733"},"MDL-61733")," - Database module: Fixed bug with creating tables in templates using Atto editor"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61348"},"MDL-61348")," - Quiz: Fixed a report bug where the count of the number of attempts is sometimes incorrect in group averages"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61520"},"MDL-61520")," - Quiz: Fixed a bug where the question text was no longer exported in the quiz statistics HTML download"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62202"},"MDL-62202")," - GDPR: Moved the Privacy and policies administration section to the Users tab (when GDPR plugins are installed)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62042"},"MDL-62042")," - Global search: Remove unicode non-characters from indexing to resolve indexing errors"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61827"},"MDL-61827")," - Facebook OAuth2: Update the Facebook Graph API to v2.12")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=371199"},"MSA-18-0007")," Calculated question type allows remote code execution by Question authors"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=371200"},"MSA-18-0008")," Users can download any file via portfolio assignment caller class"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=371201"},"MSA-18-0009")," Portfolio forum caller class allows a user to download any file"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=371202"},"MSA-18-0010")," User can shift a block from Dashboard to any page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=371203"},"MSA-18-0011")," User who did not agree to the site policies can see the site homepage as if they had full site access"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=371204"},"MSA-18-0012")," Portfolio script allows instantiation of class chosen by user")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.3.6"},"Notes de mise \xe0 jour de Moodle 3.3.6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.3.6"},"Notas de Moodle 3.3.6"))))}h.isMDXComponent=!0}}]);