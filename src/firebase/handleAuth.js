import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { showSignedOutUser, showSignedInUser } from './updateUI';

export default function handleAuth() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      showSignedInUser(user);
      // TO DO: get projects from database for user
    } else {
      showSignedOutUser();
      // TO DO: clear user's projects from screen
    }
  });
}
