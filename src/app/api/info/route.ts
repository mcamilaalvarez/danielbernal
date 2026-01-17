import { NextResponse } from 'next/server';
import { getMoreAboutDaniel} from '@/lib/googleSheets';

export async function GET() {
  try {
    const rows = await getMoreAboutDaniel();

    // Mapeamos los arrays de Google a objetos más fáciles de usar
    const info = rows.map((row) => ({
      texto: row[0],    
    }));

    return NextResponse.json(info, { status: 200 });
  } catch (error: unknown) {
    console.error("Error cargando las propuestas:", error);
    return NextResponse.json({ error: (error as Error).message as string }, { status: 500 });
  }
}