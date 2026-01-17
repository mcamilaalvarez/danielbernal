import { NextResponse } from 'next/server';
import { getGoogleSheetsClient } from '@/lib/googleSheets';

export async function POST(req: Request) {
    try {
        const { nombre, celular, correo, municipio } = await req.json();
        const sheets = await getGoogleSheetsClient();

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Usuarios!A2',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[
                    nombre, 
                    celular, 
                    correo, 
                    municipio, 
                    new Date().toLocaleString('es-CO')
                ]],
            },
        });

        return NextResponse.json({ message: 'Registrado correctamente' }, { status: 200 });
    } catch (error: unknown) {
        console.error('Error en API:', error);
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
}