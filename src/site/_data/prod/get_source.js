const seed = require("../../../utils/save-seed.js");
const { google } = require("googleapis");

async function asyncCall() {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const range = `Sheet1!A1:D1000`; // #TODO: Made this more dynamic
  const sheets = google.sheets({ version: "v4", auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });
  data = {};
  response.data.values.forEach(([type, time, id, text]) => {
    if (id == "900136250" && text) {
      //#TODO: make the filter a global level
      if (!(type in data)) {
        data[type] = [];
      }
      data[type].push({ time: time, id: id, text: text });
      data["date"];
    }
  });

  seed(JSON.stringify(data), `${__dirname}/../dev/sheet.json`);
}

asyncCall();
