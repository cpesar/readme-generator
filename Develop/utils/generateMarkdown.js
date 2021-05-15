// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //RETURNS EMPTY STRING
  if(!license){
    return '';
  } if (license === "Mozilla"){
    return` [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

  } else if (license === "MIT"){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  } else if (license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } 
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //RETURNS EMPTY STRING
  if (!license) {
    return '';
  } if (license === "Mozilla"){
    return `https://www.mozilla.org/en-US/MPL/2.0/FAQ/`

  } else if (license === "MIT"){
    return `https://opensource.org/licenses/MIT`

  } else if (license === "Apache") {
    return 'https://www.apache.org/licenses/LICENSE-2.0.txt'
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//
function renderLicenseSection(license) {
  //RETURNS EMPTY STRING
  if (!license) {
    return '';
  } if (license === "Mozilla"){
    return 'This application is licensed under Mozilla web services. All rights reserved'

  } else if (license === "MIT"){
    return `This application is licensed under MIT. All rights reserved.`

  } else if (license === "Apache") {
    return 'This application is licensed under Apache. All rights reserved.'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  #${response.github}
  # ${response.email}
  # license: ${renderLicenseBadge(response.license)}
  # ${renderLicenseSection(response.license)}
  # license: ${renderLicenseLink(response.license)}
  

  # Table of Contents
  1. [Description](#description)

  2. [Installation](#installation)

  3. [Usage](#usage)

  4. [Contribution](#contribution)

  5. [Tests](#tests)

  6. [Questions](#questions)

  ## Description
  ## <a name="description">${response.description}</a>

  ## Installation
  ## <a name="installation">${response.installation}</a>

  ## Usage
  ## <a name="usage">${response.usage}</a>

  ## Contribution
  <br/ >
  '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)'
  ## <a name="contribution">${response.contribution}</a>
  

  ## Tests
  ## <a name="tests">${response.tests}</a>

  

`;
}

module.exports = generateMarkdown;
