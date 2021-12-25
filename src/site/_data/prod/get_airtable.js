const seed = require("../../../utils/save-seed.js");
var Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});

// based on the base(table) id
var base = Airtable.base("appcKPyNrw9c9mtYV");
let data = {};

base("content")
  .select({
    // Selecting the first 5 records in Grid view:
    maxRecords: 99,
    view: "Grid view",
    cellFormat: "json",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        let type = record.get("type");
        if (!(type in data)) {
          data[type] = [];
        }
        data[type].push({
          time: record.get("time"),
          message: record.get("message"),
        });
        // console.log("Retrieved", record.get("type"));
      });
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
      seed(JSON.stringify(data), `${__dirname}/../dev/sheet.json`);
    }
  );
