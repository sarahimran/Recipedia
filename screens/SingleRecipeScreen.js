import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar,
    View,
    Image,
    Text,
    ScrollView,
    Dimensions
} from 'react-native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from "react-redux";
import API_URL from '../config';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SingleRecipeScreen = ({ route, navigation }) => {
    const windowHeight = Dimensions.get('window').height;
    const [data, setData] = useState([]);
    const token = useSelector((state) => state.login);

    useEffect(() => {
        getRecipeFromApi();
    }, []);

    var id_ = route.params.id;
    var url = `${API_URL}/recipe/`;
    var url_ = url.concat(id_);

    console.log("id",id_);
    console.log(url_);
    const id2 = id_;

    const saveRecipeAPI = async () => {
        try {
            const res = await axios.post(
              `${API_URL}/recipe/save`,
              { id: id2 },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getRecipeFromApi = async () => {
        try {
            const res = await axios.get(
                url_,     
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setData(res.data.body);
        } catch (err) {
            console.log(err);
        }
    };

    console.log("data", data.ingredients);

    const x = () => {
        return data.instructions.map((instruction, index) => {
            return (
                <View style={styles.procedure}>
                    <Text style={styles.stepNo}>{index}.</Text>
                    <Text style={styles.step}>{instruction}</Text>
                </View>
            );
        });
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcon
              name="arrow-back"
              size={20}
              style={styles.headerIcon}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text style={styles.headText}>{data.title}</Text>
        </View>
        <ScrollView>
          <Image
            style={
              (styles.image, { height: windowHeight / 3, width: undefined })
            }
            source={require("../assets/pasta.jpg")}
            resizeMode="cover"
          />
          <Text style={styles.title}>"{data.description}"</Text>
          <View style={styles.info}>
            <View style={styles.timeInfo}>
              <MaterialCommunityIcon
                name="clock-time-nine-outline"
                size={35}
                style={styles.timeIcon}
              />
              <Text style={styles.timeText}>{data.duration} min</Text>
            </View>
            <View style={styles.starInfo}>
              <MaterialCommunityIcon
                name="star"
                size={35}
                style={styles.starIcon}
              />
              <Text style={styles.starText}>{data.rating}</Text>
            </View>
          </View>
          <Text style={styles.ingredientsHeading}>Ingredients:</Text>
          {data.ingredients &&
            data.ingredients.map((ingredient, index) => {
              return (
                <View key={index} style={styles.ingredients}>
                  <Text style={styles.ingredientName}>
                    {ingredient.ingredient.name}
                  </Text>
                  <Text style={styles.ingredientAmount}>
                    {ingredient.amount}
                  </Text>
                </View>
              );
            })}
          <Text style={styles.ingredientsHeading}>Procedure:</Text>
          {data.instructions &&
            data.instructions.map((instruction, index) => {
              return (
                <View key={index} style={styles.procedure}>
                  <Text style={styles.stepNo}>{index + 1}. </Text>
                  <Text style={styles.step}>{instruction}</Text>
                </View>
              );
            })}
         
          <TouchableOpacity
            onPress={() => saveRecipeAPI()}
            style={styles.signUp}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              ADD TO SAVED RECIPES
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    },
    signUp: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#28c090',
        elevation: 2,
        height: 50,
        width: 200,
        top: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        fontSize: 20,
        borderRadius: 10,
    
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
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 15,
        margin: 12,
        color: '#FF8C00',
    },
    text: {
        fontSize: 20,
    },
    info: {
        height: 70,
        borderWidth: 2,
        borderColor: '#eee',
        flexDirection: 'row',
    },
    timeInfo: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: '#eee',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    starInfo: {
        flex: 1,
        borderLeftWidth: 1,
        borderLeftColor: '#eee',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    timeIcon: {
        color: "#aaa",
        fontWeight: "bold",
        marginRight: 10
    },
    starIcon: {
        color: "#aaa",
        fontWeight: "bold",
        marginRight: 10
    },
    timeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#aaa'
    },
    starText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#aaa'
    },
    ingredientsHeading: {
        fontSize: 18,
        marginLeft: 25,
        marginBottom: 10,
        marginTop: 10
    },
    ingredients: {
        fontSize: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ingredientName: {
        marginLeft: 40
    },
    ingredientAmount: {
        marginRight: 70
    },
    procedure: {
        fontSize: 15,
        flexDirection: 'row',
        marginLeft: 25,
        marginRight: 35
    },
});

export default SingleRecipeScreen;