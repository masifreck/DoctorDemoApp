import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HospitalDetails = ({ route, navigation }) => {
  const { hospital } = route.params; // Pass hospital object through navigation

  const { name, details, distance, rating, reviews, imageUri } = hospital;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <AntDesign name="arrowleft" size={25} color="#6B7280" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hospital Details</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Hospital Image */}
      <Image source={{ uri: imageUri }} style={styles.image} />

      {/* Hospital Name */}
      <View style={styles.hospitalInfoContainer}>
        <Text style={styles.hospitalName}>{name}</Text>
      </View>

      {/* Address Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Address</Text>
        <Text style={styles.cardText}>{details.address}</Text>
      </View>

      {/* Contact Numbers */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contact Numbers</Text>
        <Text style={styles.cardText}>
          Landline: {details.telephone.landlines.join(', ')}
        </Text>
        {details.telephone.contacts &&
          details.telephone.contacts.map((contact, index) => (
            <View key={index} style={styles.contactContainer}>
              <Text style={styles.cardText}>Contact: {contact.name}</Text>
              {contact.position && (
                <Text style={styles.cardText}>Position: {contact.position}</Text>
              )}
              {contact.mobile && (
                <Text style={styles.cardText}>Mobile: {contact.mobile}</Text>
              )}
              {contact.office && (
                <Text style={styles.cardText}>Office: {contact.office}</Text>
              )}
              {contact.email && (
                <Text style={styles.cardText}>Email: {contact.email}</Text>
              )}
            </View>
          ))}
      </View>

      {/* Treatments Offered */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Treatments Offered</Text>
        <Text style={styles.cardText}>{details.diseasesEmpanelled.general}</Text>
      </View>

      {/* Remarks Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Remarks</Text>
        <Text style={styles.cardText}>{details.remark}</Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AllDoctor')}
      >
        <Text style={styles.buttonText}>View All Doctors</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerLeft: {
    width: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
    textAlign: 'center',
  },
  headerRight: {
    width: 40, // Placeholder for alignment
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 10,
  },
  hospitalInfoContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  hospitalName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 22,
  },
  contactContainer: {
    marginTop: 8,
  },
  button: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default HospitalDetails;
