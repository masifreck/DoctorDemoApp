import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Modal, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter ? doctor.degree.includes(filter) : true;
    return matchesSearch && matchesFilter;
  });

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleAddDoctor = () => {
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
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={25} color="#374151" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Admin All Doctors</Text>
            <View />
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Icon name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
            <TextInput
              placeholder="Search City, Hospital, Treatment"
              style={styles.searchInput}
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity>
              <View style={styles.filterButton}>
                <AntDesign name="filter" size={20} color="#6B7280" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Filter Section */}
          {/* <View style={styles.filterSection}>
            {['All', 'Orthopedic', 'Cardiology'].map((category) => (
              <TouchableOpacity
                key={category}
                style={[styles.filterButton, filter === category && styles.filterButtonActive]}
                onPress={() => setFilter(category === 'All' ? null : category)}
              >
                <Text style={[styles.filterButtonText, filter === category && styles.filterButtonTextActive]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View> */}

          {/* Doctor Cards */}
          {filteredDoctors.map((doctor, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Image source={{ uri: doctor.image }} style={styles.cardImage} />
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>{doctor.name}</Text>
                  <Text style={styles.cardSubTitle}>{doctor.degree}</Text>
                  <Text style={styles.cardDetail}>Experience: {doctor.experience}</Text>
                  <Text style={styles.cardDetail}>Fellowship: {doctor.fellowship}</Text>
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
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.fab}>
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
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
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
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  filterSection: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  filterButtonActive: {
    backgroundColor: '#10B981',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#6B7280',
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
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
  cardDetails: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
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
});

export default TotalDoctor;
