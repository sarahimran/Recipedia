import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { signout } from "../src/action/index";
import { useDispatch } from "react-redux";

function Header({ navigation, title }) {
    let _menu = null;
    const dispatch = useDispatch();
    return (
        <View style={styles.header}>
            <Menu
                ref={(ref) => (_menu = ref)}
                button={
                    <TouchableOpacity onPress={() => _menu.show()}>
                        <MaterialIcon
                            name="menu"
                            size={30}
                            style={{ color: "white" }}
                        />
                    </TouchableOpacity>
                }
                style={{ marginTop: 43 }}
            >
                <MenuItem
                    onPress={() => {
                        _menu.hide();
                        navigation.navigate("profile");
                    }}
                >Profile</MenuItem>
                <MenuDivider />
                <MenuItem
                    onPress={() => {
                        _menu.hide();
                        navigation.navigate("MyRecipeFeed");
                    }}
                >Recipe Feed</MenuItem>
                <MenuDivider />
                <MenuItem
                    onPress={() => {
                        _menu.hide();
                        navigation.navigate("myRecipe");
                    }}
                >My Recipes</MenuItem>
                <MenuDivider />
                <MenuItem
                    onPress={() => {
                        _menu.hide();
                        navigation.navigate("savedRecipes");
                    }}
                >Saved Recipes</MenuItem>
                <MenuDivider />
                <MenuItem onPress={() => {
                    _menu.hide();
                    dispatch(signout(null));
                    navigation.navigate("SignIn")
                }}>Log Out</MenuItem>
            </Menu>
            <Text style={styles.headText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "#28c090",
        width: "100%",
        height: 55,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 15,
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    },
    headerIcon: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
        paddingRight: 10,
    },
    headText: {
        fontFamily: "Roboto",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 20
    },
});

export default Header;