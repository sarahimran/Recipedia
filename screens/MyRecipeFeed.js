import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Platform, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import 'react-native-gesture-handler';
import axios from "axios";
import img from "../assets/pasta.jpg";
import { useSelector } from "react-redux";
import API_URL from '../config';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const MyRecipeFeed = ({ route, navigation }) => {
    const token = useSelector((state) => state.login);
    const [data, setData] = useState([]);
    useEffect(() => {
        getRecipesFromApi();
    }, []);

    const getRecipesFromApi = async () => {
        console.log("Api call working!");
        try {
            const res = await axios.get(`${API_URL}/recipe`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    let _menu = null;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {data.body && data.body.map((recipe) => {
                    return (
                        <TouchableOpacity key={recipe._id} onPress={() => navigation.navigate("singleRecipe", { id: recipe._id })}>
                            <View style={styles.contentBox}>
                                <Image style={styles.imag} source={img} />
                                <View style={styles.content}>
                                    <Text style={styles.subheadText}>{recipe.title}</Text>
                                    <View style={styles.contentText}>
                                        <Text style={styles.subHeading}>Duration: </Text>
                                        <Text>{recipe.duration} minutes</Text>
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
                                        <Text numberOfLines={2} ellipsizeMode="tail">{recipe.description}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: "#fff",
    //     paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    // },
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
        color: "#28c090",
        fontWeight: "bold",
    },
    contentBox: {
        flex: 1,
        borderColor: "orange",
        marginTop: "5%",
        borderWidth: 2,
        width: "90%",
        borderRadius: 12,
        alignSelf: "center",
        height: 160,
        marginBottom: 20,
        paddingBottom: 40,
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
        color: "black",
    },
    content: {
        alignSelf: "baseline",
        flexDirection: "column",
        paddingBottom: 20,
    },
    contentText: {
        alignSelf: "baseline",
        fontSize: 15,
        width: width * 0.5,
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
    signUp: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: 'orange',
        elevation: 2,
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: height * 0.38,
        fontSize: 20,
        borderRadius: 10
    },
});

export default MyRecipeFeed;