"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[24155],{53145:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var i=a(87462),n=a(63366),s=(a(67294),a(3905)),r=a(13904),o=["components"],l={title:"Bug triage",tags:["Processes","Tracker"]},d=void 0,p={unversionedId:"development/process/triage",id:"development/process/triage",title:"Bug triage",description:"Triage is a medical term referring to the process of prioritising patients based on the severity of their condition so as to maximise benefit (help as many as possible) when resources are limited.",source:"@site/general/development/process/triage.md",sourceDirName:"development/process",slug:"/development/process/triage",permalink:"/devdocs/general/development/process/triage",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/process/triage.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Tracker",permalink:"/devdocs/general/tags/tracker"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1653493107,formattedLastUpdatedAt:"25/05/2022",frontMatter:{title:"Bug triage",tags:["Processes","Tracker"]},sidebar:"process",previous:{title:"Development process",permalink:"/devdocs/general/development/process"},next:{title:"Development in Moodle",permalink:"/devdocs/general/development/"}},m={},h=[{value:"Get involved",id:"get-involved",level:2},{value:"The triage process",id:"the-triage-process",level:2},{value:"Initial screening",id:"initial-screening",level:3},{value:"Confirming the issue",id:"confirming-the-issue",level:3},{value:"Following up on issues",id:"following-up-on-issues",level:3},{value:"Revisiting old issues",id:"revisiting-old-issues",level:3},{value:"Comments templates",id:"comments-templates",level:3},{value:"Triaging priorities and the Triaging Dashboard",id:"triaging-priorities-and-the-triaging-dashboard",level:2},{value:"Creating a filter and gadget for triaging",id:"creating-a-filter-and-gadget-for-triaging",level:2},{value:"See also",id:"see-also",level:2}],u={toc:h};function c(e){var t=e.components,d=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},u,d,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,(0,i.Z)({frontMatter:l},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Triage is a medical term referring to the process of prioritising patients based on the severity of their condition so as to maximise benefit (help as many as possible) when resources are limited."),(0,s.kt)("p",null,"Bug triage is a similar process where tracker issues are screened and prioritised. The triage process should help ensure that we appropriately manage all reported issues - bugs as well as improvements and feature requests."),(0,s.kt)("p",null,"Triage initially happens shortly after the issue was reported but it can be repeated later if the initial assumptions were wrong, the issue was resolved in another way, the affected versions need updating, or there are other reasons to review the issue."),(0,s.kt)("h2",{id:"get-involved"},"Get involved"),(0,s.kt)("p",null,"Anyone can do triage in the form of correcting the components and/or affected versions, linking to related issues, and of course commenting asking for clarification, confirming bug, redirecting to the forums, and more. Users in ",(0,s.kt)("strong",{parentName:"p"},"jira-developers")," and ",(0,s.kt)("strong",{parentName:"p"},"moodle-triage")," groups can edit any issue, ",(0,s.kt)("strong",{parentName:"p"},"jira-users")," can comment on any issue or edit issues they reported. Please see ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDLSITE-3592"},"MDLSITE-3592")," if you are not a developer but would like to help with the triage process."),(0,s.kt)("p",null,"Adding the ",(0,s.kt)("inlineCode",{parentName:"p"},"triaged")," label and placing the issue on the backlog should only be done by the component lead, or an HQ developer. Any user can remove the ",(0,s.kt)("inlineCode",{parentName:"p"},"triaged")," label from the an issue, or replace it with ",(0,s.kt)("inlineCode",{parentName:"p"},"triaging_in_progress")," if they want to request an additional triage."),(0,s.kt)("h2",{id:"the-triage-process"},"The triage process"),(0,s.kt)("h3",{id:"initial-screening"},"Initial screening"),(0,s.kt)("p",null,"First of all, identify the issues that should be closed or placed under investigation. Ask the following questions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Is the issue a request for support/help?")," If so, the reporter should be directed to the forums to seek help and the issue should be closed as ",(0,s.kt)("inlineCode",{parentName:"li"},"Not a bug"),". Sometimes improvement requests can be phrased as a question, though; if this is the case, ask the reporter to reword the description to describe an improvement."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Has the reporter mistaken the Moodle Tracker with their own support desk?")," Sometimes people mistake the Moodle Tracker as a place to request help about their own Moodle instance, often about logging in. We need to refer the user to their instance administrators and close the issue as ",(0,s.kt)("inlineCode",{parentName:"li"},"Not a bug"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Has the issue been reported previously?")," If so, link to a duplicate issue and close the newly reported issue as a ",(0,s.kt)("inlineCode",{parentName:"li"},"Duplicate")," with no fix version set. Encourage the reporter to search before reporting. If a newer issue has a patch or more voters/watchers, consider closing the older issue. Checking for duplicates first will save you having to check the rest of the issue. See ",(0,s.kt)("a",{parentName:"li",href:"../tracker/tips"},"Tracker tips")," for help with effective search of tracker."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Does the problem only affect unsupported versions?")," If so, the issue should be closed using ",(0,s.kt)("inlineCode",{parentName:"li"},"Fixed")," (preferred as it sounds better) when the issue is resolved in current versions, or ",(0,s.kt)("inlineCode",{parentName:"li"},"Not a bug")," when the issue has disappeared due to changes leading to current versions. See the ",(0,s.kt)("a",{parentName:"li",href:"/general/releases"},"Releases")," page to for the list of currently supported versions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Did the problem arise because of a mistake or lack of documentation?")," If it appears that the reporter does not understand a particular feature in Moodle and the documentation is lacking, ask the reporter where would they expect to find documentation about it. Then simply edit the relevant pages in the documentation wiki and close the issue. If the required change is significant, add the ",(0,s.kt)("inlineCode",{parentName:"li"},"Documentation")," component and the ",(0,s.kt)("inlineCode",{parentName:"li"},"docs_required")," label."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Is the problem a language string change?")," Language string problems can be corrected by ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Contributing_a_translation"},"contributing a translation")," or by contacting the language pack maintainer as listed in the ",(0,s.kt)("a",{parentName:"li",href:"https://lang.moodle.org/local/amos/credits.php"},"Translation credits"),". English language string typo fixes and suggested improvements can be ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Improving_English_language_strings"},"contributed to the English (fixes) (en fix) language pack")," or given the component ",(0,s.kt)("inlineCode",{parentName:"li"},"Language")," for fixing by the Language component lead. Such issues should be closed in the Tracker using ",(0,s.kt)("inlineCode",{parentName:"li"},"Deferred"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Is it a usability issue?")," If so, add the component ",(0,s.kt)("inlineCode",{parentName:"li"},"Usability")," in addition to the component(s) specifying the area of Moodle."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Was the problem caused by additional code or 3rd party plugins?")," If you can identify the plugin, move the issue to the respective component of the CONTRIB project. Otherwise comment and close as ",(0,s.kt)("inlineCode",{parentName:"li"},"Not a bug"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Can this be implemented as a plugin?")," And maybe the plugin already exists in the plugins directory. An explanation should be given to the reporter that Moodle provides the framework but does not work on any possible plugin. Add the  ",(0,s.kt)("inlineCode",{parentName:"li"},"addon_candidate")," label but do not close the issue. This approach can also apply to the requests to significantly redesign existing plugins and where it would be more preferable to create an alternative plugin."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Does the problem seem rational?")," If not, then the problem may simply be a misunderstanding on the part of the reporter. It might be a problem exclusive to the reporter's server set-up. If you can replicate the problem quickly, do so. If you can't replicate the problem, ask the reporter to attempt to replicate the problem on ",(0,s.kt)("a",{parentName:"li",href:"https://sandbox.moodledemo.net/"},"https://sandbox.moodledemo.net/"),". If the problem seems persistent but strange, consider asking a developer with experience working in the area to consider the problem and determine if it could be a real problem."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Can the problem be replicated?")," If not, or information on the issue is insufficient, ask the reporter to add error messages, screenshots, environment information (OS, web server, browser) and exact replication instructions")),(0,s.kt)("p",null,"As a result of this initial screening, up to 20% of new issues may be closed. When closing the issues make sure to set the correct resolution and write a polite comment with explanation, refer to the templates below. If you have doubts, ask the questions and always add the ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20in%20%28triaging_in_progress%29"},(0,s.kt)("inlineCode",{parentName:"a"},"triaging_in_progress"))," label. Subscribe to the ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20in%20%28triaging_in_progress%29%20AND%20project%20%3D%20MDL%20AND%20resolution%20%3D%20Unresolved%20AND%20Participants%20%3D%20currentUser%28%29%20AND%20updatedDate%20%3C%20-30d"},"My old issues in triage")," filter and you will receive notifications after 30 days of inactivity on such issues. See ",(0,s.kt)("a",{parentName:"p",href:"../tracker/tips"},"Tracker tips")," about how to subscribe to filters. Often reporters never follows up on their own issues and this is a good way to find such issues. Ping the reporter again or make a final decision about closing."),(0,s.kt)("h3",{id:"confirming-the-issue"},"Confirming the issue"),(0,s.kt)("p",null,"When you confirm that the issue is indeed a bug or a reasonable improvement request that was not reported previously, make sure that the following is accurate:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Security level"),". The security level must be set as soon as possible if the reported bug discloses any vulnerability in Moodle that can be exploited to access information without appropriate level, create an attack on the site, embed XSS or forge a request. In some rare cases Improvements may be also marked as security issues."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Summary"),'. The summary of the issue should clearly describe the problem or improvement area. Update or rephrase summaries like "Some improvements in xxx" or "Error in Moodle", etc.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Issue Type"),". The following issue types are used in Moodle:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Bug")," - represents an actual bug which should be fixed in all supported versions. Often a reporter expects something to be better than it actually is and they call it a bug when it's in fact an improvement."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Improvement")," - improvement to existing functionality. If addressed, this will be integrated into the next major release only"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"New feature")," - completely new feature, also will not be applied to the released versions (unless implemented as a plugin and submitted to plugins directory)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Task")," - usually created by developers themselves and can not be classified as Bug or Improvement, for example, adding automated tests, improving documentation, etc."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Epic")," - created by HQ developers or component leads to collect issues together that represents parts of one project. ",(0,s.kt)("strong",{parentName:"li"},"META")," issues and ",(0,s.kt)("strong",{parentName:"li"},"sub-tasks")," should not be used any more"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Priority"),". Some reporters over-state an issue's priority. Some reporters don't know they can set a priority. Priority is used as one of the criteria when sorting issues in the backlog, so it should reflect the position of this issue comparing to the others. Usually ",(0,s.kt)("strong",{parentName:"li"},"Improvements")," have ",(0,s.kt)("inlineCode",{parentName:"li"},"minor")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"major")," priority and ",(0,s.kt)("strong",{parentName:"li"},"Bugs")," can have any priority up to ",(0,s.kt)("inlineCode",{parentName:"li"},"blocker"),". Priority levels have specific criteria. Please see ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Tracker_Guide#When_editing_an_issue"},"the Tracker guide")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Component/s"),". Listing components correctly is important as they are the primary variable used for searching for issues. In addition the component leads will be added as watchers automatically when. Issues may have several components when needed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Affects version"),". This field should include one or more released ",(0,s.kt)("strong",{parentName:"li"},"and supported")," versions of Moodle that are affected by the issue, with the following exceptions:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"The issue is a bug in code that is present in the ",(0,s.kt)("inlineCode",{parentName:"li"},"master")," branch only, in which case the next major version should be used. (The next major version should not be used in conjunction with previous released versions, this won't make sense later.)"),(0,s.kt)("li",{parentName:"ul"},"The issue is a new feature and is unrelated to any existing code in Moodle, in which case the ",(0,s.kt)("inlineCode",{parentName:"li"},"Future dev")," version should be used."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Labels"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Remove functionality tags that some reporters add as labels, only  ",(0,s.kt)("a",{parentName:"li",href:"/general/development/tracker/labels"},"standard labels or partner-specific labels")," are used in Moodle"),(0,s.kt)("li",{parentName:"ul"},"Issues with proposed fixes should be labelled with ",(0,s.kt)("inlineCode",{parentName:"li"},"patch")," so that they can be found easily and given attention. When this is the case, consider whether moving the issue to the ",(0,s.kt)("inlineCode",{parentName:"li"},"Waiting for peer review")," state in the workflow might be more appropriate"),(0,s.kt)("li",{parentName:"ul"},"Add the ",(0,s.kt)("inlineCode",{parentName:"li"},"addon_candidate")," label if the functionality can be implemented as a plugin;"),(0,s.kt)("li",{parentName:"ul"},"If you are the component lead or an HQ developer you may also add ",(0,s.kt)("inlineCode",{parentName:"li"},"triaged")," label to indicate that the triage process is completed. Use it only when the issue has actually been added to the backlog")))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Note that ",(0,s.kt)("inlineCode",{parentName:"p"},"Fix version")," is no longer used during triage. If you are in the ",(0,s.kt)("inlineCode",{parentName:"p"},"moodle-triage")," Jira group, you can use the ",(0,s.kt)("strong",{parentName:"p"},"Triage and sprint")," screen to edit only the aforementioned fields, see ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDLSITE-3592"},"MDLSITE-3592"),"."))),(0,s.kt)("p",null,"When commenting on the issue give more details on replication, environment or testing. Ask questions, request screenshots, add watchers, modify the description if needed. Link to as many related issues as possible. Do everything that will make the issues scope more clear and attract opinions, discussions and patches."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Be grateful")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Don't forget to show ",(0,s.kt)("strong",{parentName:"p"},"Gratitude and encouragement"),".  After triaging many issues, it's easy to lose sight of the fact that the reporter has contributed their time and energy to report an issue for the benefit of the community."),(0,s.kt)("p",{parentName:"div"},"It is easy to become defensive of Moodle if reports are seen as criticism (and sometimes reporters may use phrasing that suggests this), however the triagers response must always be one of sincere gratitude."))),(0,s.kt)("p",null,"It is also important to encourage reporters to continue being involved with the issue after it is triaged. We must not give the sense that we are taking the issue ownership away from the reporter. Instead the reporter should be encouraged to discover the cause of the problem and present a solution; this is appropriate in an open-source project. It is amazing that such a challenge can lead to a sense of purpose for the reporters."),(0,s.kt)("h3",{id:"following-up-on-issues"},"Following up on issues"),(0,s.kt)("p",null,"The Moodle Tracker is set up so that when you comment on, or edit an issue, you become an automatic watcher and any later changes to the issue will be emailed to you. This is a user preference and you can disable it if you prefer."),(0,s.kt)("p",null,"If you have encouraged the reporter well, they may ",(0,s.kt)("strong",{parentName:"p"},"submit a patch")," or somebody else may do it. Make sure that the ",(0,s.kt)("inlineCode",{parentName:"p"},"patch")," label is added or the issue is sent to ",(0,s.kt)("inlineCode",{parentName:"p"},"Peer review"),". If the ",(0,s.kt)("inlineCode",{parentName:"p"},"patch")," label was added by somebody else but you clearly see that patch is far from ready, remove the label and leave a comment explaining it."),(0,s.kt)("p",null,"Users may also comment with additional details, screenshots, replicating instructions. It may happen that the issue gets re-evaluated and priority or summary changed."),(0,s.kt)("h3",{id:"revisiting-old-issues"},"Revisiting old issues"),(0,s.kt)("p",null,"While searching the tracker you may come over issues that were reported a long time ago but still remain open. Again, ask the following questions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Is this still an issue?")," If it is not applicable any more either close it or comment about it on the issue and recommend to close. Very few tracker users actually have permission to close issues but the component lead or watchers will see your comment and revisit the issue. Another good practice is to replace the ",(0,s.kt)("inlineCode",{parentName:"li"},"triaged")," label with ",(0,s.kt)("inlineCode",{parentName:"li"},"triaging_in_progress")," and add a comment asking if the issue can be closed.")),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Closing issues")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If users confirm that the problem was resolved, or if nobody replies in 30 days, you should close the issue."))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Do affected versions need correction?")," If the issue is still applicable, make sure to add missing current affected versions or comment about it on the issue if you can't edit it."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Does the issue have a patch and if yes, is it still applicable?")," If the issue has a patch that still works but the\n",(0,s.kt)("inlineCode",{parentName:"li"},"patch")," label is missing, look through comments or history to see if the ",(0,s.kt)("inlineCode",{parentName:"li"},"patch")," label was removed after reviewing the current patch. If you find that label was never added, do it yourself. If the issue has the ",(0,s.kt)("inlineCode",{parentName:"li"},"patch")," label but the patch is no longer applicable or not sufficient, remove the label and comment explaining why."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Are there any duplicating issues?")," When finding duplicates among the old issues it might not be obvious which issue to close as a duplicate. Usually we should leave the first reported issue but if the later issues have more watchers, better description, more votes, useful comments, attached patch, etc. you may decide to close the earlier issue and leave the later. Sometimes both issues have lots of watchers and they both remain open.")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Always create links between duplicates or related issues, whether you close an issue or not."))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Does the issue have an assignee who forgot about it or a misleading status (for example ",(0,s.kt)("inlineCode",{parentName:"strong"},"Development in progress")," for a long time)?")," Due to some process changes in 2013 some issues still have a real user in the ",(0,s.kt)("strong",{parentName:"li"},"Assignee")," field but this user does not actually work on the issue. Sometimes the ",(0,s.kt)("strong",{parentName:"li"},"Assignee")," remains filled after failing ",(0,s.kt)("inlineCode",{parentName:"li"},"Peer review"),", sometimes developers simply forget that the issue was assigned to them. If you suspect that the ",(0,s.kt)("strong",{parentName:"li"},"Assignee")," is not actually working on the issue, comment asking they about it and in some cases remove the ",(0,s.kt)("strong",{parentName:"li"},"Assignee"),' completely. Allow somebody else to work on the issue without feeling that the issue is "taken". Please also note that for some time the tracker had a restriction that ',(0,s.kt)("strong",{parentName:"li"},"Assignee")," could not be empty so you can find lots of issues assigned to ",(0,s.kt)("strong",{parentName:"li"},"moodle.com")," or ",(0,s.kt)("strong",{parentName:"li"},"Nobody"),'. Do not modify such issues as this creates unnecessary activity, emails to watchers and irrelevant change in the "Last update date".')),(0,s.kt)("h3",{id:"comments-templates"},"Comments templates"),(0,s.kt)("p",null,"In the tracker, you'll find a few ",(0,s.kt)("strong",{parentName:"p"},"Canned responses")," in the ",(0,s.kt)("strong",{parentName:"p"},"Project templates")," section with some of the most typical messages you can re-use and adapt to deal with the previous scenarios. For instance:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Closing: affects unsupported versions"),", when the issue can only be reproduced in unsupported versions."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Closing: already possible"),", to redirect someone making a 'feature request' that already exists."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Closing: contact your administrator"),", to refer the user to their instance administrator."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Closing: contributed plugin (insert plugin name!)"),", when it's a bug in a contributed plugin."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Closing: duplicate (insert issue number!)"),", to close duplicated issues."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Closing: en_fix"),", when it's a correction to English language strings."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Closing: support request"),", to redirect someone with a support request."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Closing: translation request"),", when it's a request to correct a translation."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Triaged: bug request"),", when triaging a bug report."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Triaged: improvement"),", if an improvement or a new feature is triaged."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Triaged: security bug"),", when a security bug is triaged."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Triaging in progress: request more info"),", if more information is required to decide whether to triage the issue or not.")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use canned responses")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can search, re-use and adapt any of the messages in the ",(0,s.kt)("strong",{parentName:"p"},"Canned response")," selector, placed in the tracker editor:\n",(0,s.kt)("img",{alt:"Canned responses in Tracker",src:a(8317).Z,width:"530",height:"284"})))),(0,s.kt)("h2",{id:"triaging-priorities-and-the-triaging-dashboard"},"Triaging priorities and the Triaging Dashboard"),(0,s.kt)("p",null,"The following are the priorities for ordering issues to be triaged that are reflected on the ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/Dashboard.jspa?selectPageId=11153"},"Triaging dashboard"),"."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Security issues - should always be reduced to 0"),(0,s.kt)("li",{parentName:"ol"},"High-priority issue - aim for blockers and critical issues to be reduced to 0"),(0,s.kt)("li",{parentName:"ol"},"Partner issues - aim for partner issues to be reduced to 0"),(0,s.kt)("li",{parentName:"ol"},"Patched issues - aim to triage as soon as possible"),(0,s.kt)("li",{parentName:"ol"},"Developer-reported issues (HQ and non-HQ) - should be quick to triage"),(0,s.kt)("li",{parentName:"ol"},"Recent community bugs - should be triaged last-in-first-out")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Triaging dashboard")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"These priorities are displayed in the same order on the ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/Dashboard.jspa?selectPageId=11153"},"Triaging dashboard")))),(0,s.kt)("h2",{id:"creating-a-filter-and-gadget-for-triaging"},"Creating a filter and gadget for triaging"),(0,s.kt)("p",null,"If you are a component lead you are responsible for triaging issues that involve your component. A good way to monitor newly created issues is to create a filter in the Tracker and add a gadget on your dashboard to show the results of the filter."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"How to add filters in the tracker")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In the ",(0,s.kt)("a",{parentName:"p",href:"../tracker/tips#creating-a-filter"},"Tracker tips and tricks")," page you'll find how to create a filter and add it to a dashboard."))),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/general/development/tracker/guide"},"Tracker guide")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./"},"Process")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/general/development/tracker/tips"},"Tracker tips"))))}c.isMDXComponent=!0},8317:function(e,t,a){t.Z=a.p+"assets/images/cannedresponses-76a21a267934b0074e5e48ef3a3196bc.png"}}]);