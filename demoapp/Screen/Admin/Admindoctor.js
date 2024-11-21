import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Admindoctor = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dr. James Robinson</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Doctor Card */}
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
              <Icon name="map-marker-alt" size={12} color="#6B7280" />
              <Text style={styles.locationText}>Elite Ortho Clinic, USA</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Details Section */}
      <View style={styles.details}>
        <Text style={styles.detailsHeading}>Hospital Details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date:</Text>
          <Text style={styles.detailValue}>25/08/22 - 08:00 AM - 06:00 PM</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Duration:</Text>
          <Text style={styles.detailValue}>30 Minutes</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Payment:</Text>
          <Text style={styles.detailValue}>Card / Cash</Text>
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  editText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3B82F6',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  cardDate: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
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
    marginBottom: 20,
  },
  detailsHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  saveButton: {
    backgroundColor: '#10B981',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  saveText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default Admindoctor;
