import React from 'react';
import { StyleSheet } from 'react-native';

function Header(props) {
    return (
        <View style={styles.header}>
            <MaterialIcon
                name="arrow-back"
                size={20}
                style={styles.headerIcon}
                onPress={() => navigation.goBack()}
            />
            <Text style={styles.headText}>Settings</Text>
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
});

export default Header;