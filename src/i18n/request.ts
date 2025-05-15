import {cookies} from 'next/headers';
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('locale')?.value;

  const locale = cookieLocale ?? 'es';

  return {
    locale,
    messages: (await import(`../../messages/${locale}/${locale}.json`)).default
  };
});
