import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Text, View, Image, StyleSheet, Dimensions, TextInput, Button, TouchableOpacity, SafeAreaView } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function LandingPage({ navigation }) {
  const [shadow, setShadow] = useState(true);
  {
    return (
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ backgroundColor: 'orange', width: width, height: height * 0.5, position: 'absolute', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
        </View>
        <Image source={require('../assets/smallbowl1.png')}
          style={styles.smallBowl} />
        <Image source={require('../assets/smallbowl2.png')}
          style={styles.smallBowl2} />
        <Image source={require('../assets/smallbowl3.png')}
          style={styles.smallBowl3} />
        <Image source={require('../assets/bigbowl.png')}
          style={styles.bigBowl} />
        <View>
          <Text style={styles.heading}>Recipedia</Text>
          <Text style={styles.tagline}>Unlock Thousands of Recipes</Text>
          <TouchableOpacity
            onPress={() => {
              setShadow(false);
              navigation.navigate("SignIn")
            }}
            style={[
              styles.signin,
              {
                elevation: Platform.OS == "android" && shadow ? 4 : 0,
                shadowOffset: {
                  height: shadow ? 1 : 0,
                  width: shadow ? 1 : 0,
                },
              },
            ]} >
            <Text style={{ color: "white", fontSize: 25 }}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  signin: {
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
    height: 50,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  heading: {
    marginTop: height / 4.8,
    fontWeight: "bold",
    fontSize: 38,
    alignSelf: "center",
    color: "#000000",
  },
  tagline: {
    // top: height / 4.2,
    // marginTop: height / 3.4,
    // position: 'absolute',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#aaa',
    fontStyle: 'italic',
    width: 300,
    textAlign: 'center'
  },
  smallBowl3: {
    width: '35%',
    height: '25%',
    top: (height * 0.19),
    position: 'absolute',
    right: (width / 25)
  },
  smallBowl2: {
    width: '40%',
    height: '40%',
    position: 'absolute',
    alignSelf: 'center',

  },
  smallBowl: {
    width: '30%',
    height: '20%',
    top: (height * 0.2),
    position: 'absolute',
    left: (width / 20)
  },
  bigBowl: {
    width: '70%',
    height: '50%',
    alignSelf: 'center',
    top: height * 0.25
  },
});


