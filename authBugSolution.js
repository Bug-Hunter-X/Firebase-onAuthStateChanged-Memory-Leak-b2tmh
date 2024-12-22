import { onAuthStateChanged, auth } from './firebaseConfig'; // Assuming firebaseConfig.js exports auth and necessary Firebase configurations

let unsubscribe;

export const setupAuthListener = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log('User signed in:', user.uid);
    } else {
      // User is signed out
      console.log('User signed out');
    }
  });
};

export const cleanupAuthListener = () => {
  if (unsubscribe) {
    unsubscribe();
    console.log('Auth listener unsubscribed');
  }
};

// Example usage in a React component:
// useEffect(() => {
//   setupAuthListener();
//   return cleanupAuthListener; // Ensure cleanup on unmount
// }, []);