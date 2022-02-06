# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw/hub/responsive-time-tracking-page-b7AakDj9O)
- Live Site URL: [Github Pages](https://erwinprograms.github.io/frontendmentor-time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

The must substantial thing I've learned was the Fetch API. Using this, I can interact with most REST APIs.

```js
fetch('../../data.json')    //fetch() returns a promise
    .then(response => response.json())  //json() retruns another promise
    .then(data => populateData(data));   //when that promise is resolved, we then handle it in this function
```

### Continued development

The responsiveness of the dashboard grid is not what I'd like it to be. Right now the dashboard starts as a flexbox and media queries into a grid. Expect a rewrite for a better grid system in the future.

### Useful resources

- [Fetch API](https://www.youtube.com/watch?v=cuEtnrL9-H0&ab_channel=WebDevSimplified) - The fetch api is really useful for getting both local and external web data

## Author

- Frontend Mentor - [@ErwinPrograms](https://www.frontendmentor.io/profile/ErwinPrograms)