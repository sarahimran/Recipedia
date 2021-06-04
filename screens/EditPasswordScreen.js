import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  Pressable,
  TextInput,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import axios from "axios";
import { useSelector } from "react-redux";
import API_URL from '../config';
import { Keyboard } from "react-native";

function EditPasswordScreen({ navigation }) {
  const token = useSelector((state) => state.login);
  const [oldpassword, setoldPassword] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [shadow, setShadow] = useState(true);
  const [warning, setWarning] = useState("");

  const editPasswordWithApi = async () => {
    console.log("Api call working!");
    try {
      const res = await axios.put(`${API_URL}/user/profile`,
        {
          oldPassword: oldpassword,
          newPassword: newpassword,
        }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setWarning(res.data.header.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcon
          name="arrow-back"
          size={20}
          style={styles.headerIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headText}>Edit Password</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.subHeading}>
          <Text style={styles.subheadText}>Change Password</Text>
        </View>
        {warning.length > 0 && <Text
          style={{ color: "#FF0000", alignSelf: "center", marginBottom: "5%" }}
        >
          {warning}
        </Text>}
        <View style={styles.contentBox}>
          <Text style={styles.field}>Old password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="******"
            placeholderTextColor="#808080"
            onChangeText={(oldpassword) => setoldPassword(oldpassword)}
          ></TextInput>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.field}>New Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="******"
            placeholderTextColor="#808080"
            onChangeText={(newpassword) => setnewPassword(newpassword)}
          ></TextInput>
        </View>
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
              Keyboard.dismiss();
              setWarning("");
              setShadow(false);
              if (oldpassword === "" || newpassword === "") {
                setWarning("incomplete details!");
              } else if (newpassword.length < 8) {
                setWarning("password too short enter atleast 8 characters");
              }
              else
                editPasswordWithApi();
            }}
          >
            {" "}SUBMIT{" "}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: '100%',
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
    fontFamily: "Roboto",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15
  },
  body: {
    paddingTop: 20,
  },
  subHeading: {
    paddingLeft: 20,
    paddingBottom: 30,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomColor: "#eee",
  },
  subheadText: {
    fontSize: 17,
    color: "#0d5588",
  },
  contentBox: {
    marginBottom: 12,
    paddingBottom: 12,
    paddingLeft: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  field: {
    fontSize: 15,
    fontWeight: "bold",
    color: "orange",
    width: 90,
    marginRight: 20
  },
  input: {
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 8,
    width: 180,
    height: 40,
    paddingLeft: 10,
    textAlignVertical: 'center'
  },
  btn: {
    fontSize: 20,
    backgroundColor: "#28c090",
    marginTop: "5%",
    marginBottom: "5%",
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
    alignSelf: "center",
  },
});

export default EditPasswordScreen;