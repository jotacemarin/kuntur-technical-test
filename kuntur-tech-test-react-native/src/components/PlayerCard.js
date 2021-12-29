/** Depencies */
import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';

/**
 * item: is the iterated element in PlayerList component
 * onPress: event whitch open PlayerView component
 * 
 * In this component i use TouchableOpacity to add a nice effect
 * @param {*} : item onPress
 */
const PlayerCard = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
            <Image source={{uri: item.thumbnail}} style={styles.contentOne} />
            <View style={styles.contentTwo}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textAge}>Age: {item.age}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default PlayerCard;

/** " Styles " */
const styles = StyleSheet.create({
    card: {
        flex: 1, 
        flexDirection: 'row',
        margin: 4,
        borderWidth: 0.5,
        backgroundColor: 'white',
        borderColor: '#d6d7da',
    },
    contentOne: { 
        width: 100, 
        height: 100 
    },
    contentTwo: {
        flexDirection: 'column',
        marginLeft: 8
    },
    textName: {
        fontSize: 18
    },
    textAge:{
        //textAlignVertical: 'bottom',
        lineHeight: 75
    }

});