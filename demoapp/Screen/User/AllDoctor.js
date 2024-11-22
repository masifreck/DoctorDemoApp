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
      image:
        'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1731581715~exp=1731585315~hmac=b61fe62d1452fa5aa992954421ac6ae5e10f741e24ffa95bdffdd38af203af29&w=360',
    },
    {
      name: 'Dr. Jessica Turner',
      specialty: 'Gynecologist',
      location: "Women's Clinic, Seattle, USA",
      rating: 4.9,
      reviews: 127,
      Experience: '1+ years',
      image:
        'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1731581715~exp=1731585315~hmac=b61fe62d1452fa5aa992954421ac6ae5e10f741e24ffa95bdffdd38af203af29&w=360',
    },
    {
      name: 'Dr. Michael Johnson',
      specialty: 'Orthopedic Surgery',
      location: 'Maple Associates, NY, USA',
      rating: 4.7,
      reviews: 5223,
      Experience: '11+ years',
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

      image:
        'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1731581715~exp=1731585315~hmac=b61fe62d1452fa5aa992954421ac6ae5e10f741e24ffa95bdffdd38af203af29&w=360',
    },
  ];

  const treatments = [
    "General Surgery",
    "Internal Medicine",
    "Psychiatry",
    "Dermatology",
    "Obstetrics and Gynecology",
    "Urology",
    "Nephrology",
    "Cardiothoracic Surgery",
    "Vascular Surgery",
    "Cardiology",
    "Endocrine Surgery",
    "Endocrinology",
    "Gastric Surgery",
    "Gastroenterology",
    "Hepatology",
    "Neurosurgery",
    "Neurology",
    "Orthopedics",
    "Oncosurgery",
    "Oncology",
    "Rheumatology",
    "Pediatric Surgery",
    "Plastic Surgery",
    "Dentistry",
    "Sports Injury",
    "Nuclear Medicine",
    "Medical Genetics",
    "Hematology",
    "Neonatology",
    "Interventional Radiology",
    "Maternal-Fetal Medicine"
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
        <TextInput
          style={styles.searchInput}
          placeholder="Search doctor, Treatment..."
          placeholderTextColor="gray"
        />
        <Icon
          name="search"
          size={20}
          color="#9CA3AF"
          style={styles.searchIcon}
        />
      </View>

      <View style={styles.filterContainer}>
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
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{filteredDoctors.length} founds</Text>
        <TouchableOpacity onPress={openModal}>
          <Text style={styles.sortText}>
            Default <MaterialIcons name="sort" size={16} color="gray" />
          </Text>
        </TouchableOpacity>
      </View>

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
              <Text style={styles.doctorSpecialty}>{doctor.Experience}</Text>
              <Text style={styles.doctorLocation}>
                <MaterialIcons name="location-on" size={16} color="red" />{' '}
                {doctor.location}
              </Text>
              {/* <View style={styles.ratingContainer}>
                <Icon name="star" size={16} color="gold" />
                <Text style={styles.ratingText}>{doctor.rating}</Text>
                <Text style={styles.reviewText}>
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
    marginVertical: 12,
    position: 'relative',
  },
  searchInput: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 16,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#F1F5F9', // Light gray for input background
    fontSize: 14,
    color: '#334155', // Text color
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2, // For Android shadow
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    top: 12,
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
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginLeft: 5,
    marginRight: 5
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
    backgroundColor: '#F3F4F6',
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  doctorLocation: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 8,
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
