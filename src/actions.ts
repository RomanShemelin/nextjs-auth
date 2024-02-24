'use server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SessionDate, sessionOptions } from './lib';

// examle user
let username = 'john';
let isPremium = true;

export const getSession = async () => {
  const session = await getIronSession<SessionDate>(cookies(), sessionOptions);
  return session;
};

export const login = async (formData: FormData) => {
  const session = await getSession();
  const formUsername = formData.get('username') as string;
  const formPassword = formData.get('password') as string;

  // проверка в БД
  // const user = await db.getUser({username, password})

  if (formUsername !== username) {
    return { error: 'Wrong credentials' };
  }
  session.id = '1';
  session.username = formUsername;
  session.isPremium = isPremium;

  await session.save();
  redirect('/');
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect('/');
};
