// FUNCTION TO RETURN LICENSE BADGE
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

// FUNCTION TO RETURN LICENSE LINK
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

// FUNCTION THAT RETURNS LICENSE SECTION OF README
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

// FUCNTION TO GENERATE MARKDOWN FOR README
function generateMarkdown(response) {
  
  return `# <p align="center"> ${response.title} </p>
  
  ${renderLicenseBadge(response.license)} 
  <br />

  ## Description
  ${response.description}
  <br />
  
  
  

  ## :open_book: Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contribution](#contribution)

  * [Tests](#tests)

  * [Questions](#questions)

  

  ## :wrench: Installation
  
  <a name="installation">${response.installation}</a>
  <br />

  ## :desktop_computer: Usage
  <br />
  <a name="usage">${response.usage}</a>
  <br />
  Run node index.js at the root of your project and follow the prompts.

  ## :scroll: License ${renderLicenseBadge(response.license)} 
  <br />${renderLicenseSection(response.license)}<br />${renderLicenseLink(response.license)}<br />


  ## :weight_lifting_man: Contribution
  '[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)'

  <br /><a name="contribution">${response.contribution}</a><br />
  

  ## 	:hourglass_flowing_sand: Tests
  <br />
  <a name="tests">${response.tests}</a>
  <br />

  ## :grey_question: Questions
  <br /><a name = "email">${response.email}<br /></a><a name = "questions">${response.github}</a>
  <br />

  

`;
}

module.exports = generateMarkdown;
