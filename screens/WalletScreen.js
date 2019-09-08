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
  KeyboardAvoidingView
} from "react-native";
import { createStackNavigator } from "react-navigation";

//Weather Screen
export default class OnMeScreen extends React.Component {
  static navigationOptions = { header: null, headerMode: 'none' }
  render() {
    return (
      //Weather Screen
      <View style={styles.container}>
        <Text>Weather Screen</Text>
        <Text>We have to connect API's and Get Weather Condition</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

