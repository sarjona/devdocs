"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[71718],{87486:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var i=o(83117),a=o(80102),n=(o(67294),o(3905)),s=o(13904),r=["components"],l={title:"Denial of service",sidebar_position:11,tags:["Coding guidelines","Policies","Security"]},d=void 0,u={unversionedId:"development/policies/security/dos",id:"development/policies/security/dos",title:"Denial of service",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/dos.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/dos",permalink:"/devdocs/general/development/policies/security/dos",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/dos.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654695996,formattedLastUpdatedAt:"08/06/2022",sidebarPosition:11,frontMatter:{title:"Denial of service",sidebar_position:11,tags:["Coding guidelines","Policies","Security"]},sidebar:"coding",previous:{title:"Session fixation",permalink:"/devdocs/general/development/policies/security/session-fixation"},next:{title:"Brute-forcing login",permalink:"/devdocs/general/development/policies/security/bruteforcing-login"}},c={},p=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],m={toc:p};function h(e){var t=e.components,o=(0,a.Z)(e,r);return(0,n.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,(0,i.Z)({frontMatter:l},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"This page forms part of the ",(0,n.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,n.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,n.kt)("p",null,"A malicious user tries to overload your server, so it crashes or becomes very slow for legitimate users."),(0,n.kt)("p",null,"Or there may be some other way that they can make it impossible for legitimate users to use your site. For example, by using a cross-site scripting vulnerability to include the JavaScript ",(0,n.kt)("inlineCode",{parentName:"p"},"window.close()")," in a forum post."),(0,n.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,n.kt)("p",null,"This is a very difficult type of attack to defend against, if the attacker is determined."),(0,n.kt)("p",null,"However, most of the really expensive operations in Moodle (for example completing a quiz) are only available to authenticated users, so by logging all requests from authenticated users,Moodle helps administrators identify culprits."),(0,n.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is very little you can do from PHP code."),(0,n.kt)("li",{parentName:"ul"},"However, every page access should be logged. This will help investigate who is to blame, if a problem arises. Call ",(0,n.kt)("inlineCode",{parentName:"li"},"add_to_log")," from your scripts."),(0,n.kt)("li",{parentName:"ul"},"Follow general performance good practice, so your code does not consume more resources than necessary.")),(0,n.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There are various tools you can use (for example, firewalls, proxies) to try to limit the number of requests coming into your server. If you have a problem, look into them, but there is not space space for a detailed description here."),(0,n.kt)("li",{parentName:"ul"},"Know how to use the logs to investigate problems."),(0,n.kt)("li",{parentName:"ul"},"Monitor performance on your servers, so you know what normal load looks like, and that you have enough hardware to cope with normal fluctuations in load.")),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/general/development/policies"},"Coding")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://owasp.org/www-community/attacks/Denial_of_Service"},"Denial of service in OWASP"))))}h.isMDXComponent=!0}}]);