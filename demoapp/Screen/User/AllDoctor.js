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
      image:
        'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1731581715~exp=1731585315~hmac=b61fe62d1452fa5aa992954421ac6ae5e10f741e24ffa95bdffdd38af203af29&w=360',
    },
    {
      name: 'Dr. Jessica Turner',
      specialty: 'Gynecologist',
      location: "Women's Clinic, Seattle, USA",
      rating: 4.9,
      reviews: 127,
      image:
        'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1731581715~exp=1731585315~hmac=b61fe62d1452fa5aa992954421ac6ae5e10f741e24ffa95bdffdd38af203af29&w=360',
    },
    {
      name: 'Dr. Michael Johnson',
      specialty: 'Orthopedic Surgery',
      location: 'Maple Associates, NY, USA',
      rating: 4.7,
      reviews: 5223,
      image:
        'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1731581715~exp=1731585315~hmac=b61fe62d1452fa5aa992954421ac6ae5e10f741e24ffa95bdffdd38af203af29&w=360',
    },
    {
      name: 'Dr. Emily Walker',
      specialty: 'Pediatrics',
      location: 'Serenity Pediatrics Clinic',
      rating: 5,
      reviews: 405,
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
              <Text style={styles.doctorLocation}>
                <MaterialIcons name="location-on" size={16} color="gray" />{' '}
                {doctor.location}
              </Text>
              <View style={styles.ratingContainer}>
                <Icon name="star" size={16} color="gold" />
                <Text style={styles.ratingText}>{doctor.rating}</Text>
                <Text style={styles.reviewText}>
                  ({doctor.reviews} Reviews)
                </Text>
              </View>
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
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
  },
  searchContainer: {
    marginTop: 16,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  searchInput: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 16,
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: '#e5e7eb',
    color: '#6b7280',
  },
  filterContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  filterButtonActive: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    backgroundColor: '#10b981',
  },
  filterButtonText: {
    color: '#10b981',
  },
  filterButtonTextActive: {
    color: '#ffffff',
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#10b981',
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  resultText: {
    color: '#6b7280',
  },
  sortText: {
    color: '#6b7280',
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorList: {
    marginTop: 16,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5
  },
  doctorImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 16,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  doctorSpecialty: {
    color: '#6b7280',
    marginTop: 4,
  },
  doctorLocation: {
    color: '#9ca3af',
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    color: '#10b981',
    marginLeft: 4,
  },
  reviewText: {
    color: '#9ca3af',
    marginLeft: 4,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  modalItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  modalItemText: {
    fontSize: 16,
    color: '#1f2937',
  },
  modalCloseButton: {
    padding: 10,
    backgroundColor: '#10b981',
    borderRadius: 8,
    marginTop: 16,
  },
  modalCloseText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default AllDoctor;
