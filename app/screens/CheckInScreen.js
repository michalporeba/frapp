import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useAvailableEvents from '../data/EventHooks';
import ActionStrip from '../components/ActionStrip';
import ActionStripAction from '../components/ActionStripAction';

function CheckInScreen(props) {
    const events = useAvailableEvents();
    const [selected, setSelected] = useState(null);

    const selection = !selected ? events : selected.posts;

    console.log(selection);

    return(
        <View style={styles.container}>
            { selected != null ? (
                    <>
                        <ActionStrip label={' ⮜ ' + selected.name}
                            onPress={() => setSelected(null)}
                        >
                        </ActionStrip>
                        <Text style={styles.next}>Select Post</Text>
                    </>
                ) : (
                    <Text style={styles.next}>Select Event</Text>
                )
            }
            
            {
                selection.map((e, i) => {
                    return (
                    <ActionStrip label={e.name} 
                        onPress={() => {
                            setSelected(e);
                        }}
                    />
                    );
                })
            }
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

export default CheckInScreen;