[![Netlify Status](https://api.netlify.com/api/v1/badges/acfc2936-e6da-4242-88a5-ef27b3765059/deploy-status)](https://app.netlify.com/sites/read-from-google-sheets/deploys)

# Microblog 
An microblog power by Netlify, Telegram and Google Sheet. 




## Instructions

To get your own instance of this 11ty example project cloned and deploying to Netlify very quickly, just click the button below and follow the instructions.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Bojne/microblog)

<details>
<summary> Wait, what happens when I click that button?`</summary>

1. Netlify will clone the git repository of this project into your Github account. It will be asking for permission to add the repo for you.
2. Netlify will then create a site for you (for free). 
3. If you add anything to the cloned repo, Netlify will rebuild site for you. 
</details>

## Changing the data source

There are a couple of steps required to expose the content from your Google Sheet as a JSON API.

1. Create a google sheet and format it with column names in the first row. The JSON feed generated will use these column names.
2. You'll use the unique ID of the sheet from its URL to address it later.
    - For example: `https://docs.google.com/spreadsheets/d/1CfI6XGm9OjjNKGr3kXRSKVLui_gkHZdadoOPIiNgE9s/edit#gid=0`
    - Where: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit#gid=0`
3. After creating you sheet, you need to publish it to the web. Do this from the **File menu in Google Sheets. Select the option to publish the sheet as a web page.
4. Check that you can now access the JSON feed of the sheet, using your Sheet ID in a URL using this convention:
   - `https://spreadsheets.google.com/feeds/list/{SHEET_ID}/od6/public/values?alt=json`;
5. Specify the Sheet ID to be used when constructing the request URL in [`/src/site/_data/prod/sheet.js`](/src/site/_data/prod/sheet.js#L8)

## Local development

### Prerequisites

- [Node and NPM](https://nodejs.org/)

## Running locally

```bash
# install the dependencies
npm install

# External data sources can be stashed locally for API-less dev
npm run seed

# It will then be available locally for building with:
npm run start
```

### Acknowledgement 

This project is building on [Phil's repo](https://github.com/philhawksworth/example-read-from-sheets). 

