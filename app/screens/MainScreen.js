import React, { useState } from 'react';
import { Alert, Image, Picker, Platform, SafeAreaView, StyleSheet, Text, TextInput, View, I18nManager } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import I18n from 'i18n-js';
//import * as RNLocalize from 'react-native-localize';

import colors from '../config/colors';
import languages from '../config/languages.json';
import cy from '../assets/translations/cy.json';
import en from '../assets/translations/en.json';
import pl from '../assets/translations/pl.json';

I18n.translations = { 
  cy: cy, 
  en: en, 
  pl: pl
};

function ChangeLanguage(lang) {
  I18n.locale = lang;
}

function MainScreen({ navigation }) { 
  const [language, setLanguage] = useState('en');

  ChangeLanguage(language);
    return (
        <>
        <View style={{
            backgroundColor: "gold",
            flex: 0.5
          }}
          />
          <View style={{
            backgroundColor: "dodgerblue",
            flex: 3
          }}
          >
            <Picker
              selectedValue={language}
              onValueChange={lang => {
                ChangeLanguage(lang);              
                setLanguage(lang);
              }}
            >
              {Object.keys(languages).map(key => (
                <Picker.Item label={languages[key]} value={key} key={languages[key]} />

              ))}
            </Picker>
          </View>
    
          <View style={{
            backgroundColor: "gold",
            flex: 1
          }}
          />
    
          <View style={{
            backgroundColor: "green",
            flex: 3,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            alignContent: "space-around",
            flexWrap: "wrap",
          
          }}
          >
            <View style={styles.buttonView}>
              <Button buttonStyle={styles.button} title={I18n.t('button_one')} 
                onPress={() => navigation.navigate('DrAbc')}
              />
            </View>
    
            <View style={styles.buttonView}>
              <Button buttonStyle={styles.button} title={I18n.t('button_two')}
                onPress={() => navigation.navigate('Tools')}
              />
            </View>
            
            <View style={styles.buttonView}>
              <Button buttonStyle={styles.button} title={I18n.t('button_three')} />
            </View>
    
            <View style={styles.buttonView}>
              <Button buttonStyle={styles.button} title={I18n.t('button_four')} />
            </View>
          </View>
        </>
    );
}

const styles = StyleSheet.create({
    buttonView: {
      width: '40%',
      height: '40%',
    },
    button: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.primary
    }
  });

  
export default MainScreen;