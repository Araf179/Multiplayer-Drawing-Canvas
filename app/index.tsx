import { Stack, Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Page() {
  const router = useRouter();
  const [channel, setChannel] = useState('1');

  const onJoin = () => {
    router.navigate(`/channel/${channel}`);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={channel}
        onChangeText={setChannel}
        inputMode="numeric"
      />
      <TouchableOpacity onPress={onJoin} style={styles.button}>
        <Text style={styles.text}>Join</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#808080',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    margin: 8,
  },
  button: {
    backgroundColor: '#2E8A58',
    borderRadius: 8,
    padding: 12,
    margin: 8,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
