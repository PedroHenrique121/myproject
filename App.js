import * as React from 'react';
import { Button, FlatList, Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
  { id: '1', title: 'Claudia Alves', mensagem: 'Do more of what you love.' },
  { id: '2', title: 'Dani Martinez', mensagem: 'Do your own thing.' },
  { id: '3', title: 'Kimberly Nguyen', mensagem: 'Kindness is beautiful.' },
  { id: '4', title: 'Mariana Napolitani', mensagem: 'Live your purpose.' },
  { id: '5', title: 'Olivia Wilson', mensagem: 'You got this.' },
  { id: '6', title: 'Rachelle Beaudry', mensagem: 'You re wonderful.' },
  { id: '7', title: 'Soo Jin Ae', mensagem: 'Keep it simple.' }
];

const Stack = createNativeStackNavigator();

const Item = ({ title, mensagem }) => (
  <View style={styles.item}>
    <Image 
      style={{ width: 50, height: 50, marginRight: 15 }} 
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' }} 
    />
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>{mensagem}</Text>
    </View>
  </View>
);

function Tela1() {
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 60 }}>
      <FlatList 
        data={DATA} 
        renderItem={({ item }) => (
          <Pressable onPress={() => alert(`Você clicou em ${item.title}`)}>
            <Item title={item.title} mensagem={item.mensagem} />
          </Pressable>
        )} 
        keyExtractor={item => item.id} 
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela1" component={Tela1} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#dad8d8',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8
  },
  title: {
    fontWeight: 'bold'
  }
});