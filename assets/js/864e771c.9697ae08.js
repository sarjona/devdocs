"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[46156],{26626:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var a=o(87462),l=o(63366),r=(o(67294),o(3905)),n=o(13904),i=["components"],s={title:"Moodle 1.8",tags:["Release notes","Moodle 1.8"],sidebar_position:-108,moodleVersion:"1.8"},d=void 0,m={unversionedId:"releases/1.8",id:"releases/1.8",title:"Moodle 1.8",description:"Moodle 1.8",source:"@site/general/releases/1.8.md",sourceDirName:"releases",slug:"/releases/1.8",permalink:"/devdocs/general/releases/1.8",editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.8.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 1.8",permalink:"/devdocs/general/tags/moodle-1-8"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653493107,formattedLastUpdatedAt:"25/05/2022",sidebarPosition:-108,frontMatter:{title:"Moodle 1.8",tags:["Release notes","Moodle 1.8"],sidebar_position:-108,moodleVersion:"1.8"},sidebar:"releaseNotes",previous:{title:"Moodle 1.9.19",permalink:"/devdocs/general/releases/1.9/1.9.19"},next:{title:"Moodle 1.8.1",permalink:"/devdocs/general/releases/1.8/1.8.1"}},u={},p=[{value:"Moodle 1.8",id:"moodle-18",level:2},{value:"Headline features",id:"headline-features",level:3},{value:"Known problems",id:"known-problems",level:3},{value:"Module improvements",id:"module-improvements",level:3},{value:"See also",id:"see-also",level:3}],c={toc:p};function h(e){var t=e.components,o=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(n.Z,(0,a.Z)({frontMatter:s},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,r.kt)("h2",{id:"moodle-18"},"Moodle 1.8"),(0,r.kt)("p",null,"Release date: 31st March 2007"),(0,r.kt)("p",null,"Here is ",(0,r.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/ReleaseNote.jspa?projectId=10011&styleName=Html&version=10130"},"the full list of fixed issues in 1.8"),"."),(0,r.kt)("h3",{id:"headline-features"},"Headline features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/general/development/policies/accessibility"},"Accessibility")," - Moodle.com",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Moodle interface is now compliant with XHTML Strict 1.0 and major accessibility standards."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/MNet"},"Moodle Network")," - Catalyst, Richard Wyles",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'We can now set up peer Moodle installations allowing users to roam from one site to another, using comprehensive SSO and transparent remote enrolments.  Administrators at the originating Moodle install can see logs of remote activity. You can also run your Moodle in "Hub" mode where any Moodle install can connect and users roam across.'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Web_Services_API"},"Web Services API")," - Catalyst, Richard Wyles",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Moodle Network code includes an XML-RPC call dispatcher that can expose the WHOLE Moodle API to trusted hosts.  We will building on this in further versions but you can start using it now if you need to."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/lib/formslib.php"},"Moodle forms library")," - Moodle.com",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Majority of forms now use a single API for defining forms consistently and collecting data safely without using any HTML at all."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Multi_Authentication"},"Multi Authentication")," - I\xf1aki Arenaza / Catalyst / Moodle.com",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It is now easier to configure multiple sources of authentication at once.  WARNING: the format for authentication plugins has changed, so custom plugins may be broken, however it's very easy to convert old code to the new format. More details can be found in /auth/README.txt."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Customisable_user_profiles"},"Customisable User Profiles")," - Pukunui Technology",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allow new arbitrary fields to be added to the user profile, with more control over what fields appear on what signup and profile editing screens."))),(0,r.kt)("li",{parentName:"ul"},"Groups refactor - OU / Moodle.com",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Groups code has been reorganised to make it more flexible for the future (see 1.9)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://tracker.moodle.org/secure/IssueNavigator.jspa?mode=hide&requestId=10221"},"Roles improvements")," - Moodle.com",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'In addition to many Roles fixes and refinements, Moodle 1.8 has separated the SYSTEM context from the SITE context (which makes it more like 1.6 used to work).  The SITE context is the "front page course" and its activities.  This should make it easier for admins to set up permissions. Login as and switching of roles was rewritten. Administrators can view recommended permission settings of legacy roles and may reset legacy roles to defaults.'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://tracker.moodle.org/browse/MDL-7993"},"Support for ODS export")," - Moodle.com",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Open Document Format should solve majority of current problems with exports into proprietary Excel format. You may need to install special import plugin if you are using MS Office.")))),(0,r.kt)("h3",{id:"known-problems"},"Known problems"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CAS auth not working")),(0,r.kt)("h3",{id:"module-improvements"},"Module improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Authorize.net_Payment_Gateway"},"Authorize.net Payment Gateway")," enrolment plugin",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Payment managers can obtain an authorization code over phone from customer's bank if the credit card of the user cannot be captured on the internet directly.")))),(0,r.kt)("h3",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Upgrading_to_Moodle_1.8"},"Upgrading to Moodle 1.8"))))}h.isMDXComponent=!0}}]);