"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[73953],{97142:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),n=r(13904),s=["components"],i={title:"Moodle 3.7.4",tags:["Release notes","Moodle 3.7"],sidebar_position:4,moodleVersion:"3.7.4"},d=void 0,p={unversionedId:"releases/3.7/3.7.4",id:"releases/3.7/3.7.4",title:"Moodle 3.7.4",description:"Release date: 13 January 2020",source:"@site/general/releases/3.7/3.7.4.md",sourceDirName:"releases/3.7",slug:"/releases/3.7/3.7.4",permalink:"/devdocs/general/releases/3.7/3.7.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.7/3.7.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.7",permalink:"/devdocs/general/tags/moodle-3-7"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654586859,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:4,frontMatter:{title:"Moodle 3.7.4",tags:["Release notes","Moodle 3.7"],sidebar_position:4,moodleVersion:"3.7.4"},sidebar:"releaseNotes",previous:{title:"Moodle 3.7.3",permalink:"/devdocs/general/releases/3.7/3.7.3"},next:{title:"Moodle 3.7.5",permalink:"/devdocs/general/releases/3.7/3.7.5"}},m={},u=[{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,a.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 13 January 2020"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.7.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.7.4"),"."),(0,l.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48024"},"MDL-48024")," - Plugins should be able to provide data generators for Behat"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65956"},"MDL-65956")," - A teacher trying to remove a submission without having the relevant capability encounters an error"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67410"},"MDL-67410")," - Ajax call to enroll potential users is too slow"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66581"},"MDL-66581")," - Password reset email doesn't fill in $a->link when auth_method is LDAP"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66503"},"MDL-66503")," - Scorm player is really narrow in new window on classic theme"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66871"},"MDL-66871")," - Moodle calendar is not able to import .ics files with repeated events anymore"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65735"},"MDL-65735")," - Activity completion report - clicking initial should reset page number"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67458"},"MDL-67458")," - Fatal error if cohort_role_sync task is run when an assigned role no longer exists"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67300"},"MDL-67300")," - Calendar: Inconsistent behaviour of managegroupentries capability"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67154"},"MDL-67154")," - Quiz print version should not split questions over two pages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66708"},"MDL-66708")," - LTI 1.3 private key reset on each tool edit"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64695"},"MDL-64695")," - tool_dataprivacy doesn't filter multilang tags within $SITE->fullname"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67233"},"MDL-67233")," - Choices with only open dates in the future do not appear on timeline"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67336"},"MDL-67336")," - Forum inline reply option is applying filters before saving content in the DB"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67596"},"MDL-67596")," - Cron / adhoc task runners ramp up slowly for no reason")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.7.4"},"Notes de mise \xe0 jour de Moodle 3.7.4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.7.4"},"Notas de Moodle 3.7.4"))))}k.isMDXComponent=!0}}]);