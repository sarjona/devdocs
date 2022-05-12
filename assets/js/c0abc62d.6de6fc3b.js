"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8775],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),f=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=f(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=f(n),c=a,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var f=2;f<l;f++)o[f]=n[f];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7198:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return r},metadata:function(){return f},toc:function(){return m}});var i=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],r={title:"File API",tags:["File API","Files"]},s=void 0,f={unversionedId:"apis/subsystems/files/index",id:"apis/subsystems/files/index",title:"File API",description:"Overview",source:"@site/docs/apis/subsystems/files/index.md",sourceDirName:"apis/subsystems/files",slug:"/apis/subsystems/files/",permalink:"/devdocs/docs/apis/subsystems/files/",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/files/index.md",tags:[{label:"File API",permalink:"/devdocs/docs/tags/file-api"},{label:"Files",permalink:"/devdocs/docs/tags/files"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1652326048,formattedLastUpdatedAt:"12/05/2022",frontMatter:{title:"File API",tags:["File API","Files"]},sidebar:"docs",previous:{title:"Access API",permalink:"/devdocs/docs/apis/subsystems/access"},next:{title:"File Browser API",permalink:"/devdocs/docs/apis/subsystems/files/browsing"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"File areas",id:"file-areas",level:2},{value:"Naming file areas",id:"naming-file-areas",level:3},{value:"Serving files to users",id:"serving-files-to-users",level:2},{value:"Generating a URL to your files",id:"generating-a-url-to-your-files",level:3},{value:"Serving your file to the user",id:"serving-your-file-to-the-user",level:3},{value:"Getting files from the user",id:"getting-files-from-the-user",level:2},{value:"Common uses of the file API",id:"common-uses-of-the-file-api",level:2},{value:"Create files",id:"create-files",level:3},{value:"From a file on disk",id:"from-a-file-on-disk",level:4},{value:"From a URL",id:"from-a-url",level:4},{value:"From a string",id:"from-a-string",level:4},{value:"From another <code>stored_file</code>",id:"from-another-stored_file",level:4},{value:"List all files in a particular file area",id:"list-all-files-in-a-particular-file-area",level:3},{value:"Access the content of a file",id:"access-the-content-of-a-file",level:3},{value:"Copy a file in the File Storage API to elsewhere on disk",id:"copy-a-file-in-the-file-storage-api-to-elsewhere-on-disk",level:3},{value:"Delete file",id:"delete-file",level:3},{value:"Moving and renaming files around",id:"moving-and-renaming-files-around",level:3},{value:"Convert between file formats (office documents)",id:"convert-between-file-formats-office-documents",level:3},{value:"See also",id:"see-also",level:2}],p={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The File API is used to control, manage, and serve all files uploaded and stored within Moodle. This page covers the core File API, which is responsible for storage, retrieval, and serving of files stored in Moodle."),(0,l.kt)("p",null,"The following documentation is also related:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Repository_API"},"Repository API")," is responsible for the code paths associated with uploading files to Moodle. This includes Repository plugins."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Using_the_File_API_in_Moodle_forms"},"Using the File API in Moodle forms")),(0,l.kt)("li",{parentName:"ul"},"Additional detail of how this API works is discussed in the ",(0,l.kt)("a",{parentName:"li",href:"/devdocs/docs/apis/subsystems/files/internals"},"File API internals"))),(0,l.kt)("h2",{id:"file-areas"},"File areas"),(0,l.kt)("p",null,"Files are conceptually stored in ",(0,l.kt)("em",{parentName:"p"},"file areas"),". A file area is uniquely identified by:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"contextid"),"."),(0,l.kt)("li",{parentName:"ul"},"A full component name (using the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Frankenstyle"},"Frankenstyle")," format), for example ",(0,l.kt)("inlineCode",{parentName:"li"},"course"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"mod_forum"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"mod_glossary"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"block_html"),"."),(0,l.kt)("li",{parentName:"ul"},"A file area type, for example ",(0,l.kt)("inlineCode",{parentName:"li"},"intro")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"post"),"."),(0,l.kt)("li",{parentName:"ul"},"A unique ",(0,l.kt)("inlineCode",{parentName:"li"},"itemid"),". Typically if there is only one of a file area per context, then the ",(0,l.kt)("inlineCode",{parentName:"li"},"itemid")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),", whilst if there can be multiple instances of a file area within a context, then the id of the item it relates to is used. For example in the course introduction text area, there is only one course introduction per course, so the ",(0,l.kt)("inlineCode",{parentName:"li"},"itemid")," is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),", whilst in a forum each forum post is within the same context, and the ",(0,l.kt)("inlineCode",{parentName:"li"},"itemid")," should be the id of the post that it relates to.")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"File areas are not listed separately anywhere, they are stored implicitly in the files table."))),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Accessing files belonging to another component")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Please note that each plugin, or subsystem should only ever access its own file areas. Any other access should be made using that components own APIs. For example a file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"mod_assign")," plugin should only access files within the ",(0,l.kt)("inlineCode",{parentName:"p"},"mod_assign")," component, and no other component should access its files."))),(0,l.kt)("h3",{id:"naming-file-areas"},"Naming file areas"),(0,l.kt)("p",null,"The names of the file areas are not strictly defined, but it is strongly recommended to use singulars and common names of areas where possible (for example: intro, post, attachment, description)."),(0,l.kt)("h2",{id:"serving-files-to-users"},"Serving files to users"),(0,l.kt)("p",null,"The serving of files to users is separated into two distinct areas:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Generating an appropriate URL to the file; and"),(0,l.kt)("li",{parentName:"ol"},"Parsing the URL to serve the file correctly.")),(0,l.kt)("p",null,"This allows Moodle to have a shared file serving mechanism which is common to all Moodle components."),(0,l.kt)("p",null,"When serving files you ",(0,l.kt)("em",{parentName:"p"},"must")," implement both parts together."),(0,l.kt)("h3",{id:"generating-a-url-to-your-files"},"Generating a URL to your files"),(0,l.kt)("p",null,"You must refer to the file with a URL that includes a file-serving script, often ",(0,l.kt)("inlineCode",{parentName:"p"},"pluginfile.php"),". This is usually generated with the ",(0,l.kt)("inlineCode",{parentName:"p"},"moodle_url::make_pluginfile_url()")," function. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Generating a pluginfile URL for a known file"',title:'"Generating',a:!0,pluginfile:!0,URL:!0,for:!0,known:!0,'file"':!0},"$url = moodle_url::make_pluginfile_url(\n    $file->get_contextid(),\n    $file->get_component(),\n    $file->get_filearea(),\n    $file->get_itemid(),\n    $file->get_filepath(),\n    $file->get_filename(),\n    false                     // Do not force download of the file.\n);\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Note: If you do not need the ",(0,l.kt)("inlineCode",{parentName:"p"},"itemid"),", then you ",(0,l.kt)("em",{parentName:"p"},"may")," pass a ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," value instead of the ",(0,l.kt)("inlineCode",{parentName:"p"},"itemid"),"."),(0,l.kt)("p",{parentName:"div"},"This will remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"itemid")," from the URL entirely - this must be considered when ",(0,l.kt)("a",{parentName:"p",href:"#serving-your-file-to-the-user"},"serving your file to the user"),"."))),(0,l.kt)("p",null,"The final parameter (",(0,l.kt)("inlineCode",{parentName:"p"},"false")," here) is ",(0,l.kt)("inlineCode",{parentName:"p"},"forcedownload"),"."),(0,l.kt)("h3",{id:"serving-your-file-to-the-user"},"Serving your file to the user"),(0,l.kt)("p",null,"File serving is performed by a small number of file serving scripts which include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pluginfile.php"),"; and"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tokenpluginfile"),".php.")),(0,l.kt)("p",null,"These file serving scripts are responsible for authenticating the user, parsing the URL, and then passing the parameters provided in the URL to the relevant component, via a ",(0,l.kt)("em",{parentName:"p"},"callback"),", which will then serve the file."),(0,l.kt)("p",null,"The relevant component is then responsible for finding the file, performing relevant security checks, and finally serving the file to the user."),(0,l.kt)("p",null,"The component callback ",(0,l.kt)("em",{parentName:"p"},"must")," be located in your plugin's ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.php")," file, and ",(0,l.kt)("em",{parentName:"p"},"must")," be named ",(0,l.kt)("inlineCode",{parentName:"p"},"[component]_pluginfile()"),". It is passed the following values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the context id;"),(0,l.kt)("li",{parentName:"ul"},"the component name;"),(0,l.kt)("li",{parentName:"ul"},"the name of the file area;"),(0,l.kt)("li",{parentName:"ul"},"any item id, if specified in the URL; and"),(0,l.kt)("li",{parentName:"ul"},"the file path and file name.")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The complete function signature for this callback is as follows:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Serve the requested file for the [component_name] plugin.\n *\n * @param stdClass $course the course object\n * @param stdClass $cm the course module object\n * @param stdClass $context the context\n * @param string $filearea the name of the file area\n * @param array $args extra arguments (itemid, path)\n * @param bool $forcedownload whether or not force download\n * @param array $options additional options affecting the file serving\n * @return bool false if the file not found, just send the file otherwise and do not return anything\n */\nfunction [component_name]_pluginfile(\n    $course,\n    $cm,\n    $context.\n    string $filearea,\n    array $args,\n    bool $forcedownload,\n    array $options\n): bool;\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"See an example implementation of this callback for an activity module."),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="mod/myplugin/lib.php"',title:'"mod/myplugin/lib.php"'},"/**\n * Serve the files from the myplugin file areas.\n *\n * @param stdClass $course the course object\n * @param stdClass $cm the course module object\n * @param stdClass $context the context\n * @param string $filearea the name of the file area\n * @param array $args extra arguments (itemid, path)\n * @param bool $forcedownload whether or not force download\n * @param array $options additional options affecting the file serving\n * @return bool false if the file not found, just send the file otherwise and do not return anything\n */\nfunction mod_myplugin_pluginfile(\n    $course,\n    $cm,\n    $context.\n    string $filearea,\n    array $args,\n    bool $forcedownload,\n    array $options = []\n): bool {\n    global $DB;\n\n    // Check the contextlevel is as expected - if your plugin is a block, this becomes CONTEXT_BLOCK, etc.\n    if ($context->contextlevel != CONTEXT_MODULE) {\n        return false;\n    }\n\n    // Make sure the filearea is one of those used by the plugin.\n    if ($filearea !== 'expectedfilearea' && $filearea !== 'anotherexpectedfilearea') {\n        return false;\n    }\n\n    // Make sure the user is logged in and has access to the module (plugins that are not course modules should leave out the 'cm' part).\n    require_login($course, true, $cm);\n\n    // Check the relevant capabilities - these may vary depending on the filearea being accessed.\n    if (!has_capability('mod/myplugin:view', $context)) {\n        return false;\n    }\n\n    // The args is an array containing [itemid, path].\n    // Fetch the itemid from the path.\n    $itemid = array_shift($args);\n\n    // The itemid can be used to check access to a record, and ensure that the\n    // record belongs to the specifeid context. For example:\n    if ($filearea === 'expectedfilearea') {\n        $post = $DB->get_record('myplugin_posts', ['id' => $itemid]');\n        if ($post->myplugin !== $context->instanceid) {\n            // This post does not belong to the requested context.\n            return false;\n        }\n\n        // You may want to perform additional checks here, for example:\n        // - ensure that if the record relates to a grouped activity, that this\n        //   user has access to it\n        // - check whether the record is hidden\n        // - check whether the user is allowed to see the record for some other\n        //   reason.\n\n        // If, for any reason, the user does not hve access, you can return\n        // false here.\n    }\n\n    // For a plugin which does not specify the itemid, you may want to use:\n    $itemid = null to make your code more consistent.\n\n    // Extract the filename / filepath from the $args array.\n    $filename = array_pop($args); // The last item in the $args array.\n    if (empty($args)) {\n        // $args is empty => the path is '/'.\n        $filepath = '/';\n    } else {\n        // $args contains the remaining elements of the filepath.\n        $filepath = '/' . implode('/', $args) . '/';\n    }\n\n    // Retrieve the file from the Files API.\n    $fs = get_file_storage();\n    $file = $fs->get_file($context->id, 'mod_myplugin', $filearea, $itemid, $filepath, $filename);\n    if (!$file) {\n        // The file does not exist.\n        return false;\n    }\n\n    // We can now send the file back to the browser - in this case with a cache lifetime of 1 day and no filtering.\n    send_stored_file($file, DAY_SECS, 0, $forcedownload, $options);\n}\n"))))),(0,l.kt)("h2",{id:"getting-files-from-the-user"},"Getting files from the user"),(0,l.kt)("p",null,"You will typically use the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Forms_API"},"Forms API")," to accept files from users. This topic is detailed in more detail in the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Using_the_File_API_in_Moodle_forms"},"Using the File API in Moodle forms")," documentation."),(0,l.kt)("h2",{id:"common-uses-of-the-file-api"},"Common uses of the file API"),(0,l.kt)("p",null,"Although you will usually interact with the File API from other related APIs including the Form, and Repository APIs, you may find that you need to interact with files directly for a range of purposes."),(0,l.kt)("h3",{id:"create-files"},"Create files"),(0,l.kt)("p",null,"There are several ways to created files in the Moodle file store. Each of them\nrequires a ",(0,l.kt)("inlineCode",{parentName:"p"},"fileinfo")," record, which is a ",(0,l.kt)("inlineCode",{parentName:"p"},"stdClass")," object containing all of the\nrelevant information that cannot be calculated automatically. A file info record\nmay look like the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="A sample file info record"',title:'"A',sample:!0,file:!0,info:!0,'record"':!0},"$fileinfo = [\n    'contextid' => $context->id,   // ID of the context.\n    'component' => 'mod_mymodule', // Your component name.\n    'filearea'  => 'myarea',       // Usually = table name.\n    'itemid'    => 0,              // Usually = ID of row in table.\n    'filepath'  => '/',            // Any path beginning and ending in /.\n    'filename'  => 'myfile.txt',   // Any filename.\n];\n")),(0,l.kt)("h4",{id:"from-a-file-on-disk"},"From a file on disk"),(0,l.kt)("p",null,"If you need to create a file from another file elsewhere on disk, for example a file you have downloaded into a temporary folder, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"create_file_from_pathname"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Create a file from a file on disk"',title:'"Create',a:!0,file:!0,from:!0,on:!0,'disk"':!0},"$fs = get_file_storage();\n\n// Create a new file containing the text 'hello world'.\n$fs->create_file_from_pathname($fileinfo, $requestdir . '/helloworld.txt');\n")),(0,l.kt)("h4",{id:"from-a-url"},"From a URL"),(0,l.kt)("p",null,"If you need to fetch a file from a downloadable resource and store it straight into the Moodle filestore, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"create_file_from_url()")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Create a file from a file on disk"',title:'"Create',a:!0,file:!0,from:!0,on:!0,'disk"':!0},"$fs = get_file_storage();\n\n// Create a new file containing the text 'hello world'.\n$fs->create_file_from_url($fileinfo, 'https://example.com/helloworld.txt');\n")),(0,l.kt)("h4",{id:"from-a-string"},"From a string"),(0,l.kt)("p",null,"In some cases you may need to create a file from a string that you have generated, or retrieved in some other manner. For example, a string created from a Template, or image data which has been automatically generated."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Create a file from a string"',title:'"Create',a:!0,file:!0,from:!0,'string"':!0},"$fs = get_file_storage();\n\n// Create a new file containing the text 'hello world'.\n$fs->create_file_from_string($fileinfo, 'hello world');\n")),(0,l.kt)("h4",{id:"from-another-stored_file"},"From another ",(0,l.kt)("inlineCode",{parentName:"h4"},"stored_file")),(0,l.kt)("p",null,"In some situations you may need to create a new file entry based on an existing file entry. You may need to do this when copying a file between users in a group activity."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Create a file from an existing file"',title:'"Create',a:!0,file:!0,from:!0,an:!0,existing:!0,'file"':!0},"$fs = get_file_storage();\n\n// Create a new file containing the text 'hello world'.\n$fs->create_file_from_storedfile($fileinfo, $existingfile);\n")),(0,l.kt)("h3",{id:"list-all-files-in-a-particular-file-area"},"List all files in a particular file area"),(0,l.kt)("p",null,"You may need to fetch a list of all files in a specific file area. You can do this using the ",(0,l.kt)("inlineCode",{parentName:"p"},"file_storage::get_area_files()")," API, which will return array of ",(0,l.kt)("inlineCode",{parentName:"p"},"stored_file")," objects, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Fetch a list of all files in the file area"',title:'"Fetch',a:!0,list:!0,of:!0,all:!0,files:!0,in:!0,the:!0,file:!0,'area"':!0},"$fs = get_file_storage();\n\n// Returns an array of `stored_file` instances.\n$files = $fs->get_area_files($contextid, 'mod_myplugin', 'post', $post->id);\nforeach ($files as $file) {\n    // ...\n}\n")),(0,l.kt)("h3",{id:"access-the-content-of-a-file"},"Access the content of a file"),(0,l.kt)("p",null,"In some rare situations you may need to use the content of a file stored in the file storage API. The easiest way of doing so is using the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_content(): string")," API call:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Fetch the content of a file"',title:'"Fetch',the:!0,content:!0,of:!0,a:!0,'file"':!0},"// Get file\n$fs = get_file_storage();\n$file = $fs->get_file(...);\n\n// Read contents\n$contents = $file->get_content();\n")),(0,l.kt)("p",null,"In some situations you may instead need a standard PHP file ",(0,l.kt)("em",{parentName:"p"},"handle")," to the file. You can retrieve a file handle resource using the  ",(0,l.kt)("inlineCode",{parentName:"p"},"get_content_file_handle(): resource")," API call, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Fetch a file handle for a file"',title:'"Fetch',a:!0,file:!0,handle:!0,for:!0,'file"':!0},"// Get file\n$fs = get_file_storage();\n$file = $fs->get_file(...);\n\n// Read contents\n$fh = $file->get_content_file_handle();\n\nwhile($line = fgets($fh)) {\n    // ...\n}\n\nfclose($fh);\n")),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You ",(0,l.kt)("em",{parentName:"p"},"cannot")," write to a file handle fetched using the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_content_file_handle()")," function and you ",(0,l.kt)("em",{parentName:"p"},"must")," call ",(0,l.kt)("inlineCode",{parentName:"p"},"fclose()")," on the returned handle when you have finished using it."))),(0,l.kt)("h3",{id:"copy-a-file-in-the-file-storage-api-to-elsewhere-on-disk"},"Copy a file in the File Storage API to elsewhere on disk"),(0,l.kt)("p",null,"As the Moodle File Storage API prevents direct access to files on the disk, if you need a local copy of the file on disk, you must copy the file to a different location. You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"\\stored_file::copy_content_to(string $destination);")," function to achieved this, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Copy a file to disk"',title:'"Copy',a:!0,file:!0,to:!0,'disk"':!0},'// Get file\n$fs = get_file_storage();\n$file = $fs->get_file(...);\n\n$requestdir = make_request_directory();\n$file->copy_content_to("{$requestdir}/helloworld.txt");\n')),(0,l.kt)("h3",{id:"delete-file"},"Delete file"),(0,l.kt)("p",null,"You can easily remove a file from the File Storage API using the ",(0,l.kt)("inlineCode",{parentName:"p"},"\\stored_file::delete()")," function, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$fs = get_file_storage();\n\n$file = $fs->get_file(...);\n$file->delete();\n")),(0,l.kt)("h3",{id:"moving-and-renaming-files-around"},"Moving and renaming files around"),(0,l.kt)("p",null,"In some instances you may need to move, or copy, files to other parts of the file structure."),(0,l.kt)("p",null,"If a file is moving within the same context, file area, and item id, then you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"rename(string $path, string $filename)")," function, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Move a file within the same file area"',title:'"Move',a:!0,file:!0,within:!0,the:!0,same:!0,'area"':!0},"$file->rename('/newpath/', '/newname.txt');\n")),(0,l.kt)("p",null,"If a file is to be moved to a different context, file area, or item id then you will need to create a new file from the old record, and then remove the original file, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Move a file to a different file area"',title:'"Move',a:!0,file:!0,to:!0,different:!0,'area"':!0},"$fs = get_file_storage();\n$filerecord = [\n  'contextid'    => $file->get_contextid()\n  'component'    => $file->get_component(),\n  'filearea'     => 'newfilearea',\n  'itemid'       => 0,\n  'filepath'     => '/newpath/',\n  'filename'     => $file->get_filename(),\n  'timecreated'  => time(),\n  'timemodified' => time(),\n];\n$fs->create_file_from_storedfile($filerecord, $file);\n\n// Now delete the original file.\n$file->delete();\n")),(0,l.kt)("h3",{id:"convert-between-file-formats-office-documents"},"Convert between file formats (office documents)"),(0,l.kt)("p",null,"This functionality requires ",(0,l.kt)("inlineCode",{parentName:"p"},"unoconv")," to be installed and configured on the site - so it is not available on all installations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$fs = get_file_storage();\n\n// Prepare file record object\n$fileinfo = [\n    'component' => 'mod_mymodule', // Your component name.\n    'filearea'  => 'myarea',       // Usually = table name.\n    'itemid'    => 0,              // Usually = ID of row in table.\n    'contextid' => $context->id,   // ID of context.\n    'filepath'  => '/',            // Any path beginning and ending in /.\n    'filename'  => 'myfile.txt',   // Any filename.\n  ];\n\n// Fetch the file from the database.\n$file = $fs->get_file(\n    $fileinfo['contextid'],\n    $fileinfo['component'],\n    $fileinfo['filearea'],\n    $fileinfo['itemid'],\n    $fileinfo['filepath'],\n    $fileinfo['filename']\n);\n\n// Try and convert it if it exists\nif ($file) {\n    $convertedfile = $fs->get_converted_document($file, 'pdf');\n}\n")),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/devdocs/docs/apis"},"Core APIs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/devdocs/docs/apis/subsystems/files/internals"},"File API internals")," how the File API works internally."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Using_the_File_API_in_Moodle_forms"},"Using the File API in Moodle forms")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Repository_API"},"Repository API"))))}c.isMDXComponent=!0}}]);