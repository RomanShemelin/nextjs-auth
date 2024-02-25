import { getSession } from '@/actions';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function PremiumPage() {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect('/');
  }
  if (!session.isPremium) {
    return (
      <div className='notPremium'>
        <h1>Only premium users can see the content</h1>
        <Link href='/profile'>Go to the profile page</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>PremiumPage page</h1>
      <ul>
        <li>yoloo!</li>
        <li>yoloo1!</li>
        <li>yoloo2!</li>
      </ul>
    </div>
  );
}
