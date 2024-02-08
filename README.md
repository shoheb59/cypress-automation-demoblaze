# Prerequisite

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed
## Installation

Clone the Repo.

```bash
git clone https://github.com/your-username/your-cypress-project.git
```

## Usage

```python
Here the following tasks are done:

1. View Landing page in "viewLandingPage.cy.js" file
2. View each category and match on how many entries are there in "countCategory.cy.js" file
3. Register, login after, validate logged in "registerAndLogin.cy.js" file.
4. Purchase ( full process ) a Random phone from 2nd page from the category Phones "purchasePhone.cy.js" file

```

## Tools

1. GitHub Action Used for CI/CD  - (build.yml file)
2. BaseURL stored in the config file
3. All Screenshot will be taken after every test file run and will be saved in the Screenshot folder



## Run and Report


Install reporting library:
``` 
"https://www.npmjs.com/package/cypress-mochawesome-reporter"
```
Run all file:
```
npm run test:allFile
```

For running a single file use: 
```
npx cypress open
```
Check report:
Go to reports folder and open index.html in the browser after running all the Test
