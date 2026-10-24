
import { StyleSheet, Text, View } from 'react-native';

type StopwatchProps = {
  time: string;
  isRunning: boolean;
};

export default function Stopwatch({
  time,
  isRunning,
}: StopwatchProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Lab Stopwatch</Text>

      <Text style={styles.time}>{time}</Text>

      <Text style={styles.status}>
        {isRunning ? 'Running...' : 'Paused'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    elevation: 3,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#243B53',
    marginBottom: 12,
  },
  time: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  status: {
    fontSize: 16,
    color: '#52606D',
    marginTop: 8,
  },
});
