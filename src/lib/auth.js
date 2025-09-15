import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function verifyAuth() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token');

    if (!token) {
      return { authenticated: false };
    }

    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    
    return {
      authenticated: true,
      user: {
        userId: decoded.userId,
        username: decoded.username,
        role: decoded.role
      }
    };

  } catch (error) {
    return { authenticated: false };
  }
}

export function requireAuth(handler) {
  return async (request) => {
    const auth = await verifyAuth();
    
    if (!auth.authenticated) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Add user info to request
    request.user = auth.user;
    return handler(request);
  };
}