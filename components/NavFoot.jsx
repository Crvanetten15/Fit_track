import React from "react";
import { 
  View, 
  StyleSheet, 
  Text, 
  SafeAreaView,
  Pressable
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
let icon_size = 40;
const cp = {
  white : '#EFFFFB',
  black : '#272727',
  blue : '#4F98CA',
  green : '#50D890'
}

const Homepage = () => {
  return (
    <>    
    <SafeAreaView style = {styles.SafeView}>
        <Pressable 
          style = {styles.CustomButton }
          onPress={() => {
            console.log("1");
          }}
        > 
        <MaterialIcons name="backup-table" size={icon_size} color='#EFFFFB' />
        </Pressable>
                <Pressable 
          style = {styles.CustomButton}
          onPress={() => {
            console.log("2");
          }}
        >

<MaterialIcons name="control-point" size={icon_size} color='#EFFFFB' />
        </Pressable>
        <Pressable 
          style = {styles.CustomButton}
          onPress={() => {
            console.log("3");
          }}
        >
          <MaterialIcons name="history" size={icon_size} color='#EFFFFB' />
        </Pressable>
                <Pressable 
          style = {styles.CustomButton}
          onPress={() => {
            console.log("4");
          }}
        > 

        <MaterialIcons name="settings" size={icon_size} color='#EFFFFB' />
        </Pressable>
      </SafeAreaView>

    </>    
  );
};

const styles = StyleSheet.create({
  SafeView:{
    flex: 1,
    backgroundColor: cp.green,
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection : 'row',
  },
  CustomButton : {
    backgroundColor : cp.green,
    height : '80%',
    width: '20%', 
    borderRadius : 5,
    margin: 5,
    justifyContent : 'center',
    alignItems: 'center',
  },
});

export default Homepage;