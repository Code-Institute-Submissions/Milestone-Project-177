# <h1>Milestone Project 2 - TripAway.com</h1>

This website is my second Milestone project on the [Code Institute - Full Stack Development Course](https://codeinstitute.net/).

[TripAway.com](https://mikew1999.github.io/Milestone-Project-2/) is a Holiday search website in it's early stages. The site intends to provide useful information about popular Holiday destinations and 
guide the user to our top picks for Hotels and things to do in the area. 

The site provides a Google Maps Map and a search form, with which the user can search for either Hotels, Restaurants
and Bars or Attractions in their chosen city anywhere in the world. 

The site also features a selection of popular holiday destinations with links to our selection of Hotels.

The site also feautres a few popular attractions and buttons to filter the attractions to show all, ones only in UK or ones only in USA / Canada. 

The future plans of the site would be to allow users to create an account to save their Holiday plans, share Holiday experiences with friends and 
and also to provide Hotel, Flights and attraction booking functionality.  

## <h2>UX</h2>

TripAway.com is targeted to users who are planning a holiday away. 
The site aims to offer the users an idea of what hotels / attractions / 
restaurants and bars are available in their chosen City with useful links to the
places website and contact details.

It also provides popular locations for those who don't know exactly where they want to 
go and would like to browse some options. It provides useful information including weather and 
hotel details for a few of our top picks of locations. This section will be expanded massively 
if this was to be progressed into a fully functioning project. 
The plan is to use a hotel information and pricing API and then link this to booking websites
for users to book their holidays and flights on one site. 

The popular attractions section appeals to those seeking an enjoyable get-away. This links to pages to book 
tours / tickets and to hotels in the area.

I decided to create my own logo to create a brand image. 

The colour scheme is bright and was designed with simplicity in mind. I decided to go for a minimalistic approach, 
only using a few colours.

The site aims to provide users an appealing visit with the aid of lots of pictures and a simple UI. 

I created my wireframe using [](). The wireframes are attached in this [file](https://mikew1999.github.io/Milestone-Project-2/MS2wireframes.pdf). 
I used my wireframes mainly as a guide as to how the information would be grouped. 

I changed the design a few times before arriving at the finished design hence why the wireframes don't fully 
reflect my finished site. 

<hr>

### <h3>User Stories</h3>

I am a user...: 

1)	Who knows where I want to go on holiday – I want to search for my desired location to see good deals for Holidays in the area.
2)  Who does not know where I want to go on holiday – I want the page to offer me suggestions on where to go on holiday.
3)  With a few holiday destinations in mind but would like to see attractions and hotels in my desired areas. 
4)	Who is on a budget and wants to find cheap holiday deals. 

I am an admin who...: 

1)	Who wants to provide users with an easy way of finding information about their holiday destinations
2)	Who wants to provide an appealing UX to build up brand image and encourage repeat visits to the site. 


## <h2>Features</h2>

### <h3>Existing Features</h3>

1) Sticky-top Navbar to offer the user an easy way of navigating the website. 
2) Navbar collapses on smaller devices for a cleaner layout. 
3) Large image of holiday destination to draw the user in.
4) Google Maps search box which allows a user to search for a city anywhere in the world and shows on map, is linked to drop down.
5) On searching in the search box the window scrolls to the results of the search and the map. 
6) Drop-down on which the user can select to search for either Hotels, Restaurants and Bars or Attractions in the City they search for in the search box.
7) Google Maps Map which shows Barcelona on page loading and shows results of search from the search box. 
8) Results list, hidden until user searches for a City. 
9) Down arrow which scrolls the window to the popular locations section if the results section is hidden and scrolls window to results section if results are showing.
10) Slides section which contains information, attractions and links to hotels for a few popular holiday destinations. 
11) The slides section can be navigated by clicking the left and right icons at the top and bottom of this section. 
12) Read More / Read less buttons in the Location summary section of the popular location sections, hidden by default on larger devices and shown on smaller device. 
This toggles an additional paragraph of information to read more / less. 
13) Hot deals section to provide deals to the user. 
14) The hot deals section is laid out as an accordian, with collapsible sections. 
15) Popular Attractions section. Large image as a card which, when clicked on / hovered over shows info about attractions and link to book tickets. ) 
16) The newsletter is linked to email.js and sends the user an automatic reply.
17) Brand logo to re-inforce brand loyalty
18) Popular Attractions section which consists of a few of our top picks of attractions to see. 
19) The popular attractions section is filterable to narrow down the attractions. 


