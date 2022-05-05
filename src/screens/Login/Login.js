import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { registerIndieID, registerFollowMasterID, getFollowMaster } from 'native-notify';

import Footer from '../../Footers/GlobalFooter';

export default function Login({ navigation, AppState }) {
    const { 
        indieIDs, 
        chosenIndieID, 
        setChosenIndieID, 
        setFollowers, 
        setFollowCount, 
        setFollowing } = AppState;
    
    useEffect(() => {
        if(chosenIndieID) {
            getFollowMasterInfo();
        }
    }, [chosenIndieID])

    const handleLogin = async (index) => {
        registerIndieID(`${indieIDs[index]}`, your-app-id, 'your-app-token');

        let regFolMasID = await registerFollowMasterID(`${indieIDs[index]}`, your-app-id, 'your-app-token');
        console.log('regFolMasID: ', regFolMasID);

        setChosenIndieID(indieIDs[index]);
    }

    const getFollowMasterInfo = async () => {
        console.log('chosenIndieID: ', chosenIndieID);
        let followMasterData = await getFollowMaster(
            `${chosenIndieID}`,
            your-app-id,
            'your-app-token'
        );

        console.log("followMasterData: ", followMasterData);
        setFollowers(followMasterData.follower_indie_ids);
        setFollowCount(followMasterData.follower_count);
        setFollowing(followMasterData.following_indie_ids);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.body}>
                <TouchableOpacity 
                    style={chosenIndieID === indieIDs[0] ? styles.chosenButton : styles.button}
                    onPress={() => handleLogin(0)}>
                    <Text>User 1 Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={chosenIndieID === indieIDs[1] ? styles.chosenButton : styles.button}
                    onPress={() => handleLogin(1)}>
                    <Text>User 2 Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={chosenIndieID === indieIDs[2] ? styles.chosenButton : styles.button}
                    onPress={() => handleLogin(2)}>
                    <Text>User 3 Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={chosenIndieID === indieIDs[3] ? styles.chosenButton : styles.button}
                    onPress={() => handleLogin(3)}>
                    <Text>User 4 Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={chosenIndieID === indieIDs[4] ? styles.chosenButton : styles.button}
                    onPress={() => handleLogin(4)}>
                    <Text>User 5 Login</Text>
                </TouchableOpacity>
            </View>
            <Footer navigation={navigation} AppState={AppState} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    body: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '80%',
        padding: 20,
        borderWidth: 1,
        margin: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 0.75,
        borderColor: '#d8d8d8',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    chosenButton: {
        width: '80%',
        padding: 20,
        borderWidth: 1,
        margin: 20,
        alignItems: 'center',
        backgroundColor: '#3675d4',
        borderRadius: 8,
        borderWidth: 0.75,
        borderColor: '#d8d8d8',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    }
});