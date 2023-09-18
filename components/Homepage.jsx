import React from "react";
import { 
  View, 
  StyleSheet, 
  Text, 
  SafeAreaView,
  Pressable
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

let user_name = Connor;
const cp = {
  white : '#EFFFFB',
  black : '#272727',
  blue : '#4F98CA',
  green : '#50D890'
}

const Homepage = () => {
  return (
    <>    
    <SafeAreaView style = {styles.screenContainer}>
      <View style = {styles.HeaderText}>
        <Text>
          Good Afternoon, 
          {user_name}!
        </Text>
      </View>
      <View style = {styles.UserProfile}>
        <Pressable>
          <Image 
          style= {styles.pfp}
          source={require('../assets/stockpfp.jpg')}/>
        </Pressable>
      </View>
      
    </SafeAreaView>

    </>    
  );
};

const styles = StyleSheet.create({
  screenContainer : {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems : 'center',
    backgroundColor : cp.blue,
  },
});

export default Homepage;