<hr>

### <h3>Future Features</h3>

The site is in it's early stages and has lots of planned features. 
The reasons as to why these features haven't been implimented are mainly cost related (API fees for hotel information e.t.c.). 
Some features will be implimented when I have the knowledge of server side programming langues such as a database to store users information. 

1) Sign in / Sign up functionality. 
2) Social media feed where users can post their holidays pictures and plans. 
3) Option to add users as a friend / follow users. 
4) Functionality to leave reviews of hotels and attractions. 
5) Holiday planner which can be saved. Options to book trip through the website. 
6) Blog section with community created and articles about destinations. 

<hr>

## <h2>Technologies Used</h2>

The technologies I have used for this project are: 

1) [HTML5](https://www.w3.org/html/) is a markup language which the browser uses to interpret websites. 
It is used to present the website to the user. 
2) [CSS3](https://www.w3.org/Style/CSS/Overview.en.html) is a language to style HTML elements. It was used to style the HTML in an appealing way. 
3) [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) Javascript is a programming language which brings interactivity to websites. 
It was used to make the site dynamic and interactive.  
to change the layout of the page. 
4) [Jquery](https://jquery.com/) is a javascript library which aims to make JavaScript writing quicker. 
It was used to speed up the development process and provide a lightweight approach to certain scripts.  
5) [GooglePlaces](https://developers.google.com/maps/documentation/javascript/places) was used to search for cities anywhere in the world and show them
on the map. It was also used to show results from a search box. 
6) [email.js](https://www.emailjs.com/) is a handy tool which links a website to an email service. 
This was used to link to the newsletter form and send both the user and myself an email. 
7) [captcha]()
8) [GitHub](https://github.com/) is a hosting platform used to showcase and edit code. It was used for version control. 
9) [GitPod](https://www.gitpod.io/) is an Integrated development environment which is used to test and edit code. 
I used it to edit my website and for version control linked to github.
10) [GithubPages](https://pages.github.com/) Is a platform for hosting websites. It was used to host my finished project. 
12) [Jshint](https://jshint.com/) Is a platform to test problems with Javascript. I used it to check if there are any logic problem with my javsscript
code. 

<hr>

## <h2>Testing</h2>

I use [Jshint](https://jshint.com/) to ensure the scripts that I have written don't have any logic problems. I paste my code into the site and 
it evaluates my code to check for any problems.

I also use [Jslint](https://jslint.com/) to check for any syntax errors. 

I also use [W3 Validator](https://validator.w3.org/) to test the validity of my HTML5 code. 

I also use [CSS Validator](https://jigsaw.w3.org/css-validator/) to test the validity of my css3 code. 

<hr>

I test my projects in multiple browsers and different devices. 
I first check the changes that I have made in Google Chrome and check for any errors in the console. 
If no errors / design problems then I will test this on [JS bin](http://jsbin.com/?html,output) to see if the script is doing as intended. 

If no errors / design problems then I will test this on Internet Explorer, Mozilla Firefox and Microsoft Edge. 

When testing I click all of the links and interactive elements to test how they react when called upon. When testing I didn't notice 
any problems with the links / buttons on any screen size or any browser. 

The only problems I have faced are with using Google Maps on Internet Explorer. The map doesn't show and this a known bug of the system. 



## <h2>Deployment</h2>

I used [GitPod](https://www.gitpod.io/) to create, edit and test my code and [GitHub](https://github.com/) for version control. 

### <h3>Deployment Steps</h3>

1) Open the repository on GitHub
2) Go to "Settings" (the tab on the right)
3) Under the section "GitHub Pages", select the master branch as the source.  Then it shows you a green confirmation "Your site is published at......" with the URL.

There are no differences between the deployed version and the Development version. 

To run the project locatally in gitpod: 

Type python3 -m http.server into the command line in gitpod, 
then click 'open browser' next to port 8000.

<hr>

## <h2>Credits</h2>

### <h3>Content</h3>

I looked for information about each location online, mainly using Wikipedia. I always wrote the sections in my own words and didn't copy and paste. 

### <h3>Media</h3>

All media used has been attributed in the body of the HTML - below the image on the site. 