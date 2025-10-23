import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Index() {
   const [count, setCount] = useState(0);
  const META = 10;

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const showCelebration = count >= META;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Contador</Text>
      </View>

      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{count}</Text>
        
        {showCelebration && (
          <View style={styles.celebrationContainer}>
            <Text style={styles.celebrationEmoji}>🎉</Text>
            <Text style={styles.celebrationText}>¡Meta alcanzada!</Text>
          </View>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.decrementButton]} 
          onPress={decrement}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.resetButton} 
          onPress={reset}
          activeOpacity={0.7}
        >
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.incrementButton]} 
          onPress={increment}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    position: 'absolute',
    top: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#eee',
    letterSpacing: 2,
  },
  counterContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  counterText: {
    fontSize: 120,
    fontWeight: 'bold',
    color: '#00d4ff',
    textShadowColor: 'rgba(0, 212, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  celebrationContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  celebrationEmoji: {
    fontSize: 50,
    marginBottom: 8,
  },
  celebrationText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffd700',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 30,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: '#6c5ce7',
  },
  decrementButton: {
    // Mismo color que reset
  },
  incrementButton: {
    // Mismo color que reset
  },
  buttonText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  resetButton: {
    backgroundColor: '#6c5ce7',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  resetButtonText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 1.5,
  },
});