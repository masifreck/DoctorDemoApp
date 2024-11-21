import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HealthChatBot = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Icon name="heartbeat" size={20} color="#fff" /> Health ChatBot
        </Text>
      </View>

      {/* Chat Body */}
      <ScrollView style={styles.body} contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Bot Message */}
        <View style={styles.botMessage}>
          <View style={styles.avatar}>
            <Icon name="heartbeat" size={20} color="#fff" />
          </View>
          <View style={styles.message}>
            <Text style={styles.messageText}>
              Hello! How can I assist you today with your health?
            </Text>
          </View>
        </View>

        {/* User Options */}
        <View style={styles.userMessage}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Check Doctor's Appointments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Daily Steps</Text>
          </TouchableOpacity>
        </View>

        {/* Bot Response */}
        <View style={styles.botMessage}>
          <View style={styles.avatar}>
            <Icon name="heartbeat" size={20} color="#fff" />
          </View>
          <View style={styles.message}>
            <Text style={styles.messageText}>
              Your next doctor’s appointment is on 20th November at 10:00 AM.
            </Text>
          </View>
        </View>

        {/* Bot Card */}
        <View style={styles.botMessage}>
          <View style={styles.avatar}>
            <Icon name="heartbeat" size={20} color="#fff" />
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Blood Pressure: Normal</Text>
            <Text style={styles.cardDescription}>
              Last check-up on 15th November
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer for Options */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#00cc36',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    padding: 16,
  },
  botMessage: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  userMessage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#00cc36',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  message: {
    backgroundColor: '#e6ffe6',
    padding: 12,
    borderRadius: 12,
    maxWidth: '75%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  messageText: {
    color: '#333',
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    backgroundColor: '#f5f8fc',
    padding: 16,
    borderRadius: 12,
    maxWidth: '75%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderColor: '#00cc36',
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00cc36',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: '#408753',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerButton: {
    backgroundColor: '#00cc36',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HealthChatBot;
