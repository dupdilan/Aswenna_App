import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {Block, Text} from '../components';
import { LineChart, Path } from 'react-native-svg-charts';
import { Line } from "react-native-svg";
import * as shape from 'd3-shape';
import { createStackNavigator } from "react-navigation";
import * as Font from 'expo-font';
import * as theme from "../theme";
import * as mocks from "../mocks";

import PriceList from '../assets/pricelist.png';
//Get Width
const { width: WIDTH } = Dimensions.get("window");
//Price Screen
export default class OnMeScreen extends React.Component {

 
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Price Screen</Text>
      // </View>
      <View style={styles.container}>    
        <ScrollView>
          <Image source={PriceList} style={styles.container} />
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
});
      
