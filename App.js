import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const AppButton = ({ onPress, icon, title, backgroundColor }) => (
  <View style={styles.appButtonContainer}>
    <Icon.Button
      name={icon}
      backgroundColor={backgroundColor}
      onPress={onPress}
      style={styles.appButton}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </Icon.Button>
  </View>
);

// TouchableOpacity.defaultProps = { activeOpacity: 0.3 };
const App = () => {
  return (
    <View style={styles.screenContainer}>
      <AppButton icon="sign-in" title="Login with password" backgroundColor="#777"/>
      <AppButton icon="facebook" title="Login with Facebook" backgroundColor="#3b5998"/>
      <AppButton icon="github" title="Login with GitHub" backgroundColor="#6e5494"/>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 80,
    backgroundColor: "#555",
  },
  appButton: {
    padding: 12,
  },
  appButtonText: {
    fontSize: 17,
  },
  appButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

export default App;