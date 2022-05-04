import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { registerFollowerID, postFollowingID } from 'native-notify';
import axios from 'axios';

import Footer from '../../Footers/GlobalFooter';

export default function Home({ navigation, AppState }) {
    const { indieIDs, chosenIndieID } = AppState;

    useIsFocused();

    const handleFollow = (index) => {
        registerFollowerID(
            indieIDs[index],
            chosenIndieID,
            2594,
            'dUuUQOZtCvfWUCDrvQCSZa'
        );

        postFollowingID(
            `${chosenIndieID}`,
            `${indieIDs[index]}`,
            2594,
            'dUuUQOZtCvfWUCDrvQCSZa'
        );
    }

    const handleSend  = () => {
        let username = 'Jack Sparrow';

        axios.post(`https://app.nativenotify.com/api/follow/notification`, {
            masterSubID: `${chosenIndieID}`,
            appId: 2594,
            appToken: 'dUuUQOZtCvfWUCDrvQCSZa',
            title: `${username} just posted something!`,
            message: 'Tap this notification to check it out!',
            pushData: { screenName: 'screen name' }
       });
    }

    return (
        <View style={styles.screen}>
            <View style={styles.body}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handleFollow(0)}>
                    <Text>Follow User 1</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handleFollow(1)}>
                    <Text>Follow User 2</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handleFollow(2)}>
                    <Text>Follow User 3</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handleFollow(3)}>
                    <Text>Follow User 4</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handleFollow(4)}>
                    <Text>Follow User 5</Text>
                </TouchableOpacity>

                <View style={styles.sendButton}>
                    <Button color={'red'} title={'Post Something'} onPress={handleSend} />
                </View>
            
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
    },
    sendButton: {
        width: '80%',
        marginTop: 60
    }
});