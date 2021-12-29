/** Dependencies */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

export default class PlayerView extends Component {
    
    /** Title of navbar */
    static navigationOptions = {
        title: 'Detail'
    };

    /**
     * I get the data from the other component that sends them to me when they play a playercard
     * 
     * Off topic:
     * For me, I'm just getting to know this framework, I've related props with NavParams of NavController of Ionic V3
     */
    constructor(props) {
        super(props);
        this.state = {
            player: this.props.navigation.state.params.player
        }
    }

    /**
     * In this component i use a ScrollView component for the large amount of information that the player has
     */
    render() {
        const player = this.state.player;
        return (
            <ScrollView>
                <Image  style={styles.backgroundImage} source={{ uri: player.thumbnail }}/>
                <View style={styles.title}>
                    <Text style={styles.name}>
                        {player.name}
                    </Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.sub}>
                        <Text style={styles.item}>Age:</Text> 
                        <Text style={styles.itemDescription}>{player.age}</Text>
                    </View>
                    <View style={styles.sub}>
                        <Text style={styles.item}>Hair Color:</Text>
                        <Text style={styles.itemDescription}>{player.hair_color}</Text>
                    </View>
                    <View style={styles.sub}>
                        <Text style={styles.item}>Weight:</Text>
                        <Text style={styles.itemDescription}>{player.weight}</Text>
                    </View>
                    <View style={styles.sub}>
                        <Text style={styles.item}>Height:</Text>
                        <Text style={styles.itemDescription}>{player.height}</Text>
                    </View>
                    <View style={styles.sub}>
                        <Text style={styles.item}>Professions:</Text>
                    </View>
                    <View style={styles.listMap}>
                        {player.professions.map((profession, index) => 
                            <Text key={index}>{profession}</Text>
                        )}
                    </View>
                </View>
                
            </ScrollView>
        );
    }
}

/** " Styles " */

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: 250
    },
    title: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop:10,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    name: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'

    },
    container: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    sub: {
        flexDirection: 'row',
    },
    item: {
        fontWeight: 'bold',
        fontSize: 16,
        width: '50%',
    },
    itemDescription: {
        width: '50%',
        textAlign: 'right'
    },
    listMap: {
        marginLeft: 50
    }
});
