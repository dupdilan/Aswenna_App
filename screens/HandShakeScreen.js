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
import { Item } from "native-base";
import { Card } from "native-base";

//loan Screen
export default class OnMeScreen extends React.Component {
  static navigationOptions = { header: null, headerMode: 'none' }

  state = {
      loans : [
        {'name':'Loan 1','id':1},
        {'name':'Loan 2','id':2},
        {'name':'Loan 3','id':3},
        {'name':'Loan 4','id':4},
        {'name':'Loan 5','id':5},
        {'name':'Loan 6','id':6},
        {'name':'Loan 7','id':7},
      ]
  }
  render() {
    return (
      //Loans Screen 
      <View>
      <ScrollView>
        <Card title='test'>
         {
            this.state.loans.map((item, index) => (
              
               <View key = {item.id} style={styles.item}>
                    <View style={styles.details}>
                        <Text style={{fontWeight:'bold',fontSize:20,}}>{item.name}</Text>
                    </View> 
                    
               </View>
            ))
         }
         </Card>
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
  item: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#b2bec3',
    borderWidth: 1,
    backgroundColor: '#1abc9c',
    height:200,
    borderRadius:10,
 },  
});

