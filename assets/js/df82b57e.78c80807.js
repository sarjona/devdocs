"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[93081],{27183:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var a=o(87462),r=o(63366),s=(o(67294),o(3905)),i=o(13904),n=["components"],l={title:"Moodle 2.1",tags:["Release notes","Moodle 2.1"],sidebar_position:-201,moodleVersion:"2.1"},d=void 0,u={unversionedId:"releases/2.1",id:"releases/2.1",title:"Moodle 2.1",description:"Moodle 2.1",source:"@site/general/releases/2.1.md",sourceDirName:"releases",slug:"/releases/2.1",permalink:"/devdocs/general/releases/2.1",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.1.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.1",permalink:"/devdocs/general/tags/moodle-2-1"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653562912,formattedLastUpdatedAt:"26/05/2022",sidebarPosition:-201,frontMatter:{title:"Moodle 2.1",tags:["Release notes","Moodle 2.1"],sidebar_position:-201,moodleVersion:"2.1"},sidebar:"releaseNotes",previous:{title:"Moodle 2.2.11",permalink:"/devdocs/general/releases/2.2/2.2.11"},next:{title:"Moodle 2.1.1",permalink:"/devdocs/general/releases/2.1/2.1.1"}},p={},m=[{value:"Moodle 2.1",id:"moodle-21",level:2},{value:"Major new features",id:"major-new-features",level:3},{value:"New question engine",id:"new-question-engine",level:4},{value:"Ability to restore the course contents from Moodle 1.9 backup files",id:"ability-to-restore-the-course-contents-from-moodle-19-backup-files",level:4},{value:"Support for mobile devices",id:"support-for-mobile-devices",level:4},{value:"Other highlights",id:"other-highlights",level:3},{value:"Security issues",id:"security-issues",level:3},{value:"Upgrading",id:"upgrading",level:3},{value:"For developers: API changes",id:"for-developers-api-changes",level:3},{value:"See also",id:"see-also",level:2},{value:"Translations",id:"translations",level:2}],h={toc:m};function c(e){var t=e.components,o=(0,r.Z)(e,n);return(0,s.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,a.Z)({frontMatter:l},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("h2",{id:"moodle-21"},"Moodle 2.1"),(0,s.kt)("p",null,"Released: 1st July 2011"),(0,s.kt)("h3",{id:"major-new-features"},"Major new features"),(0,s.kt)("h4",{id:"new-question-engine"},"New question engine"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Moodle question system has been rewritten to make it much more robust and to support lots of new possible functionality."),(0,s.kt)("li",{parentName:"ul"},"See summary of changes at the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_2.1_release_notes/New_question_engine"},"New question engine")," page and more details in the tracker ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20636"},"MDL-20636"),"."),(0,s.kt)("li",{parentName:"ul"},"Warning: This change requires a major database upgrade.  If you have a lot of question attempts in your site, you probably need to ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/21/en/Upgrading_to_Moodle_2.1#Planning_the_question_engine_upgrade"},"plan your upgrade in stages"),", using some extra code that is not in the core system."),(0,s.kt)("li",{parentName:"ul"},"Backward compatibility warning: ",(0,s.kt)("em",{parentName:"li"},"Random short-answer matching")," question type was moved out of the main Moodle distribution.")),(0,s.kt)("h4",{id:"ability-to-restore-the-course-contents-from-moodle-19-backup-files"},"Ability to restore the course contents from Moodle 1.9 backup files"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Course backup files created in Moodle 1.9 can be now restored during the normal restore process."),(0,s.kt)("li",{parentName:"ul"},"No user data (like forum posts, grades, submissions, ...) are supported yet. Blocks are not restored yet."),(0,s.kt)("li",{parentName:"ul"},"See ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-22414"},"MDL-22414")," for details.")),(0,s.kt)("h4",{id:"support-for-mobile-devices"},"Support for mobile devices"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Moodle 2.1 comes with a built-in web service designed for mobile applications (required to run the official ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Mobile_app"},"Moodle app"),")"),(0,s.kt)("li",{parentName:"ul"},"See ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27551"},"MDL-27551")," and ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Enable_mobile_web_services"},"Enable mobile web services documentation")," for details"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25394"},"MDL-25394")," Improved Support for Mobile Themes and Browser Detection")),(0,s.kt)("h3",{id:"other-highlights"},"Other highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-11288"},"MDL-11288")," Ability to copy (or clone) an activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27428"},"MDL-27428")," Ability to navigate navigation/settings menu and dock with keyboard"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26784"},"MDL-26784")," Improved plugins check/overview page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27500"},"MDL-27500")," Upgraded TinyMCE to the latest version 3.4.2"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26105"},"MDL-26105")," User friendly block settings and help information"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27251"},"MDL-27251")," New performance setting for calculating an appropriate timeout during large cURL requests"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25805"},"MDL-25805")," Friendlier navigation for parent roles to see mentees in courses"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27577"},"MDL-27577")," Daylight saving should be calculated for users having string timezone"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27171"},"MDL-27171")," Messaging Improvements: Site administrators can now control which message delivery methods can be used for each message type.  (In 2.0 students could switch off notifications.  In 2.1 this can be overidden)")),(0,s.kt)("h3",{id:"security-issues"},"Security issues"),(0,s.kt)("p",null,"There were no significant security issues fixed in this release."),(0,s.kt)("h3",{id:"upgrading"},"Upgrading"),(0,s.kt)("p",null,"When upgrading to Moodle 2.1, you must first upgrade to Moodle 1.9 or (preferably) 2.0. We advise that you test the upgrade first on a COPY of your production site, to make sure it works as you expect."),(0,s.kt)("p",null,"Please also check that you have PHP 5.3.2 or later, as the minimum required version has increased since Moodle 2.0."),(0,s.kt)("p",null,"For further information, see ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/21/en/Upgrading_to_Moodle_2.1"},"Upgrading to Moodle 2.1"),"."),(0,s.kt)("h3",{id:"for-developers-api-changes"},"For developers: API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The new question engine changes the API for question types. See ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Developing_a_Question_Type"},"Developing a Question Type"),"."),(0,s.kt)("li",{parentName:"ul"},"The new question engine changes the API for activity modules that use the question bank. See ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Using_the_question_engine_from_module"},"Using the question engine from module"),"."),(0,s.kt)("li",{parentName:"ul"},"There is a new API available for activity modules to support restore of 1.9 backup files. See ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Backup_1.9_conversion_for_developers"},"Backup 1.9 conversion for developers")),(0,s.kt)("li",{parentName:"ul"},"The Messaging API now allows plugin creators to specify default message providers for message outputs. See ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Messaging_2.0_improvements#Adding_new_message_type"},"Messaging 2.0 improvements#Adding new message type")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28166"},"MDL-28166")," Note that the two events triggered by the quiz module (quiz_attempt_started and quiz_attempt_submitted) changed slightly to follow a more consistent naming scheme. We do not believe they were used much, so we decided to fix them now, so we could have a nice, stable API in the future.")),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/21/en/Category:New_features"},"User documentation of new features in Moodle 2.1"))),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.1"},"Notas de Moodle 2.1")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.1"},"Notes de mise \xe0 jour de Moodle 2.1"))))}c.isMDXComponent=!0}}]);