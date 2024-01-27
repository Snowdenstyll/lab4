// AddContactModal.js
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';

const ContactModal = ({ visible, onClose, onAddContact }) => {
    const [name, setName] = useState('');
    const [contactInfo, setContactInfo] = useState('');

    const handleAddContact = () => {
        onAddContact({ name, contactInfo });
        setName('');
        setContactInfo('');
    };
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter name"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter contact number"
                            value={contactInfo}
                            onChangeText={(text) => setContactInfo(text)}
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                            }}>
                            <Pressable
                                style={[styles.button, styles.buttonClose, styles.margin]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonOpen, styles.margin]}
                                onPress={() => handleAddContact()}>
                                <Text style={styles.textStyle}>Add</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Add Contact</Text>
            </Pressable>
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
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: 'blue',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    padding: {
        padding: 10,
    },
    margin: {
        margin: 10,
    }

});

export default ContactModal;

/**
 *
 * <Modal visible={visible} animationType="slide" transparent={true}>

    </Modal>
 */