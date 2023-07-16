import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import LoginPanel from './LoginPanel';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function Page() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect('/')
  }

	return <LoginPanel />;
}
