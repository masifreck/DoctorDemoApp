import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Chart = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Capital Market Bot</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.userMessage}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Portfolio Valuation</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.timestamp}>6:42 PM</Text>
        <View style={styles.botMessage}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>C</Text>
          </View>
          <View style={styles.message}>
            <Text>I would need to authenticate you before proceeding</Text>
          </View>
        </View>
        <View style={styles.userMessage}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>OPEN ACCOUNT</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.timestamp}>6:43 PM</Text>
        <View style={styles.botMessage}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>C</Text>
          </View>
          <View style={styles.message}>
            <Text>Here is your Portfolio Valuation</Text>
          </View>
        </View>
        <View style={styles.portfolioCard}>
          <Text style={styles.value}>1175.40</Text>
          <Text style={styles.gain}>₹ 36590 <Text style={styles.gainPositive}>+1.45 %</Text></Text>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>MORE DETAILS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.portfolioCard}>
          <Text style={styles.value}>100.89</Text>
          <Text style={styles.gainNegative}>₹ 2345</Text>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>MORE DETAILS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userMessage}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Portfolio Value - More Details</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.timestamp}>6:42 PM</Text>
        <View style={styles.botMessage}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>C</Text>
          </View>
          <View style={styles.message}>
            <Text>Portfolio Valuation more details</Text>
          </View>
        </View>
        <View style={styles.userMessage}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Show company news</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.timestamp}>6:42 PM</Text>
        <View style={styles.botMessage}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>C</Text>
          </View>
          <View style={styles.message}>
            <Text>Which company do you want to take a look at ?</Text>
          </View>
        </View>
        <View style={styles.userMessage}>
          <View style={styles.message}>
            <Text style={styles.userText}>Alphabet</Text>
          </View>
        </View>
        <Text style={styles.timestamp}>6:44 PM</Text>
        <View style={styles.botMessage}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>C</Text>
          </View>
          <View style={styles.message}>
            <Text>Please help me select the company below ?</Text>
          </View>
        </View>
        <View style={styles.portfolioCard}>
          <Text style={styles.gain}>Today Gain 268.50</Text>
          <Text style={styles.value}>Alphabet Inc.</Text>
        </View>
        <View style={styles.portfolioCard}>
          <Text style={styles.gain}>Today Gain 120.34</Text>
          <Text style={styles.value}>Google</Text>
        </View>
        <View style={styles.userMessage}>
          <View style={styles.message}>
            <Text style={styles.userText}>Alphabet Inc.</Text>
          </View>
        </View>
        <Text style={styles.timestamp}>6:44 PM</Text>
        <View style={styles.botMessage}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>C</Text>
          </View>
          <View style={styles.message}>
            <Text>Here you go, these are some news on Alphabet stock price</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  header: {
    backgroundColor: '#1a73e8',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    padding: 16,
  },
  userMessage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  botMessage: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    backgroundColor: '#1a73e8',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  message: {
    backgroundColor: '#f1f3f4',
    padding: 12,
    borderRadius: 8,
    maxWidth: '70%',
  },
  userText: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#1a73e8',
    padding: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
    textAlign: 'right',
  },
  portfolioCard: {
    backgroundColor: '#fff',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  gain: {
    fontSize: 16,
    color: '#34a853',
    marginBottom: 8,
  },
  gainPositive: {
    color: '#34a853',
  },
  gainNegative: {
    color: '#ea4335',
  },
  detailsButton: {
    backgroundColor: '#1a73e8',
    padding: 8,
    borderRadius: 4,
  },
  detailsButtonText: {
    color: '#fff',
  },
});

export default Chart;