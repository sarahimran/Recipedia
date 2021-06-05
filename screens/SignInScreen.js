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
  StatusBar,
  Platform,
  Pressable
} from "react-native";
import img from "../assets/signinimager.png";
import { setUserInfo, setloginInfo } from "../src/action/index";
import { useDispatch } from "react-redux";
import API_URL from '../config';

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('sidraziz98@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [warning, setWarning] = useState("");
  let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  const [shadow, setShadow] = useState(true);
  const fetchUser = async () => {
    try {
      const res = await axios.post(
        `${API_URL}/user/login`,
        {
          email,
          password,
        }
      );
      if (res.data.header.error == 0) {
        dispatch(setloginInfo(res.data.body.token));
        dispatch(
          setUserInfo({
            firstName: res.data.body.firstName,
            lastName: res.data.body.lastName,
            email: res.data.body.email,
          })
        );
        navigation.navigate("MyRecipeFeed");
      }else{
        setWarning(res.data.header.message);
      }
    } catch (err) {
      setWarning(JSON.stringify(err.message));
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground source={img} style={styles.image}>
          <Text style={styles.logo}>SIGN IN</Text>
        </ImageBackground>
        <Text
          style={{ color: "#FF0000", alignSelf: "center", marginTop: "13%" }}
        >
          {warning}
        </Text>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCompleteType="email"
          value={email}
          placeholderTextColor="#808080"
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="******"
          placeholderTextColor="#808080"
          value={password}
          onChangeText={(password) => setPassword(password)}
        ></TextInput>
        <View style={{ alignSelf: "center" }}>
          <Pressable onPressOut={() => setShadow(true)}>
            <Text
              style={[
                styles.btn,
                {
                  elevation: Platform.OS == "android" && shadow ? 4 : 0,
                  shadowOffset: {
                    height: shadow ? 1 : 0,
                    width: shadow ? 1 : 0,
                  },
                },
              ]}
              onPress={(x) => {
                setWarning("");
                setShadow(false);
                if (password === "" || email === "") {
                  setWarning("incomplete details!");
                } else if (reg.test(email) === false) {
                  setWarning("invalid email");
                } else {
                  fetchUser();
                }
              }}
            >{" "}SUBMIT{" "}
            </Text>
          </Pressable>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.link}>Don't have an account?...Sign Up</Text>
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
    maxHeight: "35%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    marginTop: "90%",
    marginBottom: "10%",
    fontWeight: "400",
    fontSize: 38,
    alignSelf: "center",
    color: "#000000",
  },
  text: {
    marginLeft: "15%",
    fontSize: 22,
    alignItems: "flex-start",
    marginBottom: 5,
    color: "#0d5588",
  },
  input: {
    alignSelf: "center",
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: "#F5F5F5",
    marginBottom: 10,
    width: "70%",
    height: "7%",
    borderRadius: 12,
  },
  btn: {
    fontSize: 25,
    backgroundColor: "#28c090",
    marginTop: "10%",
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
    marginTop: "3%",
    alignSelf: "flex-start",
    marginLeft: "15%",
    color: "#0000FF",
  },
});

export default SignInScreen;