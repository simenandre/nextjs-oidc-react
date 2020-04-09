import { useAuth } from "oidc-react";

const User = () => {
  const auth = useAuth();
  return (
    <div>
      <pre>{JSON.stringify(auth.userData, null, 2)}</pre>
      {auth.userData ? (
        <button onClick={() => auth.signOut()}>Sign out!</button>
      ) : (
        <button onClick={() => auth.signIn()}>Sign in!</button>
      )}
    </div>
  );
};

export default User;
