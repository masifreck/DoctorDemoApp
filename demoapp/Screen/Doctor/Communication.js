import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Communication = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} color="#6B7280" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doctor Appointments</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>27</Text>
            <Text style={styles.monthText}>FEB</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Book Virtual</Text>
            <Text style={styles.cardSubtitle}>Record for Abdullah Mamun</Text>
            <Text style={styles.prescriptionText}>1 Prescription</Text>
            <View style={styles.statusContainer}>
              <Text style={styles.confirmText}>Confirm</Text>
              <Text style={styles.messageText}>Message</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.messageButton} onPress={() => navigation.navigate('DoctorMessage')}  >
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.videoCallButton}>
            <Text style={styles.buttonText}>Video Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F3F4F6',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    flex: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    padding: 16,
    margin: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  dateContainer: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  dateText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  monthText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  prescriptionText: {
    fontSize: 14,
    color: '#3B82F6',
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  confirmText: {
    fontSize: 14,
    color: '#10B981',
    marginRight: 16,
  },
  messageText: {
    fontSize: 14,
    color: '#3B82F6',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageButton: {
    flex: 1,
    borderColor: '#10B981',
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: '#F1F5F9',
  },
  videoCallButton: {
    flex: 1,
    borderColor: '#10B981',
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10B981',
  },
});

export default Communication;
