import React from "react";
import { 
  View, 
  StyleSheet, 
  Text, 
  SafeAreaView,
  Pressable,
  ScrollView
} from "react-native";
import NavFoot from "./components/NavFoot";
import { MaterialIcons } from '@expo/vector-icons'; 

const cp = {
  white : '#EFFFFB',
  black : '#272727',
  blue : '#4F98CA',
  green : '#50D890'
}

let scroolsize = "100%";
let othersize = 450;

let icon_size = 40;
// TouchableOpacity.defaultProps = { activeOpacity: 0.3 };
const App = () => {
  return (
    <>    

    <View style = {styles.screenContainer}>
      {/* <Homepage /> */}
      <ScrollView style = {styles.sidescroll}  >
        <View style = {styles.v1}>

        </View>
        <View style = {styles.v2}>

        </View>
        <View style = {styles.v3}>

        </View>
        <View style = {styles.v4}>
          <Text>
            Connor
          </Text>
        </View>
      </ScrollView>
    </View>      
    <NavFoot/>
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
  sidescroll : {
    height : '100%'
    // backgroundColor : cp.black,
    // flexDirection : 'row'
    // width : '100%',
  },
  v1 : {
    height : othersize,
    backgroundColor : cp.white,
    justifyContent : 'center',
    alignItems : 'center',
    width : scroolsize,
  },
  v2 : {
    height : othersize,
    backgroundColor : cp.black,
    justifyContent : 'center',
    alignItems : 'center',
    width : scroolsize,
  },
  v3 : {
    height : othersize,
    backgroundColor : cp.green,
    justifyContent : 'center',
    alignItems : 'center',
    width : scroolsize,
  },
  v4 : {
    height : othersize,
    backgroundColor : cp.blue,
    justifyContent : 'center',
    alignItems : 'center',
    width : scroolsize,
  },
});

export default App;