/*eslint-env jquery*/
/* exported bio education work carouselArray */

var bio = {
    'name' : 'Ernest D. Peterson',
    'role' : 'Web Developer',
    'contacts' : {
        'github' : 'https://github.com/ernestdpeterson',
        'mobile' : '601-307-4377',
        'email' : 'ernest@ernestpeterson.com',
        'location' : 'Pensacola, FL',
    },
    'Skills' : [
        ' HTML5', ' &emsp;CSS3', ' &emsp;JavaScript', ' &emsp;JQuery', ' &emsp;KnockoutJS', ' &emsp;MySQL', '&emsp;Sass', '&emsp;Git', '&emsp;Gulp', '&emsp;Bootstrap', ' &emsp;Computer_Repair_and_Maintainance'
    ]
};

var education = {
    'schools' : [
        {
            'name' : 'Jones County Junior College-Extension',
            'location' : 'Ellisville, MS',
            'degree' : 'Production Welder',
            'majors' : ['Production Welder'],
            'dates' : '2010',
            'url' : 'http://www.jcjc.edu/'
        }
    ],
    'onlineCourses' : [
        {
            'title' : 'CompTIA A+ and Network+',
            'school' : 'University of Phoenix',
            'dates' : '6/2014-7/2014',
            'url' : 'http://www.phoenix.edu/'
        },
        {
            'title' : 'Database Administration',
            'school' : 'O\'Reilly School of Technology',
            'dates' : '10/2014-4/2015',
            'url' : 'http://www.oreillyschool.com/'

        },
        {
            'title' : 'Linux Systems Administration',
            'school' : 'O\'Reilly School of Technology',
            'dates' : '4/2015-7/2015',
            'url' : 'http://www.oreillyschool.com/'

        },
        {
            'title' : 'Front End Web Developer',
            'school' : 'Udacity',
            'dates' : '4/2017-1/2018',
            'url' : 'https://www.udacity.com/',
            'screenShot' : 'images/udacityFEND.pdf'
        },
        {
            'title' : 'Explore and Master Chrome DevTools',
            'school' : 'Code School',
            'dates' : '7/2017-7/2017',
            'url' : 'http://discover-devtools.codeschool.com/'
        },
        {
            'title' : 'Beginning WordPress',
            'school' : 'Treehouse',
            'dates' : '2/2018-2/2018',
            'url' : 'https://teamtreehouse.com'
        },
        {
            'title': 'PHP for WordPress',
            'school': 'Treehouse',
            'dates': '3/2018-current',
            'url': 'https://teamtreehouse.com'
        },
        {
            'title' : 'Sass Basic Course',
            'school' : 'Treehouse',
            'dates' : '4/2018-4/2018',
            'url' : 'https://teamtreehouse.com'
        }
    ]
};

var work = [
    {
        'employer' : 'Airgas',
        'title' : 'Truck Driver',
        'location' : 'Star, MS',
        'dates' : '06/2008-current',
        'description' : 'Loading, delivering and unloading liquid CO2 or Dry Ice.<br>Complying with all local, state and federal regulations.<br>Managing paperwork for load, Department of Transportation and company regulatory compliance.'
    },
    {
        'employer' : 'Peterson Transportation',
        'title' : 'Owner/Operator',
        'location' : 'Seminary, MS',
        'dates' : '04/2003-6/2008',
        'description' : 'Owned and operated my trucking company.<br>Used QuickBooks and TurboTax software to balance my books and file my taxes.<br>Managed work acquisition and regulatory compliance.'
    },
    {
        'employer' : 'Flying J',
        'title' : 'Truck Driver',
        'location' : 'Perl, MS',
        'dates' : '10/1999-4/2003',
        'description' : 'Loading, delivering and unloading fuel to Flying J truck stops.'
    },
    {
        'employer' : 'Fleet Morris',
        'title' : 'Truck Driver',
        'location' : 'Collins, MS',
        'dates' : '05/1997-10/1999',
        'description' : 'Loading, delivering and unloading fuel to various gas stations.'
    },
    {
        'employer' : 'Sanderson Farms',
        'title' : 'Manager, Truck Driver',
        'location' : 'Collins, MS',
        'dates' : '11/1993-5/1997',
        'description' : 'Managed a spray crew of 4.<br>Became a live haul driver to help establish the live haul devision.<br>Substituted for managers needing time off as needed.'
    },
    {
        'employer' : 'T&L Trucking',
        'title' : 'Truck Driver',
        'location' : 'Ellisville, MS',
        'dates' : '02/1991-11/1993',
        'description' : 'Delivered parts from/to GM warehouses and plants.'
    }
];

var carouselArray = [
    {
        'divClass': 'carousel-item active',
        'divTitle': 'Simple Frogger Clone ',
        'clickPath': 'froggerClone/index.html',
        'imageSource': 'images/froggerClone.png',
        'imageaAlt': 'Screenshot of frogger clone game',
        'gitURL': 'https://github.com/ernestdpeterson/Frogger'
    },
    {
        'divClass': 'carousel-item',
        'divTitle': 'Google Maps API with KnockoutJS ',
        'clickPath': 'googleMaps/ko.html',
        'imageSource': 'images/googleKO.png',
        'imageaAlt': 'Screenshot of a google map',
        'gitURL': 'https://github.com/ernestdpeterson/googleMaps'
    },
    {
        'divClass': 'carousel-item',
        'divTitle': 'My Website ',
        'clickPath': 'index.html',
        'imageSource': 'images/website.png',
        'imageaAlt': 'Screenshot of this website',
        'gitURL': 'https://github.com/ernestdpeterson/myWebsite/tree/master/newWebsite'
    }//,
    // {
    //     'divClass': 'carousel-item',
    //     'divTitle': '',
    //     'clickPath': '',
    //     'imageSource': '',
    //     'imageaAlt': '',
    //     'gitURL': ''
    // }
];