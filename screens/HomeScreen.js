import React from "react";
import { ScrollView ,TouchableOpacity, TouchableWithoutFeedback, FlatList, StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import OnMeScreen from "./OnMeScreen";
import WalletScreen from "./WalletScreen";
import HandShakeScreen from "./HandShakeScreen";
import LogoutScreen from "./LogoutScreen";
import { Card } from "native-base";


//Home Screen

const { height, width } = Dimensions.get('screen');

export class HomeScreen extends React.Component {
  static navigationOptions = { header: null, headerMode: "none" };
  state = {
    posts: [
       {'title':'POST 1','author':'Thilina','unit_price':90,'qty':10,'catagoty':'Vegitable','name': 'Tomoto', 'id': 1,},
       {'title':'POST 2','author':'Dilshan','unit_price':10,'qty':8,'catagoty':'Fruit','name': 'Mango', 'id': 2,},
       {'title':'POST 3','author':'Madusha','unit_price':50,'qty':9,'catagoty':'Vegitable','name': 'Carrot', 'id': 3,},
       {'title':'ADZ 1','author':'Dilan','unit_price':80,'qty':15,'catagoty':'Fertilizer','name': 'CIC', 'id': 4,},
       {'title':'POST 4','author':'Prageeth','unit_price':50,'qty':20,'catagoty':'Fruit','name': 'Orange', 'id': 5,},
       {'title':'POST 5','author':'Suren','unit_price':60,'qty':80,'catagoty':'Vegitable','name': 'Tomoto', 'id': 6,},
       {'title':'POST 6','author':'Nimal','unit_price':20,'qty':60,'catagoty':'Vegitable','name': 'Tomoto', 'id': 7,},
       {'title':'POST 7','author':'Kamal','unit_price':50,'qty':10,'catagoty':'Vegitable','name': 'Tomoto', 'id': 8,},
       {'title':'POST 8','author':'Sunil','unit_price':10,'qty':80,'catagoty':'Vegitable','name': 'Tomoto', 'id': 9,},
       {'title':'POST 9','author':'Sunimal','unit_price':80,'qty':100,'catagoty':'Vegitable','name': 'Tomoto', 'id': 10,},
       {'title':'ADZ 2','author':'Amal','unit_price':60,'qty':140,'catagoty':'Fertilizer','name': 'Fertilizer', 'id': 11,},
       
    ]
 }
 renderHeader() {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text >My Header</Text>
      </View>
    </View>
  )
}
  render() {
    return (      
      <View>    
        <View>
          {this.renderHeader()}
        </View> 
         <View>
            <ScrollView>
              <Card title='test'>
               {
                  this.state.posts.map((item, index) => (
                    
                     <View key = {item.id} style={styles.item}>
                           <View style={styles.avart}></View>  
                          <View style={styles.details}>
                                <Text style={{fontWeight:'bold',fontSize:20,}}>{item.title}</Text>
                          </View> 
                          <View>
                              <Text>{'\n\n\n'} {item.catagoty},{item.name},{item.unit_price},{item.qty}</Text>
                          </View>
                     </View>
                  ))
               }
               </Card>
            </ScrollView>
                
         </View>     
        </View> 
    );
  }
}


export default (tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Posts",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-albums" size={24} color={"rgba(9, 132, 227,0.9)"} />
        )
      }
    },
    OnMe: {
      screen: OnMeScreen,
      navigationOptions: {
        tabBarLabel: "Price",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-cash" size={24} color={"rgba(9, 132, 227,0.9)"} />
        )
      }
    },
    Wallet: {
      screen: WalletScreen,
      navigationOptions: {
        tabBarLabel: "Weather",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-cloudy-night" size={24} color={"rgba(9, 132, 227,0.9)"} />
        )
      }
    },
    HandShake: {
      screen: HandShakeScreen,
      navigationOptions: {
        tabBarLabel: "Loans",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="ios-trending-up"
            size={24}
            color={"rgba(9, 132, 227,0.9)"}
          />
        )
      }
    },
    Logout: {
      screen: LogoutScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-contact" size={24} color={"rgba(214, 48, 49,0.9)"} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "orange",
      inactiveTintColor: "grey"
    }
  }
));

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
 avart:{
  flex:0.1,
  borderColor: '#b2bec3',
  borderWidth: 1,
  backgroundColor: '#e17055',
  height:20,
  width:40,
  borderRadius:10,
 },
 details:{
 },
 stMid:{
  marginTop:50,
 }

});

