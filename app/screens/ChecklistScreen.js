import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAvailableChecklists, useChecklist } from '../data/ChecklistHooks';
import ActionStrip from '../components/ActionStrip';

const SelectChecklists = (props) => {
    const availableChecklists = useAvailableChecklists();
    
    return(
        availableChecklists.map((e, i) => {
            return (
                <ActionStrip label={e.name} 
                    onPress={() => props.onSelect(e)}
                />
            )
        })
    );
}

const ChecklistScreen = (props) => {
    const [checklist, setChecklist] = useState(null);

    return(
        <View style={styles.container}>
            {
                checklist == null ? (
                    <>
                        <Text style={styles.header}>Available Checklists</Text>
                        <SelectChecklists onSelect={(e) => setChecklist(useChecklist(e.id))} />
                    </>
                ) : (
                    <>
                        <ActionStrip label={' ⮜ ' + checklist.name} 
                            onPress={() => setChecklist(null)}
                        />
                    </>
                )
            }
            {
                // availableChecklists.map((e, i) => {
                //     return (
                //         <ActionStrip label={e.name} 
                //             onPress={() => setChecklist(useChecklist(e.id))}
                //         />
                //     )
                // })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    header: {
        textAlign: 'center',
        fontSize: 24,
        padding: 10
    }
});

export default ChecklistScreen
