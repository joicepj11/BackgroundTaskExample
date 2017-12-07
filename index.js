import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('BackgroundTaskExample', () => App);
//registering background task 
AppRegistry.registerHeadlessTask('BackgroundTask', () => require('./BackgroundTask'));