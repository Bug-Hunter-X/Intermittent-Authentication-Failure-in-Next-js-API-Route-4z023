```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './auth/[...nextauth]';

export default async function handler(req, res) {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) {
      console.error('Authentication failed:', req.headers);
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // ... rest of your API route code
    console.log('Session:', session);
  } catch (error) {
    console.error('Error during authentication:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
```