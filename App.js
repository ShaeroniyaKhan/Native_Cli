import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthPage from './src/screens/AuthPage';
import PhoneOtpSignIn from './src/screens/PhoneOtpSignIn';
import {GoogleSigninButton,statusCodes} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '174549489812-b4a128il684fj8seellrsihvkiuemaae.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  console.log("Should affect an aser here")
  return null
}
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="AuthPage" component={AuthPage} />
        <Stack.Screen name="PhoneSignIn" component={PhoneOtpSignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;