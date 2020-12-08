import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
// import { Container } from 'native-base';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// const HomeScreen = () => (
//   <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text category='h1'>HOME</Text>
//   </Layout>
// );

// export default () => (
//   <ApplicationProvider {...eva} theme={eva.light}>
//     <HomeScreen />
//   </ApplicationProvider>
// );

export default function App() {
  const [isSomething, setIsSomething] = useState(true);
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <Text>FRApp</Text>
      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="Search"
        onChangeText={text => {setSearchText(text)}}
        />  
      <Button title="New Patient" />
      <Button title="Primary Survey" 
        onPress={() => {setIsSomething(!isSomething)}} />
      <Button title="Secondary Survey" 
        disabled={!isSomething}/>
      <Button title="Others" />
      <Text>{searchText}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffffe',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
