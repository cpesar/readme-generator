// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //RETURNS EMPTY STRING
  if(!license){
    return '';
  } if (license === "Mozilla"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

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
    return `[Please click here to view the license](https://www.mozilla.org/en-US/MPL/2.0/FAQ/)`

  } else if (license === "MIT"){
    return `[Please click here to view the license](https://opensource.org/licenses/MIT)`

  } else if (license === "Apache") {
    return `[Please click here to view the license](https://www.apache.org/licenses/LICENSE-2.0.txt)`
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
    return 'This application is licensed under Mozilla. All rights reserved.'

  } else if (license === "MIT"){
    return 'This application is licensed under MIT. All rights reserved.'

  } else if (license === "Apache") {
    return 'This application is licensed under Apache. All rights reserved.'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  
  return `# <p align="center"> ${response.title} </p>
  <br />
  #${response.description}
  <br />
  
  # License: ${renderLicenseBadge(response.license)} <br />${renderLicenseSection(response.license)}<br />${renderLicenseLink(response.license)}<br />
  

  # Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contribution](#contribution)

  * [Tests](#tests)

  * [Questions](#questions)

  

  ## Installation
  <br />
  ## <a name="installation">${response.installation}</a>
  <br />

  ## Usage
  <br />
  ## <a name="usage">${response.usage}</a>
  <br />

  ## Contribution
  '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)'

  <br />
  ## <a name="contribution">${response.contribution}</a>
  <br />
  

  ## Tests
  <br />
  ## <a name="tests">${response.tests}</a>
  <br />

  ## Questions
  <br />
  ## <a name = "email">${response.email}</a>
  ## <a name = "questions">${response.github}</a>
  <br />

  

`;
}

module.exports = generateMarkdown;
