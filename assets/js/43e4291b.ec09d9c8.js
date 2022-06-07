"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[25521],{13795:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 3.9.4",tags:["Release notes","Moodle 3.9"],sidebar_position:4,moodleVersion:"3.9.4"},p=void 0,m={unversionedId:"releases/3.9/3.9.4",id:"releases/3.9/3.9.4",title:"Moodle 3.9.4",description:"Release date: 18 January 2021",source:"@site/general/releases/3.9/3.9.4.md",sourceDirName:"releases/3.9",slug:"/releases/3.9/3.9.4",permalink:"/devdocs/general/releases/3.9/3.9.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.9/3.9.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.9",permalink:"/devdocs/general/tags/moodle-3-9"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654608238,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:4,frontMatter:{title:"Moodle 3.9.4",tags:["Release notes","Moodle 3.9"],sidebar_position:4,moodleVersion:"3.9.4"},sidebar:"releaseNotes",previous:{title:"Moodle 3.9.3",permalink:"/devdocs/general/releases/3.9/3.9.3"},next:{title:"Moodle 3.9.5",permalink:"/devdocs/general/releases/3.9/3.9.5"}},d={},u=[{value:"Warning - courses with many sections",id:"warning---courses-with-many-sections",level:2},{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security improvements",id:"security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 18 January 2021"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.9.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.9.4"),"."),(0,s.kt)("h2",{id:"warning---courses-with-many-sections"},"Warning - courses with many sections"),(0,s.kt)("p",null,"If you use a custom course format, and your courses need to have a large number of sections (more than 52),  for this release you may need to implement the method get_max_sections() in your custom course format's lib.php file, to set a higher limit than the default.  The default comes from get_max_sections() in course/format/lib.php - you can copy this method into your course format's lib file and use whatever maximum you need."),(0,s.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54907"},"MDL-54907")," - Automatically submitted quiz attempts: finish time is set to when cron ran, not when the attempt ended"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69964"},"MDL-69964"),' - The "Select all X users" button doesn\'t activate the drop-down menu in Participants Page'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68896"},"MDL-68896"),' - SCORM error in Chrome because of "XHR in page dismissal" policy change'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67623"},"MDL-67623")," - Course overview (my courses block) pagination is broken beyond the second page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56119"},"MDL-56119")," - Rubric display layout issue, after students feedback is released"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50955"},"MDL-50955")," - Lesson module error on save - Cannot find grade item for 'lesson'"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65941"},"MDL-65941")," - Redis server issues break cache configuration page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70157"},"MDL-70157")," - AWS Aurora MySQL support for Moodle (backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58931"},"MDL-58931"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70285"},"MDL-70285")," - The ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69687"},"MDL-69687")," upgrade step kills large databases"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69526"},"MDL-69526")," - Custom field values in course overview block follow incorrect order"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65852"},"MDL-65852")," - Non-editing teacher should be able to download course participants list"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70265"},"MDL-70265")," - Reduce the number of phpunit runs in core's .travis.yml"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70386"},"MDL-70386")," - Illegible css coloring of correct/incorrect div"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69930"},"MDL-69930")," - Duplication items in drag-onto-image question"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70276"},"MDL-70276")," - Add support for github actions to moodle.git"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70355"},"MDL-70355")," - Multilang Filters not applied to Calendar block"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70063"},"MDL-70063")," - YouTube: Selecting a category results in ",(0,s.kt)("inlineCode",{parentName:"li"},"<data could not be obtained>")," error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67513"},"MDL-67513")," - View conversation link does not work when grading in full screen mode"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70558"},"MDL-70558")," - Available language packs unsorted, difficult to locate"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69868"},"MDL-69868")," - H5P corrupts USER object, causing forum error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70426"},"MDL-70426")," - Drag-drop markers questions: infinite markers keep duplicating"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70065"},"MDL-70065")," - Quiz add questions from question bank: problem with paging & show all"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62707"},"MDL-62707"),' - codingerror in Global Search when "search within enrolled courses only" is set'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70148"},"MDL-70148")," - Write new keyboard steps for Behat"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69955"},"MDL-69955")," - Question type Drag and Drop: drop zone disappear in special case"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70320"},"MDL-70320")," - Incorrect HTML escaping on the override permissions screen"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70261"},"MDL-70261")," - Upload Courses tool breaks on locked custom fields"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70436"},"MDL-70436")," - On mobile, the Quiz confirmation modal has it's close button cut off"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70373"},"MDL-70373")," - Atto HTML editor lacks border outside Moodle forms (e.g. Essay questions)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70374"},"MDL-70374")," - Layout of multiple choice questions not well aligned"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70520"},"MDL-70520")," - Moodle upgrade resets  scheduled tasks lastruntime"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70117"},"MDL-70117")," - PDF dataformat export: content can overflow when page headers are involved"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70072"},"MDL-70072")," - Date in message system  (always in Gregorian)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70248"},"MDL-70248")," - Drag and Drop onto images: Drop zones have UI issue in Editing form"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70080"},"MDL-70080")," - Users should be able to contact the site's support via the Moodle App (Backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69810"},"MDL-69810"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67636"},"MDL-67636")," - Locking grade category exposes hidden item grades on user report"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70352"},"MDL-70352")," - Modal forms stay on the screen if you have multiple modals on one page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70567"},"MDL-70567")," - Task logs page doesn't respect result filter when moving through the pagination"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70009"},"MDL-70009")," - Course with H5P element in content bank can not be deleted by Manager/Teacher role (with appropriate rights)")),(0,s.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69841"},"MDL-69841")," - Edit Quiz, click on help icon under review options group will check / uncheck the checkbox"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69422"},"MDL-69422")," - HTML validation and accessibility problems on database export page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69301"},"MDL-69301")," - Focus order in tabs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70094"},"MDL-70094")," - Question preview: Technical info section expands if you click the help icon there")),(0,s.kt)("h2",{id:"security-improvements"},"Security improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69877"},"MDL-69877")," - Set up a security.txt file in Moodle LMS")),(0,s.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=417167"},"MSA-21-0002")," Grade information disclosure in grade's external fetch functions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=417168"},"MSA-21-0003")," Client side denial of service via personal message"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=417170"},"MSA-21-0004")," Stored XSS possible via TeX notation filter"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=417171"},"MSA-21-0005")," Arbitrary PHP code execution by site admins via Shibboleth configuration")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.9.4"},"Notes de mise \xe0 jour de Moodle 3.9.4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.9.4"},"Notas de Moodle 3.9.4"))))}k.isMDXComponent=!0}}]);