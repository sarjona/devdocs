"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[16133],{5338:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var o=r(83117),a=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 2.7.3",tags:["Release notes","Moodle 2.7"],sidebar_position:3,moodleVersion:"2.7.3"},d=void 0,p={unversionedId:"releases/2.7/2.7.3",id:"releases/2.7/2.7.3",title:"Moodle 2.7.3",description:"Release date: 10 November, 2014",source:"@site/general/releases/2.7/2.7.3.md",sourceDirName:"releases/2.7",slug:"/releases/2.7/2.7.3",permalink:"/devdocs/general/releases/2.7/2.7.3",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.7/2.7.3.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.7",permalink:"/devdocs/general/tags/moodle-2-7"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654586859,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:3,frontMatter:{title:"Moodle 2.7.3",tags:["Release notes","Moodle 2.7"],sidebar_position:3,moodleVersion:"2.7.3"},sidebar:"releaseNotes",previous:{title:"Moodle 2.7.2",permalink:"/devdocs/general/releases/2.7/2.7.2"},next:{title:"Moodle 2.7.4",permalink:"/devdocs/general/releases/2.7/2.7.4"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,o.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 10 November, 2014"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.7.3%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.7.3"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38732"},"MDL-38732")," - Grading a course activity, while editing Gradebook, no longer causes unintentional overrides"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47208"},"MDL-47208")," - Hiding an activity with calendar events no longer breaks the calendar for non-admins"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48008"},"MDL-48008"),",  ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46546"},"MDL-46546")," - Grade import gives useful information when an error occurs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47316"},"MDL-47316")," - Course overview block performance has been improved")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46818"},"MDL-46818")," - Form-change checking added to Gradebook setup page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46821"},"MDL-46821")," - Category identification in the Gradebook User report is now clearer"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40343"},"MDL-40343")," - Deeply nested Forum posts display clearly")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275146"},"MSA-14-0035")," Headers not added to some AJAX scripts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275147"},"MSA-14-0036")," XSS in mapcourse script in Feedback module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275152"},"MSA-14-0037")," Weak temporary password generation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275153"},"MSA-14-0038")," Hidden grade information exposed by web services"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275154"},"MSA-14-0039")," Insufficient access check in LTI module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275155"},"MSA-14-0040")," Information leak in Database activity module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275157"},"MSA-14-0041")," Lack of capability check in tags list access"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275158"},"MSA-14-0042")," Lack of access check in IP lookup functionality"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275159"},"MSA-14-0043")," Lack of group check in web service for Forum"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275160"},"MSA-14-0044")," Hardware path disclosed in the error message"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275161"},"MSA-14-0045")," XSS file upload possible through web service"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275162"},"MSA-14-0046")," CSRF in LTI module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275163"},"MSA-14-0047")," Possible data loss in Wiki activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275164"},"MSA-14-0048")," CSRF in forum tracking toggle"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=275165"},"MSA-14-0049")," Possible to print arbitrary message to user by modifying URL")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44536"},"MDL-44536")," - Workshop completion report no longer produces errors"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48010"},"MDL-48010")," - XML grade import from URL is fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47835"},"MDL-47835")," - Upgrade no longer results in problems with the Recent activity block"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46151"},"MDL-46151")," - String filter caching no longer resulting in bad string values"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42974"},"MDL-42974")," - Modal dialogues now work in IE8"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46088"},"MDL-46088")," - Text editors shown correctly in secure quiz windows"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36987"},"MDL-36987")," - Users no longer able to edit locked profile fields")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.7.3"},"Notes de mise \xe0 jour de Moodle 2.7.3")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.7.3"},"Notas de Moodle 2.7.3"))))}h.isMDXComponent=!0}}]);