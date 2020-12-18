import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import I18n from 'i18n-js';

import BigActionButton from '../components/BigActionButton';
import Identity from '../components/Identity';

import colors from '../config/default.colors';
import languages from '../config/languages.json';
import cy from '../assets/translations/cy.json';
import en from '../assets/translations/en.json';
import pl from '../assets/translations/pl.json';
import { Navigation } from 'react-native-navigation';

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

function MainScreen(props) { 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topPanel}>
        <View style={styles.infoPanel}>
          <View style={styles.miniMenu}>

          </View>
          <Identity style={styles.dutyPanel} /> 
        </View>
        <View style={styles.orgPanel}>
          <Image source={logo} style={styles.mainLogo} />
        </View>
      </View>
      <View style={styles.searchPanel}>
        <Text>Search</Text>
      </View>
      <View style={styles.actionsPanel}>
        <View style={styles.actionsColumn}>
          <BigActionButton 
            style={{backgroundColor: 'red'}} 
            label="one"
          />
          <BigActionButton label="two" />
        </View>
        <View style={styles.actionsColumn}>
          <BigActionButton label="three" />
          <BigActionButton label="four" 
            onPress={() => {props.navigation.navigate('Checklists')}}
          />
        </View>
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
      flex: 4, 
      flexDirection: 'row',
      padding: 10
    },
    actionsColumn: {
      flex: 1
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
      flex: 5
    }
  });
  
export default MainScreen;