/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {myStore} from './src/Redux/store';

ReduxApp = () => {
  return (
    <Provider store={myStore}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => ReduxApp);
