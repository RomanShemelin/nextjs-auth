import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { SessionDate, sessionOptions } from './lib';

export const getSession = async () => {
  const session = await getIronSession<SessionDate>(cookies(), sessionOptions);
  return session;
};
