import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import dice from './assets/dice.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={dice} style={styles.logo} />
      <Text style={styles.instructions}>
        Welcome to KillerDice
      </Text>

      <TouchableOpacity onPress={() => alert('Rolling dice...')} style={styles.button}>
        <Text style={styles.buttonText}>Pick a die!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 320,
    height: 350,
    marginBottom: 10,
  },

  instructions: {
    color: '#888',
    fontSize: 30,
    marginHorizontal: 15,
  },

  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
});
