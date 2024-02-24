import Link from 'next/link';
import Logout from './logoutForm';

export default function Navbar() {
  return (
    <nav>
      <Link href='/'>Homepage</Link>
      <Link href='/premium'>Premium</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/login'>Login</Link>
      <Logout />
    </nav>
  );
}
