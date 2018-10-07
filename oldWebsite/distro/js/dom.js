var bio={name:"Ernest D. Peterson",role:"Web Developer",contacts:{github:"https://github.com/ernestdpeterson",mobile:"601-307-4377",email:"ernest@ernestpeterson.com",location:"Pensacola, FL"},Skills:[" HTML5"," &emsp;CSS3"," &emsp;JavaScript"," &emsp;JQuery"," &emsp;KnockoutJS"," &emsp;MySQL","&emsp;Sass","&emsp;Git","&emsp;Gulp"," &emsp;Computer_Repair_and_Maintainance"],pictureURL:"images/longAgo.jpg"},education={schools:[{name:"Jones County Junior College-Extension",location:"Ellisville, MS",degree:"Production Welder",majors:["Production Welder"],dates:"2010",url:"http://www.jcjc.edu/"}],onlineCourses:[{title:"CompTIA A+ and Network+",school:"University of Phoenix",dates:"2014",url:"http://www.phoenix.edu/"},{title:"Database Administration",school:"O'Reilly School of Technology",dates:"2014",url:"http://www.oreillyschool.com/"},{title:"Linux Systems Administration",school:"O'Reilly School of Technology",dates:"2015",url:"http://www.oreillyschool.com/"},{title:"Front End Web Developer",school:"Udacity",dates:"4/2017-1/2018",url:"https://www.udacity.com/",screenShot:"images/udacityFEND.pdf"},{title:"Explore and Master Chrome DevTools",school:"Code School",dates:"2017",url:"http://discover-devtools.codeschool.com/"},{title:"Beginning WordPress",school:"Treehouse",dates:"2/2018",url:"https://teamtreehouse.com"},{title:"Sass Basic Course",school:"Treehouse",dates:"4/2018",url:"https://teamtreehouse.com"}]},work={jobs:[{employer:"Airgas",title:"Truck Driver",location:"Star, MS",dates:"06/2008-current",description:"Loading, delivering and unloading liquid CO2 or Dry Ice.<br>Complying with all local, state and federal regulations.<br>Managing paperwork for load, Department of Transportation and company regulatory compliance."},{employer:"Peterson Transportation",title:"Owner/Operator",location:"Seminary, MS",dates:"04/2003-6/2008",description:"Owned and operated my trucking company.<br>Used QuickBooks and TurboTax software to balance my books and file my taxes.<br>Managed work acquisition and regulatory compliance."},{employer:"Flying J",title:"Truck Driver",location:"Perl, MS",dates:"10/1999-4/2003",description:"Loading, delivering and unloading fuel to Flying J truck stops."},{employer:"Fleet Morris",title:"Truck Driver",location:"Collins, MS",dates:"05/1997-10/1999",description:"Loading, delivering and unloading fuel to various gas stations."},{employer:"Sanderson Farms",title:"Manager, Truck Driver",location:"Collins, MS",dates:"11/1993-5/1997",description:"Managed a spray crew of 4.<br>Became a live haul driver to help establish the live haul devision.<br>Substituted for managers needing time of as needed."},{employer:"T&L Trucking",title:"Truck Driver",location:"Ellisville, MS",dates:"02/1991-11/1993",description:"Delivered parts from/to GM warehouses and plants."}]};work.display=function(){for(var e in work.jobs){var o="<div class='col-6 work'>"+(work.jobs[e].employer+"<br>")+"<br>"+(work.jobs[e].dates+"<br>")+(work.jobs[e].title+"<br>")+(work.jobs[e].location+"<br><br>")+(work.jobs[e].description+"<br>")+"<br><br></div";$("#work:last").append(o)}}();var projects={projects:[{title:"JavaScript Tutorial",dates:"2/2015-3/2015",description:"Studied JavaScript tutorial and completed test quiz."},{title:"Front End Web Developer",dates:"11/2015-1/2018",description:"Learning the various aspects of web page development",images:["images/smiley.gif"]}]};$("#top").append('<img class="col-4" src="images/longAgo.jpg" alt="Resume Picture">'),$("#top").append('<h1 id="top2" class="col-8 head">Ernest D. Peterson</h1>'),$("#top2").append('<h6 class="col-12 head2">Web Developer</h6>'),$("#top2").append("<hr>"),$("#top2").append('<h6 class="col-12 skills" id="skills">Skills</h6><hr>'),$("#top2").append('<div id="top3" class="skills2"></div>');var navKey=["Home","Bio","Work History","Qualifications","Contact_By:"],x=0;navKey.display=function(){for(;x<navKey.length;){$("#nav").append('<nav class="nav2">'+navKey[x]+"</nav>");var e=x+1;document.getElementsByClassName("nav2")[x].setAttribute("id","navLink"+e),x++}}();x=0;bio.display=function(){for(;x<bio.Skills.length;)$("#top3").append('<text class="skills2">'+bio.Skills[x]+"</text>"),x++}(),education.display=function(){for(var e in education.onlineCourses){var o="<div class='col-6 work education'>"+(education.onlineCourses[e].title+"&nbsp; <br>")+(education.onlineCourses[e].school+"<br>")+"Dates: "+(education.onlineCourses[e].dates+"<br>")+("<a class=' education' target='_blank' href='"+education.onlineCourses[e].url+"'>Website</a><br>")+"<br><br></div>";$("#education").append(o)}}(),$("#navLink1, #navLink2, #navLink3, #navLink4, #navLink5").css("text-shadow","2px 2px gray").hover(function(){$(this).css({"text-decoration":"underline",color:"lightgray"})},function(){$(this).css({"text-decoration":"none",color:"black"})}),document.getElementById("navLink1").onclick=function(){window.location.href="index.html"},document.getElementById("navLink2").onclick=function(){window.location.href="bio.html"},document.getElementById("navLink3").onclick=function(){window.location.href="work.html"},document.getElementById("navLink4").onclick=function(){window.location.href="portfolio.html"},$("#navLink5").hover(function(){$(".links").toggleClass("hidden show")}),$("#navLink5").append('<section id="navlink6" class="links hidden"><a href="http://www.linkedin.com/in/ernest-peterson-2b9ab410a/">LinkedIn</a><br><a href="'+bio.contacts.github+'"> Github </a><br><a href="mailto:ernest@ernestpeterson.com">Email</a><br><section>Phone:  601-307-4377</section></section>');