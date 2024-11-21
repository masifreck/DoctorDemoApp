import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AdminUserDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>James Robinson</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* User Card */}
      <View style={styles.card}>
        <Text style={styles.cardDate}>May 22, 2023 - 10:00 AM</Text>
        <View style={styles.cardContent}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>James Robinson</Text>
            <Text style={styles.speciality}>Orthopedic Surgery</Text>
            <View style={styles.location}>
              <Icon name="map-marker-alt" size={14} color="#6B7280" />
              <Text style={styles.locationText}>Elite Ortho Clinic, USA</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Details Section */}
      <View style={styles.details}>
        <Text style={styles.detailsHeading}>Appointment Details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date</Text>
          <Text style={styles.detailValue}>25/08/22 - 08:00 AM - 06:00 PM</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Duration</Text>
          <Text style={styles.detailValue}>30 MIN</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Payment</Text>
          <Text style={styles.detailValue}>Card / Cash</Text>
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  editText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4CAF50',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  cardDate: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 10,
    fontWeight: '600',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  speciality: {
    fontSize: 14,
    color: '#6B7280',
    marginVertical: 4,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 13,
    color: '#6B7280',
    marginLeft: 5,
  },
  details: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  detailsHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  detailLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  saveText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});

export default AdminUserDetails;
