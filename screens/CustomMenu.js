import * as React from 'react';
 
import { Alert, Image, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { StackNavigator } from 'react-navigation';
 
import {NavigationContainer} from '@react-navigation/native';
 
import {createStackNavigator} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import 'react-native-gesture-handler';
 
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import SignInScreen from './SignInScreen';

const CustomMenu = (props) => {
  
    let _menu = null;
    return (
      <View style={props.menustyle}>
        <Menu
          ref={(ref) => (_menu = ref)}
          button={
            props.isIcon ? (
              <TouchableOpacity onPress={() => _menu.show()}>
                <Image
                  source={{
                    uri:
                      'https://reactnativecode.com/wp-content/uploads/2020/12/menu_icon.png',
                  }}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            ) : (
              <Text
                onPress={() => _menu.show()}
                 style={props.textStyle}>
                {props.menutext}
              </Text>
            )
          }>
          <MenuItem onPress={() => {Alert.alert('My Recipes Button Clicked...')}}>
            My Recipes
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={() => {Alert.alert('Saved Recipes Button Clicked...')}}>Saved Recipes</MenuItem>
  
          <MenuDivider />
  
          <MenuItem onPress={() => props.navigation.navigate('SignIn')}>
            Log Out
          </MenuItem>
  
        </Menu>
      </View>
    );
  };

  export default CustomMenu;