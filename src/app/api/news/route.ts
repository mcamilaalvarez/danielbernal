import { NextResponse } from 'next/server';
import { getNewsData} from '@/lib/googleSheets';

export async function GET() {
  try {
    const rows = await getNewsData();

    // Mapeamos los arrays de Google a objetos más fáciles de usar
    const noticias = rows.map((row) => ({
      titulo: row[0],
      descripcion: row[1],
      texto: row[2],
      fecha: row[3],
      urlImagen: row[4],
      altImagen: row[5],
    }));

    return NextResponse.json(noticias, { status: 200 });
  } catch (error: unknown) {
    console.error("Error cargando noticias:", error);
    return NextResponse.json({ error: (error as Error).message as string }, { status: 500 });
  }
}