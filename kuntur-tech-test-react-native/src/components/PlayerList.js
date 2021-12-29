/** Depéndencies */
import React from 'react';
import { 
  FlatList, 
  ActivityIndicator, 
  Text, 
  View  
} from 'react-native';
/** Components */
import PLayerCard from './PlayerCard';

const BASE_URL = 'http://www.mocky.io/v2/5aa722ea2f0000e8048ea463';

export default class PlayerList extends React.Component {

  static navigationOptions={
    title: 'List Players'
  };

  constructor(props){
    super(props);
    this.state={ 
      isLoading: true
    }
  }

  /**
   * This function execute when component is loaded
   */
  componentDidMount(){
    this.getPLayers();
  }

  /**
   * This function load elements from backend
   */
  getPLayers = () =>{
    return fetch(BASE_URL)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  } 

  /**
   * Funcion que sirve para navegar hacia el componente viewPlayer
   * Function is executed when an element is pressed
   */
  viewPlayer = (item) => {
    this.props.navigation.navigate(
      'PlayerView', 
      {
        player: item
      });
  }

  /**
   * Build the escene of this component
   * 
   * In firts code block render a component ActivityIndicator while load the data in app from backend
   * 
   * In last code block render a FlatList component with many PlayerCards component with the data received from backend, 
   * when user touch any PlayerCard it does execute function viewPlayer 
   */
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            <PLayerCard item={item} onPress={() => { this.viewPlayer(item)}} />
          )}
          keyExtractor = { (item, index) => index.toString() }
        />
      </View>
    );
  }
}