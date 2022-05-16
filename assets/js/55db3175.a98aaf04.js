"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8423],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(g,l(l({ref:t},d),{},{components:n})):o.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2104:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={title:"Moodle App Docker images",sidebar_label:"Docker images",sidebar_position:2,tags:["Moodle App","Docker"]},s=void 0,p={unversionedId:"moodleapp/development/setup/docker-images",id:"moodleapp/development/setup/docker-images",title:"Moodle App Docker images",description:"Moodle HQ provides a couple of Docker images that contain the Moodle App ready for use. You can search all the available versions in Docker Hub.",source:"@site/docs/moodleapp/development/setup/docker-images.md",sourceDirName:"moodleapp/development/setup",slug:"/moodleapp/development/setup/docker-images",permalink:"/devdocs/docs/moodleapp/development/setup/docker-images",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/setup/docker-images.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"},{label:"Docker",permalink:"/devdocs/docs/tags/docker"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1652696789,formattedLastUpdatedAt:"16/05/2022",sidebarPosition:2,frontMatter:{title:"Moodle App Docker images",sidebar_label:"Docker images",sidebar_position:2,tags:["Moodle App","Docker"]},sidebar:"docs",previous:{title:"Using the App in a browser",permalink:"/devdocs/docs/moodleapp/development/setup/app-in-browser"},next:{title:"Troubleshooting",permalink:"/devdocs/docs/moodleapp/development/setup/troubleshooting"}},d={},c=[{value:"Running the images",id:"running-the-images",level:2},{value:"Using a specific environment",id:"using-a-specific-environment",level:2},{value:"Using old versions",id:"using-old-versions",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://moodle.com/"},"Moodle HQ")," provides a couple of Docker images that contain the Moodle App ready for use. You can search all the available versions in ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/moodlehq/moodleapp/tags"},"Docker Hub"),"."),(0,a.kt)("p",null,"In order to run them, you should have ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," installed and we recommend that you have some basic understanding on how it works."),(0,a.kt)("h2",{id:"running-the-images"},"Running the images"),(0,a.kt)("p",null,"You can run the latest stable version of the application using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8100:80 moodlehq/moodleapp\n")),(0,a.kt)("p",null,"This will launch the container running the application and expose it locally on your port ",(0,a.kt)("strong",{parentName:"p"},"8100"),". You should be able to open it on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8100"),"."),(0,a.kt)("p",null,"If you want to use a specific version, you can do it using the tag with the release number:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8100:80 moodlehq/moodleapp:4.0.0\n")),(0,a.kt)("p",null,"You can also use the development version using the ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," tag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8100:80 moodlehq/moodleapp:next\n")),(0,a.kt)("h2",{id:"using-a-specific-environment"},"Using a specific environment"),(0,a.kt)("p",null,"By default, the application will be launched on a ",(0,a.kt)("strong",{parentName:"p"},"production")," environment. If you only want to use the application, that will suffice. But if you are trying to debug or run some tests it may not work."),(0,a.kt)("p",null,"You can use images on different environments by adding their short name as a suffix. The available environments are ",(0,a.kt)("strong",{parentName:"p"},"production")," (no suffix), ",(0,a.kt)("strong",{parentName:"p"},"development")," (",(0,a.kt)("inlineCode",{parentName:"p"},"-dev")," suffix) and ",(0,a.kt)("strong",{parentName:"p"},"testing")," (",(0,a.kt)("inlineCode",{parentName:"p"},"-test")," suffix):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using the latest stable version"',title:'"Using',the:!0,latest:!0,stable:!0,'version"':!0},"docker run --rm -p 8100:80 moodlehq/moodleapp:latest-test\ndocker run --rm -p 8100:80 moodlehq/moodleapp:latest-dev\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using a specific version"',title:'"Using',a:!0,specific:!0,'version"':!0},"docker run --rm -p 8100:80 moodlehq/moodleapp:4.0.0-test\ndocker run --rm -p 8100:80 moodlehq/moodleapp:4.0.0-dev\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using the latest development version"',title:'"Using',the:!0,latest:!0,development:!0,'version"':!0},"docker run --rm -p 8100:80 moodlehq/moodleapp:next-test\ndocker run --rm -p 8100:80 moodlehq/moodleapp:next-dev\n")),(0,a.kt)("h2",{id:"using-old-versions"},"Using old versions"),(0,a.kt)("p",null,"Before version 3.9.5, images didn't support specifying the environment and they were always run as ",(0,a.kt)("strong",{parentName:"p"},"development"),". You will also notice that they take a while to launch and they are exposed in port 8100 instead, that's because these images contained the source code and they were run using Angular's development server. This has been improved since and images are easier to work with."),(0,a.kt)("p",null,"If you want to use an old version, you can run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 8100:8100 moodlehq/moodleapp:3.6.0\n")),(0,a.kt)("p",null,"Tagged releases are only available from version 3.6.0 onwards."))}m.isMDXComponent=!0}}]);