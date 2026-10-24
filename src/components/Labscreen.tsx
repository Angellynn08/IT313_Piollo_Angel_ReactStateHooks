
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';

import PracticeTracker from './PracticeTracker';
import Stopwatch from './Stopwatch';
import { useStopwatch } from '../hooks/useStopwatch';

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const { time } = useStopwatch(isRunning);

  function handleSolve() {
    setSolved((previousSolved) => previousSolved + 1);
  }

  function handleReset() {
    setSolved(0);
  }

  function toggleStopwatch() {
    setIsRunning((previousState) => !previousState);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Lab Timer & Practice Tracker</Text>

        <Text style={styles.subtitle}>
          IT313 Mobile Programming - Lab Activity 5
        </Text>

        <Stopwatch time={time} isRunning={isRunning} />

        <Pressable
          style={styles.timerButton}
          onPress={toggleStopwatch}
        >
          <Text style={styles.timerButtonText}>
            {isRunning ? 'Pause Stopwatch' : 'Start Stopwatch'}
          </Text>
        </Pressable>

        <PracticeTracker
          solved={solved}
          onSolve={handleSolve}
          onReset={handleReset}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2FF',
  },
  content: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E3A8A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#52606D',
    textAlign: 'center',
    marginBottom: 24,
  },
  timerButton: {
    backgroundColor: '#0F766E',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  timerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
