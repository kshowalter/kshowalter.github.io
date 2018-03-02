/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{"background-color":"black"},"children":[{"tag":"p","children":[{"tag":"a","children":[{"tag":"img","props":{"width":"500px","class":"image_center","src":"/assets/404.png","alt":"Go home, you're lost..."}}],"props":{"href":"/"}}]}]}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"div","props":{"class":null},"children":[{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["About me"]},{"tag":"p","children":[{"tag":"a","children":[{"tag":"img","props":{"height":"250","class":"image_float_right","src":"/assets/beach.jpeg","alt":"Keith Showalter"}}],"props":{"href":"/assets/beach.jpeg"}}]},{"tag":"p","children":["I am an engineer and a web developer. "]},{"tag":"p","children":["My university education is in mechanical engineering. ","I worked at the ",{"tag":"a","children":["Kennedy Space Center"],"props":{"href":"#/experience/KSC"}}," in a mechanical/structural group working on launch structures for the space program. "]},{"tag":"p","children":["I work at the ",{"tag":"a","children":["Florida Solar Energy Center"],"props":{"href":"#/experience/FSEC"}}," as a research engineer. A majority of my time here has been supporting the photovoltaic module testing, but in the last 4-5 years I have been developing ",{"tag":"a","children":["web based engineering software"],"props":{"href":"#/projects/SPD"}},"."]},{"tag":"p","children":["More details are available at the links above, in my ",{"tag":"a","children":["resume"],"props":{"href":"#/Resume"}},", and throughout this site."]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Experience"]},{"tag":"p","children":[{"tag":"a","children":["Software Development"],"props":{"href":"#/Dev"}}]},{"tag":"p","children":[{"tag":"a","children":["Mechanical Engineering"],"props":{"href":"#/Mechanical_Engineering"}}]},{"tag":"p","children":[{"tag":"a","children":["Kennedy Space Center : Mechanical Engineer "],"props":{"href":"#/experience/KSC"}}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Personal"]},{"tag":"p","children":["I am a parent of young children, therefor I do not have much time for hobbies. I tend to align my personal interests with work and family responsibilities. "]},{"tag":"p","children":["I have always had an interest in photography, but I did not purchase my first interchangeable lens camera until after my first child was born. Most of my pictures are of family. I occasionally take the time to attempt artistic photography, and less occasionally post them online. I post some on ",{"tag":"a","children":["Flickr"],"props":{"href":"https://www.flickr.com/photos/mechkit/"}}," and ",{"tag":"a","children":["500px"],"props":{"href":"https://500px.com/mechkit"}},". I also have a Google Photos ",{"tag":"a","children":["album"],"props":{"href":"https://photos.app.goo.gl/Bb6fNvfAVeGsyo6L2"}},"."]},{"tag":"p","children":["I used to play video games. I got bored with most of them once I figured out how they worked and did most of what I could do. I was in to Minecraft for many years because I love to create. Drawing on my history with 3D CADD software, I have spent some time with Blender. It is a great program, I have even used it for video editing. However, I feel limited by the lack of parametric modeling and algorithmically created models. So my current focus is using my javascript skills to create procedurally generated worlds."]}]}]}]}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"div","props":{"class":null},"children":[{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Software development"]},{"tag":"p","children":["I have a long connection to programing, and some years of professional development."]},{"tag":"p","children":[{"tag":"a","children":["project list"],"props":{"href":"#/projects/dev_project_list"}}]}]}]}]}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"div","props":{"class":"section level_1"},"children":[{"tag":"h1","children":["Mechanical Engineering"]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Education"]},{"tag":"p","children":["I studied architecture and engineering, among other things, at Florida Community College at Jacksonville (now known as Florida State College at Jacksonville). I ended up taking an AA degree to transfer to a university, since FCCJ did not offer bachelor's degrees at the time."]},{"tag":"p","children":["I received a B.S. degree in mechanical engineering from Florida International University. "]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Experience"]},{"tag":"div","props":{"class":"section level_3"},"children":[{"tag":"h3","children":["Construction"]},{"tag":"p","children":["At my community collage I had an internship with Rollings construction. They were a small construction company that did a variety of commercial and residential jobs. My main responsibility was assisting with budget estimates that were used when bidding on projects."]}]},{"tag":"div","props":{"class":"section level_3"},"children":[{"tag":"h3","children":["Electronics"]},{"tag":"p","children":["After university I took a job at the Florida Solar Energy Center (",{"tag":"a","children":["FSEC"],"props":{"href":"#/experience/FSEC"}},"). My group primarily dealt with photovoltac module testing, so I assisted with those activities. I also worked on some solo projects, such as revitalizing and control mapping a UPS style fuel cell. As a mechanical engineer, I learned a lot about electronics on that project. Even years later, I still think that thing was weirdly wired. I left FSEC when I got an offer to work at the space center I could not refuse."]}]},{"tag":"div","props":{"class":"section level_3"},"children":[{"tag":"h3","children":["Mechanical and Structural"]},{"tag":"p","children":["At the ",{"tag":"a","children":["Kennedy Space Center"],"props":{"href":"#/experience/KSC"}}," I worked for a company called United Space Alliance. Finally I get to use my mechanical engineering degree. "]}]}]}]}]}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"div","props":{"class":"section level_1"},"children":[{"tag":"h1","children":["Resume of Keith R. Showalter"]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["OBJECTIVE"]},{"tag":"p","children":["To find a position where I can use my knowledge and skills to bring new designs and creations into the world, and further develop my own abilities."]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["QUALIFICATIONS"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"ul","props":{"class":"list_level_1"},"children":[{"tag":"li","props":{"class":"list_level_1"},"children":["Three years application programing with Javascript and Node.js"]},{"tag":"ul","props":{"class":"list_level_2"},"children":[{"tag":"li","props":{"class":"list_level_2"},"children":["Developed an application to automatically generate PV drawing platform"]},{"tag":"li","props":{"class":"list_level_2"},"children":["Front-end development with UI design and SVG creation"]},{"tag":"li","props":{"class":"list_level_2"},"children":["Back-end and development development"]}]},{"tag":"li","props":{"class":"list_level_1"},"children":["Five years as an engineer in PV testing"]},{"tag":"ul","props":{"class":"list_level_2"},"children":[{"tag":"li","props":{"class":"list_level_2"},"children":["Testing procedure development"]},{"tag":"li","props":{"class":"list_level_2"},"children":["Data analysis"]},{"tag":"li","props":{"class":"list_level_2"},"children":["Project planning"]},{"tag":"li","props":{"class":"list_level_2"},"children":["Field work"]},{"tag":"li","props":{"class":"list_level_2"},"children":["Experience with project management and documentation"]}]},{"tag":"li","props":{"class":"list_level_1"},"children":["Two years of 3D design and mechanical analysis for the space program"]},{"tag":"ul","props":{"class":"list_level_2"},"children":[{"tag":"li","props":{"class":"list_level_2"},"children":["Experience with Autodesk products, NX/Unigraphics, ProEngineer and others"]}]},{"tag":"li","props":{"class":"list_level_1"},"children":["Mechanical Engineering degree (BS)"]}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["DESIGN EXPERIENCE"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"ul","props":{"class":"list_level_1"},"children":[{"tag":"li","props":{"class":"list_level_1"},"children":["Florida Solar Research Center:"]},{"tag":"ul","props":{"class":"list_level_2"},"children":[{"tag":"li","props":{"class":"list_level_2"},"children":["Principal software engineer responsible for development of solar design program to produce NEC code compliant PV system schematics and drawings."]},{"tag":"li","props":{"class":"list_level_2"},"children":["PV testing engineer: Developing module testing procedures, planning array installations, quality management, misc. field work (instrumentation, troubleshooting, testing, etc.), PHP web app development, spreadsheet data analysis, Python data analysis."]}]},{"tag":"li","props":{"class":"list_level_1"},"children":["Kennedy Space Center:"]},{"tag":"ul","props":{"class":"list_level_2"},"children":[{"tag":"li","props":{"class":"list_level_2"},"children":["Supported Shuttle program launch structure modifications by determining design requirements, 3D modeling and analysis, drafted drawings to meet NASA standards."]},{"tag":"li","props":{"class":"list_level_2"},"children":["Designed a support platform for use during the assembly of the Orion crew capsule."]},{"tag":"li","props":{"class":"list_level_2"},"children":["Mechanical failure analysis of Pad-A modifications in preparation for the Ares I-X launch."]}]}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["EDUCATION"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"ul","props":{"class":"list_level_1"},"children":[{"tag":"li","props":{"class":"list_level_1"},"children":["Florida International University, Miami, FL: B.S., Mechanical Engineering"]},{"tag":"li","props":{"class":"list_level_1"},"children":["Florida Community College at Jacksonville, Jacksonville, FL: A.A"]},{"tag":"li","props":{"class":"list_level_1"},"children":["Fletcher Senior High School, Neptune Beach, FL: High School Diploma"]}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["EMPLOYMENT HISTORY"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"ul","props":{"class":"list_level_1"},"children":[{"tag":"li","props":{"class":"list_level_1"},"children":["Florida Solar Energy Center, University of Central Florida (2009-Present) - Research engineer in the solar energy division"]},{"tag":"li","props":{"class":"list_level_1"},"children":["United Space Alliance (2007-2009) - Mechanical engineer in a Kennedy Space Center engineering group for cranes and launch support structures"]},{"tag":"li","props":{"class":"list_level_1"},"children":["Florida Solar Energy Center, University of Central Florida (2005-2007) - Engineer in the solar energy division"]},{"tag":"li","props":{"class":"list_level_1"},"children":["Rollings Construction (2002-2002) - Started as an internship for college, then I was hired as employee. Assisted with estimation and bid preparation"]}]}]}]}]}]}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"div","props":{"class":"section level_1"},"children":[{"tag":"h1","children":["Florida Solar Energy Center"]}]}]}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"div","props":{"class":"section level_1"},"children":[{"tag":"h1","children":["Kennedy Space Center"]},{"tag":"p","children":["My work as a mechanical engineer."]},{"tag":"p","children":[{"tag":"a","children":[{"tag":"img","props":{"height":"300","class":"image_full_width","src":"assets/USA/20070515_133152-1.jpg","alt":"Me in front of the shuttle Atlantis"}}],"props":{"href":"assets/USA/20070515_133152-1.jpg"}},{"tag":"a","children":[{"tag":"img","props":{"height":"300","class":"image_full_width","src":"assets/USA/20060104_102653.jpg","alt":"Me in front of the VAB w/ tank"}}],"props":{"href":"assets/USA/20060104_102653.jpg"}},{"tag":"a","children":[{"tag":"img","props":{"height":"300","class":"image_full_width","src":"assets/USA/20070515_085547.jpg","alt":"Me on the launchpad with Shuttle on crawler in background"}}],"props":{"href":"assets/USA/20070515_085547.jpg"}}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Space Shuttle program"]},{"tag":"p","children":["I primarily worked for the Space Shuttle program as an employee of United Space Alliance (",{"tag":"a","children":["Wikipedia"],"props":{"href":"https://en.wikipedia.org/wiki/United_Space_Alliance"}},"). My group provided engineering design for flight hardware support and lifting structures. We did not work on the space ship, but anything that touched it was our responsibility. "]},{"tag":"p","children":["Some samples of my projects:"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"ul","props":{"class":"list_level_1"},"children":[{"tag":"li","props":{"class":"list_level_1"},"children":["Orbiter access stand railing upgrade"]}]}]},{"tag":"p","children":[{"tag":"a","children":[{"tag":"img","props":{"class":"image_full_width","src":"assets/USA/shuttle_platform_drawing2.jpg","alt":"Railing design drawing detail"}}],"props":{"href":"assets/USA/shuttle_platform_drawing2.jpg"}},{"tag":"a","children":[{"tag":"img","props":{"class":"image_full_width","src":"assets/USA/shuttle_platform_drawing.jpg","alt":"Railing design drawing"}}],"props":{"href":"assets/USA/shuttle_platform_drawing.jpg"}},{"tag":"a","children":[{"tag":"img","props":{"class":"image_full_width","src":"assets/USA/IMG_9300.jpg","alt":"Railing design in use"}}],"props":{"href":"assets/USA/IMG_9300.jpg"}}]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"ul","props":{"class":"list_level_1"},"children":[{"tag":"li","props":{"class":"list_level_1"},"children":["Crawler railing upgrade"]},{"tag":"li","props":{"class":"list_level_1"},"children":["SRB access stand RFP design"]}]}]},{"tag":"p","children":[{"tag":"a","children":[{"tag":"img","props":{"class":"image_full_width","src":"assets/USA/RPSF_stand.jpg","alt":"SRB access stand RFP design"}}],"props":{"href":"assets/USA/RPSF_stand.jpg"}}]},{"tag":"p","children":["As a new engineer I was assigned a lot of railings."]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Constellation"]},{"tag":"p","children":["I also worked on the (then) new Constellation project. Starting with tipping analysis of the rocket stacks when assembled in the VAB."]},{"tag":"p","children":[{"tag":"a","children":[{"tag":"img","props":{"class":"image_full_width","src":"assets/USA/stack_tip_calculation.jpg","alt":"Constellation stack tip calculation"}}],"props":{"href":"assets/USA/stack_tip_calculation.jpg"}}]},{"tag":"p","children":["I also working on a large access platform that was to be used in the construction of the orbiter capsule. This took a lot of time and a lot of iterations to get a design that the client (Boing) was happy with."]},{"tag":"p","children":[{"tag":"a","children":[{"tag":"img","props":{"class":"image_full_width","src":"assets/USA/stand1.jpg","alt":"Stand model"}}],"props":{"href":"assets/USA/stand1.jpg"}},{"tag":"a","children":[{"tag":"img","props":{"class":"image_full_width","src":"assets/USA/IMG_9313.jpg","alt":"Stand print with model"}}],"props":{"href":"assets/USA/IMG_9313.jpg"}}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["The Tourist"]},{"tag":"p","children":["One advantage to working at the space center is that I get to go and see a lot of interesting places. Below are a few pictures from when I visited the crew compartment of one of the orbiters."]},{"tag":"p","children":[{"tag":"a","children":[{"tag":"img","props":{"height":"300","class":"image_full_width","src":"assets/USA/20071130_131038.jpg","alt":"Discovery entrance"}}],"props":{"href":"assets/USA/20071130_131038.jpg"}},{"tag":"a","children":[{"tag":"img","props":{"height":"300","class":"image_full_width","src":"assets/USA/20071130_130814.jpg","alt":"Discovery pilot seat"}}],"props":{"href":"assets/USA/20071130_130814.jpg"}},{"tag":"a","children":[{"tag":"img","props":{"height":"300","class":"image_full_width","src":"assets/USA/20071130_131038.jpg","alt":"Discovery pod bay window"}}],"props":{"href":"assets/USA/20071130_131038.jpg"}}]}]}]}]}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["About"],"props":{"href":"#/About"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["Resume"],"props":{"href":"#/Resume"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["Projects"],"props":{"href":"#/projects/dev_project_list"}}]}]}]}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"div","props":{"class":"section level_1"},"children":[{"tag":"h1","children":["Keith Showalter's philosophy on JavaScript development."]},{"tag":"p","children":["I moved from PHP just before an explosion of JavaScript frameworks and modules.","Sure you could save a lot of time reusing someone else's hard work, but how much time will you spend picking and learning the framework, the reevaluating it every six months. ","As someone that was new to the JavaScript ecosystem, I decided it made more sense to do it all myself, as a learning exercise. Once I discovered what I really needed, and all the problems that need to be solved, I would be better equipped to select an external module to replace mine. What I discovered is that often I did not need to replace my simple solution. "]}]}]}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"div","props":{"class":"section level_1"},"children":[{"tag":"h1","children":["Solar Plans Designer"]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["History"]},{"tag":"p","children":["I was brought on to the project to create a web application to take user input, and use an electrical design algorithm to design a photovoltac system that is compliant with the National Electical Code. The completed design was to be used to populate a customized template drawing that a contractor could use when submitting a permit application. In the end I also wrote the design algorithm and electrical drawing, with feedback from NEC experts and permit officials. "]},{"tag":"p","children":["I wrote it originally as a full stack application with Meteor. (",{"tag":"a","children":["SPD code repository"],"props":{"href":"https://github.com/FSEC/SPD"}},")  ","When the project was later integrated into an existing dotnet application, the server side was converted to  standard Node.js."]},{"tag":"p","children":["The electrical characteristics of the design are calculated by what is refered to as the ",{"tag":"a","children":["\"Solar Design Algorithm\""],"props":{"href":"https://github.com/FSEC/solar_design_algorithm"}},". That repsository contains a script that extracts the code in the markdown files, and saves them as JavaScript files. Those files are copied to the ",{"tag":"a","children":["SPD server"],"props":{"href":"https://github.com/FSEC/SPD_server"}}," and used as modules."]},{"tag":"p","children":["The final result is a PDF drawing that a solar contractor can submit with their building permit application. This SPD system is used as the express design option in ",{"tag":"a","children":["FSEC's certification application"],"props":{"href":"https://scp.fsec.ucf.edu/"}},". Unfortunatly the system is only available to licenced contrators. A sample is available below."]},{"tag":"p","children":[{"tag":"a","children":[{"tag":"img","props":{"class":"image_full_width","src":"assets/FSEC/permit_1511_p1.png","alt":"Sample Drawing"}}],"props":{"href":"assets/FSEC/permit_1511_p1.pdf"}}]}]}]}]}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"div","props":{"class":null},"children":[{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Projects"]},{"tag":"div","props":{"class":"section level_3"},"children":[{"tag":"h3","children":[{"tag":"a","children":["This site"],"props":{"href":"#/projects/this_site"}}]}]},{"tag":"div","props":{"class":"section level_3"},"children":[{"tag":"h3","children":["Standards and APIs (definitions of config objects for different categories)"]},{"tag":"p","children":[{"tag":"a","children":["Standardized Node Application Structure"],"props":{"href":"https://github.com/kshowalter/SNAS"}},": ","Defines standardized connection points within a application that will encourage interchangeable modules."]}]},{"tag":"div","props":{"class":"section level_3"},"children":[{"tag":"h3","children":["For the Florida Solar Energy Center"]},{"tag":"div","props":{"class":"section level_4"},"children":[{"tag":"h4","children":[{"tag":"a","children":["Solar Plans Designer"],"props":{"href":"#/projects/SPD"}}]}]}]},{"tag":"div","props":{"class":"section level_3"},"children":[{"tag":"h3","children":["Experimental"]},{"tag":"div","props":{"class":"section level_4"},"children":[{"tag":"h4","children":["Packet Notes (",{"tag":"a","children":["github"],"props":{"href":"https://github.com/kshowalter/PacketNotes"}},")"]},{"tag":"p","children":["    A note organization app. Some combination of Simplenote, Workflowy, Fetchnotes."]}]},{"tag":"div","props":{"class":"section level_4"},"children":[{"tag":"h4","children":["Galactapedia (",{"tag":"a","children":["github"],"props":{"href":"https://github.com/kshowalter/galactipedia"}},")"]},{"tag":"p","children":["    A Wikipedia like application for a procedurally generated universe.","    This is a testbed for webapp development tools and procedural generation."]}]},{"tag":"div","props":{"class":"section level_4"},"children":[{"tag":"h4","children":["PaperSpace (",{"tag":"a","children":["github"],"props":{"href":"https://github.com/kshowalter/PaperSpace"}},")"]},{"tag":"p","children":["    A tool to generated a tabletop paper based game.","    This is a testbed for webapp development tools."]}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Information"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["Sumpedia"],"props":{"href":"https://github.com/kshowalter/sumpedia"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["PacketNotes"],"props":{"href":"https://github.com/kshowalter/PacketNotes"}},": Organizer for short packets of information."]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["info_cli"],"props":{"href":"https://github.com/kshowalter/info_cli"}},": Placeholder for PacketNotes CLI."]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Javascript support"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["functions"],"props":{"href":"https://github.com/kshowalter/functions"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["hash_router"],"props":{"href":"https://github.com/kshowalter/hash_router"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["k"],"props":{"href":"https://github.com/kshowalter/k"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["kstore"],"props":{"href":"https://github.com/kshowalter/kstore"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["Simple Indexer"],"props":{"href":"https://github.com/kshowalter/simple_indexer"}}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["SpecDOM"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["SpecDOM API"],"props":{"href":"https://github.com/kshowalter/specDOM_API"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["SpecDOM Helper"],"props":{"href":"https://github.com/kshowalter/specdom_helper"}}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Guides"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["humans_guide"],"props":{"href":"https://github.com/kshowalter/humans_guide"}}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Documentation/Markdown"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["markdown_loader"],"props":{"href":"https://github.com/kshowalter/markdown_loader"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["process_code_defining_document"],"props":{"href":"https://github.com/kshowalter/process_code_defining_document"}}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Simulation/Procedural Generation"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["galactipedia"],"props":{"href":"https://github.com/kshowalter/galactipedia"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["galactipedia_map"],"props":{"href":"https://github.com/kshowalter/galactipedia_map"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["mk_universe"],"props":{"href":"https://github.com/kshowalter/mk_universe"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["procedural_map_test"],"props":{"href":"https://github.com/kshowalter/procedural_map_test"}}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["2D graphics"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["chart_maker"],"props":{"href":"https://github.com/kshowalter/chart_maker"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["geometry"],"props":{"href":"https://github.com/kshowalter/geometry"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["GeometryAPI"],"props":{"href":"https://github.com/kshowalter/GeometryAPI"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["mkDrawing"],"props":{"href":"https://github.com/kshowalter/mkDrawing"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["SVGize"],"props":{"href":"https://github.com/kshowalter/svgize"}}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["3D"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["GeometryAPI"],"props":{"href":"https://github.com/kshowalter/GeometryAPI"}}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Games"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["PaperSpace"],"props":{"href":"https://github.com/kshowalter/PaperSpace"}}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Game mods"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["more_realistic_tools"],"props":{"href":"https://github.com/kshowalter/more_realistic_tools"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["cdda-magic-mod"],"props":{"href":"https://github.com/kshowalter/cdda-magic-mod"}}]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["minetest_game"],"props":{"href":"https://github.com/kshowalter/minetest_game"}}]}]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Projects on hold and placeholders"]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["blender_python_tests"],"props":{"href":"https://github.com/kshowalter/blender_python_tests"}},": Blender procedural generation tests."]},{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["ShipNet"],"props":{"href":"https://github.com/kshowalter/ShipNet"}},": Simulated spaceship interface."]}]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["kwas"],"props":{"href":"https://github.com/kshowalter/kwas"}},": Javascript framework"]}]},{"tag":"ul","props":{"class":"list_level_0"},"children":[{"tag":"li","props":{"class":"list_level_0"},"children":[{"tag":"a","children":["mkwebsite"],"props":{"href":"https://github.com/kshowalter/mkwebsite"}}]}]}]}]}]}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"div","props":{"class":"section level_1"},"children":[{"tag":"h1","children":["Projects"]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Development"]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Mechanical Engineering"]}]}]}]}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"div","props":{"class":"section level_1"},"children":[{"tag":"h1","children":["Projects"]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Development"]}]},{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["Mechanical Engineering"]}]}]}]}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {"tag":"div","props":{"class":"level_0"},"meta":{},"children":[{"tag":"div","props":{"class":null},"children":[{"tag":"div","props":{"class":"section level_2"},"children":[{"tag":"h2","children":["About this site"]},{"tag":"p","children":["This is the home page of Keith Showalter. The code is currently hosted on ",{"tag":"a","children":["Github"],"props":{"href":"https://github.com/kshowalter/kshowalter"}},". Almost all of the code is written by me in regular javascript. See my philosophy on ",{"tag":"a","children":["JavaScript development"],"props":{"href":"#/philosophy/javascript"}},". "]},{"tag":"p","children":["Most of the pages are written Markdown (including some of the extended formating). ","A ",{"tag":"a","children":["Markdown Loader"],"props":{"href":"https://github.com/kshowalter/markdown_loader"}}," is used in Webpack to load the markdown files. ","The content of the files is loaded into the ",{"tag":"a","children":["SpecDOM API"],"props":{"href":"https://github.com/kshowalter/specDOM_API"}}," format. ","The entire site's content is sent to the client browser in this format. "]},{"tag":"p","children":["On the client, a ",{"tag":"a","children":["simple router"],"props":{"href":"https://github.com/kshowalter/hash_router"}}," selects the page to display, and the page specs are rendered with ",{"tag":"a","children":["SpecDOM"],"props":{"href":"https://github.com/kshowalter/specdom"}},". "]}]}]}]}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_simpledom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_simpledom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_simpledom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_functions__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_functions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_functions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hash_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_specdom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_specdom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_specdom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__(28);
/**
* this is the app
* @file_overview this the starting point for the application.
* @author keith showalter {@link https://github.com/kshowalter}
* @version 0.1.0
*/
console.log('/\\');










var page_file_list = __webpack_require__(29).keys();

var pages = {};

/*
page_file_list.forEach(function(file_path){
  var page_name = file_path.split(/\/|\./).slice(-2)[0];
  console.log('P', page_name, file_path);
  pages[page_name] = require(file_path);
});
*/

var print_specs = function print_specs(specs, logger, indent_string) {
  var desc;
  if (specs.constructor === String) {
    desc = indent_string + '  ' + specs;
  } else {
    desc = indent_string + '<' + specs.tag;
    if (specs.props && (specs.props.class || specs.props.id)) {
      desc += ': ';
      if (specs.props.class) {
        desc += '.' + specs.props.class;
      }
      if (specs.props.id) {
        desc += '#' + specs.props.id;
      }
    }
    if (specs.text) {
      desc += ' | ' + specs.text;
    }
  }
  logger(desc);
  indent_string += '  ';
  if (specs.children) {
    specs.children.forEach(function (child_specs) {
      print_specs(child_specs, logger, indent_string);
    });
  }
};

// Load page content
function requireAll(r) {
  r.keys().forEach(function (file_path) {
    var page_name = file_path.split(/\/|\./).slice(-2)[0];
    var location = file_path.split(/\/|\./).slice(2, -2);

    //console.log('NAME', page_id, page_name);
    //pages[page_name] = r(file_path);

    var page_specs = r(file_path);

    //var title = markdown_specs.children[0].children[0].text;
    page_specs.props.id = 'page';

    var title = __WEBPACK_IMPORTED_MODULE_2_functions___default.a.pretty_name(page_name);
    if (page_specs && page_specs.children && page_specs.children[0] && page_specs.children[0].children[0].tag === 'h1') {
      title = page_specs.children[0].children[0].children[0];
      //delete(page_specs.children[0].children[0]);
    }

    var page_id;
    if (location.length > 0) {
      page_id = location.join('/') + '/' + page_name;
    } else {
      page_id = page_name;
    }

    pages[page_id] = {
      location: location,
      name: page_name,
      title: title,
      specs: page_specs
    };
  });
}
requireAll(__webpack_require__(30));

//var about = require('markdown_parser!../page/about.md');
console.log('pages', pages);

var global = window || global;

global.logger = console.log;
global.f = __WEBPACK_IMPORTED_MODULE_2_functions___default.a;
global.$ = __WEBPACK_IMPORTED_MODULE_1_simpledom___default.a;
global.settings = __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* default */];
sessionStorage.load_times = sessionStorage.load_times || '';
global.measurments = {};

var content_anchor = __WEBPACK_IMPORTED_MODULE_1_simpledom___default()('#content');
var specdom = __WEBPACK_IMPORTED_MODULE_4_specdom___default()(content_anchor);

var router = Object(__WEBPACK_IMPORTED_MODULE_3_hash_router__["a" /* default */])(function (selection) {
  console.log('selection: ', selection);

  if (!selection) {
    console.log('re-ROUTING... to About');
    router('About');
  } else {
    var selected_page_id = selection.join('/');
    var selected_page_name = selection[selection.length - 1];
    var selected_location = selection.slice(0, selection.length - 1).join(' / ');
    if (!selected_location) {
      selected_location = '/';
    }
    console.log('ROUTING... ' + selected_page_id);
    var page = pages[selected_page_id];
    var page_specs;
    if (!page) {
      page_specs = pages[404].specs;
    } else {
      page_specs = page.specs;
    }

    var titlebar_content = {
      tag: 'div',
      props: {
        id: 'titlebar_content'
      },
      children: [
      ///*
      {
        tag: 'span',
        props: {
          id: 'site_title',
          class: 'terminal'
        },
        text: 'Keith Showalter :'
      }]
    };

    var menu_specs = {
      tag: 'span',
      props: {
        id: 'menu'
      },
      children: []
    };
    titlebar_content.children.push(menu_specs);

    menu_specs.children.push({
      tag: 'span',
      text: '[',
      props: {
        class: 'terminal titlebar_link'
      }
    });

    if (pages['menu']) {
      pages['menu'].specs.children[0].children.forEach(function (li_spec) {
        var name = li_spec.children[0].children[0];
        var prety_name = __WEBPACK_IMPORTED_MODULE_2_functions___default.a.pretty_name(name);
        var href = li_spec.children[0].props.href;
        //console.log(page_id === selected_page_id, page_id , selected_page_id );
        var selected = href.slice(2) === selected_page_id;
        //console.log('selected', page_id, selected_page_id, selected);
        menu_specs.children.push({
          tag: selected ? 'span' : 'a',
          text: prety_name.trim(),
          props: {
            class: selected ? 'terminal titlebar_link titlebar_link_selected' : 'terminal titlebar_link',
            href: href
          }
        });
      });
    }

    menu_specs.children.push({
      tag: 'span',
      text: ']',
      props: {
        class: 'terminal titlebar_link'
      }
    });

    var specs = {
      tag: 'div',
      children: [{
        tag: 'div',
        props: {
          id: 'titlebar'
        },
        children: [titlebar_content]
      }, {
        tag: 'div',
        props: {
          class: 'transition'
        }
      }, page_specs]
    };
    console.log('SPECS', specs);
    //rint_specs( specs, console.log, 's| ');
    var status = specdom.load(specs);
    if (status) {
      //resize_sections();

    }

    if (page_specs.meta.backgroundImage) {
      document.body.style.backgroundImage = 'url("assets/' + page_specs.meta.backgroundImage + '")';
    } else {
      document.body.style.backgroundImage = '';
    }
    if (page_specs.meta['background-color']) {
      document.body.style['background-color'] = page_specs.meta['background-color'];
    } else {
      document.body.style['background-color'] = null;
    }
  }
});

router();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(19)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js!./normalize.css", function() {
			var newContent = require("!!../css-loader/index.js!./normalize.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(undefined);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(20);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/**
* A simple DOM manipulation tool.
 * @fileOverview Constructor for SimpleDOM function.
 * @author Keith Showalter {@link https://github.com/kshowalter}
 * @version 0.1.0
 */


/**
 * @module
 */
var Wrap = __webpack_require__(22);

/**
 * Wraps an HTMLElement with a jquery like function
 * @param  {string} input
 * @return {SimpleDOM} Wrapped HTMLElement
 */
var $ = function(input, specs){
  if( typeof input === 'undefined' ) {
    //log('input needed');
    return false;
  }

  if( input.constructor === Object && input.elem ){
    return input;
  }

  if( specs && specs.tag === 'textNode'){
    specs.textNode = true;
  }

  if( input.constructor === Object && input.tag ){
    specs = input;
    input = specs.tag;
  }

  var element;
  if( input.nodeName !== undefined ) {
    element = input;
  } else if( input.substr && input.substr(0,1) === '#' ) {
    element = document.getElementById(input.substr(1));
  } else if( input.substr && input.substr(0,1) === '.' ) {
    element = document.getElementsByClassName(input.substr(1))[0];
  } else if( input.constructor.prototype === HTMLElement || input instanceof SVGElement ) {
    element = input;
  } else {
    if( specs && specs.namespaceURI ) {
      element = document.createElementNS(specs.namespaceURI, input);
    } else if( specs && specs.textNode ) {
      element = document.createTextNode(specs.text);
    } else {
      element = document.createElement(input);
    }
  }
  var sdom = Wrap(element);
  if( specs ){
    if( specs.props ){
      for( var name in specs.props ){
        sdom.attr(name, specs.props[name]);
      }
    }
    if( specs.text ){
      sdom.text( specs.text );
    }
  }
  return sdom;
};

/**
 * Constructor for SimpleDOM function.
 * @exports $
 */
module.exports = $;


/***/ }),
/* 22 */
/***/ (function(module, exports) {



/**
 * Prototype object for the element wrapper.
 */
var wrapperPrototype = {
  text: function(string){
    this.elem.textContent = string;
    return this;
  },
  append: function(subElement){
    if( subElement instanceof String){
      subElement = document.createTextNode(subElement);
    }
    if( subElement instanceof Node ){
      this.elem.appendChild(subElement);
    } else {
      this.elem.appendChild(subElement.elem);
    }
    return this;
  },
  appendTo: function(parentElement){
    if( parentElement instanceof Node ){
      parentElement.appendChild(this.elem);
    } else {
      parentElement.append(this);
    }
    return this;
  },
  attr: function(name, value ){
    var attributeName;
    if( name === 'class'){
      attributeName = 'class';
    } else {
      attributeName = name;
    }
    if( typeof value === 'function' ){
      this.elem[attributeName] = value;
    } else {
      this.elem.setAttribute(attributeName, value);
    }
    //console.log(attributeName, value);
    return this;
  },
  css: function(name, value){
    if( value === undefined ){
      return this.elem.style[name];
    }
    this.elem.style[name] = value;
    return this;
  },
  unwrap: function(){
    return this.elem;
  },
  clear: function(){
    //this.elem.innerHTML = '';
    while (this.elem.firstChild) {
      this.elem.removeChild(this.elem.firstChild);
    }
    return this;
  }
};


/**
 * @constructor Wraps an HTMLElement with a jquery like function.
 * @param  {HTMLElement} element
 * @return {function} HTMLElement wrapped by SimpleDOM
 */
var Wrap = function(element){
  var W = Object.create(wrapperPrototype);
  W.elem = element;
  return W;
};


/**
 * @exports Wrap
 */
module.exports = Wrap;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var f = {};

f.mk_sheet_num = {};
f.mk_report_page_num = {};
f.mk_preview = {};

f.setup_body = function(title, sections){
  document.title = title;
  var body = document.body;
  var status_bar = document.createElement('div');
  status_bar.id = 'status';
  status_bar.innerHTML = 'loading status...';
  body.insertBefore(status_bar, body.firstChild);
};

f.pad_zero = function(num, size){
  var s = '000000000' + num;
  return s.substr(s.length-size);
};

f.obj_names = function( object ) {
  if( object !== undefined ) {
    var a = [];
    for( var id in object ) {
      if( object.hasOwnProperty(id) )  {
        a.push(id);
      }
    }
    return a;
  }
};

f.object_defined = function(object){
  //logger.info(object);
  for( var key in object ){
    if( object.hasOwnProperty(key) ){
      //logger.info(key);
      if( object[key] === null || object[key] === undefined ) return false;
    }
  }
  return true;
};

f.nullToObject = function(object){
  for( var key in object ){
    if( object.hasOwnProperty(key) ){
      if( object[key] === null ){
        object[key] = {};
      } else if( typeof object[key] === 'object' ) {
        object[key] = f.nullToObject(object[key]);
      }
    }
  }
  return object;
};

f.blank_copy = function(object){
  var newObject = {};
  for( var key in object ){
    if( object.hasOwnProperty(key) ){
      if( object[key].constructor === Object ) {
        newObject[key] = {};
        for( var key2 in object[key] ){
          if( object[key].hasOwnProperty(key2) ){
            newObject[key][key2] = null;
          }
        }
      } else {
        newObject[key] = null;
      }
    }
  }
  return newObject;
};

f.blank_clean_copy = function(object){
  var newObject = {};
  for( var key in object ){
    if( object.hasOwnProperty(key) ){
      if( object[key].constructor === Object ) {
        newObject[key] = {};
        for( var key2 in object[key] ){
          if( object[key].hasOwnProperty(key2) ){
            var clean_key = f.clean_name(key2);
            newObject[key][clean_key] = null;
          }
        }
      } else {
        newObject[key] = null;
      }
    }
  }
  return newObject;
};

f.merge_objects = function merge_objects(object1, object2){
  for( var key in object1 ){
    if( object1.hasOwnProperty(key) ){
      //if( key === 'make' ) logger.info(key, object1, typeof object1[key], typeof object2[key]);
      //logger.info(key, object1, typeof object1[key], typeof object2[key]);
      if( object1[key] && object1[key].constructor === Object ) {
        if( object2[key] === undefined ) object2[key] = {};
        merge_objects( object1[key], object2[key] );
      } else {
        object2[key] = object1[key];
      }
    }
  }
};

f.array_to_object = function(arr) {
  var r = {};
  for (var i = 0; i < arr.length; ++i)
  r[i] = arr[i];
  return r;
};

f.nan_check = function nan_check(object, path){
  if( path === undefined ) path = "";
  path = path+".";
  for( var key in object ){
    //logger.info( "NaNcheck: "+path+key );

    if( object[key] && object[key].constructor === Array ) object[key] = f.array_to_object(object[key]);


    if(  object[key] && ( object.hasOwnProperty(key) || object[key] !== null )){
      if( object[key].constructor === Object ){
        //logger.info( "  Object: "+path+key );
        nan_check( object[key], path+key );
      } else if( object[key] === NaN || object[key] === null ){
        logger.info( "NaN: "+path+key );
      } else {
        //logger.info( "Defined: "+path+key, object[key]);

      }
    }

  }
};

f.str_to_num = function str_to_num(input){
  var output;
  if(!isNaN(input)) output = Number(input);
  else output = input;
  return output;
};


f.pretty_word = function(name){
  return name.charAt(0).toUpperCase() + name.slice(1);
};

f.to_underscore = function(name){
  return name.replace(/([A-Z])/g, function($1){
    return '_'+$1.toLowerCase();
  });
};

f.pretty_name = function(name){
  name = f.to_underscore(name);
  var l = name.split('_');
  l.forEach(function(name_seqment,i){
    l[i] = f.pretty_word(name_seqment);
  });
  var pretty = l.join(' ');

  return pretty;
};


f.pretty_names = function(object){
  var new_object = {};
  for( var key in object ){
    if( object.hasOwnProperty(key) ){
      var new_key = f.pretty_name(key);
      new_object[new_key] = object[key];
    }
  }
  return new_object;
};
f.name_to_id = function(name){
  return name.replace(' ','_').replace(/\W/g, '_').toLowerCase();
};

f.clean_name = function(name){
  return name.split(' ')[0];
};

f.format_value = function(value_in){
  var value_out;

  if( typeof value_in === 'undefined' || value_in === null ) {
    value_out = false;
  } else if( value_in.constructor === Array ){
    value_out = value_in.join(', ');
  } else if( value_in.constructor === Object ){
    value_out = false;
  } else if( isNaN(value_in) ){
    value_out = value_in;
  } else {
    var value_float = parseFloat(value_in);
    if( (value_float%1) === 0 ){ // if is intiger
      value_out = parseFloat(value_in).toFixed(0);
    } else {
      value_out = parseFloat(value_in).toFixed(2);
    }
  }

  return value_out;
};

f.lowercase_properties = function lowercase_properties(obj) {
  var new_object = new obj.constructor();
  for( var old_name in obj ){
    if (obj.hasOwnProperty(old_name)) {
      var new_name = old_name.toLowerCase();
      if(obj[old_name] && ( obj[old_name].constructor === Object || obj[old_name].constructor === Array )){
        new_object[new_name] = lowercase_properties(obj[old_name]);
      } else {
        new_object[new_name] = obj[old_name];
      }
    }

  }
  return new_object;
};

f.clear_object = function(obj){
  for( var id in obj ){
    if( obj.hasOwnProperty(id)){
      delete obj[id];
    }
  }
};


f.are_we_there_yet = function are_we_there_yet(test, done, fail ){
  if( test() ){
    //logger.info('test: PASS');
    done();
  } else {
    //logger.info('test: fail');
    //*
    // may need polyfill for IE9
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout
    if(fail) fail();
    setTimeout(
      are_we_there_yet,
      10,
      test,
      done,
      fail
    );
    //*/
  }
};

f.mk_ready = function(names, callback){
  var list = {};
  var data_collection = {};
  names.forEach(function(name){
    list[name] = false;
  });
  var ready = false;

  return function(name, data){
    if( name === false ){
      callback({error:false});
    }
    //logger.info('name:', name);
    if(name){
      list[name] = true;
      if(data){
        data_collection[name] = data;
      }
    }
    for( name in list){
      if( list[name] === false ){
        return false;
      }
    }
    //logger.info('ready!!!!!', list);
    if(callback){
      callback(data_collection);
    }
    return true;
  };
};

f.mk_ready_count = function(total_count, callback){
  var count = 0;
  var data_collection = {};
  var ready = false;

  return function(data, err){
    count++;
    if( data === false ){
      logger.info('failure state');
      callback(false);
    }
    if( data || err ){
      data_collection[count] = {
        data: data,
        err: err
      };
    }
    if( count < total_count ){
      return false;
    }
    if(callback){
      callback(data_collection);
    }
    return true;
  };
};


f.split_long_sentence = function(string, length){
  var lines = [];
  while( string.length >= length ){
    var i = length;
    while( string[i] !== ' ' ){
      i--;
    }
    lines.push(string.slice(0,i));
    string = string.slice(i+1);
  }
  lines.push(string);
  return lines;
};

f.get_max_of_array = function(num_array) {
  return Math.max.apply(null, num_array);
};
f.get_min_of_array = function(num_array) {
  return Math.min.apply(null, num_array);
};

f.range = function(num) {
  return Array.apply(null, Array(num)).map(function ($, i) {return i;});
};

f.mk_range_measurment = function(){
  var range = [];

  var check = function(value){
    range[0] = range[0] || value;
    range[1] = range[1] || value;
    if( value < range[0] ){
      range[0] = value;
    }
    if( value > range[1] ){
      range[1] = value;
    }
    return range;
  };

  return check;
};

f.format_milliseconds = function(milliseconds_number){
  var seconds_number = milliseconds_number/1000;
  var days    = Math.floor( seconds_number / (3600*24) )
  var hours   = Math.floor( ( seconds_number - (days*(3600*24))                          ) / 3600 );
  var minutes = Math.floor( ( seconds_number - (days*(3600*24)) - (hours * 3600)         ) / 60   );
  var seconds = seconds_number - (days*(3600*24)) - (hours * 3600) - (minutes * 60);
  var seconds = Math.floor( seconds*1000 )/1000;

  if (days    < 10) {days    = '0'+days;}
  if (hours   < 10) {hours   = '0'+hours;}
  if (minutes < 10) {minutes = '0'+minutes;}
  if (seconds < 10) {seconds = '0'+seconds;}

  return days+'d '+hours+'h '+minutes+'m '+seconds+'s';
}

module.exports = f;
//export default f;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback){

  function hash_check(callback) {
    if( location.hash === '' || location.hash === '#' || location.hash === '#/' ){
      //window.location.hash = '#/';
      callback(false);
    } else {
      //console.log('location.hash',location.hash);
      var url = location.hash.slice(2) || '/';
      //console.log('url',url);
      var values = url.split('/');

      callback(values);

    }
  }

  // Listen on hash change:
  window.addEventListener('hashchange', function(){
    hash_check(callback);
  });
  // Listen on page load:
  //window.addEventListener('load', function(){
  //  hash_check(callback);
  //});

  return function(new_route){
    if( new_route && new_route.constructor === String ){
      window.location.hash = '#/' + new_route;
      //hash_check(callback);
    } else {
      hash_check(callback);
      //console.warn('new route is not a string');
    }
  };

});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
* @fileOverview A view renderer based on a simple configuration object.
* @author Keith Showalter {@link https://github.com/kshowalter}
* @version 0.1.0
*/


/** @module SimpleDOM */
var $ = __webpack_require__(26);


var configChanged = function(newSpecs, oldSpecs){
  if( newSpecs !== oldSpecs ){
    return true;
  } else if( newSpecs.tag !== oldSpecs.tag ){
    return true;
  } else if( newSpecs.props !== oldSpecs.props ){
    return true;
  } else if( newSpecs.children !== oldSpecs.children ){
    return true;
  } else {
    return false;
  }
};

var mkNode = function(specs){
  var sdom;

  if( specs.tag === 'elem' ) { // NODE ELEMENT
    sdom = $(specs.elem);
  } else if( specs.constructor === Object ){ // CONFIG
    specs.meta = specs.meta || {};
    sdom = $(specs.tag, {
      namespaceURI: specs.meta.namespaceURI,
      textNode: specs.tag === 'textNode',
      text: specs.text
    });
    if( specs.props ){
      for( var name in specs.props ){
        sdom.attr(name, specs.props[name]);
      }
    }
    if( specs.text ){
      sdom.text( specs.text );
    }
  } else if( specs.constructor.prototype === HTMLElement || specs instanceof SVGElement ) { // NODE ELEMENT
    sdom = $(specs);
  } else {
    console.warn('node specs not recognized:', specs);
    //sdom = document.createTextNode(specs);
    sdom = undefined;
  }
  return sdom;
};




/**
* mkDOM - Makes DOM Element from a ConfigDOM specs object
* @function
* @param  {object} specs ConfigDOM specs object
* @return {element} DOM Element
*/
var mkDOM = function mkDOM(newParentSpecs, newSpecs, oldParentSpecs, oldSpecs){

  if(newSpecs){
    if( newSpecs.constructor === Number ){
      newSpecs = newSpecs.toString();
    }
    if( newSpecs.constructor === String ){
      //sdom = document.createTextNode(specs);
      newSpecs = {
        tag: 'textNode',
        text: newSpecs
      };
    }
    if( newSpecs.constructor.prototype === HTMLElement || newSpecs instanceof SVGElement ) { // NODE ELEMENT
      newSpecs = {
        tag: 'elem',
        elem: newSpecs
      };
    }
  }
  var sdom;
  if( newSpecs && !oldSpecs ) { // NEW
    sdom = mkNode(newSpecs);
    newParentSpecs.sdom.append(sdom);
  } else if( !newSpecs && oldSpecs ){ // DELETE
    oldParentSpecs.sdom.elem.removeChild(oldSpecs.sdom.elem);
  } else if( newSpecs && configChanged(newSpecs, oldSpecs) ){ // CHANGE
    oldParentSpecs.sdom.elem.removeChild(oldSpecs.sdom.elem);
    sdom = mkNode(newSpecs);
    newParentSpecs.sdom.append(sdom);
  } else if( newSpecs ){ // CHECK
    //console.log('SAME');
  }

  if( newSpecs && newSpecs.constructor === Object ){
    newSpecs.children = newSpecs.children || {};
    if( sdom ) newSpecs.sdom = sdom;
  }

  var newLength = ( newSpecs && newSpecs.children && newSpecs.children.length ) || 0;
  var oldLength = ( oldSpecs && oldSpecs.children && oldSpecs.children.length ) || 0;

  for (var i = 0; i < newLength || i < oldLength; i++) {
    var oldChild = oldSpecs && oldSpecs.children && oldSpecs.children[i];
    var newChild = newSpecs && newSpecs.children && newSpecs.children[i];
    //var oldChild = ( oldSpecs && oldSpecs.children && oldSpecs.children[i] ) || undefined;
    //var newChild = ( newSpecs && newSpecs.children && newSpecs.children[i] ) || undefined;
    //console.log(newSpecs, newChild, oldSpecs, oldChild);
    var specs = mkDOM(newSpecs, newChild, oldSpecs, oldChild);
    if( newSpecs && newSpecs.constructor === Object ){
      newSpecs.children[i] = specs;
    }
  }

  return newSpecs;
};



/**
* ConfigDOM constructor
* @exports test
* @constructor ConfigDOM
* @param  {string} target id of the parent element
* @return {object} ConfigDOM object
*/
module.exports = function(target){
  //module.exports = function(id){ // DOM id
  var C = {
    specs: undefined,
    //elements: {
    //  'r': $(target)
    //},
    rootSDOM: $(target),
    rootSpecs: {
      sdom: $(target),
      meta: {}
    },
    load: function(newSpecs){
      if( ! newSpecs ){
        console.warn('specDOML: no specs provided');
        return false;
      }
      if( newSpecs.constructor === Object ){
        //newSpecs._id = 'r.0';
        console.log('---',newSpecs);
        this.specs = mkDOM(this.rootSpecs, newSpecs, this.rootSpecs, this.specs);
      } else if( newSpecs.constructor === Array ){
        newSpecs = {
          tag: 'div',
          children: newSpecs,
        };
        for( var i = 0; i < newSpecs.length; i++ ){
          newSpecs.children.push( mkDOM(this.rootSpecs, newSpecs[i], this.rootSpecs, this.specs) );
        }
        this.specs = mkDOM(this.rootSpecs, newSpecs, this.rootSpecs, this.specs);
      } else {
        console.log('Invalid DOM specs.');
        return false;
      }
      return true;
    }
  };


  return C;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/**
* A simple DOM manipulation tool.
 * @fileOverview Constructor for SimpleDOM function.
 * @author Keith Showalter {@link https://github.com/kshowalter}
 * @version 0.1.0
 */


/**
 * @module
 */
var Wrap = __webpack_require__(27);

/**
 * Wraps an HTMLElement with a jquery like function
 * @param  {string} input
 * @return {SimpleDOM} Wrapped HTMLElement
 */
var $ = function(input, specs){
  if( typeof input === 'undefined' ) {
    //log('input needed');
    return false;
  }

  if( input.constructor === Object && input.elem ){
    return input;
  }

  if( specs && specs.tag === 'textNode'){
    specs.textNode = true;
  }

  if( input.constructor === Object && input.tag ){
    specs = input;
    input = specs.tag;
  }

  var element;
  if( input.nodeName !== undefined ) {
    element = input;
  } else if( input.substr && input.substr(0,1) === '#' ) {
    element = document.getElementById(input.substr(1));
  } else if( input.substr && input.substr(0,1) === '.' ) {
    element = document.getElementsByClassName(input.substr(1))[0];
  } else if( input.constructor.prototype === HTMLElement || input instanceof SVGElement ) {
    element = input;
  } else {
    if( specs && specs.namespaceURI ) {
      element = document.createElementNS(specs.namespaceURI, input);
    } else if( specs && specs.textNode ) {
      element = document.createTextNode(specs.text);
    } else {
      element = document.createElement(input);
    }
  }
  if( element ){
    var sdom = Wrap(element);
    if( specs ){
      if( specs.props ){
        for( var name in specs.props ){
          sdom.attr(name, specs.props[name]);
        }
      }
      if( specs.text ){
        sdom.text( specs.text );
      }
    }
    return sdom;
  } else {
    return false;
  }
};

/**
 * Constructor for SimpleDOM function.
 * @exports $
 */
module.exports = $;


/***/ }),
/* 27 */
/***/ (function(module, exports) {



/**
 * Prototype object for the element wrapper.
 */
var wrapperPrototype = {
  text: function(string){
    this.elem.textContent = string;
    return this;
  },
  append: function(subElement){
    if( subElement instanceof String){
      subElement = document.createTextNode(subElement);
    }
    if( subElement instanceof Node ){
      this.elem.appendChild(subElement);
    } else {
      this.elem.appendChild(subElement.elem);
    }
    return this;
  },
  appendTo: function(parentElement){
    if( parentElement instanceof Node ){
      parentElement.appendChild(this.elem);
    } else {
      parentElement.append(this);
    }
    return this;
  },
  attr: function(name, value ){
    var attributeName;
    if( name === 'class'){
      attributeName = 'class';
    } else {
      attributeName = name;
    }
    if( typeof value === 'function' ){
      this.elem[attributeName] = value;
    } else {
      this.elem.setAttribute(attributeName, value);
    }
    //console.log(attributeName, value);
    return this;
  },
  css: function(name, value){
    if( value === undefined ){
      return this.elem.style[name];
    }
    this.elem.style[name] = value;
    return this;
  },
  unwrap: function(){
    return this.elem;
  },
  clear: function(){
    //this.elem.innerHTML = '';
    while (this.elem.firstChild) {
      this.elem.removeChild(this.elem.firstChild);
    }
    return this;
  }
};


/**
 * @constructor Wraps an HTMLElement with a jquery like function.
 * @param  {HTMLElement} element
 * @return {function} HTMLElement wrapped by SimpleDOM
 */
var Wrap = function(element){
  var W = Object.create(wrapperPrototype);
  W.elem = element;
  return W;
};


/**
 * @exports Wrap
 */
module.exports = Wrap;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var settings = {};

/* harmony default export */ __webpack_exports__["a"] = (settings);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./404.md": 0,
	"./About.md": 1,
	"./Dev.md": 2,
	"./Mechanical_Engineering.md": 3,
	"./Resume.md": 4,
	"./experience/FSEC.md": 5,
	"./experience/KSC.md": 6,
	"./menu.md": 7,
	"./philosophy/javascript.md": 8,
	"./projects/SPD.md": 9,
	"./projects/dev_project_list.md": 10,
	"./projects/mech_project_list.md": 11,
	"./projects/projects.md": 12,
	"./projects/this_site.md": 13
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 29;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./404.md": 0,
	"./About.md": 1,
	"./Dev.md": 2,
	"./Mechanical_Engineering.md": 3,
	"./Resume.md": 4,
	"./experience/FSEC.md": 5,
	"./experience/KSC.md": 6,
	"./menu.md": 7,
	"./philosophy/javascript.md": 8,
	"./projects/SPD.md": 9,
	"./projects/dev_project_list.md": 10,
	"./projects/mech_project_list.md": 11,
	"./projects/projects.md": 12,
	"./projects/this_site.md": 13
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 30;

/***/ })
/******/ ]);