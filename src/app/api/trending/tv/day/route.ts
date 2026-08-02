import { NextResponse } from 'next/server';

const TMDB_API_KEY = '895a21bd83a561eaf341c4eb47d6c972';
const BASE_URL = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3';

export async function GET() {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/tv/day?api_key=${TMDB_API_KEY}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch trending TV shows');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching trending TV shows:', error);
    return NextResponse.json(
      { error: 'Failed to fetch trending TV shows' },
      { status: 500 }
    );
  }
}
