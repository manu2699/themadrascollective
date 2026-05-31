import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';

export async function GET(req: Request) {
  try {
    const password = req.headers.get('x-curator-password');
    const correctPassword = process.env.CURATOR_PASSWORD;

    console.log("--- API /messages GET Request ---");
    console.log("Received password header:", password);
    console.log("Server CURATOR_PASSWORD env var:", correctPassword);

    if (!password || password !== correctPassword) {
      console.log("Password mismatch! Rejecting with 401.");
      return NextResponse.json({ error: 'Unauthorized', debug: 'Password mismatch' }, { status: 401 });
    }

    console.log("Password matched. Fetching from Firestore...");
    const snapshot = await db.collection('messages').orderBy('createdAt', 'desc').get();

    const messages = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log(`Successfully fetched ${messages.length} messages.`);
    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/messages route:', error);
    return NextResponse.json({ error: 'Internal server error', details: String(error) }, { status: 500 });
  }
}
