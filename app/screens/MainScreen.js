import React, { useState } from 'react';
import { Image, ImageBackground, Picker, Platform, StyleSheet, Text, TextInput, View, I18nManager } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import I18n from 'i18n-js';

import colors from '../config/default.colors';
import languages from '../config/languages.json';
import cy from '../assets/translations/cy.json';
import en from '../assets/translations/en.json';
import pl from '../assets/translations/pl.json';
import { Right } from 'native-base';

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

const logo = require('../assets/images/smwcrt_logo.png');



function MainScreen({ navigation }) { 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topPanel}>
        <ImageBackground 
          style={styles.topBackground}
          soruce={require('../assets/images/caverescue.jpg')} 
          >
        <View style={styles.infoPanel}>
          <View style={styles.miniMenu}>

          </View>
          <View style={styles.dutyPanel}>
             <View style={styles.dutyInfo}>
              <Text style={styles.dutyName}>Duty Name</Text>
              <Text style={styles.positionName}>Position Name</Text>
             </View>
             <View style={styles.dutyAction}>

             </View>
          </View>
        </View>
        <View style={styles.orgPanel}>
          <Image source={logo} style={styles.mainLogo} />
        </View>
        </ImageBackground>
      </View>
      <View style={styles.searchPanel}>
        <Text>Search</Text>
      </View>
      <View style={styles.actionsPanel}>
        <Text>Actions</Text>
      </View>
    </SafeAreaView>
  );
}

const commonStyle = {
  panel: {
    borderWidth: 2
  }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    topPanel: {
      ...commonStyle.panel,
      flex: 5
    },
    topBackground: {
      flex: 1, 
      resizeMode: 'cover', 
      justifyContent: 'center'
    },
    infoPanel: {
      ...commonStyle.panel, 
      flex: 1,
      flexDirection: 'row'
    },
    orgPanel: {
      ...commonStyle.panel,
      flex: 4, 
      
      alignContent: 'center',
      justifyContent: 'center'
    },
    searchPanel: {
        ...commonStyle.panel,
        flex: 1
    }, 
    actionsPanel: {
      ...commonStyle.panel,
      flex: 4
    },
    mainLogo: {
      flex: 1,
      resizeMode: 'contain', 
      justifyContent: 'center',
      alignSelf: 'center',
      width: '70%'
    },
    main: {
      backgroundColor: colors.backgroundColor
    },
    miniMenu: {
      flex: 1, 
      backgroundColor: 'green'
    },
    dutyPanel: {
      flex: 5, 
      backgroundColor: 'red',
      flexDirection: 'row'
    },
    dutyInfo: {
      flex: 4,
      alignItems: 'stretch'
    },
    dutyAction: {
      backgroundColor: 'gold',
      flex: 1
    }, 
    dutyName: {
      fontSize: 24,
      textAlign: 'right'
    }, 
    positionName: {
      textAlign: 'right',
      fontSize: 18
    }
  });

  
export default MainScreen;