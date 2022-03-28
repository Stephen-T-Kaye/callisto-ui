# Callisto UI

[![Build Status](https://drone-gl.acp.homeoffice.gov.uk/api/badges/callisto/ui/status.svg)](https://drone-gl.acp.homeoffice.gov.uk/callisto/ui)

## Prerequisites

Install [Node](https://nodejs.org) and validate with `node -v` (Todo: mention node version and node version manager)

## Getting started

Before running the application for the first time, install the node packages

`npm install`

### Run the application (using mock data)

`npm start`

Navigate to http://localhost:3000

### Run the application using local (or remote) services

`npm run serve:dev`

Note: To override the default url http://localhost:5000, create an .env.local file and add the following:
`VITE_LOCAL_API_URL="http://{url:port}"`

Then run:
`npm run serve:dev`

### Build the application for Production

`npm run build`

### View the Production application

`npm vite preview`

## Recommended Dev Tools

1. VS Code and VS Code extensions

   `brew install --cask visual-studio-code`

   - ESLint
   - Prettier
   - SonarLint
   - GitLens

2. Google Chrome and Developer Tools

   `brew install --cask google-chrome`

   - [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
   - [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
   - [axe Dev Tools (Web Accessibility Testing)](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)

### Development Dependencies

| **Dependency** | **Use**                                                 |
| -------------- | ------------------------------------------------------- |
| json-server    | Mock API that simulates create, update, delete          |
| vite           | Bundler with plugin ecosystem and integrated dev server |
| npm-run-all    | Run parallel npm commands cross O/S                     |
