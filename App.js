// App.js
import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ContactList from './src/components/ContactList';
import AddContactModal from './src/components/ContactModal';

const App = () => {

  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', contactInfo: 'john@example.com' },
    { id: 2, name: 'Jane Smith', contactInfo: 'jane@example.com' },
    { id: 3, name: 'John Doe', contactInfo: 'john@example.com' },
    { id: 4, name: 'Jane Smith', contactInfo: 'jane@example.com' },
    { id: 5, name: 'John Doe', contactInfo: 'john@example.com' },
    { id: 6, name: 'Jane Smith', contactInfo: 'jane@example.com' },
    { id: 7, name: 'John Doe', contactInfo: 'john@example.com' },
    { id: 8, name: 'Jane Smith', contactInfo: 'jane@example.com' },
    { id: 9, name: 'John Doe', contactInfo: 'john@example.com' },
    { id: 10, name: 'Jane Smith', contactInfo: 'jane@example.com' },
    { id: 11, name: 'John Doe', contactInfo: 'john@example.com' },
    { id: 12, name: 'Jane Smith', contactInfo: 'jane@example.com' },
    // Add more initial contacts as needed
  ]);

  const [isModalVisible, setModalVisible] = useState(false);

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const handleAddContact = (newContact) => {
    let newContactId = contacts.map((contact) => contact.id).reduce((a, b) => Math.max(a, b))+1;
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: newContactId, ...newContact },
    ]);
    setModalVisible(false);
  };

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <Text style={[styles.text]}>Lab 4 Branden Vongphakdy 0747156 </Text>
      <View style={{ flex: 1, backgroundColor: '', width: "100%" }}>
        <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
      </View>
          <AddContactModal
          visible={isModalVisible}
          onClose={() => setModalVisible(false)}
          onAddContact={handleAddContact}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: "90%",
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: '#222222',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  }
});

export default App;