import { NextResponse } from 'next/server';
import { seedAll } from '@/lib/seedData';

export async function POST(request) {
  try {
    // Only allow seeding in development
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'Seeding is not allowed in production' },
        { status: 403 }
      );
    }

    console.log('Starting database seeding process...');
    await seedAll();

    return NextResponse.json(
      { message: 'Database seeded successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Seeding error:', error);
    return NextResponse.json(
      { error: 'Failed to seed database', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return NextResponse.json(
    { 
      message: 'Seed endpoint available. Use POST to run seeding.',
      note: 'Only available in development environment.'
    },
    { status: 200 }
  );
}