import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Медитация</Text>
      <Text style={styles.description}>
        Найдите внутренний покой с помощью медитации.
      </Text>
      <Button
        title="Начать медитацию"
        onPress={() => navigation.navigate('Meditation')}
      />
    </SafeAreaView>
  );
};

const MeditationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Начало медитации</Text>
      <Text style={styles.description}>
        Расслабьтесь и сосредоточьтесь на своем дыхании.
      </Text>
      {/* Здесь можно добавить кнопку для воспроизведения аудио медитации */}
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Meditation" component={MeditationScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F0F2',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
});
