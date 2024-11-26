import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HelpSupport = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null); // Track the expanded item index

  const openModal = () => setModalVisible(true);
  const closeModal = () => {
    Keyboard.dismiss();
    setModalVisible(false);
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      Alert.alert('Validation Error', 'Name is required!');
      return;
    }
    if (!number.trim() || !/^\d{10,}$/.test(number)) {
      Alert.alert(
        'Validation Error',
        'Please enter a valid number with at least 10 digits!',
      );
      return;
    }
    Alert.alert('Success', `Name: ${name}, Number: ${number}`);
    closeModal();
    setName('');
    setNumber('');
  };

  const data = [
    {
      id: 1,
      title: 'Booking a new Appointment',
      description: 'Learn how to book a new appointment.',
    },
    {
      id: 2,
      title: 'Existing Appointment',
      description: 'Manage your current appointments.',
    },
    {
      id: 3,
      title: 'Online consultations',
      description: 'Get details about online consultations.',
    },
    {id: 4, title: 'Feedbacks', description: 'Share your feedback with us.'},
    {id: 5, title: 'Medicine orders', description: 'Order medicines online.'},
    {
      id: 6,
      title: 'Diagnostic Tests',
      description: 'Book diagnostic tests easily.',
    },
    {
      id: 7,
      title: 'Health plans',
      description: 'Explore various health plans.',
    },
    {
      id: 8,
      title: 'Have a feature in mind',
      description: 'Suggest new features for our app.',
    },
    {id: 9, title: 'Other issues', description: 'Report any other issues.'},
  ];

  const toggleExpand = index => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle expanded state
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#4B5563" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Help & Support</Text>
        <View style={styles.newBadge}>
          <TouchableOpacity onPress={openModal}>
            <Text style={styles.newBadgeText}>Services</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Section */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Do you have any issues with...?"
          placeholderTextColor="#9CA3AF"
        />
        <Icon
          name="search"
          size={20}
          color="#808080"
          style={styles.searchIcon}
        />
      </View>

      {/* Issues List */}
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <View>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => toggleExpand(index)}>
              <Text style={styles.listItemText}>{item.title}</Text>
              <Icon
                name={expandedIndex === index ? 'chevron-up' : 'chevron-down'}
                size={24}
                color="#9CA3AF"
              />
            </TouchableOpacity>
            {expandedIndex === index && (
              <View style={styles.expandedContent}>
                <Text style={styles.descriptionText}>{item.description}</Text>
              </View>
            )}
          </View>
        )}
        contentContainerStyle={styles.list}
      />

      {/* Modal for Inputs */}
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Enter Details</Text>

          <TextInput
            style={styles.modalInput}
            placeholder="Name"
            placeholderTextColor="#9CA3AF"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.modalInput}
            placeholder="Number"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={number}
            onChangeText={setNumber}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.cancelText}>Cancel</Text>
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
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4B5563',
  },
  newBadge: {
    backgroundColor: '#4B5563',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  newBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    paddingRight: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    color: '#000',
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
  },
  list: {
    paddingBottom: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  listItemText: {
    fontSize: 16,
    color: '#4B5563',
  },
  expandedContent: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
  },
  descriptionText: {
    fontSize: 14,
    color: '#6B7280',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  modalInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#00BFA6',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
  },
  cancelText: {
    fontSize: 16,
    color: '#EF4444',
    fontWeight: 'bold',
  },
});

export default HelpSupport;
