import { NextResponse } from 'next/server';
import { collection, getDocs, addDoc, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { COLLECTIONS } from '@/lib/models';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const industry = searchParams.get('industry');
    const location = searchParams.get('location');
    const limitCount = searchParams.get('limit');

    let q = collection(db, COLLECTIONS.LISTINGS);

    // Apply filters
    const constraints = [];
    
    if (featured === 'true') {
      constraints.push(where('featured', '==', true));
    }
    
    if (industry) {
      constraints.push(where('industry', '==', industry));
    }
    
    if (location) {
      constraints.push(where('location', '>=', location));
      constraints.push(where('location', '<=', location + '\uf8ff'));
    }

    // Add ordering and limit
    constraints.push(orderBy('createdAt', 'desc'));
    
    if (limitCount) {
      constraints.push(limit(parseInt(limitCount)));
    }

    if (constraints.length > 0) {
      q = query(q, ...constraints);
    }

    const querySnapshot = await getDocs(q);
    const listings = [];
    
    querySnapshot.forEach((doc) => {
      listings.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || null,
        updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || null
      });
    });

    return NextResponse.json({ listings });

  } catch (error) {
    console.error('Error fetching listings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'description', 'price', 'revenue', 'cashFlow', 'location', 'industry'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create listing document
    const listingData = {
      title: data.title,
      description: data.description,
      price: Number(data.price),
      revenue: Number(data.revenue),
      cashFlow: Number(data.cashFlow),
      location: data.location,
      industry: data.industry,
      imageUrl: data.imageUrl || '',
      featured: Boolean(data.featured),
      status: data.status || 'active',
      established: data.established ? Number(data.established) : null,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await addDoc(collection(db, COLLECTIONS.LISTINGS), listingData);

    return NextResponse.json(
      { id: docRef.id, message: 'Listing created successfully' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating listing:', error);
    return NextResponse.json(
      { error: 'Failed to create listing' },
      { status: 500 }
    );
  }
}