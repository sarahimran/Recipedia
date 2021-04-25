import 'react-native-gesture-handler';
import React from 'react';
import ProfileScreen from './screens/ProfileScreen';
import EditPasswordScreen from './screens/EditPasswordScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ApiScreen from './screens/ApiScreen';
import RecipeFeed from './screens/RecipeFeed'
import LandingPage from './screens/LandingPage';
import MyRecipeFeed from './screens/MyRecipeFeed';
import CustomMenu from './screens/CustomMenu';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <ApiScreen></ApiScreen>
    // <ProfileScreen></ProfileScreen>
    // <SignInScreen></SignInScreen>
   // <SignUpScreen></SignUpScreen>
   //<RecipeFeed></RecipeFeed>
   
    // <NavigationContainer>
    //   <Stack.Navigator >
    //     {/* <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: 'Welcome' }}
    //     /> */}
    //     <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
    //     <Stack.Screen name="EditPassword" component={EditPasswordScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator
      
        initialRouteName="LandingPage"
        screenOptions={({route, navigation}) => ({
          headerTitleStyle: {
            color: 'white',
            
            fontWeight: 'bold'
          },
          headerShown: false,
          title: 'Recipedia',
          headerStyle: {
            backgroundColor: "#28c090",
            height: 55,
       
           
           
          },
          headerLeft: () => (
            <CustomMenu
              menutext="Menu"
              menustyle={{marginRight: 14}}
              textStyle={{color: 'white'}}
              navigation={navigation}
              route={route}
              isIcon={true}
            />
          ),
        })}>
      
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
        <Stack.Screen name="MyFeed" component={MyRecipeFeed} options={{headerShown: true}}/>
        <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: true}} />
        <Stack.Screen name="Menu" component={CustomMenu} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}
