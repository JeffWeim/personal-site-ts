import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: any) {
  draftMode().enable();
  redirect('/');
}
