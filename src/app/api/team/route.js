import { NextResponse } from 'next/server';
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { COLLECTIONS } from '@/lib/models';

export async function GET(request) {
  try {
    const q = query(collection(db, COLLECTIONS.TEAM), orderBy('order', 'asc'));
    const querySnapshot = await getDocs(q);
    const team = [];
    
    querySnapshot.forEach((doc) => {
      team.push({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || null,
        updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || null
      });
    });

    return NextResponse.json({ team });

  } catch (error) {
    console.error('Error fetching team:', error);
    return NextResponse.json(
      { error: 'Failed to fetch team members' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'role', 'email'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create team member document
    const teamData = {
      name: data.name,
      role: data.role,
      email: data.email,
      imageUrl: data.imageUrl || '',
      bio: data.bio || '',
      order: Number(data.order) || 0,
      phone: data.phone || '',
      linkedin: data.linkedin || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await addDoc(collection(db, COLLECTIONS.TEAM), teamData);

    return NextResponse.json(
      { id: docRef.id, message: 'Team member created successfully' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating team member:', error);
    return NextResponse.json(
      { error: 'Failed to create team member' },
      { status: 500 }
    );
  }
}