import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImageCarousel from '../component/ImageCarousel';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          {/* <Text style={styles.locationText}>Location</Text> */}
          <View style={styles.locationContainer}>
            {/* <Icon name="map-marker" size={20} color="#FF0000" /> */}
            <Text style={styles.location}>Heal in India </Text>
            {/* <Icon name="chevron-down" size={15} color="#000" /> */}
          </View>
        </View>
        <TouchableOpacity  onPress={() => navigation.navigate('Notification')}>
        <Icon name="bell" size={20} color="#808080" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Hospital , Doctor , Treatment..."
          placeholderTextColor="#808080"
        />
        <Icon name="search" size={20} color="#808080" style={styles.searchIcon} />
      </View>

      <ImageCarousel/>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <Text style={styles.sectionLink}>See All</Text>
      </View>
      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <View key={index} style={styles.category}>
            <View style={[styles.categoryIconContainer, { backgroundColor: category.bgColor }]}>
              <Icon name={category.icon} size={30} color={category.iconColor} />
            </View>
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>All Medical Centers</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllHospital')}>
         <Text style={styles.categoryText}>See All</Text>
       </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.medicalCentersContainer}>
        {medicalCenters.map((center, index) => (
          <View key={index} style={styles.medicalCenter}>
            <Image
              source={{ uri: center.image }}
              style={styles.medicalCenterImage}
            />
            <Text style={styles.medicalCenterText}>{center.name}</Text>
          </View>
        ))}
      </ScrollView>
     
    </View>
  );
};

const categories = [
  { name: 'Dentistry', icon: 'tooth', bgColor: '#FFCCCC', iconColor: '#FF0000' },
  { name: 'Cardiolo..', icon: 'heartbeat', bgColor: '#CCFFCC', iconColor: '#00FF00' },
  { name: 'Pulmono..', icon: 'lungs', bgColor: '#FFCC99', iconColor: '#FF6600' },
  { name: 'General', icon: 'stethoscope', bgColor: '#CCCCFF', iconColor: '#6600CC' },
  { name: 'Neurology', icon: 'brain', bgColor: '#CCFFFF', iconColor: '#00CCCC' },
  { name: 'Gastroen..', icon: 'diagnoses', bgColor: '#CCCCFF', iconColor: '#6600CC' },
  { name: 'Laborato..', icon: 'vial', bgColor: '#FFCCFF', iconColor: '#FF00FF' },
  { name: 'Vaccinat..', icon: 'syringe', bgColor: '#99CCFF', iconColor: '#0066FF' },
];

const medicalCenters = [
  { name: 'Sunrise Health Clinic', image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Golden Cardiology', image: 'https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Golden Cardiology', image: 'https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationText: {
    color: '#808080',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'YourCustomFont', // Replace with the name of your font
    color: '#00BFA6', // Adjust the color to match your design
    textAlign: 'center',

  },
  searchContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  searchInput: {
    width: '100%',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    color: '#808080',
  },
  searchIcon: {
    position: 'absolute',
    top: 14,
    right: 16,
  },
  bannerContainer: {
    position: 'relative',
    backgroundColor: '#CCFFCC',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
  },
  bannerTextContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  bannerSubtitle: {
    color: '#FFFFFF',
  },
  bannerImage: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6b6b6b'
  },
  sectionLink: {
    color: '#000',
    fontWeight: '600',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  category: {
    alignItems: 'center',
    width: '22%',
    marginBottom: 20,
  },
  categoryIconContainer: {
    padding: 20,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 15,
    color: '#424242',
    fontWeight: '500', 
    alignItems: 'center',
    
  },
  medicalCentersContainer: {
    flexDirection: 'row',
  },
  medicalCenter: {
    width: 150,
    marginRight: 16,
    color: '#000'
  },
  medicalCenterImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  medicalCenterText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '500'
  },
});

export default Dashboard;