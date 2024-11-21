import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HospitalDetails = ({ route , navigation }) => {
  const { hospital } = route.params; // Pass hospital object through navigation

  const { name, details, distance, rating, reviews, imageUri } = hospital;

  return (
    <ScrollView style={styles.container}>
      {/* Hospital Image */}

      <View style={styles.upper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerLeft}>
          <AntDesign name="arrowleft" size={25} color="#6B7280" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hospital Details</Text>
        <View style={styles.headerRight} />
      </View>


      <Image source={{ uri: imageUri }} style={styles.image} />

   

      {/* Hospital Name and Rating */}
      <View style={styles.header}>
        <Text style={styles.hospitalName}>{name}</Text>
        {/* <Text style={styles.rating}>Rating: {rating} ({reviews} reviews)</Text> */}
      </View>

      {/* Hospital Address */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address:</Text>
        <Text style={styles.text}>{details.address}</Text>
      </View>

      {/* Contact Numbers */}
      <View style={styles.section}>
        
        <Text style={styles.sectionTitle}>Contact Numbers:</Text>
        <Text style={styles.text}>
          Landline: {details.telephone.landlines.join(', ')}
        </Text>
        {/* {details.telephone.landlines.map((number, index) => (
          <Text key={index} style={styles.text}>Landline: {number} </Text>
        ))} */}
        {details.telephone.contacts && details.telephone.contacts.map((contact, index) => (
          <View key={index} style={styles.contactItem}>
            <Text style={styles.text}>Contact: {contact.name}</Text>
            {contact.position && <Text style={styles.text}>Position: {contact.position}</Text>}
            {contact.mobile && <Text style={styles.text}>Mobile: {contact.mobile}</Text>}
            {contact.office && <Text style={styles.text}>Office: {contact.office}</Text>}
            {contact.email && <Text style={styles.text}>Email: {contact.email}</Text>}
          </View>
        ))}
      </View>

      {/* Diseases Empanelled */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Treatments Offered:</Text>
        <Text style={styles.text}>{details.diseasesEmpanelled.general}</Text>
      </View>

      {/* Remarks */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Remarks:</Text>
        <Text style={styles.text}>{details.remark}</Text>
      </View>

      {/* Distance */}
      {/* <View style={styles.section}>
        <Text style={styles.sectionTitle}>Distance:</Text>
        <Text style={styles.text}>{distance}</Text>
      </View> */}

      {/* Button to call the hospital */}
      <TouchableOpacity style={styles.callButton} onPress={() => navigation.navigate('AllDoctor')}>
        <Text style={styles.callButtonText}>View All Doctors</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  upper: {
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
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },
  headerRight: {
    width: 40, // Empty space for balance
  },
 
  header: {
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  hospitalName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  rating: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  section: {
    padding: 16,
    backgroundColor: '#fff',
    marginVertical: 8,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
  contactItem: {
    marginTop: 8,
  },
  callButton: {
    backgroundColor: '#10b981',
    padding: 15,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  callButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HospitalDetails;
