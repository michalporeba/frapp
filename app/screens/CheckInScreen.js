import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useAvailableEvents from '../data/EventHooks';
import ActionStrip from '../components/ActionStrip';
import { setEventName, setPostName } from '../data/EventActions';
import { connect } from 'react-redux';
import { ListItem, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

function CheckInScreen(props) {
    const events = useAvailableEvents();
    const [selected, setSelected] = useState(null);

    const selection = !selected ? events : selected.posts;

    return(
        <View style={styles.container}>
            { selected != null ? (
                    <>
                        <ListItem key={selected.name}
                            onPress={() => setSelected(null)}
                        >
                            <ListItem.Content>
                                <ListItem.Title>{selected.name}</ListItem.Title>
                            </ListItem.Content>
                            <Icon name='cancel' />
                        </ListItem>
                        <Text style={styles.next}>Select Post</Text>
                    </>
                ) : (
                    <Text style={styles.next}>Select Event</Text>
                )
            }
            <ScrollView>
            <View style={{ padding: 15, paddingTop: 0 }}>
                {
                    selection.map((e, i) => (
                        <View style={{marginBottom: 10}}>
                        <ListItem key={i} bottomDivider
                            onPress={() => {
                                if (selected == null) {
                                    setSelected(e);
                                } else {
                                    props.setEventName(selected.name);
                                    props.setPostName(e.name);
                                    props.navigation.navigate('Home');
                                }
                            }}
                        >
                            <ListItem.Content>
                                <ListItem.Title>{e.name}</ListItem.Title>
                            </ListItem.Content>
                            {selected 
                                ? <Icon name='check' /> 
                                : <ListItem.Chevron /> 
                            }
                            
                            
                        </ListItem>
                        </View>
                    ))
                }
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    next: {
        textAlign: 'center',
        fontSize: 24,
        padding: 10
    }
});

const actionCreators = {
    setEventName,
    setPostName
  };
  
export default connect(null, actionCreators)(CheckInScreen);