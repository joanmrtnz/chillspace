'use server';

import {cookies} from 'next/headers';
import {revalidatePath} from 'next/cache';

export async function setLocale(locale: 'es' | 'en' | 'ca') {
  const cookieStore = await cookies();

  cookieStore.set('locale', locale, {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365   
  });

    revalidatePath('/');
}
