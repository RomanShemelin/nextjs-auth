import { chagePremium, changeUsername, getSession } from '@/actions';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect('/');
  }
  return (
    <div className="profile">
      <h1>ProfilePage page</h1>
      <p>Welcome, {session.username}</p>
      <span>You account is {session.isPremium ? 'Premium' : 'Free'}</span>
      <form action={chagePremium}>
        <button>{session.isPremium ? 'Cancel' : 'Buy'} Premium</button>
      </form>
      <form action={changeUsername}>
        <input type='text' name='username' placeholder={session.username} />
        <button>Update</button>
      </form>
    </div>
  );
}
