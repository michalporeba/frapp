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

const Checklist = (props) => {
    const { checklist } = props;
    const { items } = checklist;

    if (checklist == null) {
        return (
            <Text>Nothing to see here</Text>
        )
    }

    if (!items) {
        return (
            <>
            </>
        )
    }

    return (
        items.map((e, i) => {
            console.log(e);
            return (
                <>
                    <ActionStrip label={e.name} />
                    <Checklist checklist={e} />
                </>
            );
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
                        <Text style={styles.header}>Things to check</Text>
                        <Checklist checklist={checklist} />
                    </>
                )
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
