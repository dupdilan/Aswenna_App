import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,ScrollView
} from "react-native";
import { createStackNavigator } from "react-navigation";

import Avatart from '../assets/avatar.png';
//Logout Screen
export default class LogoutScreen extends React.Component {
  static navigationOptions = { header: null, headerMode: 'none' }
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Logout Screen</Text>
      //   <Button
      //     title="Log Out"
      //     onPress={() => this.props.navigation.navigate("Auth")}
      //   />
      // </View>
      <View>
        {/* <View style={styles.upDiv}>
          <Text style={styles.upText}>Profile Details</Text>
          <View style={styles.img}><Image source={Avatart} /></View>
        </View>

        <View style={styles.midDiv}>
          <Text style={styles.midText}>Name: Dilan</Text>
          <Text style={styles.midText}>NIC: 123456789v</Text>
          <Text style={styles.midText}>Location: Kelaniya</Text>
          <Text style={styles.midText}>Account Type: Farmer</Text>
        </View>

        <View style={styles.botDiv}>
        <Button
          title="Log Out"
          onPress={() => this.props.navigation.navigate("Auth")}
        />
        </View> */}
        <ScrollView>
        <View style={styles.header}></View>
          <Image style={styles.avatar} source={Avatart}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Dilan Upashantha</Text>
              <Text style={styles.info}>Seller</Text>
              
              <Text style={styles.description}>NIC : 123456789v 
                                             {'\n'} Location : Kelaniya
                                             {'\n'} Address : Hanguranketha
                                             {'\n'} Contact No : 076-7685200
                                             
              </Text>

              <View style={styles.buttonContainer}> 
              <TouchableOpacity
                  
              >
              <Text>New Post</Text> 
              </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer}> 
              <TouchableOpacity
                  
              >
              <Text>New Advertisment</Text> 
              </TouchableOpacity>
              </View>



              <View style={styles.buttonContainer}> 
              <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate("Auth")}
              >
              <Text>Log Out</Text> 
              </TouchableOpacity>
              </View>

            </View>     
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:18,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
//Nothing
