## Prerequisites

- Github account
- Access to the repo

## Installing Packages

### 1. Generate github personal access token

Create a [personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) from github _Developer Settings_ with the follwing previlages

- `repo`
- `read:packages`
- `write:packages`

### 2. Authenticate with npm

Authenticate with npm cli to install the private packages. Provide the github username and Personal Access Token as password.
Note: This will be saved in `~/.npmrc`
`npm login --registry=https://npm.pkg.github.com`

### 3. Update `~/.npmrc`

Add the below line to `.npmrc` file, to allow npm to download the scoped package from Github Packages
`@medwing:registry=https://npm.pkg.github.com`

### 4. Install package

The follwing command should successfully install any packages for you.
`npm install @medwing/components`

## Deploying Packages

Package deployment is to be done from CircleCI, based on github tags.
`version` field in the `package.json` need to be bumped prior to creating tags.

Alternatively CircleCI would build the package against `deploy` branch and push the corresponding version tag to github after successful package pusblishing
