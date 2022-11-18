# Icon_carousele
>Alternative for Bootstrap carousele with icons.<br/>
> Live demo [_here_](https://htmlpreview.github.io/?https://github.com/WojcioTrue/Icons_carousele/blob/master/index.html).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)


## General Information
- I wanted to create my own, nice looking plugin for website. I didn't want to use regular *Bootstrap Carousele*,because it's used in many portfolio's of others developers.
- this is alternative for Bootstrap carousele, with icons and captions for active element in carousele.

- this is early version. **Works only with 3 elements/icons in carousele**.

## Technologies Used
- JavaScript
- HTML
- CSS3
- SASS
- ESLint
- Gulp
- Bootstrap (4.1.3)
- RWD



## Features




## Screenshot
### mobile view
<br/>

![alt text](/src/img/screen/mobile__screen.png)
<br/>

### desktop view
![alt text](/src/img/screen/desktop__screen.png)


## Setup
**How to install**<br/>
Download folders from 'dist' folder.
Copy them to your website project.
Add css href in `</head>` element e.g.

    <link rel="stylesheet" href="dist/css/style.css">
Add script before `</body>` tag and initiate e.g.

    <script src ="dist/js/particles.js"></script>
    <script>practiceInit();</script>

## Usage
After download and adding to your website, you need to choose which element should have this animated background.
When you choosed element, just ad `id="animation"`.

**e.g.**

	<div id="animation"></div>
**e.g. with changed default values**

Here particle will be generated with:
- margin-left with value between 0px and 100px
- minimal height of 4px
- maximum height of 15px
- color of element will be set to "gold"
<br/>

	<div id="animation" 
		data-left-margin-start="100" 
		data-min-dimension="4"       
		data-max-dimension="15" 
		data-el-color="gold">
	</div>

## Project Status
Project is: _in progress_


## Room for Improvement

Room for improvement:
- make particles float from different sides(top to bottom, left to right etc.)
- change shape of particle
- add feature to change z-index of particles


## Acknowledgements

- This project was inspired by select menu in game 'apex legends'




