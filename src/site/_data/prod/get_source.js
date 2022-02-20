const seed = require("../../../utils/save-seed.js");
const { google } = require("googleapis");

async function asyncGetData() {
  const api_key = process.env.SHEET_API_KEY;
  const range = process.env.RANGE;

  if (!api_key || !range) {
    console.error("Don't have a valid google api key in envrionment");
  }
  const sheets = google.sheets({
    version: "v4",
    auth: api_key,
  });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });
  data = {};
  response.data.values.forEach(([type, time, id, text]) => {
    if (id == process.env.MY_TG_ID && text) {
      if (!(type in data)) {
        data[type] = [];
      }
      data[type].push({ time: time, id: id, text: text });
      data["date"];
    }
  });
  seed(JSON.stringify(data), `${__dirname}/../dev/sheet.json`);
}

asyncGetData();
