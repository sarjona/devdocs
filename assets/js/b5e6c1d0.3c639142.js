"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[42097],{42590:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),l=a(13904),o=["components"],s={title:"Moodle 1.5.3",tags:["Release notes"],sidebar_position:3,moodleVersion:"1.5.3"},u=void 0,d={unversionedId:"releases/1.5/1.5.3",id:"releases/1.5/1.5.3",title:"Moodle 1.5.3",description:"Release date: 11th November 2005",source:"@site/general/releases/1.5/1.5.3.md",sourceDirName:"releases/1.5",slug:"/releases/1.5/1.5.3",permalink:"/devdocs/general/releases/1.5/1.5.3",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.5/1.5.3.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654695996,formattedLastUpdatedAt:"08/06/2022",sidebarPosition:3,frontMatter:{title:"Moodle 1.5.3",tags:["Release notes"],sidebar_position:3,moodleVersion:"1.5.3"},sidebar:"releaseNotes",previous:{title:"Moodle 1.5.2",permalink:"/devdocs/general/releases/1.5/1.5.2"},next:{title:"Moodle 1.5.4",permalink:"/devdocs/general/releases/1.5/1.5.4"}},m={},p=[{value:"A few new things",id:"a-few-new-things",level:2},{value:"Various fixes",id:"various-fixes",level:2},{value:"General",id:"general",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Enrolment and metacourses",id:"enrolment-and-metacourses",level:3},{value:"Resources",id:"resources",level:3},{value:"Forums",id:"forums",level:3},{value:"Blocks",id:"blocks",level:3},{value:"Quiz",id:"quiz",level:3},{value:"SCORM",id:"scorm",level:3},{value:"Wiki",id:"wiki",level:3},{value:"Filters",id:"filters",level:3}],g={toc:p};function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,(0,n.Z)({frontMatter:s},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,r.kt)("p",null,"Release date: 11th November 2005"),(0,r.kt)("p",null,"(Because this release contains important security fixes, we highly advise that sites using any previous version of Moodle upgrade to this version as soon as possible.)"),(0,r.kt)("h2",{id:"a-few-new-things"},"A few new things"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We now have SCORM 1.3 (SCORM 2004) support!"),(0,r.kt)("li",{parentName:"ul"},'Much improved Assignment grading interface, including "quick grading" options'),(0,r.kt)("li",{parentName:"ul"},"A new Single-Sign-On API is available")),(0,r.kt)("h2",{id:"various-fixes"},"Various fixes"),(0,r.kt)("h3",{id:"general"},"General"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Contains warnings when Moodle is used on an PHP configuration known to be insecure"),(0,r.kt)("li",{parentName:"ul"},"Contains fixes for some recently reported security problems (see ",(0,r.kt)("a",{parentName:"li",href:"http://security.moodle.org/"},"security.moodle.org"),")"),(0,r.kt)("li",{parentName:"ul"},"Backups now runs a lot faster medium/large installs. Many issues fixed in this area"),(0,r.kt)("li",{parentName:"ul"},'Listing of directory sizes can be made much faster on Linux/Unix servers, thanks to a performance fix you can enable from Admin->Variables: "path_to_du"'),(0,r.kt)("li",{parentName:"ul"},"We now log more meaningful IP addresses when the server or the clients are working behind a proxy"),(0,r.kt)("li",{parentName:"ul"},"Fixed some issues with PHP accelerators"),(0,r.kt)("li",{parentName:"ul"},"Upgrade scripts have been refined and work much better for PostgreSQL installations"),(0,r.kt)("li",{parentName:"ul"},"General PostgreSQL port code cleanup"),(0,r.kt)("li",{parentName:"ul"},"Upgrading to 1.5.3 will fix any legacy Journal to Online Assignment upgrade issues"),(0,r.kt)("li",{parentName:"ul"},"RSS libraries now support RSS 2.0 categories, see bug 3654"),(0,r.kt)("li",{parentName:"ul"},"Better accesibilty in file uploads, see bug 3662"),(0,r.kt)("li",{parentName:"ul"},"Better support for site-wide HTTPS, see bug 3848"),(0,r.kt)("li",{parentName:"ul"},"We now send away bots (like Googlebot) from that try mangled URLs, see bug 3958"),(0,r.kt)("li",{parentName:"ul"},"Better DST support for non-logged-in users"),(0,r.kt)("li",{parentName:"ul"},"Better DST support for repeat events in Calendar"),(0,r.kt)("li",{parentName:"ul"},"Small fixes to the lesson, choice and grade modules"),(0,r.kt)("li",{parentName:"ul"},"Minor CSS improvements to formal_white and orangewhite themes"),(0,r.kt)("li",{parentName:"ul"},"Better pagination in course listing and loglive pages"),(0,r.kt)("li",{parentName:"ul"},"Fixed an IE-only bug related to HTMLArea content where user-edited tables could float and hide part of the UI.")),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixes to change password/forgotten password with external auth"),(0,r.kt)("li",{parentName:"ul"},"Data fetched from external DB or LDAP is now truncated correctly"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 4305 -- better login block behaviour when using secureforms"),(0,r.kt)("li",{parentName:"ul"},"Better support for utf-8 user data from external auth"),(0,r.kt)("li",{parentName:"ul"},"LDAP: General fixes covering sync_users script and logging of errors"),(0,r.kt)("li",{parentName:"ul"},"LDAP: Fixed bug 3141 - Can't update external data with LDAP authentication"),(0,r.kt)("li",{parentName:"ul"},"LDAP: Fixed bug 3992 - LDAP password including a quote does not work - credits go to Kita"),(0,r.kt)("li",{parentName:"ul"},"LDAP: Better support for ActiveDirectory."),(0,r.kt)("li",{parentName:"ul"},"LDAP: Fixed bug #3594"),(0,r.kt)("li",{parentName:"ul"},"LDAP: Better handling of multi-source field mapping"),(0,r.kt)("li",{parentName:"ul"},"LDAP: Fix for using DN as idnumber - thanks fo Jeff Graham - ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=28840"},"http://moodle.org/mod/forum/discuss.php?d=28840"))),(0,r.kt)("h3",{id:"enrolment-and-metacourses"},"Enrolment and metacourses"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Metacourses: Prevent normal users to gain access to meta courses via manual enrolment"),(0,r.kt)("li",{parentName:"ul"},"Metacourses: better support for MySQL v3.23.x"),(0,r.kt)("li",{parentName:"ul"},"DB: Enrolment lookups now work reliably with Moodle on MySQL and Postgres"),(0,r.kt)("li",{parentName:"ul"},"DB: Non-MySQL databases work again as external enrolment databases"),(0,r.kt)("li",{parentName:"ul"},"LDAP: Fixed a wrong call to add_teacher in LDAP plugin."),(0,r.kt)("li",{parentName:"ul"},"LDAP: Servers being down or unavailable no longer prevent logins"),(0,r.kt)("li",{parentName:"ul"},"LDAP: Course auto-creation works again"),(0,r.kt)("li",{parentName:"ul"},"LDAP: Fixed several bugs reported by Jeff Graham and Barron Koralesky -- including bugs 3912 and 3974"),(0,r.kt)("li",{parentName:"ul"},"LDAP: We can now bind non-anonymously to LDAP"),(0,r.kt)("li",{parentName:"ul"},"Authorize.net: several fixes")),(0,r.kt)("h3",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bugfix: Avoid linking to empty or unlinkable activity names")),(0,r.kt)("h3",{id:"forums"},"Forums"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Big and small optimizations to tracking of read/unread messages, specially for PostgreSQL"),(0,r.kt)("li",{parentName:"ul"},"Fixed some PostgreSQL bugs"),(0,r.kt)("li",{parentName:"ul"},"Some more actions are now supported by backup/restore when processing log records, see bug 3582"),(0,r.kt)("li",{parentName:"ul"},"Now message forum RSS feeds are including category data -- useful under some RSS agregators able to group messages, see bug 3654"),(0,r.kt)("li",{parentName:"ul"},"Fixed paging on forum search")),(0,r.kt)("h3",{id:"blocks"},"Blocks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Several performance improvements"),(0,r.kt)("li",{parentName:"ul"},"Fixes to the upgrade process, including PostgreSQL syntax and lower memory usage"),(0,r.kt)("li",{parentName:"ul"},"Brought in several bugfixes from 1.6dev"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 3478: Cannot add RSS feed as course creator"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 3793: Prevent warning message when configuring a glossary_random block in a course which has no glossaries")),(0,r.kt)("h3",{id:"quiz"},"Quiz"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some CSS style fixes"),(0,r.kt)("li",{parentName:"ul"},"Better compatibility with themes that contain forms in the headers"),(0,r.kt)("li",{parentName:"ul"},"Highlighting of correct answers can now be turned off"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 3986: Too many random questions. (mindforge)"),(0,r.kt)("li",{parentName:"ul"},"Fixed missing action icons"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 3899 and removed some 'missing course object' messages"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 3950: Ee-attempt button inconsistency for multi-attempt quizzes"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 3953: Quiz/report.php pagesize can be set to 0, credits to Jean-Michel"),(0,r.kt)("li",{parentName:"ul"},"Fixed potential data data corruption bug 3915"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 3884: Quiz correct highlights missing for 2 of 3 options."),(0,r.kt)("li",{parentName:"ul"},"Fix for the Student review highlight doesn't seem to work bug"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 3804: Differences in question types between 1.5 and 1.6"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 3822: don't count previews as attempts"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 3807: Question numbering issue"),(0,r.kt)("li",{parentName:"ul"},"Fixes for the item analysis plug-in, assembled by Jean-Michel"),(0,r.kt)("li",{parentName:"ul"},"Now we reset the timeout counter to avoid timeouts"),(0,r.kt)("li",{parentName:"ul"},"Several improvements contributed by Jean-Michel Vedrine. You can now change the number of attempts per page displayed on screen, and download results to Excel/text file, including detailed grades"),(0,r.kt)("li",{parentName:"ul"},"Fixed export bug with non-English languages")),(0,r.kt)("h3",{id:"scorm"},"SCORM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We now support SCORM 1.3 (SCORM 2004)!"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug with next and prev SCO search"),(0,r.kt)("li",{parentName:"ul"},"Fixed bugs related to masteryscore"),(0,r.kt)("li",{parentName:"ul"},"Fixed a problem in AICC course tracking")),(0,r.kt)("h3",{id:"wiki"},"Wiki"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Now paging of older versions is showed and working properly, see bug 3750")),(0,r.kt)("h3",{id:"filters"},"Filters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mediaplugin filter now finds multi-line links in HTML code"),(0,r.kt)("li",{parentName:"ul"},"Censor filter: Added original word as title to the blacked-out version. The filter can obscure actual important words by mistake (eg Dickens) and there needs to be some way to recover the meaning")))}c.isMDXComponent=!0}}]);