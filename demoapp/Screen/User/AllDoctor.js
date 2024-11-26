import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AllDoctor = ({navigation}) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility
  const [selectedTreatment, setSelectedTreatment] = useState(''); // State to hold selected treatment

  const doctors = [
    {
      name: 'Dr. David Patel',
      specialty: 'Cardiologist',
      location: 'Cardiology Center, USA',
      rating: 5,
      reviews: 1872,
      Experience: '15+ years',
      Followership: 'electrophysiology, care hospital Hyderabad.',
      Degree: 'MBBS',
      image:
        'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1731581715~exp=1731585315~hmac=b61fe62d1452fa5aa992954421ac6ae5e10f741e24ffa95bdffdd38af203af29&w=360',
    },
    {
      name: 'Dr. Jessica Turner',
      specialty: 'Gynecologist',
      location: "Women's Clinic, Seattle, USA",
      rating: 4.9,
      reviews: 127,
      Degree: 'MBBS',
      Experience: '1+ years',
      Followership: 'electrophysiology, care hospital Hyderabad.',
      image:
        'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1731581715~exp=1731585315~hmac=b61fe62d1452fa5aa992954421ac6ae5e10f741e24ffa95bdffdd38af203af29&w=360',
    },
    {
      name: 'Dr. Michael Johnson',
      specialty: 'Orthopedic Surgery',
      location: 'Maple Associates, NY, USA',
      rating: 4.7,
      reviews: 5223,
      Degree: 'MBBS',
      Experience: '11+ years',
      Followership: 'electrophysiology, care hospital Hyderabad.',
      image:
        'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1731581715~exp=1731585315~hmac=b61fe62d1452fa5aa992954421ac6ae5e10f741e24ffa95bdffdd38af203af29&w=360',
    },
    {
      name: 'Dr. Emily Walker',
      specialty: 'Pediatrics',
      location: 'Serenity Pediatrics Clinic',
      rating: 5,
      reviews: 405,
      Experience: '13+ years',
      Degree: 'MBBS',
      Followership: 'electrophysiology, care hospital Hyderabad.',
      image:
        'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1731581715~exp=1731585315~hmac=b61fe62d1452fa5aa992954421ac6ae5e10f741e24ffa95bdffdd38af203af29&w=360',
    },
  ];

  const treatments = [
    'General Surgery',
    'Internal Medicine',
    'Pediatrics',
    'Psychiatry',
    'Dermatology',
    'Obstetrics and Gynecology',
    'Urology',
    'Nephrology',
    'Cardiothoracic Surgery',
    'Vascular Surgery',
    'Cardiology',
    'Endocrine Surgery',
    'Endocrinology',
    'Gastric Surgery',
    'Gastroenterology',
    'Hepatology',
    'Neurosurgery',
    'Neurology',
    'Orthopedics',
    'Oncosurgery',
    'Oncology',
    'Rheumatology',
    'Pediatric Surgery',
    'Plastic Surgery',
    'Dentistry',
    'Sports Injury',
    'Nuclear Medicine',
    'Medical Genetics',
    'Hematology',
    'Neonatology',
    'Interventional Radiology',
    'Maternal-Fetal Medicine',
  ];

  const filteredDoctors =
    selectedFilter === 'All'
      ? doctors
      : doctors.filter(doctor => doctor.specialty === selectedFilter);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const selectTreatment = treatment => {
    setSelectedTreatment(treatment);
    setSelectedFilter(treatment);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={24}
          color="gray"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>All Doctors</Text>
        <View style={{width: 24}}></View>
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
          // value={searchQuery}
          // onChangeText={setSearchQuery}
        />
        {/* Filter button */}
        <TouchableOpacity onPress={openModal}>
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

      {/* <View style={styles.filterContainer}>
        <TouchableOpacity
          style={
            selectedFilter === 'All'
              ? styles.filterButtonActive
              : styles.filterButton
          }
          onPress={() => setSelectedFilter('All')}>
          <Text
            style={
              selectedFilter === 'All'
                ? styles.filterButtonTextActive
                : styles.filterButtonText
            }>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selectedFilter === 'General'
              ? styles.filterButtonActive
              : styles.filterButton
          }
          onPress={() => setSelectedFilter('General')}>
          <Text
            style={
              selectedFilter === 'General'
                ? styles.filterButtonTextActive
                : styles.filterButtonText
            }>
            General
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selectedFilter === 'Cardiologist'
              ? styles.filterButtonActive
              : styles.filterButton
          }
          onPress={() => setSelectedFilter('Cardiologist')}>
          <Text
            style={
              selectedFilter === 'Cardiologist'
                ? styles.filterButtonTextActive
                : styles.filterButtonText
            }>
            Cardiologist
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selectedFilter === 'Dentist'
              ? styles.filterButtonActive
              : styles.filterButton
          }
          onPress={() => setSelectedFilter('Dentist')}>
          <Text
            style={
              selectedFilter === 'Dentist'
                ? styles.filterButtonTextActive
                : styles.filterButtonText
            }>
            Dentist
          </Text>
        </TouchableOpacity>
      </View> */}

      {/* <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{filteredDoctors.length} founds</Text>
        <TouchableOpacity onPress={openModal}>
          <Text style={styles.sortText}>
            Default <MaterialIcons name="sort" size={16} color="gray" />
          </Text>
        </TouchableOpacity>
      </View> */}

      {/* Modal for selecting treatment */}
      <Modal
        visible={isModalVisible}
        onRequestClose={closeModal}
        transparent={true}
        animationType="fade">
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              <MaterialIcons
                name="arrow-back"
                size={24}
                color="gray"
                onPress={closeModal}
              />
              <Text style={styles.headerTitle}>View All Treatments</Text>
              <View style={{width: 24}}></View>
            </View>
            <ScrollView style={styles.modalList}>
              {treatments.map((treatment, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.modalItem}
                  onPress={() => selectTreatment(treatment)}>
                  <Text style={styles.modalItemText}>{treatment}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              onPress={closeModal}
              style={styles.modalCloseButton}>
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView style={styles.doctorList}>
        {filteredDoctors.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            style={styles.doctorCard}
            onPress={() => navigation.navigate('Doctor', {doctor})}>
            {/* <Image source={{uri: doctor.image}} style={styles.doctorImage} /> */}
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
              <Text style={styles.doctorExperience}>{doctor.Experience}</Text>
              {/* <Text style={styles.doctorLocation}>
                <MaterialIcons name="location-on" size={18} color="red" />{' '}
                {doctor.location}
              </Text> */}
              {/* <View style={styles.ratingContainer}>
                <Icon name="star" size={16} color="gold" />
                <Text style={styles.ratingText}>{doctor.rating}</Text>
                <Text style={styles.reviewText}>
                  {' '}
                  ({doctor.reviews} Reviews)
                </Text>
              </View> */}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // White background for a clean design
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E293B', // Darker shade for better contrast
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
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#10b981',
    backgroundColor: '#ffffff', // White background for inactive buttons
  },
  filterButtonActive: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#10b981', // Green for active state
  },
  filterButtonText: {
    fontSize: 14,
    color: '#10b981',
  },
  filterButtonTextActive: {
    fontSize: 14,
    color: '#ffffff',
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  resultText: {
    fontSize: 14,
    color: '#64748B',
  },
  sortText: {
    fontSize: 14,
    color: '#10b981',
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorList: {
    marginTop: 16,
  },
  doctorCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2, // For Android shadow
    padding: 16,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
    backgroundColor: '#F3F4F6', // Placeholder background for image
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '600',
    marginBottom: 4,
  },
  doctorExperience: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 4,
  },
  doctorLocation: {
    fontSize: 15,
    color: '#94A3B8',
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingText: {
    fontSize: 14,
    color: '#F59E0B', // Gold color for rating
    marginLeft: 4,
    fontWeight: '600',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker backdrop
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1E293B',
  },
  modalItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  modalItemText: {
    fontSize: 16,
    color: '#1E293B',
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: '#10b981',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  modalCloseText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default AllDoctor;
