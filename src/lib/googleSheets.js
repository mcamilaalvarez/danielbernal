import { google } from 'googleapis';
//Conexion
export async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}
//Escribir
export async function appendToSheet(data) {
  const sheets = await getGoogleSheetsClient();
  const range = 'Usuarios!A2'; // Ajusta el nombre de tu pestaña

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [data], // 'data' debe ser un array como [nombre, email, etc]
    },
  });
}

//Obtener
export async function getNewsData() {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID_NEWS;
  
  // Rango: Nombre de la pestaña ! Desde A2 hasta F para traer todo
  const range = 'Noticias!A2:F'; 

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  return response.data.values || [];
}


export async function getMoreAboutDaniel() {
  const sheets = await getGoogleSheetsClient();
  const range = 'Info!A2:D'; // Ajusta el nombre de tu pestaña

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID_INFO_PROPOSALS,
    range,
  });

  return response.data.values || [];
}

export async function getProposals() {
  const sheets = await getGoogleSheetsClient();
  const range = 'Propuestas!A2:D'; // Ajusta el nombre de tu pestaña

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID_INFO_PROPOSALS,
    range,
  });

  return response.data.values || [];
}