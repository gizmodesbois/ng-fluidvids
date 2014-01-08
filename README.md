# Ng-Fluidvids

Ng-Fluidvids allow you to embed a fluid videos from any provider has Youtube, Daylimotion, Vimeo, ... .

## Goals

Give an easy solution to embed fluid video inside a website from any providers on the web.

## Usage

1. Add the CSS code for fluidvids from CSS file (assets/css/screen.css).
2. Get the ng-fluidvids directive inside your own app (assets/js/scripts/ng-fluidvids.js).
3. Defined mark-up for fluidvids

## Implements

### Mark-up

	<div fluidvids video="url-here" width="width-here" height="height-here"></div>
	<fluidvids video="url-here" width="width-here" height="height-here"></fluidvids>

### Example

	<div fluidvids video="http://www.youtube.com/embed/dGQPkOZMBFs" height="281" width="500"></div>

Custom tag is not supported everywhere so, check the compatibility of your browser.