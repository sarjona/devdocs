"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[74772],{56959:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=r(87462),o=r(63366),s=(r(67294),r(3905)),n=r(13904),l=["components"],i={title:"Moodle 3.6.2",tags:["Release notes","Moodle 3.6"],sidebar_position:2,moodleVersion:"3.6.2"},d=void 0,p={unversionedId:"releases/3.6/3.6.2",id:"releases/3.6/3.6.2",title:"Moodle 3.6.2",description:"Release date: 14 January 2019",source:"@site/general/releases/3.6/3.6.2.md",sourceDirName:"releases/3.6",slug:"/releases/3.6/3.6.2",permalink:"/devdocs/general/releases/3.6/3.6.2",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.6/3.6.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.6",permalink:"/devdocs/general/tags/moodle-3-6"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653650520,formattedLastUpdatedAt:"27/05/2022",sidebarPosition:2,frontMatter:{title:"Moodle 3.6.2",tags:["Release notes","Moodle 3.6"],sidebar_position:2,moodleVersion:"3.6.2"},sidebar:"releaseNotes",previous:{title:"Moodle 3.6.1",permalink:"/devdocs/general/releases/3.6/3.6.1"},next:{title:"Moodle 3.6.3",permalink:"/devdocs/general/releases/3.6/3.6.3"}},m={},u=[{value:"Fixes and improvements",id:"fixes-and-improvements",level:3},{value:"Security issues",id:"security-issues",level:3},{value:"See also",id:"see-also",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,a.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 14 January 2019"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.6.2%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.6.2"),"."),(0,s.kt)("h3",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63994"},"MDL-63994")," - CAS authentication fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63260"},"MDL-63260")," - Exponential question growth prevented when duplicating quizzes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49651"},"MDL-49651")," - Hidden courses no longer send forum notifications to participants"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64290"},"MDL-64290")," - IMS Common Cartridge can restore from custom temp directory"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59954"},"MDL-59954")," - Drag and drop file uploads now respect the ignore file size limits capability"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64400"},"MDL-64400")," - Performance improvement when fetching notifications"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63512"},"MDL-63512")," - Lesson question responses show multimedia consistently"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64419"},"MDL-64419")," - Messaging user info fix in bootstrapbase themes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63722"},"MDL-63722")," - Question bank pagination fix"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60518"},"MDL-60518")," - The result of core_user::is_real_user is now consistent"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64216"},"MDL-64216")," - Database query efficiency improvement to core_grade privacy provider"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64025"},"MDL-64025")," - Admin bookmarks block can bookmark admin categories"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64275"},"MDL-64275")," - All unread counts in message functionality now update without a page refresh"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64426"},"MDL-64426")," - Filter support added to group message conversation names"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64357"},"MDL-64357")," - LTI assignment and grade LineItems are retained after the cleanup scheduled task is run"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64497"},"MDL-64497")," - GDPR moodle_content_writer can no longer cause an endless loop"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64229"},"MDL-64229")," - User images are linked to their profile in the new messaging interface"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61633"},"MDL-61633")," - Assignment grading interface 'Next page' navigation now resets scrolling to the top of the next page")),(0,s.kt)("h3",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=381228"},"MSA-19-0001")," Manage groups capability was missing the XSS risk flag"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=381230"},"MSA-19-0003")," User full name is now escaped in the un-linked userpix page")),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/general/releases/3.6/3.6.1"},"Moodle 3.6.1 release notes"))),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.6.2"},"Notes de mise \xe0 jour de Moodle 3.6.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.6.2"},"Notas de Moodle 3.6.2"))))}k.isMDXComponent=!0}}]);