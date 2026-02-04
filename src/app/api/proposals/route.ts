import { NextResponse } from 'next/server';
import { getProposals} from '@/lib/googleSheets';

export async function GET() {
  try {
    const rows = await getProposals();

    // Mapeamos los arrays de Google a objetos más fáciles de usar
    const propuestas = rows.map((row) => ({
      titulo: row[0],
      descripcion: row[1],
      tema: row[2],
    }));

    return NextResponse.json(propuestas, { status: 200 });
  } catch (error: unknown) {
    console.error("Error cargando las propuestas:", error);
    return NextResponse.json({ error: (error as Error).message as string }, { status: 500 });
  }
}