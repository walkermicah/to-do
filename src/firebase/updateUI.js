const app = document.querySelector('.app');
const navBtn = document.querySelector('.nav-btn');
const navInfo = document.querySelector('.nav-info');
const profilePic = document.querySelector('.nav-info-pic');
const userName = document.querySelector('.nav-info-name');

export function showSignedOutUser() {
  app.classList.add('signed-out');
  navInfo.classList.add('hidden');
  navBtn.textContent = 'Sign In with Google';
  navBtn.classList.add('sign-in');
  navBtn.classList.remove('sign-out');
}

export function showSignedInUser(user) {
  app.classList.remove('signed-out');
  navInfo.classList.remove('hidden');
  navBtn.textContent = 'Sign Out';
  navBtn.classList.add('sign-out');
  navBtn.classList.remove('sign-in');
  profilePic.setAttribute('src', user.photoURL);
  userName.textContent = user.displayName;
}
