import { redirect } from 'next/navigation';

export default function HomePageRedirect() {
  redirect('/home');
  return null; 
}
