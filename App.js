import React from "react";
import { 
  View, 
  StyleSheet, 
  Text, 
  SafeAreaView,
  Pressable
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const cp = {
  white : '#EFFFFB',
  black : '#272727',
  blue : '#4F98CA',
  green : '#50D890'
}

// TouchableOpacity.defaultProps = { activeOpacity: 0.3 };
const App = () => {
  return (
    <>    

    <View style = {styles.screenContainer}>

    </View>      
    <SafeAreaView style = {styles.SafeView}>
        <Pressable 
          style = {styles.CustomButton}
          onPress={() => {
            console.log("1");
          }}
        />
                <Pressable 
          style = {styles.CustomButton}
          onPress={() => {
            console.log("2");
          }}
        />
                <Pressable 
          style = {styles.CustomButton}
          onPress={() => {
            console.log("3");
          }}
        />
                <Pressable 
          style = {styles.CustomButton}
          onPress={() => {
            console.log("4");
          }}
        />
      </SafeAreaView>
    </>    
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 8,
    backgroundColor: cp.white,
  },
  SafeView:{
    flex: 1,
    backgroundColor: cp.black,
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
  }
});

export default App;