import React, { useState } from 'react';
import { Alert, Image, Picker, Platform, SafeAreaView, StyleSheet, Text, TextInput, View, I18nManager } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import I18n from 'i18n-js';
import { createTheme, createStyle } from 'react-native-theming';
import Theme from 'react-native-theming';

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

const getTheme = (t) => require('../config/' + t + '.colors.json');

const themes = [
  createTheme({
    backgroundColor: 'silver',
    primary: 'dodgerblue'
  }, 'default'),
  createTheme({
    backgroundColor: 'gold',
    primary: 'limegreen'
  }, 'stjohn'),
  createTheme({
    backgroundColor: 'white',
    primary: 'blue'
  }, 'bcrc')
];

function MainScreen({ navigation }) { 
  const [language, setLanguage] = useState('en');
  const [th, setTh] = useState('default');

  const t = getTheme(th);
  console.log(t);

  ChangeLanguage(language);
    return (
      <Theme.View style={{
        flex: 1
      }}>
        <Theme.View style={{
            backgroundColor: "gold",
            flex: 0.5
          }}
          />
          <Theme.View style={[styles.main, {
            flex: 3
          }]}
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
              
            <Picker>
              { themes.map(theme => (
                <Picker.Item label={theme.name} style={styles.button} onPress={() => theme.apply()} />
                ))
              }
            </Picker>

            <View style={{ flexDirection: 'row' }}>
              { themes.map(theme => (
                <Button key={theme.name} style={styles.button} onPress={() => theme.apply()}>
                  <Theme.Text style={{ color: '@buttonText' }}>{theme.name}</Theme.Text>
                </Button>
                ))
              }
            </View>
          </Theme.View>
    
          <View style={{
            backgroundColor: t.primary,
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
              <Button buttonStyle={styles.button} title={I18n.t('button_three')}  
              onPress={() => {
                setTh('bcrc');
              }}
              />
            </View>
    
            <View style={styles.buttonView}>
              <Button buttonStyle={styles.button} title={I18n.t('button_four')} 
                onPress={() => {
                  setTh('stjohn');
                }}
              />
            </View>
          </View>
        </Theme.View>
    );
}

const styles = createStyle({
    buttonView: {
      width: '40%',
      height: '40%',
    },
    button: {
      width: '100%',
      height: '100%',
      backgroundColor: '@primary'
    }, 
    main: {
      backgroundColor: '@backgroundColor'
    }
  });

  
export default MainScreen;