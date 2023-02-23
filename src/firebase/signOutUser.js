import { getAuth, signOut } from 'firebase/auth';

export default function signOutUser() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log('Sign out successful');
    })
    .catch((error) => {
      console.log(`${error.message}`);
    });
}
