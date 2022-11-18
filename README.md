# Icon_carousele
>Alternative for Bootstrap carousele with icons.<br/>
> Live demo [_here_](https://htmlpreview.github.io/?https://github.com/WojcioTrue/Icons_carousele/blob/master/index.html).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)


## General Information
- I wanted to create my own, nice looking plugin for website. I didn't want to use regular *Bootstrap Carousele*, used in many portfolio's of others developers.
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

## Screenshot
### mobile view
<br/>

![alt text](/src/img/screen/mobile__screen.png)
<br/>

### desktop view
![alt text](/src/img/screen/desktop__screen.png)


## Setup
To use this carousele you need to install *Bootstrap* on your local project directory. In this repository I used Bootstrap 4.1.3. It's only used for making containers responsive, so I don't think there will be a problem with using other versions.
After adding Bootstrap to your website, download folders from 'dist' folder. Copy them to your website project. Add css href in </head> element e.g.

    <link rel="stylesheet" href="dist/css/Icon_carousele_style.css">
Add script before </body> tag e.g.

    <script type="text/javascript" src="dist/js/carousele_icon.js"></script>
    </body>

U also need to download 'icons' folder from 'src' directory. Create 'src' folder in directory where your `index.html` is. Then, paste folder 'icons' inside 'src'.

## Usage
After you successfully setup your environment, paste code below where you want to use icons carousele.


    <section class='carousele__section'>
         <div class="container">
            <div class="row">
            
             <!-- container with text -->
             
               <div class="col-12 col-md-6 carousele__section--text">
                  <h2>Title</h2>
                  <!-- data-text-index for comparasion with data-icon index -->
                  <p class="carousele__text" data-text-index="1">Description for file icon</p>
                  <br>
                  <p class="carousele__text" data-text-index="2">Description for desktop icon</p>
                  <br>
                  <p class="carousele__text" data-text-index="3">Description for repeat icon</p>
               </div>
               
               <!-- container with icons -->
               
               <div class="col-12 col-md-6 col-lg-6 carousele__section--svg">
               
                <!-- navigation icons -->
               
                  <span class="control__arrows__field" id="right">
                  <img class="carousele__control__arrows"  src="src/icons/arrow_left.png">
                  </span>
                  <span class="control__arrows__field" id="left">
                  <img class="carousele__control__arrows"  src="src/icons/arrow_right.png">
                  </span>
                  
                <!-- icons in carousele -->
                  
                  <div id="carousele__section--icons">
                     <img class="carousele__icon 
                        carousele__icon--left"
                        data-icon-index="3"
                        src="src/icons/second_section_icons/reload.svg">
                        
                     <img class="carousele__icon carousele__icon--active"
                        data-icon-index="1"
                        src="src/icons/second_section_icons/file.svg">
                        
                     <img class="carousele__icon carousele__icon--right"
                        data-icon-index="2"
                        src="src/icons/second_section_icons/desktop.svg">
                  </div>
               </div>
            </div>
         </div>
      </section>

## Project Status
Project is: _in progress_


## Room for Improvement

Room for improvement:
- remove Bootstrap
- create own breakpoints in CSS, so configuration and installation will be simpler
- easier installation of icons folder
- add multiple icons support (**now only can be 3 icons!!**)
