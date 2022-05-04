import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

export default function GlobalFooter({ navigation, AppState }) {
    const { chosenIndieID, followCount } = AppState;

    return (
        <View style={styles.footer}>
            <Icon 
                name={'home'} 
                size={27} 
                color={"#141414"} 
                onPress={() => navigation.navigate('Home')} 
            />
            <Text>{chosenIndieID} - {followCount ? followCount : null}</Text>
            <Icon 
                name={'user'} 
                size={27} 
                color={"#141414"} 
                onPress={() => navigation.navigate('Login')} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
    }
});