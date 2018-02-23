import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/Home';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen/>
      </View>
    );
  }
}

EStyleSheet.build({
  $windowWidth: Dimensions.get('window').width,
  $windowHeight: Dimensions.get('window').height,
  $dark: '#000'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
