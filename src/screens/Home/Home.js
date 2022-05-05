import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { registerFollowerID, postFollowingID, unfollowMasterID, updateFollowersList, getFollowMaster } from 'native-notify';
import axios from 'axios';

import Footer from '../../Footers/GlobalFooter';

export default function Home({ navigation, AppState }) {
    const { 
        indieIDs,
        chosenIndieID,
        setFollowers,
        setFollowCount, 
        following,
        setFollowing } = AppState;

    useIsFocused();

    const handleFollow = async (index) => {
        console.log('indieIDs[index]: ', indieIDs[index]);
        let regFolID = await registerFollowerID(
            indieIDs[index],
            chosenIndieID,
            your-app-id,
            'your-app-token'
        );
        console.log("regFolID: ", regFolID);

        let postFolID = await postFollowingID(
            `${chosenIndieID}`,
            `${indieIDs[index]}`,
            your-app-id,
            'your-app-token'
        );
        console.log("postFolID: ", postFolID);
        
        getFollowMasterInfo();
    }

    const handleUnFollow = async (index) => {
        console.log('indieIDs[index]: ', indieIDs[index]);
        let unFolMasID = await unfollowMasterID(
            indieIDs[index],
            chosenIndieID,
            your-app-id,
            'your-app-token'
        );
        console.log("unFolMasID: ", unFolMasID);

        let upFolList = await updateFollowersList(
            `${chosenIndieID}`,
            `${indieIDs[index]}`,
            your-app-id,
            'your-app-token'
        );
        console.log("upFolList: ", upFolList);

        getFollowMasterInfo();
    }

    const getFollowMasterInfo = async () => {
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

    const handleSend  = () => {
        let username = 'Jack Sparrow';

        axios.post(`https://app.nativenotify.com/api/follow/notification`, {
            masterSubID: `${chosenIndieID}`,
            appId: your-app-id,
            appToken: 'your-app-token',
            title: `${username} just posted something!`,
            message: 'Tap this notification to check it out!',
            pushData: { screenName: 'screen name' }
       });
    }

    return (
        <View style={styles.screen}>
            <View style={styles.body}>
                {/* update the wording and functions and styling based on if the chosenUserID is following these users */}
                <TouchableOpacity 
                    style={following ? following.includes(indieIDs[0]) ? styles.chosenButton : styles.button : styles.button}
                    onPress={() => following ? following.includes(indieIDs[0]) ? handleUnFollow(0) : handleFollow(0) : handleFollow(0)}>
                    <Text>{following ? following.includes(indieIDs[0]) ? 'Unfollow User 1' : 'Follow User 1': 'Follow User 1'}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={following ? following.includes(indieIDs[1]) ? styles.chosenButton : styles.button : styles.button}
                    onPress={() => following ? following.includes(indieIDs[1]) ? handleUnFollow(1) : handleFollow(1) : handleFollow(1)}>
                    <Text>{following ? following.includes(indieIDs[1]) ? 'Unfollow User 2' : 'Follow User 2' : 'Follow User 2'}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={following ? following.includes(indieIDs[2]) ? styles.chosenButton : styles.button : styles.button}
                    onPress={() => following ? following.includes(indieIDs[2]) ? handleUnFollow(2) : handleFollow(2) : handleFollow(2)}>
                    <Text>{following ? following.includes(indieIDs[2]) ? 'Unfollow User 3' : 'Follow User 3' : 'Follow User 3'}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={following ? following.includes(indieIDs[3]) ? styles.chosenButton : styles.button : styles.button}
                    onPress={() => following ? following.includes(indieIDs[3]) ? handleUnFollow(3) : handleFollow(3) : handleFollow(3)}>
                    <Text>{following ? following.includes(indieIDs[3]) ? 'Unfollow User 4' : 'Follow User 4' : 'Follow User 4'}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={following ? following.includes(indieIDs[4]) ? styles.chosenButton : styles.button : styles.button}
                    onPress={() => following ? following.includes(indieIDs[4]) ? handleUnFollow(4) : handleFollow(4) : handleFollow(4)}>
                    <Text>{following ? following.includes(indieIDs[4]) ? 'Unfollow User 5' : 'Follow User 5' : 'Follow User 5'}</Text>
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