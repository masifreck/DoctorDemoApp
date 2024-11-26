import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Install with npm install react-native-vector-icons
import AntDesign from 'react-native-vector-icons/AntDesign';

const patientRecords = [
  {
    id: '1',
    status: 'Complete',
    name: 'Sarah Johnson',
    specialty: 'Gynecologist',
    clinic: "Women's Health Clinic",
    image: 'https://media.istockphoto.com/id/1337766466/photo/man-suffering-depression-and-feeling-negative-emotions.jpg?s=2048x2048&w=is&k=20&c=rMbE_lrcWTUIiId-B1nqPsBJRfxxCbEMrbWr3wf32HQ=',
    id: 1,
    location: 'Mumbai, India',
    appointmentDate: '25/08/22',
    time: '08:00 AM - 06:00 PM',
    duration: '30 MIN',
    Treatment: 'Pediatrics'
  },
  {
    id: '2',
    status: 'On Progress',
    name: 'Michael Chang',
    specialty: 'Cardiologist',
    clinic: 'HeartCare Center, USA',
    image: 'https://media.istockphoto.com/id/1337766466/photo/man-suffering-depression-and-feeling-negative-emotions.jpg?s=2048x2048&w=is&k=20&c=rMbE_lrcWTUIiId-B1nqPsBJRfxxCbEMrbWr3wf32HQ=',
    location: 'Mumbai, India',
    appointmentDate: '25/08/22',
    time: '08:00 AM - 06:00 PM',
    duration: '30 MIN',
    Treatment: 'Orthopedic Surgery'
  },
  {
    id: '3',
    status: 'On Progress',
    name: 'Dr. Marry Yang',
    specialty: 'Cardiologist',
    clinic: 'HeartCare Center, USA',
    image: 'https://media.istockphoto.com/id/1337766466/photo/man-suffering-depression-and-feeling-negative-emotions.jpg?s=2048x2048&w=is&k=20&c=rMbE_lrcWTUIiId-B1nqPsBJRfxxCbEMrbWr3wf32HQ=',
    location: 'Mumbai, India',
    appointmentDate: '25/08/22',
    time: '08:00 AM - 06:00 PM',
    duration: '30 MIN',
    Treatment: 'Gynecologist'
  },
];

const PatientRecordsScreen = ({navigation}) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.profileImage} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.specialty}>{item.specialty}</Text>
          <Text style={styles.clinic}>
            <Icon name="map-marker" size={14} color="#6B7280" /> {item.clinic}
          </Text>
        </View>
        <View style={item.status === 'Complete' ? styles.statusComplete : styles.statusProgress}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
    </View>
  );

  return (   
    
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Patient Records</Text>
        <View style={styles.headerRight} />
      </View>
      <FlatList
        data={patientRecords}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff', // Gradient-like blue
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerLeft: {
    width: 40,
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },
  headerRight: {
    width: 40, // Empty space for alignment
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  specialty: {
    fontSize: 14,
    color: '#6B7280',
    marginVertical: 4,
  },
  clinic: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusComplete: {
    backgroundColor: '#4CAF50',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'center',
  },
  statusProgress: {
    backgroundColor: '#FF9800',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'center',
  },
  statusText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default PatientRecordsScreen;
