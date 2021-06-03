import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Platform } from 'react-native';
import { StatusBar } from 'react-native';

const CustomMenu = (props) => {
  let _menu = null;
  return (
    <View style={styles.container}>
      <Menu
        ref={(ref) => (_menu = ref)}
        button={
          props.isIcon ? (
            <TouchableOpacity onPress={() => _menu.show()}>
              <MaterialIcons
                name="menu"
                size={30}
                style={{ color: "white" }}
              />
            </TouchableOpacity>
          ) : (
            <Text onPress={() => _menu.show()} style={props.textStyle}>
              {props.menutext}
            </Text>
          )
        }
        style={{marginTop:43}}
      >
        <MenuItem
          onPress={() => {
            _menu.hide();
            props.navigation.navigate("profile");
          }}
        >
          Profile
          </MenuItem>
        <MenuDivider />
        <MenuItem
          onPress={() => {
            _menu.hide();
            props.navigation.navigate("MyRecipeFeed");
          }}
        >
          Recipe Feed
          </MenuItem>
        <MenuDivider />
        <MenuItem
          onPress={() => {
            _menu.hide();
            props.navigation.navigate("myRecipe");
          }}
        >
          My Recipes
          </MenuItem>
        <MenuDivider />
        <MenuItem
          onPress={() => {
            _menu.hide();
            props.navigation.navigate("SignIn");
          }}
        >
          Saved Recipes
          </MenuItem>
        <MenuDivider />
        <MenuItem onPress={() => {
          _menu.hide();
          props.navigation.navigate("SignIn")}}>
          Log Out
          </MenuItem>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 14,
  },
});

export default CustomMenu;