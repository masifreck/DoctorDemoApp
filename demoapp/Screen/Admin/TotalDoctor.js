import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary } from 'react-native-image-picker';

const TotalDoctor = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState(null);
  const [form, setForm] = useState({
    name: '',
    degree: '',
    experience: '',
    fellowship: '',
    about: '',
    degreeImage: null,
  });

  // Mock data for doctors
  const doctors = [
    {
      name: 'James Robinson',
      degree: 'MD, Orthopedic Surgery',
      experience: '10 years',
      fellowship: 'Elite Ortho Clinic',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpNgQoWK8D1zAzVMaPAS2ATw1Vv-twGXUxQ&s',
    },
    {
      name: 'Sarah Johnson',
      degree: 'MBBS, Cardiology',
      experience: '7 years',
      fellowship: 'HeartCare Hospital',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpNgQoWK8D1zAzVMaPAS2ATw1Vv-twGXUxQ&s',
    },
  ];

  // Filtered doctors list
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter ? doctor.degree.includes(filter) : true;
    return matchesSearch && matchesFilter;
  });

  // Handle input changes
  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleAddDoctor = () => {
    // Add doctor logic
    console.log(form);
    setModalVisible(false);
    setForm({
      name: '',
      degree: '',
      experience: '',
      fellowship: '',
      about: '',
      degreeImage: null,
    });
  };

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
        <View style={{ padding: 16 }}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={25} color="#374151" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Admin All Doctors</Text>
            <View />
          </View>

          {/* Search Bar */}
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name"
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          {/* Filter Section */}
          <View style={styles.filterSection}>
            {['All', 'Orthopedic', 'Cardiology'].map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.filterButton,
                  filter === category && styles.filterButtonActive,
                ]}
                onPress={() => setFilter(category === 'All' ? null : category)}
              >
                <Text
                  style={[
                    styles.filterButtonText,
                    filter === category && styles.filterButtonTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Doctor Cards */}
          {filteredDoctors.map((doctor, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Image
                  source={{ uri: doctor.image }}
                  style={styles.cardImage}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{doctor.name}</Text>
                  <Text style={styles.cardSubTitle}>{doctor.degree}</Text>
                  <Text style={styles.cardDetail}>
                    Experience: {doctor.experience}
                  </Text>
                  <Text style={styles.cardDetail}>
                    Fellowship: {doctor.fellowship}
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Admindoctor')}>
                <Text style={styles.cardButton}>View Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.fab}
      >
        <AntDesign name="plus" size={30} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Doctor</Text>
            {['name', 'degree', 'experience', 'fellowship', 'about'].map((field, index) => (
              <TextInput
                key={index}
                style={styles.input}
                placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                placeholderTextColor="#9CA3AF"
                value={form[field]}
                onChangeText={(value) => handleInputChange(field, value)}
              />
            ))}
            <TouchableOpacity style={styles.addButton} onPress={handleAddDoctor}>
              <Text style={styles.addButtonText}>Add Doctor</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  cardSubTitle: {
    fontSize: 14,
    color: '#6B7280',
    marginVertical: 4,
  },
  cardDetail: {
    fontSize: 13,
    color: '#6B7280',
  },
  cardButton: {
    color: '#3B82F6',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'right',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#111827',
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
    color: '#111827',
  },
  imagePicker: {
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  imagePickerText: {
    color: '#6B7280',
    fontWeight: '500',
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#10B981',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  cancelButton: {
    marginTop: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#6B7280',
    fontWeight: '500',
  },
  searchInput: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
    color: '#111827',
  },
  filterSection: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  filterButton: {
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#10B981',
  },
  filterButtonText: {
    color: '#6B7280',
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
  },
});

export default TotalDoctor;
