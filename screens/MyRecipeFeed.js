import * as React from "react";
import { StyleSheet, Text, Alert, View, StatusBar, SafeAreaView, Platform, Dimensions, Pressable, ScrollView, TouchableOpacity, Image } from 'react-native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { SearchBar } from 'react-native-elements';
import Fontisto from "react-native-vector-icons/Fontisto";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import { useEffect } from "react";
import 'react-native-gesture-handler';
import axios from "axios";
import img from "../assets/pasta.jpg";
import { Touchable } from "react-native";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import CustomMenu from "./CustomMenu";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const { showSearchBar } = false;
const Stack = createStackNavigator();
// function onClick() {
//     let { showSearchBar } = this.state;
//     this.setState({
//         showSearchBar: !showSearchBar,
//     });
// }


const MyRecipeFeed = ({ route, navigation }) => {
    // this.state = {
    //     showSearchBar: false, // control what ever to render the searchbar or just the icon
    // };
    // useEffect(() => {
    //   console.log("Api call working!");
    //   getProfileFromApi();
    // }, []);

    // var rec = "Bearer ";
    // var r2 = JSON.stringify(route.params).substr(8);
    // var r3 = r2.substring(0, r2.length - 2);
    // var r4 = rec.concat(r3);
    // console.log(r4);

    // const getProfileFromApi = async () => {
    //   console.log("Api call working!");
    //   try {
    //     const res = await axios.get("http://localhost:5000/api/user/profile", {
    //       headers: {
    //         Authorization: r4,
    //       },
    //     });
    //     console.log(res.data);
    //     setEmail(res.data.body.email);
    //     setname(
    //       res.data.body.firstName.concat(" ").concat(res.data.body.lastName)
    //     );
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    let _menu = null;
    return (
        <SafeAreaView style={styles.container}>


            <ScrollView>
                <View style={styles.contentBox}>
                    <Image style={styles.imag} source={img} />
                    <View style={styles.content}>
                        <Text style={styles.subheadText}>Alfredo Pasta</Text>
                        <View style={styles.contentText}>
                            <Text style={styles.subHeading}>Duration: </Text>
                            <Text>30 minutes</Text>
                        </View>
                        <View style={styles.ratingbox}>
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                        </View>
                        <View style={styles.contentText}>
                            <Text style={styles.subHeading}>Description: </Text>
                            <Text>take 2 carots</Text>
                        </View>
                        <Text>and dice them in blocks of 4... </Text>
                    </View>
                </View>
                <View style={styles.contentBox}>
                    <Image style={styles.imag} source={img} />
                    <View style={styles.content}>
                        <Text style={styles.subheadText}>Alfredo Pasta</Text>
                        <View style={styles.contentText}>
                            <Text style={styles.subHeading}>Duration: </Text>
                            <Text>30 minutes</Text>
                        </View>
                        <View style={styles.ratingbox}>
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                        </View>
                        <View style={styles.contentText}>
                            <Text style={styles.subHeading}>Description: </Text>
                            <Text>take 2 carots and </Text>
                        </View>
                        <Text>dice them in blocks of 4... </Text>
                    </View>
                </View>
                <View style={styles.contentBox}>
                    <Image style={styles.imag} source={img} />
                    <View style={styles.content}>
                        <Text style={styles.subheadText}>Alfredo Pasta</Text>
                        <View style={styles.contentText}>
                            <Text style={styles.subHeading}>Duration: </Text>
                            <Text>30 minutes</Text>
                        </View>
                        <View style={styles.ratingbox}>
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                        </View>
                        <View style={styles.contentText}>
                            <Text style={styles.subHeading}>Description: </Text>
                            <Text>take 2 carots and </Text>
                        </View>
                        <Text>dice them in blocks of 4... </Text>
                    </View>
                </View>
                <View style={styles.contentBox}>
                    <Image style={styles.imag} source={img} />
                    <View style={styles.content}>
                        <Text style={styles.subheadText}>Alfredo Pasta</Text>
                        <View style={styles.contentText}>
                            <Text style={styles.subHeading}>Duration: </Text>
                            <Text>30 minutes</Text>
                        </View>
                        <View style={styles.ratingbox}>
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                            <MaterialIcon name="star" size={20} style={styles.iconRating} />
                        </View>
                        <View style={styles.contentText}>
                            <Text style={styles.subHeading}>Description: </Text>
                            <Text>take 2 carots and </Text>
                        </View>
                        <Text>dice them in blocks of 4... </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    },
    header: {
        flexDirection: "row",
        backgroundColor: "#28c090",
        width: "100%",
        height: 55,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 15,
    },
    headerIcon: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
        paddingRight: 10,
    },
    headText: {
        
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
    },
    body: {
        paddingTop: 20,
    },
    subHeading: {
        fontSize: 16,
        color: "#0d5588",
    },
    subheadText: {
        fontSize: 17,
        color: "#0d5588",
    },
    contentBox: {
        flex: 1,
        borderColor: "#F5F5F5",
        marginTop: "5%",
        borderWidth: 2,
        width: "90%",
        borderRadius: 12,
        alignSelf: "center",
        height: 140,
        marginBottom: 20,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        flex: 0.8,
        color: "grey",
    },
    iconRating: {
        color: "grey",
    },
    content: {
        alignSelf: "baseline",
        flexDirection: "column",
        paddingBottom: 20,
    },
    contentText: {
        alignSelf: "baseline",
        flexDirection: "row",
    },
    ratingbox: {
        flexDirection: "row",
    },
    field: {
        fontSize: 15,
        fontWeight: "bold",
        color: "orange",
    },
    info: {
        fontSize: 15,
    },
    editIcon: {
        flex: 1,
        color: "lightgrey",
    },
    pwdContent: {
        flex: 4,
    },
    imag: {
        height: 100,
        width: 100,
        marginRight: 20,
    },
});

export default MyRecipeFeed;