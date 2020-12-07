import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
