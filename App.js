import * as React from 'react';
import { Button, FlatList, Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";


const DATA = [
  { id: '55', title: 'Claudia Alves', mensagem: 'Do more of what you love.', tempo: '2m' },
  { id: '21', title: 'Dani Martinez', mensagem: 'Do your own thing.', tempo: '5m' },
  { id: '1', title: 'Kimberly Nguyen', mensagem: 'Kindness is beautiful.', tempo: '10m' },
  { id: '3', title: 'Mariana Napolitani', mensagem: 'Live your purpose.', tempo: '30m' },
  { id: '67', title: 'Olivia Wilson', mensagem: 'You got this.', tempo: '1h' },
  { id: '86', title: 'Soo Jin Ae', mensagem: 'Keep it simple', tempo: '2h' },
];

const Stack = createNativeStackNavigator();


const Item = ({ title, mensagem, id, tempo }) => {
  const idNum = parseInt(id);
  const genero = idNum % 2 !== 0 ? "women" : "men";
  return (
    <View style={styles.item}>
      <Image 
        style={{ width: 50, height: 50, marginRight: 15, borderRadius: 25 }} 
        source={{ uri: `https://randomuser.me/api/portraits/${genero}/${idNum}.jpg` }} 
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{mensagem}</Text>
        <Text style={styles.tempo}>{tempo}</Text>
      </View>
    </View>
  );
};

function Tela1() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.header}>
        <Text style={styles.Title}>Mensagem & Chat</Text>
      </View>

      <View style={styles.textoAH}>
        <Text >Mark all read</Text>
        <Text>Sort by time</Text>
      </View>


      <FlatList 
      contentContainerStyle={{ paddingTop: 10 }}
        data={DATA} 
        renderItem={({ item }) => (
          <Pressable onPress={() => alert(`Você clicou em ${item.title}`)}>
            <Item title={item.title} mensagem={item.mensagem} id={item.id} tempo={item.tempo} />
          </Pressable>
        )} 
        keyExtractor={item => item.id} 
      />

      

      <View style={styles.menuInf}>
        <Pressable style={styles.menuItem}>

        <Ionicons name="home" size={24} color="#4A6CF7" />
          <Text style={styles.menuTexto}>Inicio</Text>
        </Pressable>

        <Pressable style={styles.menuItem}>
          <Ionicons name="chatbubble" size={24} color="#4A6CF7" />
          <Text style={[styles.menuTexto]}>Chat</Text>
        </Pressable>

        <Pressable style={styles.menuItem}>
          <Ionicons name="mail" size={24} color="#4A6CF7" />
          <Text style={styles.menuTexto}>Email</Text>
        </Pressable>

        <Pressable style={styles.menuItem}>
          <Ionicons name="person" size={24} color="#4A6CF7" />
          <Text style={styles.menuTexto}>Perfil</Text>
        </Pressable>
      </View>
    </View>

    </SafeAreaView>
  );
}


 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela1" component={Tela1} options={{ headerShown: false, headerStyle: { backgroundColor: '#ffffff' } }} />
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
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  title: {
    fontWeight: 'bold'
  },

  header: {
  height: 100,
  alignSelf: 'flex-end',
  marginLeft: 19,
  top: 40,
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
  backgroundColor: '#f6f6f6',
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
tempo: {
  fontSize: 12,
  color: 'gray',
  marginRight: -50,
  top: -15,
  alignSelf: 'flex-end',
  flex: 10,
},
textoAH: {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  paddingHorizontal: 20,
  marginTop: 20
}
});
export default App;