import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Doctor = ({ route , navigation}) => {
    const { doctor } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <AntDesign name="arrowleft" size={25} color="#6B7280" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Doctor Details</Text>
        <Icon name="heart-o" size={20} color="#6b7280" />
      </View>
      <View style={styles.card}>
        <View style={styles.profile}>
          <Image style={styles.profileImage} source={{ uri: doctor.image }} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{doctor.name}</Text>
            <Text style={styles.profileSpecialty}>{doctor.specialty}</Text>
            <Text style={styles.profileLocation}>
              <Icon name="map-marker" size={14} color="#6b7280" /> {doctor.location}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <View style={styles.statIcon}>
            <Icon name="star" size={20} color="#34d399" />
          </View>
          <Text style={styles.statValue}>rating</Text>
          <Text style={styles.statLabel}>rating</Text>
        </View>
        <View style={styles.stat}>
          <View style={styles.statIcon}>
            <Icon name="comments" size={20} color="#34d399" />
          </View>
          <Text style={styles.statValue}>{doctor.reviews}</Text>
          <Text style={styles.statLabel}>reviews</Text>
        </View>
        <View style={styles.stat}>
          <View style={styles.statIcon}>
            <Icon name="users" size={20} color="#34d399" />
          </View>
          <Text style={styles.statValue}>20+</Text>
          <Text style={styles.statLabel}>experience</Text>
        </View>
        <View style={styles.stat}>
          <View style={styles.statIcon}>
            <Icon name="trophy" size={20} color="#34d399" />
          </View>
          <Text style={styles.statValue}>10+</Text>
          <Text style={styles.statLabel}>Award</Text>
        </View>
      </View>
      {/* un NUber */}
      {/* 102046894395 */}
      
      {/* <View style={styles.section}>
        <Text style={styles.sectionTitle}>About me</Text>
        <Text style={styles.sectionContent}>
          {doctor.name}, a skilled {doctor.specialty} at {doctor.location}. 
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity> */}

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About me</Text>
        <Text style={styles.sectionContent}>
          Dr. David Patel, a dedicated cardiologist, brings a wealth of experience to Golden Gate Cardiology Center in Golden Gate, CA. <Text style={styles.link}>view more</Text>
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hospital</Text>
        <Text style={styles.hospitalName}>Sunrise Health Clinic</Text>
        <Text style={styles.hospitalHours}>Monday-Friday, 08.00 AM-18.00 PM</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.reviewsHeader}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          <Text style={styles.link}>See All</Text>
        </View>
        <View style={styles.review}>
          <Image
            style={styles.reviewImage}
            source={{ uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' }}
          />
          <View style={styles.reviewContent}>
            <Text style={styles.reviewName}>Emily Anderson</Text>
            <View style={styles.reviewRating}>
              <Text style={styles.reviewRatingValue}>5.0</Text>
              <View style={styles.reviewStars}>
                <Icon name="star" size={14} color="#fbbf24" />
                <Icon name="star" size={14} color="#fbbf24" />
                <Icon name="star" size={14} color="#fbbf24" />
                <Icon name="star" size={14} color="#fbbf24" />
                <Icon name="star" size={14} color="#fbbf24" />
              </View>
            </View>
            <Text style={styles.reviewText}>Dr. Patel is a true professional who genuinely cares...</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DateTime',{doctor})}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  profileSpecialty: {
    color: '#6b7280',
  },
  profileLocation: {
    color: '#6b7280',
    marginTop: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statIcon: {
    backgroundColor: '#d1fae5',
    padding: 8,
    borderRadius: 50,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginTop: 4,
  },
  statLabel: {
    color: '#6b7280',
    fontSize: 12,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  sectionContent: {
    color: '#6b7280',
    marginTop: 8,
  },
  link: {
    color: '#3b82f6',
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginTop: 8,
  },
  hospitalHours: {
    color: '#6b7280',
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  reviewImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewContent: {
    marginLeft: 16,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  reviewRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  reviewRatingValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  reviewStars: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  reviewText: {
    color: '#6b7280',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#34d399',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Doctor;