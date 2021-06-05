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
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import API_URL from '../config';
import { Rating } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/core';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SingleRecipeScreen = ({ route, navigation }) => {
  const windowHeight = Dimensions.get('window').height;
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(0);
  const [recipeRating, setRecipeRating] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const token = useSelector((state) => state.login);
  const isFocused = useIsFocused();
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    getRecipeFromApi();
  }, [isFocused]);

  const rateRecipeAPI = async (r) => {
    try {
    const res = await axios.post(
      `${API_URL}/rate/${data._id}`, { rating: r },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );
      if (res.data.header.error == 0)
        setRecipeRating(res.data.body.rating);
    } catch (err) {
      console.log(err.message);
    }
  };

  const favoriteRecipeAPI = async () => {
    try {
      const res = await axios.post(
        `${API_URL}/favorite/${data._id}`, {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.header.error == 0)
        setFavorite(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  const unfavoriteRecipeAPI = async () => {
    try {
      const res = await axios.delete(
        `${API_URL}/favorite/${data._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.header.error == 0)
        setFavorite(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getRecipeFromApi = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/recipe/${route.params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.header.error == 0) {
        setData(res.data.body);
        setRecipeRating(res.data.body.rating);
      }
      const res2 = await axios.get(
        `${API_URL}/favorite/${route.params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res2.data.header.error == 0)
        setFavorite(true);
      const res3 = await axios.get(
        `${API_URL}/rate/${route.params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res3.data.header.error == 0)
        setRating(res3.data.body.rating);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcon
            name="arrow-back"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headText}>{data.title}</Text>
        <TouchableOpacity
          onPress={favorite ?
            () => { unfavoriteRecipeAPI() }
            : () => { favoriteRecipeAPI() }}>
          <MaterialIcon
            name={favorite ? "bookmark" : "bookmark-border"}
            style={styles.bookmarkIcon}
          />
        </TouchableOpacity>
      </View>
      {isLoading ? <ActivityIndicator size="large" color="#0d5588" style={{marginTop: 20}}/> :
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Image
          style={
            (styles.image, { height: windowHeight / 3, width: undefined })
          }
          source={{ uri: data.image }}
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
            <Text style={styles.starText}>{recipeRating}</Text>
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
        <View style={styles.ratingBox}>
          <Text style={styles.ingredientsHeading}>Your Rating:</Text>
          {data._id && <Rating
            imageSize={28}
            startingValue={rating}
            minValue={1}
            style={{ marginRight: 55 }}
            onFinishRating={r => {
              setRating(r);
              rateRecipeAPI(r);
            }}
          />}
        </View>
        <View style={{ height: 20 }} />
      </ScrollView>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#28c090",
    width: "100%",
    height: 55,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15
  },
  headerIcon: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  headText: {
    fontFamily: "Roboto",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    position: 'absolute',
    marginLeft: 65
  },
  bookmarkIcon: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 30,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 15,
    margin: 12,
    color: '#eca728',
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
    color: "#28c090",
    marginRight: 10
  },
  starIcon: {
    color: "#28c090",
    marginRight: 10
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28c090'
  },
  starText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28c090'
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
    marginRight: 40
  },
  procedure: {
    fontSize: 15,
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 40
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: '#eee',
    borderTopWidth: 2,
    marginTop: 10,
    justifyContent: 'space-between'
  }
});

export default SingleRecipeScreen;