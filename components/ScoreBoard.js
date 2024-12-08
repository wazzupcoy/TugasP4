import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScoreBoard = ({ teamName, score, onIncrease, onDecrease }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onIncrease} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDecrease} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 48,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ScoreBoard;
