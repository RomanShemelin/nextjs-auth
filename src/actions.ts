'use server';
import { getIronSession } from 'iron-session';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SessionDate, sessionOptions } from './lib';

// examle user
let username = 'john';
let isPremium = true;
let isBlocked = true;

export const getSession = async () => {
  const session = await getIronSession<SessionDate>(cookies(), sessionOptions);

  // Проверка статуса пользователя
  session.isBlocked = isBlocked;
  session.isPremium = isPremium;

  return session;
};

export const login = async (
  prevState: { error: undefined },
  formData: FormData
) => {
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
  session.isLoggedIn = true;

  await session.save();
  redirect('/');
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect('/');
};
export const chagePremium = async () => {
  const session = await getSession();
  isPremium = !session.isPremium;
  session.isPremium = isPremium;
  await session.save();
  revalidatePath('/profile');
};
export const changeUsername = async (formData: FormData) => {
  const newUserName = formData.get('username') as string;
  const session = await getSession();
  session.username = newUserName;
  await session.save();
  revalidatePath('/profile');
};
