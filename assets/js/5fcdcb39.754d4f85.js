"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[90692],{36640:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var r=a(83117),o=a(80102),s=(a(67294),a(3905)),i=a(13904),l=["components"],n={title:"Moodle 2.1.6",tags:["Release notes","Moodle 2.1"],sidebar_position:6,moodleVersion:"2.1.6"},d=void 0,p={unversionedId:"releases/2.1/2.1.6",id:"releases/2.1/2.1.6",title:"Moodle 2.1.6",description:"Release date: 14 May 2012",source:"@site/general/releases/2.1/2.1.6.md",sourceDirName:"releases/2.1",slug:"/releases/2.1/2.1.6",permalink:"/devdocs/general/releases/2.1/2.1.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.1/2.1.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.1",permalink:"/devdocs/general/tags/moodle-2-1"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654586859,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:6,frontMatter:{title:"Moodle 2.1.6",tags:["Release notes","Moodle 2.1"],sidebar_position:6,moodleVersion:"2.1.6"},sidebar:"releaseNotes",previous:{title:"Moodle 2.1.5",permalink:"/devdocs/general/releases/2.1/2.1.5"},next:{title:"Moodle 2.1.7",permalink:"/devdocs/general/releases/2.1/2.1.7"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,r.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 14 May 2012"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.1.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.1.6"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32431"},"MDL-32431")," Calendar events can be backed-up and restored"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29262"},"MDL-29262")," Moodle 2 backup_controllers table is no longer needlessly massive")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27862"},"MDL-27862")," Ability to unset a theme"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31835"},"MDL-31835")," Recent conversations link added when viewing a message"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27427"},"MDL-27427")," Option added to delete external blog entries")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203041"},"MSA-12-0024")," Hidden information access issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203042"},"MSA-12-0025")," Personal communication access issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203043"},"MSA-12-0026")," Quiz capability issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203044"},"MSA-12-0027")," Question bank capability issues"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203045"},"MSA-12-0028")," Insecure authentication issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203046"},"MSA-12-0029")," Information editing access issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203048"},"MSA-12-0030")," Capability manipulation issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203049"},"MSA-12-0031")," Cross-site scripting vulnerability in Wiki"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203050"},"MSA-12-0032")," Cross-site scripting vulnerability in Web services"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203054"},"MSA-12-0035"),' Cross-site scripting vulnerability in "download all"'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203055"},"MSA-12-0036")," Cross-site scripting vulnerability in category identifier"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203056"},"MSA-12-0037")," Write access issue in Database activity module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=203057"},"MSA-12-0038")," Calendar event write permission issue")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32061"},"MDL-32061")," Backup fixed when there is a lesson with attempts in the course"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31008"},"MDL-31008")," CSS fixed to display dimmed objects"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30867"},"MDL-30867")," Lesson essay question formatting fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31528"},"MDL-31528")," Breadcrumbs appearing consistently when editing is off"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31631"},"MDL-31631")," Caching fixed so deleted activities do not remain listed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26674"},"MDL-26674")," Wiki Module activity logs activity fully"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31510"},"MDL-31510")," Students in groups see only assignments in the Gradebook according to their group allocation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32141"},"MDL-32141")," Custom TinyMCE additions now work in Firefox 11")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.1.6"},"Notes de mise \xe0 jour de Moodle 2.1.6"))))}h.isMDXComponent=!0}}]);