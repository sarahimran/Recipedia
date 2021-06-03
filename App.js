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
import CustomMenu from "./screens/CustomMenu";
import LandingPage from "./screens/LandingPage";
import MyRecipeFeed from "./screens/MyRecipeFeed";
import SingleRecipeScreen from "./screens/SingleRecipeScreen";
import mystore from "./src/store";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { Platform } from "react-native";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={mystore}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LandingPage"
          screenOptions={({ route, navigation }) => ({
            headerTitleStyle: {
              color: "white",
              fontWeight: "bold",
            },
            headerStatusBarHeight: 27,
            headerShown: false,
            title: "Recipedia",
            headerStyle: {
              backgroundColor: "#28c090",
              // height: 55,
            },
            headerLeft: () => (
              <CustomMenu
                menutext="Menu"
                // menustyle={{
                //   marginRight: 14,
                // }}
                textStyle={{ color: "white" }}
                navigation={navigation}
                route={route}
                isIcon={true}
              />
            ),
          })}
        >
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="myRecipe" component={MyRecipeScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="profile" component={ProfileScreen} />
          <Stack.Screen name="editPassword" component={EditPasswordScreen} />
          <Stack.Screen name="editName" component={EditNameScreen} />
          <Stack.Screen name="singleRecipe" component={SingleRecipeScreen} />
          <Stack.Screen name="Menu" component={CustomMenu} />
          <Stack.Screen
            name="MyRecipeFeed"
            component={MyRecipeFeed}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="LandingPage" component={LandingPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
