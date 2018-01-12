
var bio = {
    "name" : "Ernest D. Peterson",
    "role" : "Web Developer",
    "contacts" : {
        "github" : "ernestdpeterson@github.com",
        "mobile" : "601-307-4377",
        "email" : "ernest@ernestpeterson.com",
        "location" : "Pensacola, FL",
    },
    "WelcomeMessage" : "Welcome To My Resume Page",
    "Skills" : [
        " HTML5", " CSS3", " MySQL", " JavaScript", " JQuery", " Computer Repair", " Mechanic", " Welder", " Truck Driver"
    ],
    "pictureURL" : "images/longAgo.jpg"
}

var navKey = ["Home", "Bio", "Work History", "Portfolio", "Contact"];

var education = {
    "schools" : [
        {
            "name" : "Jones County Junior College-Extension",
            "location" : "Ellisville, MS",
            "degree" : "Production Welder",
            "majors" : ["Production Welder"],
            "dates" : "2010",
            "url" : "http://www.jcjc.edu/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "CompTIA A+ and Network+",
            "school" : "University of Phoenix",
            "dates" : "2014",
            "url" : "http://www.phoenix.edu/"
        },
        {
            "title" : "Database Administration",
            "school" : "O'Reilly School of Technology",
            "dates" : "2014",
            "url" : "http://www.oreillyschool.com/"

        },
        {
            "title" : "Linux Systems Administration",
            "school" : "O'Reilly School of Technology",
            "dates" : "2015",
            "url" : "http://www.oreillyschool.com/"

        },
        {
            "title" : "Front End Web Developer",
            "school" : "Udacity",
            "dates" : "2015",
            "url" : "https://www.udacity.com/"
        },
        {
            "title" : "Explore and Master Chrome DevTools",
            "school" : "Code School",
            "dates" : "2017",
            "url" : "http://discover-devtools.codeschool.com/"
        }
    ]
}

var work = {
    "jobs" : [
        {
            "employer" : "Airgas",
            "title" : "Truck Driver",
            "location" : "Star, MS",
            "dates" : "06/2008-current",
            "description" : "Loading, delivering and unloading liquid CO2 or Dry Ice.<br>Complying with all local state and federal regulations.<br>Managing paperwork for load, Department of Transportation and company regulation compliance."
        },
        {
            "employer" : "Peterson Transportation",
            "title" : "Owner/Operator",
            "location" : "Seminary, MS",
            "dates" : "04/2003-6/2008",
            "description" : "Owned and operated my trucking company.<br>Used QuickBooks and TurboTax software to balance my books and file my taxes.<br>Managed work acquisition and regulation compliance."
        },
        {
            "employer" : "Flying J",
            "title" : "Truck Driver",
            "location" : "Perl, MS",
            "dates" : "10/1999-4/2003",
            "description" : "Loading, delivering and unloading fuel to Flying J truck stops."
        },
        {
            "employer" : "Fleet Morris",
            "title" : "Truck Driver",
            "location" : "Collins, MS",
            "dates" : "05/1997-10/1999",
            "description" : "Loading, delivering and unloading fuel to various gas stations."
        },
        {
            "employer" : "Sanderson Farms",
            "title" : "Manager, Truck Driver",
            "location" : "Collins, MS",
            "dates" : "11/1993-5/1997",
            "description" : "Manager of a spray crew.<br>Live haul driver."
        },
        {
            "employer" : "T&L Trucking",
            "title" : "Truck Driver",
            "location" : "Ellisville, MS",
            "dates" : "02/1991-11/1993",
            "description" : "Delivered parts from/to GM warehouses and plants."
        }
    ]
}

work.display = function(){
    for (job in work.jobs){
        var employer1 = work.jobs[job]["employer"] + "<br>";
        var dates1 = work.jobs[job]["dates"] + "<br>";
        // var title1 = document.write(work.jobs[job]["title"] + "<br>");
        var title1 = work.jobs[job]["title"] + "<br>";
        var location1 = work.jobs[job]["location"] + "<br>" + "<br>";
        var description1 = work.jobs[job]["description"] + "<br>";
        var formated = "<div class='col-6 work'>" + employer1 + "<br>"
            + dates1 + title1
            + location1 + description1 + "<br>" + "<br>" + "</div";
        $("#work:last").append(formated);
    }
}();

var projects = {
    "projects" : [
        {
        "title" : "JavaScript Tutorial",
        "dates" : "2/2015-3/2015",
        "description" : "Studied JavaScript tutorial and completed test quiz.",
        /*"images" : [
            "images/smiley.gif"
        ]*/
        },
        {
        "title" : "Front End Web Developer",
        "dates" : "11/2015-current",
        "description" : "Learning the various aspects of web page development",
        "images" : [
            "images/smiley.gif"
        ]
        }
    ]
}

// $("#main").append("<h1>some text</h1>");

$("#top").append('<img class="col-4" src="images/longAgo.jpg" alt="Resume Picture">');
$('#top').append('<h1 id="top2" class="col-8 head"><a>Ernest D. Peterson</a></h1>');
$('#top2').append('<h6 class="col-12 head2"><a>Web Developer</a></h6>');
$('#top2').append('<hr>');
$('#top2').append('<h6 class="col-12 skills" id="skills">Skills</h6>' + '<hr>');
$('#top2').append('<div id="top3" class="skills2"></div>');
var x = 0;
navKey.display = function(){
    while(x<navKey.length){
        $('#nav').append('<nav class="nav2">' + navKey[x] + '</nav>');
        a = x+1;
        document.getElementsByClassName('nav2')[x].setAttribute('id', 'navLink' + a);
        x++;
    }
}();
var x = 0;
bio.display = function(){
    while (x < bio.Skills.length){
            $('#top3').append('<a class="skills2">' + bio.Skills[x] + '</a>');
            x++;
    }
}();
education.display = function(){
    for (i in education.onlineCourses) {
        var eTitle1 = education.onlineCourses[i]["title"] + "<br>";
        var eSchool1 = education.onlineCourses[i]["school"] + "<br>";
        var eDates1 = education.onlineCourses[i]["dates"] + "<br>"
        var eUrl1 = education.onlineCourses[i]["url"] + "<br>";
        var eFormat = "<div class='col-6 work education'>" + eTitle1 + "Dates: " + eDates1 + eUrl1 + "<br>" + "</div>";
        $('#education').append(eFormat);
    }
}();
$('#navLink1, #navLink2, #navLink3, #navLink4, #navLink5').hover(function(){$(this).css('text-decoration', 'underline');}, function(){$(this).css('text-decoration', 'none');});
document.getElementById('navLink1').onclick = function(){window.location.href="index.html";};
document.getElementById('navLink2').onclick = function(){window.location.href="bio.html";};
document.getElementById('navLink3').onclick = function(){window.location.href="work.html";};
document.getElementById('navLink4').onclick = function(){window.location.href="portfolio.html";};
document.getElementById('navLink5').onclick = function(){window.location.href="mailto:ernest@ernestpeterson.com";};
$('#navLink5').append('<nav class="contacts" href="ernestdpeterson@github.com">'+'Github'+'</nav>');