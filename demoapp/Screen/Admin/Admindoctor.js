import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary } from 'react-native-image-picker';

const Admindoctor = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState({
    name: 'James Robinson',
    degree: 'Orthopedic Surgery',
    experience: '10 years',
    fellowship: 'Elite Ortho Clinic, USA',
    about: 'Specialist in orthopedic treatments.',
    profileImage:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });

  // Handle field input changes
  const handleInputChange = (field, value) => {
    setDoctorDetails({ ...doctorDetails, [field]: value });
  };

  // Handle photo picker
  const handlePhotoPicker = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setDoctorDetails({ ...doctorDetails, profileImage: response.assets[0].uri });
      }
    });
  };

  // Save changes and exit edit mode
  const handleSave = () => {
    setIsEditing(false);
    console.log('Updated Doctor Details:', doctorDetails);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {isEditing ? 'Edit Doctor Details' : 'Dr. James Robinson'}
        </Text>
        <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
          <Text style={styles.editText}>{isEditing ? 'Cancel' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>

      {/* Doctor Details */}
      <View style={styles.card}>
        {isEditing ? (
          <TouchableOpacity style={styles.imagePicker} onPress={handlePhotoPicker}>
            <Image
              source={{ uri: doctorDetails.profileImage }}
              style={styles.profileImage}
            />
            <Text style={styles.imagePickerText}>Change Photo</Text>
          </TouchableOpacity>
        ) : (
          <Image
            source={{ uri: doctorDetails.profileImage }}
            style={styles.profileImage}
          />
        )}

        {['name', 'degree', 'experience', 'fellowship', 'about'].map((field, index) => (
          <View key={index} style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={doctorDetails[field]}
                onChangeText={(value) => handleInputChange(field, value)}
                placeholder={`Enter ${field}`}
              />
            ) : (
              <Text style={styles.fieldValue}>{doctorDetails[field]}</Text>
            )}
          </View>
        ))}
      </View>

      {/* Save Button */}
      {isEditing && (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save Changes</Text>
        </TouchableOpacity>
      )}
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 16,
  },
  imagePicker: {
    alignItems: 'center',
    marginBottom: 16,
  },
  imagePickerText: {
    marginTop: 8,
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '500',
  },
  fieldContainer: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#111827',
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
