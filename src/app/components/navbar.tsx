import { getSession } from '@/actions';
import { defaultSession } from '@/lib';
import Link from 'next/link';
import Logout from './logoutForm';

export default async function Navbar() {
  const session = await getSession();
  return (
    <nav>
      <Link href='/'>Homepage</Link>
      <Link href='/premium'>Premium</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/login'>Login</Link>
      {session.isLoggedIn && <Logout />}
    </nav>
  );
}
