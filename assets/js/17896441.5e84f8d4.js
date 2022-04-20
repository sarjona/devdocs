"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7918],{4067:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),l=a(5979),r={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},i=a(6010),s=a(9960),c=a(4996);function o(e){var t=e.children,a=e.href,l="breadcrumbs__link";return a?n.createElement(s.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l,itemProp:"item name"},t)}function m(e){var t=e.children,a=e.active,l=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function d(){var e=(0,c.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(s.Z,{className:(0,i.Z)("breadcrumbs__link",r.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function u(){var e=(0,l.s1)(),t=(0,l.Ns)();return e?n.createElement("nav",{className:(0,i.Z)(l.kM.docs.docBreadcrumbs,r.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(d,null),e.map((function(t,a){return n.createElement(m,{key:a,active:a===e.length-1,index:a},n.createElement(o,{href:a<e.length-1?t.href:void 0},t.label))})))):null}},9930:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var n=a(7294),l=a(6010),r=a(5214),i=a(4474),s=a(7597),c=a(5999),o=a(5979);function m(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function d(e){var t=e.lastUpdatedBy;return n.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:o.kM.common.lastUpdated},n.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(m,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(d,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var v=a(7462),p=a(3366),h="iconEdit_dcUD",E=["className"];function b(e){var t=e.className,a=(0,p.Z)(e,E);return n.createElement("svg",(0,v.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(h,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function f(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},n.createElement(b,null),n.createElement(c.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var g=a(7774),Z="tags_XVD_",N="tag_JSN8";function _(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(c.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(Z,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:N},n.createElement(g.Z,{name:t,permalink:a}))}))))}var k="lastUpdated_foO9";function L(e){return n.createElement("div",{className:(0,l.Z)(o.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(_,e)))}function T(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(o.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(f,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",k)},(a||r)&&n.createElement(u,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function y(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,c=t.tags,m=c.length>0,d=!!(a||r||s);return m||d?n.createElement("footer",{className:(0,l.Z)(o.kM.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(L,{tags:c}),d&&n.createElement(T,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var C=a(1575),U="tocCollapsible_jdIR",M="tocCollapsibleButton_Fzxq",x="tocCollapsibleContent_MpvI",A="tocCollapsibleExpanded_laf4",w=a(5002);function H(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,o.uR)({initialState:!0}),m=s.collapsed,d=s.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(U,!m&&A,a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",M),onClick:d},n.createElement(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(o.zF,{lazy:!0,className:x,collapsed:m},n.createElement(w.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:i})))}var B=a(9649),S="docItemContainer_vinB",V="docItemCol_DM6M",D="tocMobile_TmEX",I=a(4067),O=a(4269);function P(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,i=a.assets,s=r.keywords,c=l.description,m=l.title,d=null!=(t=i.image)?t:r.image;return n.createElement(o.d,{title:m,description:c,keywords:s,image:d})}function F(e){var t=e.content,a=t.metadata,c=t.frontMatter,m=c.hide_title,d=c.hide_table_of_contents,u=c.toc_min_heading_level,v=c.toc_max_heading_level,p=a.title,h=!m&&void 0===t.contentTitle,E=(0,o.iP)(),b=!d&&t.toc&&t.toc.length>0,f=b&&("desktop"===E||"ssr"===E);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!d&&V)},n.createElement(i.Z,null),n.createElement("div",{className:S},n.createElement("article",null,n.createElement(I.Z,null),n.createElement(s.Z,null),b&&n.createElement(H,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:(0,l.Z)(o.kM.docs.docTocMobile,D)}),n.createElement("div",{className:(0,l.Z)(o.kM.docs.docMarkdown,"markdown")},h&&n.createElement("header",null,n.createElement(B.Z,{as:"h1"},p)),n.createElement(O.Z,null,n.createElement(t,null))),n.createElement(y,e)),n.createElement(r.Z,{previous:a.previous,next:a.next}))),f&&n.createElement("div",{className:"col col--3"},n.createElement(C.Z,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:o.kM.docs.docTocDesktop})))}function R(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(o.FG,{className:t},n.createElement(P,e),n.createElement(F,e))}},5214:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(7294),r=a(5999),i=a(9960);function s(e){var t=e.permalink,a=e.title,n=e.subLabel;return l.createElement(i.Z,{className:"pagination-nav__link",to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function c(e){var t=e.previous,a=e.next;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(s,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.createElement(s,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},7597:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(5999),r=a(5979),i=a(6010);function s(e){var t=e.className,a=(0,r.E6)();return a.badge?n.createElement("span",{className:(0,i.Z)(t,r.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4474:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),l=a(2263),r=a(9960),i=a(5999),s=a(5551),c=a(5979),o=a(6010);var m={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function d(e){var t=m[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,a=e.className,r=e.versionMetadata,i=(0,l.Z)().siteConfig.title,m=(0,s.gA)({failfast:!0}).pluginId,v=(0,c.J)(m).savePreferredVersionName,p=(0,s.Jo)(m),h=p.latestDocSuggestion,E=p.latestVersionSuggestion,b=null!=h?h:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,o.Z)(a,c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(d,{siteTitle:i,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:E.label,to:b.path,onClick:function(){return v(E.name)}})))}function p(e){var t=e.className,a=(0,c.E6)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},9649:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),s=a(5999),c=a(5979),o="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",d=["as","id"],u=["as"];function v(e){var t=e.as,a=e.id,u=(0,l.Z)(e,d),v=(0,c.LU)().navbar.hideOnScroll;return a?r.createElement(t,(0,n.Z)({},u,{className:(0,i.Z)("anchor",v?m:o),id:a}),u.children,r.createElement("a",{className:"hash-link",href:"#"+a,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,u)}function p(e){var t=e.as,a=(0,l.Z)(e,u);return"h1"===t?r.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):r.createElement(v,(0,n.Z)({as:t},a))}},4269:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7294),l=a(3905),r=a(7462),i=a(3366),s=a(5742),c=["mdxType","originalType"];var o=a(8066);var m=a(9960);var d=a(6010),u=a(5979),v="details_BAp3";function p(e){var t=Object.assign({},e);return n.createElement(u.PO,(0,r.Z)({},t,{className:(0,d.Z)("alert alert--info",v,t.className)}))}var h=a(9649);function E(e){return n.createElement(h.Z,e)}var b="img_E7b_";var f={head:function(e){var t=n.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var l=e.props,r=(l.mdxType,l.originalType,(0,i.Z)(l,c));return n.createElement(e.props.originalType,r)}return e}(e)}));return n.createElement(s.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return n.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,n.isValidElement)(e)&&t.includes(e.props.mdxType)}))?n.createElement("code",e):n.createElement(o.Z,e)},a:function(e){return n.createElement(m.Z,e)},pre:function(e){var t;return n.createElement(o.Z,(0,n.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=n.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=n.createElement(n.Fragment,null,t.filter((function(e){return e!==a})));return n.createElement(p,(0,r.Z)({},e,{summary:a}),l)},ul:function(e){return n.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,d.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return n.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,d.Z)(t,b))}));var t},h1:function(e){return n.createElement(E,(0,r.Z)({as:"h1"},e))},h2:function(e){return n.createElement(E,(0,r.Z)({as:"h2"},e))},h3:function(e){return n.createElement(E,(0,r.Z)({as:"h3"},e))},h4:function(e){return n.createElement(E,(0,r.Z)({as:"h4"},e))},h5:function(e){return n.createElement(E,(0,r.Z)({as:"h5"},e))},h6:function(e){return n.createElement(E,(0,r.Z)({as:"h6"},e))}};function g(e){var t=e.children;return n.createElement(l.Zo,{components:f},t)}},1575:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),s=a(5002),c="tableOfContents_cNA8",o=["className"];function m(e){var t=e.className,a=(0,l.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},r.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),l=a(3366),r=a(7294),i=a(5979),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function o(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,u=e.linkActiveClassName,v=void 0===u?void 0:u,p=e.minHeadingLevel,h=e.maxHeadingLevel,E=(0,l.Z)(e,s),b=(0,i.LU)(),f=null!=p?p:b.tableOfContents.minHeadingLevel,g=null!=h?h:b.tableOfContents.maxHeadingLevel,Z=(0,i.b9)({toc:t,minHeadingLevel:f,maxHeadingLevel:g}),N=(0,r.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:f,maxHeadingLevel:g}}),[d,v,f,g]);return(0,i.Si)(N),r.createElement(c,(0,n.Z)({toc:Z,className:o,linkClassName:d},E))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r=a(9960),i="tag_hD8n",s="tagRegular_D6E_",c="tagWithCount_i0QQ";function o(e){var t=e.permalink,a=e.name,o=e.count;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i,o?c:s)},a,o&&n.createElement("span",null,o))}}}]);