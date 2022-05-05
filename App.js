import registerNNPushToken from 'native-notify';

import AppState from './src/AppState/AppState';

export default function App() {
  registerNNPushToken(your-app-id, 'your-app-token');
  
  return <AppState />;
}