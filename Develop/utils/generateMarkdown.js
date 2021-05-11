// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Mozilla"){
    return` [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

  } else if (license === "MIT"){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`


  } else (license === "Apache")
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Mozilla"){
    return `https://www.mozilla.org/en-US/MPL/2.0/FAQ/`

  } else if (license === "MIT"){
    return `https://opensource.org/licenses/MIT`

  } else (license === "Apache")
  return 'https://www.apache.org/licenses/LICENSE-2.0.txt'

   return ''; 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  # ${response.email}
  # license: ${renderLicenseBadge(response.license)}

`;
}

module.exports = generateMarkdown;
