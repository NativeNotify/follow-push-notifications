import registerNNPushToken from 'native-notify';

import AppState from './src/AppState/AppState';

export default function App() {
  registerNNPushToken(2594, 'dUuUQOZtCvfWUCDrvQCSZa');
  
  return <AppState />;
}