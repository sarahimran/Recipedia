import "react-native-gesture-handler";
import React from "react";
import ProfileScreen from "./screens/ProfileScreen";
import EditPasswordScreen from "./screens/EditPasswordScreen";
import EditNameScreen from "./screens/EditNameScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./screens/SignInScreen";
import MyRecipeScreen from "./screens/MyRecipeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LandingPage from "./screens/LandingPage";
import MyRecipeFeed from "./screens/MyRecipeFeed";
import SingleRecipeScreen from "./screens/SingleRecipeScreen";
import mystore from "./src/store";
import { Provider } from "react-redux";
import SavedRecipesScreen from "./screens/SavedRecipesScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={mystore}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LandingPage"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="myRecipe" component={MyRecipeScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="profile" component={ProfileScreen} />
          <Stack.Screen name="editPassword" component={EditPasswordScreen} />
          <Stack.Screen name="editName" component={EditNameScreen} />
          <Stack.Screen name="singleRecipe" component={SingleRecipeScreen} />
          <Stack.Screen name="MyRecipeFeed" component={MyRecipeFeed} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="savedRecipes" component={SavedRecipesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
