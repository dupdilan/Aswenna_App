import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { createStackNavigator } from "react-navigation";

import Weather from '../assets/weather.png';
//Get Width
const { width: WIDTH } = Dimensions.get("window");

//Weather Screen
export default class OnMeScreen extends React.Component {
  static navigationOptions = { header: null, headerMode: 'none' }
  render() {
    return (
      //Weather Screen
      // <View style={styles.container}>
      //   <Text>Weather Screen</Text>
      //   <Text>We have to connect API's and Get Weather Condition</Text>
      // </View>
      
      <View style={styles.container}>    
        <ScrollView>
          <Image source={Weather} style={styles.container} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    width:WIDTH
  },
  ImageBack:{
    // width:380,
  }
});

