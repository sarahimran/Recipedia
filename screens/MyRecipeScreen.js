import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import img from "../assets/pasta.jpg";
import { Rating } from "react-native-elements";
import API_URL from '../config';
import Header from "../components/Header";
import RecipeBox from "../components/RecipeBox";

const MyRecipeScreen = ({ navigation }) => {
  const [arr, setarr] = useState([]);
  const token = useSelector((state) => state.login);

  useEffect(() => {
    getRecipesFromApi();
  }, []);

  const getRecipesFromApi = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/recipe/myrecipes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setarr(res.data.body);
    } catch (err) {
      console.log(err);
    }
  };

  // const Onebox = (props) => {
  //   return (
  //     <TouchableOpacity onPress={() => { navigation.navigate("singleRecipe", { id: props.idr }) }}>
  //       <View style={styles.contentBox}>
  //         <Image style={styles.imag} source={img} />
  //         <View style={styles.content}>
  //           <Text style={styles.subheadText}>{props.title}</Text>
  //           <View style={styles.contentText}>
  //             <Text style={styles.subHeading}>Duration: </Text>
  //             <Text>{props.duration}</Text>
  //           </View>
  //           <View style={styles.ratingbox}>
  //             {setrat(props.rating)}
  //             <Text style={styles.subHeading}>Rating: </Text>
  //             <Rating
  //               imageSize={15}
  //               readonly
  //               startingValue={rat}
  //             />
  //           </View>
  //           <View style={styles.contentText}>
  //             <Text style={styles.subHeading}>Description: </Text>
  //             <Text>{props.description.substring(0, 20)} </Text>
  //           </View>
  //           <Text>{props.description.substring(20, 40)}... </Text>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  const x = () => {
    return arr.map((a) => {
      return (
        <RecipeBox
          key={a._id}
          title={a.title}
          description={a.description}
          duration={a.duration}
          rating={a.rating}
          navigation={navigation}
          id={a._id}
        />
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={"My Recipes"}></Header>
      {arr !== undefined ? <ScrollView>
        <View style={{ marginTop: 10 }}>{x()}</View>
      </ScrollView> : <Text
        style={{ color: "#FF0000", alignSelf: "center", margin: "5%" }}
      >
        No recipes to show!
      </Text>}
    </SafeAreaView>
  );
};

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
    borderColor: "#E0E0E0",
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

export default MyRecipeScreen;
