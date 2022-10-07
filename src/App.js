
import { GoogleOAuthProvider } from '@react-oauth/google';

// components

import Messenger from "./components/Massenger";
import AccountProvider from './context/AccountProvider';

function App() {
    
  const clientId = '564458157804-35il0c5fqdqusuqq73ss8oi54kr7sf44.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
