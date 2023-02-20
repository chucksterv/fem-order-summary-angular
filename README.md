# FEM - Order Summary Card

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

- See hover states for interactive elements
- Have a different background depending on the screensize

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/chucksterv/fem-order-summary-angular]
- Live Site URL: [https://order-summary.projects.deshand.com/]

## My process

### Built with

- Angular
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- BEM Naming conventions

### What I learned

- Learned how to pass values into components in Angular using @Input
- Learned that I should not put the sass folder directory in assests.

```js
  @Input() text: string;
  @Input() primary: string;
  isPrimary: boolean;

  constructor() {
    this.text = 'Default Text';
    this.primary = 'true';
    this.isPrimary = true;
  }

  ngOnInit() {
    this.primary === 'true'
      ? (this.isPrimary = true)
      : (this.isPrimary = false);
  }
```
