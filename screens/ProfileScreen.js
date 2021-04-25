import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Platform, Pressable } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { useEffect } from 'react';
import axios from 'axios';

function ProfileScreen(props) {

    useEffect(() => {
        console.log("Api call working!");
        getProfileFromApi();
    }, []);

    const getProfileFromApi = () => {
        console.log("Api call working!");
        axios.get(`localhost:5000/api/user/profile`, {
            headers: {
                'Bearer': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwM2I3YWMxYTg2ZmIwMmUwOThjMTJiMSIsImlhdCI6MTYxNzg5ODYzMCwiZXhwIjoxNjE3OTAwNDMwfQ.SGSIGQn5Qc4PstNenBKmuQBM7IRKZndoYTzfpC-l_ok'
            }
        }
        ).then((res) => {
            console.log(res);
        });
    }

    const editPasswordHandler = () => {
        getProfileFromApi();
        props.navigation.navigate('EditPassword');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <MaterialIcon name='arrow-back' size={20} style={styles.headerIcon} />
                <Text style={styles.headText}>Settings</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.subHeading}>
                    <Text style={styles.subheadText}>Profile</Text>
                </View>
                <View style={styles.contentBox}>
                    <SimpleLineIcon name='user' size={20} style={styles.icon} />
                    <View style={{ flex: 4 }}>
                        <Text style={styles.field}>Name</Text>
                        <Text style={styles.info}>Sidra Aziz</Text>
                    </View>
                    <MaterialIcon name='edit' size={18} style={styles.editIcon} />
                </View>
                <View style={styles.contentBox}>
                    <Fontisto name='email' size={20} style={styles.icon} />
                    <View style={{ flex: 5 }}>
                        <Text style={styles.field}>Email</Text>
                        <Text style={styles.info}>sidraziz98@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.contentBox}>
                    <SimpleLineIcon name='lock' size={20} style={styles.icon} />
                    <View style={{ flex: 4 }}>
                        <Text style={styles.field}>Password</Text>
                        <Text style={styles.info}>******</Text>
                    </View>
                    {/* <Pressable onPress={editPasswordHandler}> */}
                    <MaterialIcon name='edit' size={18} style={styles.editIcon} onPress={editPasswordHandler} />
                    {/* </Pressable> */}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#f43e57',
        width: '100%',
        height: 55,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 15
    },
    headerIcon: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        paddingRight: 10
    },
    headText: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
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
        borderBottomColor: '#eee',
    },
    subheadText: {
        fontSize: 17,
        color: '#f43e57'
    },
    contentBox: {
        marginBottom: 12,
        paddingBottom: 12,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomColor: '#eee',
    },
    icon: {
        flex: 0.8,
        color: 'grey',
    },
    content: {
        flex: 5,
    },
    field: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'orange'
    },
    info: {
        fontSize: 15,
    },
    editIcon: {
        flex: 1,
        color: 'lightgrey',
    },
    pwdContent: {
        flex: 4,
    }
});

export default ProfileScreen;