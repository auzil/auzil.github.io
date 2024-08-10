const sass = require('sass');
const fs = require('fs');

// Path to your SCSS file
const scssFile = 'override.scss';
// Output path for the generated CSS file
const cssFile = 'override.css';

// Compile SCSS to CSS
const result = sass.compile(scssFile);

// Write the CSS to a file
fs.writeFileSync(cssFile, result.css);

console.log('SCSS has been converted to CSS and saved to', cssFile);