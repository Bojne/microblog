const { google } = require("googleapis");
const sheets = google.sheets("v4");

async function main() {
  const authClient = await authorize();
  const request = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: "1I_CCul8qdZsiMkhFVguxmfurkviqx9uI6WitinPxUt4",

    // The A1 notation of the values to retrieve.
    ranges: ["A1:D500"], // TODO: Update placeholder value.

    // How values should be represented in the output.
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    valueRenderOption: "", // TODO: Update placeholder value.

    // How dates, times, and durations should be represented in the output.
    // This is ignored if value_render_option is
    // FORMATTED_VALUE.
    // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
    dateTimeRenderOption: "", // TODO: Update placeholder value.

    auth: authClient,
  };

  try {
    const response = (await sheets.spreadsheets.values.batchGet(request)).data;
    // TODO: Change code below to process the `response` object:
    console.log(JSON.stringify(response, null, 2));
  } catch (err) {
    console.error(err);
  }
}
main();

async function authorize() {
  // TODO: Change placeholder below to generate authentication credentials. See
  // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
  //
  // Authorize using one of the following scopes:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/drive.readonly'
  //   'https://www.googleapis.com/auth/spreadsheets'
  //   'https://www.googleapis.com/auth/spreadsheets.readonly'
  const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
  const TOKEN_PATH = "token.json";

  let authClient =
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC40MYRAQ94TmbA\n0ICe4h92NlmNvCsKzJAqS/S4jXZFXylg57myNc36SB7jH/HvuE8wMM3GA5YaxDoh\nVN8jPvX7YYyS14IdbCDu4uLYCR/hVahNOPRiMlaOzE2RJQ2+RpHvGQ1XSK/Y3S1u\nHIHQgr1K3dLrn2ds31BzJSrvjbGHq2yZaXOrR0qq43K05Z8yXBRZzP0P7LvNGump\nCB0cbEXPP2USTitpcD3NnNFxhqNpscb134kRjhdc+/V9HUS6ITlQQjVDTfbrBNEs\nDFP6CmWTeyP9oDRF+vFg25mRtvbZslg0QUqpCAq9tzdIAV96RPmh6WhkJttapxw7\nD8pZlcIjAgMBAAECggEAP6aPgI238Tw3QVLN6WqBYWoof5r9y/NV92s/dkwqHow+\nqQRFvS2wqfEqyhhXb7Mveq5kQD099iv8xTwAuZfWieQ30N7uDgoOcZesfrDtzOJ+\nW1IxQJyLmRSd5k43pH+ThSBAqv36qhrKqbChuNk+LkmlecbljOaAQ5faaLSJHusC\nXlcw+Irp7U2iUZYEel9I7nNlYsceVjvUne1ja9xL8hYWpScclYczzOpOo2g0Nyxb\nG0YybAgGsbf3bY9FsVtVvVJkc89B4SV72TqYiNqWiIcfEkKnkwoBlbLj6Nb9ySSe\nuOT/bOoLokqY5hxhGsTVM8dqi6EwllWUOwXTEVJviQKBgQDcNrYQbXW1fo5m2soJ\nRRCYZXd8xq3VWvncyydpeYgJCJtdWK2+eOh1V+XnS04EdY3B4/cEKS8nQh975fB7\nL1F4M3kSSePvopVjhbYGoTWI/o1mL8Hi4HVMj8j9KP2uz+R1iQ//Ymkn3dKg2pUR\nduAWsU/ktgwVvRCbwlON/5NFRwKBgQDW2W8DvrXYogKjw5n3/D8MyIQkJzbKE1S0\nD8s0ZiiNacLFH0mjv4YrM6s8yk64KaJmgHdugTL08IOb3Cvx8lRdIBiW/Tp2s7nx\n+uAQiZnD9+Q1FWH9LKh3zb597MSvMTC7fNdNlzM7s4JUboUkKN5kvfB4PzG8rBHZ\n1AyMHj46RQKBgBG0YFzfwAfwfdhtHLM0F0p5Ver1OkKeBtqmhqunNrWrOHp/x7A5\nnk7Y20YGOuaG4PfGsTRnb0ATw949NWFiA4XLdZ9vy2CXzLTsqh7MVTaHaKzfiBIK\ng8O9B6a65fJpCnAcremVaujmn6mJCVUXHpsUdFzp+fzBb5VmQTt4Ycm/AoGABWjA\nBMYeae/aRSk9jSLKq5W4zfg2xuuprEbhhNY1mynYf4IEJp1B0YChhQxK4xQZRJ9j\nYmLaV5Rem+P1L0g8m4OdWt/RQv/PZKo+TexI9Mge9L8vEmK3cxy4+Q6m/QouAepo\nuUlfPteMJngJ3hkxUDQAA+cDZ46lfGh8UGLKikkCgYAroYl8GmeVrIOALlqqoaSz\nFD3TN0vyO+8mNvsbMc4RxQa0qfVoECrQle3TQAkys0XH3K1R2wx/lDeLNAFbvoCz\nQJ7op1zV9LVZbky4jGJFphX8WNjTo/bz+MJ73YwFi7VEd2B6KrFikWa7r/caxF/l\njRWdP4HbyKe/ayWTHp+lAw==\n-----END PRIVATE KEY-----\n";

  if (authClient == null) {
    throw Error("authentication failed");
  }

  return authClient;
}
