import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScoreBoard from '../components/ScoreBoard';

const HomeScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const teamA = "Tim A";
  const teamB = "Tim B";

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const getWinner = () => {
    if (scoreA === 10) return `${teamA} Menang! 🎉`;
    if (scoreB === 10) return `${teamB} Menang! 🎉`;
    return '';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skor Pertandingan Futsal</Text>
      <ScoreBoard
        teamName={teamA}
        score={scoreA}
        onIncrease={() => setScoreA(scoreA + 1)}
        onDecrease={() => setScoreA(Math.max(0, scoreA - 1))}
      />
      <ScoreBoard
        teamName={teamB}
        score={scoreB}
        onIncrease={() => setScoreB(scoreB + 1)}
        onDecrease={() => setScoreB(Math.max(0, scoreB - 1))}
      />
      <Text style={styles.winnerText}>{getWinner()}</Text>
      <TouchableOpacity onPress={resetScores} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  winnerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginVertical: 20,
  },
  resetButton: {
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
