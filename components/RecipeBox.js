import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements';
import img from "../assets/pasta.jpg";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function RecipeBox(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate("singleRecipe", { id: props.id })}>
            <View style={styles.box}>
                <Image style={styles.image} source={img} />
                <View style={styles.contentBox}>
                    <Text style={styles.heading}>{props.title}</Text>
                    <Text style={{ fontSize: 13, width: 200 }} numberOfLines={2}>{props.description} </Text>
                    <View style={styles.subcontentBox}>
                        <View style={styles.timeBox}>
                            <Feather name="clock" style={{ fontSize: 20, color: '#0d5588' }} />
                            <Text>{" "}{props.duration}{" min"}</Text>
                        </View>
                        <Rating
                            imageSize={15}
                            style={styles.ratingbox}
                            readonly
                            startingValue={props.rating}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        borderColor: "#E0E0E0",
        borderWidth: 2,
        width: "90%",
        borderRadius: 12,
        alignSelf: "center",
        height: 120,
        marginBottom: 10,
        paddingLeft: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        flex: 2,
        height: 85,
        width: '100%',
        marginRight: 10,
    },
    contentBox: {
        flex: 5,
        flexDirection: "column",
    },
    heading: {
        fontSize: 17,
        color: "#0d5588",
    },
    subcontentBox: {
        flexDirection: 'row',
        marginTop: 5,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    timeBox: {
        flexDirection: "row",
    },
});

export default RecipeBox;