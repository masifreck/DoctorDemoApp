import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dropdown} from 'react-native-element-dropdown';
const AllHospital = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const treatments = [
    {label: 'CTVS', value: 'CTVS'},
    {label: 'Neurology', value: 'Neurology'},
    {label: 'Neurosurgery', value: 'Neurosurgery'},
    {label: 'Orthopedics', value: 'Orthopedics'},
    {label: 'Pediatrics surgery', value: 'Pediatrics surgery'},
    {label: 'Gastroenterology', value: 'Gastroenterology'},
    {label: 'GI surgery', value: 'GI surgery'},
    {label: 'General surgery', value: 'General surgery'},
    {label: 'Ophthalmology', value: 'Ophthalmology'},
    {label: 'Nephrology', value: 'Nephrology'},
    {label: 'Urology', value: 'Urology'},
  ];

  const hospitals = [
    {
      id: 1,
      name: 'Sir Ganga Ram Hospital',
      details: {
        hospitalName: 'Sir Ganga Ram Hospital, Sir Ganga Ram Hospital Marg',
        address: 'Old Rajinder Nagar, New Delhi-110060',
        telephone: {
          landlines: ['25751111', '25861463', '42251252'],
          contacts: [
            {
              name: 'Sh. Deepak Golani',
              position: 'Senior Manager-Marketing',
              mobile: '9810124662',
              office: '011-42252017',
              email: 'deepak.golani@sgrh.com',
            },
            {
              name: 'Sh. Deepak Jain',
              mobile: '9560433511',
            },
            {
              name: 'Corporate Assistance Desk',
              email: 'corporate.assistance@sgrh.com',
            },
            {
              name: 'Sh. Pawan Kumar Gautam',
              position: 'Executive Finance',
              extension: '011-42251689',
              email: 'pawan.gautam@sgrh.com',
            },
          ],
        },
        diseasesEmpanelled: {
          general:
            'The hospital has already been empanelled for Cardiology. Now empanelment/direct billing is extended for Orthopedics including joint replacements & Gastroenterology including liver transplant.',
        },
        remark:
          '10% discount on total bill excluding Drugs, Disposables and Implants.',
      },
      distance: '2.5 km/40min',
      type: 'Hospital',
      rating: 5.0,
      reviews: 128,
      imageUri:
        'https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Shri Mool Chand Kharaiti Ram Hospital & Ayurvedic Research Institute',
      details: {
        hospitalName:
          'Shri Mool Chand Kharaiti Ram Hospital & Ayurvedic Research Institute',
        address: 'Lajpat Nagar-III, New Delhi-110024',
        telephone: {
          landlines: ['25751111', '25861463', '42251252'],
        },
        diseasesEmpanelled: {
          general: 'General treatment and Ayurvedic research.',
        },
        remark: 'Specialized in Ayurvedic treatments and research.',
      },
      distance: '2.5 km/40min',
      type: 'Clinic',
      rating: 4.9,
      reviews: 58,
      imageUri:
        'https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Batra Hospital & Medical Research Centre',
      details: {
        hospitalName: 'Batra Hospital & Medical Research Centre',
        address:
          'Tughlakabad Instl. Area, Mehrauli-Badarpur Road New Delhi-110062',
        telephone: {
          landlines: ['25751111', '25861463', '42251252'],
        },
        diseasesEmpanelled: {
          general:
            'Advanced medical research and treatment across multiple disciplines.',
        },
        remark: 'Focus on research-based treatments.',
      },
      distance: '2.5 km/40min',
      type: 'Clinic',
      rating: 4.9,
      reviews: 58,
      imageUri:
        'https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  // Filter hospitals based on the search query
  const filteredHospitals = hospitals.filter(
    hospital =>
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.details.address
        .toLowerCase()
        .includes(searchQuery.toLowerCase()),
  );

  // Function to handle dialing
  const dialPhone = number => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={25}
          color="#6B7280"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>All Hospitals</Text>
        <View style={{width: 20}}></View>
      </View>
      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={20}
          color="#9CA3AF"
          style={styles.searchIcon}
        />
        {/* Adjusted TextInput width */}
        <TextInput
          placeholder="Search City, Hospital, Treatment"
          style={styles.searchInput}
          placeholderTextColor={'#000'}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {/* Filter button */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View
            style={{
              width: 40, // Fixed width
              height: 40, // Fixed height
              borderRadius: 20, // Rounded button
              backgroundColor: '#F3F4F6', // Background color
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10, // Space between TextInput and Filter button
            }}>
            <AntDesign name="filter" size={20} color="#6B7280" />
          </View>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>{filteredHospitals.length} found</Text>
      </View> */}
      {/* onPress={openModal} */}
      {filteredHospitals.map(hospital => (
        <TouchableOpacity
          key={hospital.id}
          onPress={() => navigation.navigate('DoctorDetails', {hospital})}>
          <View style={styles.card}>
            {/* <Image source={{ uri: hospital.imageUri }} style={styles.cardImage} /> */}
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{hospital.name}</Text>
              <Text style={styles.cardAddress}>
                <Icon name="map-marker" size={18} color="#ff7e75" />{' '}
                {hospital.details.address}
              </Text>

              {/* Hospital Contact Info */}
              <Text style={styles.detailText}>Hospital Name:</Text>
              <Text style={styles.infoText}>
                {hospital.details.hospitalName}
              </Text>
              {/* <Text style={styles.detailText}>Telephone:</Text>
              <Text style={styles.phoneText}>{hospital.details.telephone.number}</Text> */}
              {/* {hospital.details.telephone.landlines.map((number, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.phoneBadge}
                  onPress={() => dialPhone(number)} // Make a call
                >
                  <Icon name="phone" size={14} color="#00A86B" />
                  <Text style={styles.phoneText}>{number}</Text>
                </TouchableOpacity>
              ))} */}
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Search Hospital</Text>
              <AntDesign
                name="close"
                size={20}
                color="#6B7280"
                onPress={() => setModalVisible(false)}
              />
            </View>

            {/* Dropdown */}
            <Text style={styles.dropdownLabel}>Select Treatment</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={treatments}
              itemTextStyle={styles.itemTextStyle}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="All Treatments"
              searchPlaceholder="Search..."
              value={selectedTreatment}
              onChange={item => setSelectedTreatment(item.value)}
            />

            {/* Apply Button */}
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => {
                setModalVisible(false);
                // Add your filter logic here
              }}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
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
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  resultText: {
    color: '#6b7280',
  },
  itemTextStyle: {
    color: '#000', // Black text for all items
    fontSize: 16,
  },
  sortText: {
    color: '#6b7280',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row', // Aligns items in a row
    alignItems: 'center', // Vertically centers the row
    backgroundColor: '#E5E7EB', // Background for the search box
    borderRadius: 10, // Rounded corners
    paddingHorizontal: 15, // Padding for inner content
    height: 50, // Height of the search bar
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 10,
  },

  resultsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  resultsText: {
    color: '#6B7280',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
  },
  cardImage: {
    width: '100%',
    height: 150,
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
    lineHeight: 20,
  },
  detailText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
  },
  infoText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
  },
  phoneBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F9ED',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
  },
  phoneText: {
    marginLeft: 5,
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    
  },
  dropdownLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  dropdown: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 20,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#000',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  applyButton: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AllHospital;
