import axios from "axios";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    View,
    ImageBackground,
    ScrollView,
    RefreshControl,
    Platform,
    StatusBar
} from "react-native";
import { useDispatch } from "react-redux";
import img from "../assets/signinimager.png";
import { setUserInfo, setloginInfo } from "../src/action/index";
import API_URL from '../config';

const SignUpScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmedPassword] = useState("");
    const [warning, setWarning] = useState("");

    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    const insertUser = async () => {
        try {
            const [firstName, lastName] = name.split(" ");
            const res = await axios.post(`${API_URL}/user/signup`,
                {
                    firstName,
                    lastName,
                    email,
                    password
                }
            );
            console.log("object", res.data);
            if (res.data.header.error == 0) {
                dispatch(setloginInfo(res.data.body.token));
                dispatch(
                    setUserInfo({
                        name: res.data.body.firstName + " " + res.data.body.lastName,
                        email: res.data.body.email,
                    })
                );
                navigation.navigate("MyRecipeFeed");
            } else {
                setWarning(res.data.header.message);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageBackground source={img} style={styles.image}>
                    <Text style={styles.logo}>SIGN UP</Text>
                </ImageBackground>
                <Text
                    style={{ color: "#FF0000", alignSelf: "center", marginTop: "13%", marginBottom:'2%' }}
                >{warning}
                </Text>
                <Text style={styles.text}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#808080"
                    placeholder="Name"
                    onChangeText={(name) => {
                        setName(name);
                    }}
                ></TextInput>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCompleteType="email"
                    placeholderTextColor="#808080"
                    onChangeText={(email) => {
                        setEmail(email);
                    }}
                ></TextInput>
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="******"
                    placeholderTextColor="#808080"
                    onChangeText={(password) => setPassword(password)}
                ></TextInput>
                <Text style={styles.text}>Confirm password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="******"
                    placeholderTextColor="#808080"
                    onChangeText={(Confirmpassword) =>
                        setConfirmedPassword(Confirmpassword)
                    }
                ></TextInput>
                <View style={{ alignSelf: "center" }}>
                    <TouchableOpacity>
                        <Text
                            style={styles.btn}
                            onPress={(x) => {
                                setWarning("");
                                if (
                                    name === "" ||
                                    password === "" ||
                                    email === "" ||
                                    Confirmpassword === ""
                                ) {
                                    setWarning("incomplete details!");
                                } else if (reg.test(email) === false)
                                    setWarning("invalid email");
                                else if (Confirmpassword != password)
                                    setWarning("passwords do not match!");
                                else if (password.length < 8)
                                    setWarning("password too short enter atleast 8 digits!");
                                else {
                                    insertUser();
                                }
                            }}
                        >
                            {" "}SUBMIT{" "}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.link}>Already have an account?...Sign in</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    },
    image: {
        flex: 1,
        maxHeight: "30%",
        resizeMode: "cover",
        justifyContent: "center",
    },
    logo: {
        marginTop: "90%",
        marginBottom: "13%",
        fontWeight: "400",
        fontSize: 38,
        alignSelf: "center",
        color: "#000000",
    },
    text: {
        marginLeft: "15%",
        fontSize: 18,
        alignItems: "flex-start",
        marginBottom: 3,
        color: "#0d5588",
    },
    input: {
        alignSelf: "center",
        paddingLeft: 15,
        borderWidth: 2,
        borderColor: "#F5F5F5",
        marginBottom: 10,
        width: "70%",
        height: "5%",
        borderRadius: 12,
    },
    btn: {
        fontSize: 25,
        backgroundColor: "#28c090",
        marginTop: "8%",
        borderWidth: 5,
        borderTopWidth: 5,
        borderColor: "#28c090",
        color: "#FFFFFF",
        borderRadius: 12,
        textAlign: "center",
        textAlignVertical: "center",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    link: {
        alignSelf: "flex-start",
        marginLeft: "15%",
        color: "#0000FF",
        marginTop: "3%",
    },
});

export default SignUpScreen;