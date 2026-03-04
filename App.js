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
  { id: '7', title: 'Soo Jin Ae', mensagem: 'Keep it simple' }
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
    <View style={{ flex: 1, alignItems: 'center', marginTop: 60, backgroundColor: '#ffffff' }}>

      <View style={styles.header}>
        <Text style={styles.Title}>Messages & Chat</Text>
      </View>

      <FlatList 
      contentContainerStyle={{ paddingTop: 10 }}
        data={DATA} 
        renderItem={({ item }) => (
          <Pressable onPress={() => alert(`Você clicou em ${item.title}`)}>
            <Item title={item.title} mensagem={item.mensagem} />
          </Pressable>
        )} 
        keyExtractor={item => item.id} 
      />

      <View style={styles.menuInf}>
        <Pressable style={styles.menuItem}>
          <Text>🏠</Text>
          <Text style={styles.menuTexto}>Inicio</Text>
        </Pressable>

        <Pressable style={styles.menuItem}>
          <Text>💬</Text>
          <Text style={[styles.menuTexto, { color: '#4A6CF7' }]}>Chat</Text>
        </Pressable>

        <Pressable style={styles.menuItem}>
          <Text>📧</Text>
          <Text style={styles.menuTexto}>Email</Text>
        </Pressable>

        <Pressable style={styles.menuItem}>
          <Text>👤</Text>
          <Text style={styles.menuTexto}>Perfil</Text>
        </Pressable>
      </View>
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
    backgroundColor: '#ececec',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  title: {
    fontWeight: 'bold'
  },

  header: {
  height: 100,
  justifyContent: 'flex-end',
  paddingBottom: 15,
  paddingHorizontal: 20,
  backgroundColor: '#ffffff',
},

Title: {
  fontSize: 24,
  fontWeight: 'bold',
},
menuInf: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: 60,
  backgroundColor: '#f2f2f2',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderTopWidth: 1,
  borderTopColor: '#ddd'
},

menuItem: {
  alignItems: 'center'
},

menuTexto: {
  fontSize: 12,
  color: 'gray'
},
});