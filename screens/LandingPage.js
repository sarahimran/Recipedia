import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TextInput, Button, TouchableOpacity, SafeAreaView} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function LandingPage({navigation}) {{

    
    return(
      <SafeAreaView style = {{backgroundColor: 'white', flex: 1}}>
       {/* <LinearGradient colors={['peachpuff', 'orange', '#ff4c4Imc']} style = {styles.container}> */}
       <View style = {{backgroundColor: 'orange', width: width, height: height*0.5, position: 'absolute', borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
      
       </View>
       <Image source = {require('../assets/smallbowl1.png')}
         style={styles.smallBowl}/>
         <Image source = {require('../assets/smallbowl2.png')}
         style={styles.smallBowl2}/>
          <Image source = {require('../assets/smallbowl3.png')}
         style={styles.smallBowl3}/>
         <Image source = {require('../assets/bigbowl.png')}
         style={styles.bigBowl}/>
         <View>
         <Text style = {styles.tagline}>Unlock Thousands of Recipes</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style = {styles.signUp} >
          <Text style = {{fontWeight: 'bold'}}>SIGN UP</Text>
        </TouchableOpacity>
         </View>
      {/* </LinearGradient> */}

</SafeAreaView>
    );
}

}
  const styles = StyleSheet.create({
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
        top: height*0.38,
        fontSize: 20,
        borderRadius: 10
       
        
    },
    tagline: {
      top: height/4.2,
      position: 'absolute',
      alignSelf: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
      fontStyle: 'italic',
      width: 280,
      textAlign: 'center'
      
    },
    smallBowl3: {
      width: '35%',
      height: '25%',
      top: (height*0.19),
      position: 'absolute',
      right: (width/25)
     },
    smallBowl2: {
      width: '40%',
      height: '40%',
      position: 'absolute',
      alignSelf:'center',
    
     },
    smallBowl: {
      width: '30%',
      height: '20%',
      top: (height*0.2),
      position: 'absolute',
      left: (width/20)
     },
    bigBowl: {
      width: '70%',
      height: '50%',
      alignSelf: 'center',
      top: height*0.25
    },

  });


