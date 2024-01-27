// ContactList.js
import React, { useState, useRef } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


const ContactList = ({ contacts, onDeleteContact }) => {
    const scrollViewRef = useRef();

    return (
        <View style={styles.centeredView}>
            <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
            <FlatList
                    data={contacts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => onDeleteContact(item.id)}>
                            <View
                                style={{
                                    flexDirection: 'row', borderBlockColor: 'black', borderBottomWidth: 1, width: "100%"
                                }}>
                                <Text style={[styles.margin]}>{item.id}</Text>
                                <Text style={[styles.margin]}>{item.name}</Text>
                                <Text style={[styles.margin]}>{item.contactInfo}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    margin: {
        margin: 8,
    }
});
export default ContactList;