import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AllHospital = ({ navigation }) => {
  const hospitals = [
    {
      id: 1,
      name: "Sunrise Health Clinic",
      address: "123 Oak Street, CA 98765",
      distance: "2.5 km/40min",
      type: "Hospital",
      rating: 5.0,
      reviews: 128,
      imageUri: "https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Golden Cardiology Center",
      address: "555 Bridge Street, Golden Gate",
      distance: "2.5 km/40min",
      type: "Clinic",
      rating: 4.9,
      reviews: 58,
      imageUri: "https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        name: "Golden Cardiology Center",
        address: "555 Bridge Street, Golden Gate",
        distance: "2.5 km/40min",
        type: "Clinic",
        rating: 4.9,
        reviews: 58,
        imageUri: "https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={25} color="#6B7280"  onPress={() => navigation.goBack()}/>
        <Text style={styles.headerTitle}>All Hospitals</Text>
        <View style={{ width: 20 }}></View>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
        <TextInput
          placeholder="Search City, Hospital, Treatment"
          style={styles.searchInput}
          placeholderTextColor={'#000'}
        />
      </View>
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>532 founds</Text>
        <View style={styles.sortContainer}>
          <Text style={styles.sortText}>Default</Text>
          <Icon name="sort" size={20} color="#6B7280" />
        </View>
      </View>
      {hospitals.map(hospital => (
        <TouchableOpacity
          key={hospital.id}
          onPress={() => navigation.navigate('DoctorDetails', {hospital})}
       
        >
          <View style={styles.card}>
            <Image source={{ uri: hospital.imageUri }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{hospital.name}</Text>
              <Text style={styles.cardAddress}>
                <Icon name="map-marker" size={16} color="#ff7e75" /> {hospital.address}
              </Text>
              <View style={styles.cardRating}>
                <Text style={styles.cardRatingText}>
                  <Icon name="star" size={16} color="#FBBF24" /> {hospital.rating}
                </Text>
                <Text style={styles.cardReviews}>({hospital.reviews} Reviews)</Text>
              </View>
              <View style={styles.cardDetails}>
                <Text style={styles.cardDetailText}>
                  <Icon name="road" size={16} color="#6B7280" /> {hospital.distance}
                </Text>
                <Text style={styles.cardDetailText}>
                  <Icon name="hospital-o" size={16} color="#6B7280" /> {hospital.type}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginTop: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#6B7280',
  },
  resultsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  resultsText: {
    color: '#6B7280',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    color: '#6B7280',
    marginRight: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  cardAddress: {
    color: '#6B7280',
    marginTop: 4,
  },
  cardRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  cardRatingText: {
    color: '#FBBF24',
  },
  cardReviews: {
    color: '#6B7280',
    marginLeft: 8,
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  cardDetailText: {
    color: '#6B7280',
    marginRight: 16,
  },
  cardDetailTex: {
    color: '#3686ff',
    marginRight: 16,
    fontWeight: '600',  
  },
  ViewAll: {
    backgroundColor: '#fff',  
    paddingVertical: 7,      
    paddingHorizontal: 18,
    borderColor: '#000',
    borderWidth: 1,  
    borderRadius: 8,          
    marginLeft: 20,           
    margin: 10,
    alignItems: 'center',    

  },
});

export default AllHospital;