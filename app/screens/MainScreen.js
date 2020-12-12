import React, { useState } from 'react';
import { Image, Picker, Platform, StyleSheet, Text, TextInput, View, I18nManager } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import I18n from 'i18n-js';

import colors from '../config/default.colors';
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

const getStJohnTheme = () => require('../config/stjohn.colors.json')
const getBcrcTheme = () => require('../config/bcrc.colors.json')
const getTheme = (t) => {
  if (t === 'stjohn') {
    return getStJohnTheme();
  } else if (t === 'bcrc') {
    return getBcrcTheme();
  } else {
    return require('../config/default.colors.json');
  }
}

function MainScreen({ navigation }) { 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topPanel}>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    top_panel: {
      flex: 4,
      backgroundColor: 'red',
      borderWidth: 2
    },

    buttonView: {
      width: '40%',
      height: '40%',
    },
    button: {
      width: '100%',
      height: '100%',
      backgroundColor: colors.primary
    }, 
    main: {
      backgroundColor: colors.backgroundColor
    }
  });

  
export default MainScreen;