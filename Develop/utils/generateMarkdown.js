// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Mozilla"){
    return` [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

  } else if (license === "MIT"){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`


  } else (license === "Apache")
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  
  if (!license) {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {
  if (licenseLink === "Mozilla"){
    return `https://www.mozilla.org/en-US/MPL/2.0/FAQ/`

  } else if (licenseLink === "MIT"){
    return `https://opensource.org/licenses/MIT`

  } else (licenseLink === "Apache")
  return 'https://www.apache.org/licenses/LICENSE-2.0.txt'

  if (!licenseLink) {
    return '';
  } 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  #${response.github}
  # ${response.email}
  # license: ${renderLicenseBadge(response.license)}
  # licenseLink: ${renderLicenseLink(response.licenseLink)}

  # Table of Contents
  1. [Description](#description)

  2. [Installation](#installation)

  3. [Usage Information](#usage-information)
  4. [Contributing](#contributing)
  5. [Tests](#tests)


  ## <a name="description">${response.description}</a>
  ## <a name="installation">${response.installation}</a>
  ## <a name="usage">${response.usage}</a>
  ## <a name="contribution">${response.contribution}</a>
  ## <a name="tests">${response.tests}</a>

`;
}

module.exports = generateMarkdown;
