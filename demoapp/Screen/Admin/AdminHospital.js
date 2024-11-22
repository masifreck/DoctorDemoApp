import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AllHospital = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const [modalVisible, setModalVisible] = useState(false); // State to manage modal visibility
  const [newHospital, setNewHospital] = useState({
    name: '',
    location: '',
    contact: '',
    treatment: '',
    remark: '',
  });

  const hospitals = [
    {
      id: 1,
      name: 'Sir Ganga Ram Hospital',
      details: {
        hospitalName: 'Sir Ganga Ram Hospital, Sir Ganga Ram Hospital Marg',
        address: 'Old Rajinder Nagar, New Delhi-110060',
      },
      distance: '2.5 km/40min',
      type: 'Hospital',
      rating: 5.0,
      reviews: 128,
      imageUri: 'https://via.placeholder.com/150',
      contact: '9006868659,293749377,37739333',
      Treatment:
        'The hospital has already been empanelled for Cardiology. Now empanelment/direct billing is extended for Orthopedics including joint replacements & Gastroenterology including liver transplant.',
      Remark:
        'IP Services: 10% special discountMoolchandSOC 2019 for Room Rent, Surgeon Fees,OT Charges,AnesthesiaCharges, Lab &Radiology Services& 100% discounton Admission andMRD charges',
    },
  ];

  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.details.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dialPhone = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  const handleAddHospital = () => {
    console.log(newHospital);
    setModalVisible(false); // Close the modal
    setNewHospital({ name: '', location: '', contact: '', treatment: '', remark: '' }); // Reset fields
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <AntDesign
            name="arrowleft"
            size={25}
            color="#6B7280"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>All Admin Hospitals</Text>
          <View style={{ width: 20 }}></View>
        </View>

        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
          <TextInput
            placeholder="Search City, Hospital, Treatment"
            style={styles.searchInput}
            placeholderTextColor={'#000'}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}> founds</Text>
          <TouchableOpacity>
            <Text style={styles.sortText}>
              Default <MaterialIcons name="sort" size={16} color="gray" />
            </Text>
          </TouchableOpacity>
        </View>

        {filteredHospitals.map((hospital) => (
          <TouchableOpacity
            key={hospital.id}
            onPress={() => navigation.navigate('AdminManage', { hospital })}
          >
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{hospital.name}</Text>
                <Text style={styles.cardAddress}>
                  <Icon name="map-marker" size={18} color="#ff7e75" />{' '}
                  {hospital.details.address}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.fab}>
        <AntDesign name="plus" size={30} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Modal for adding hospital */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add Doctor Details</Text>

            <TextInput
              style={styles.input}
              placeholder="Hospital Name"
              placeholderTextColor={'#000'}
              value={newHospital.name}
              onChangeText={(text) => setNewHospital({ ...newHospital, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              placeholderTextColor={'#000'}
              value={newHospital.location}
              onChangeText={(text) => setNewHospital({ ...newHospital, location: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Number"
              placeholderTextColor={'#000'}
              keyboardType="phone-pad"
              value={newHospital.contact}
              onChangeText={(text) => setNewHospital({ ...newHospital, contact: text })}
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Treatment"
              placeholderTextColor={'#000'}
              multiline
              numberOfLines={4}
              value={newHospital.treatment}
              onChangeText={(text) => setNewHospital({ ...newHospital, treatment: text })}
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Remark"
              placeholderTextColor={'#000'}
              multiline
              numberOfLines={4}
              value={newHospital.remark}
              onChangeText={(text) => setNewHospital({ ...newHospital, remark: text })}
            />

            {/* Submit Button */}
            <TouchableOpacity onPress={handleAddHospital} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>

            {/* Close Button */}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  scrollContainer: {
    paddingBottom: 100, // Ensures content doesn't hide behind the floating button
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  resultText: {
    color: '#6b7280',
  },
  sortText: {
    color: '#6b7280',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  cardAddress: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#10B981',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 8,
    color: '#000'
  },
  submitButton: {
    backgroundColor: '#10B981',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ff6347',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 12,
    padding: 8,
  },
});

export default AllHospital;