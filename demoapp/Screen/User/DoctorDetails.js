import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DoctorDetails = ({ route, navigation }) => {
  const {hospital} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={25} color="#6B7280" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>{hospital.name}</Text>
        <AntDesign name="hearto" size={20} color="#6B7280" />
      </View>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: hospital.imageUri }} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{hospital.name}</Text>
          <Text style={styles.cardSubtitle}>Cardiologist</Text>
          <Text style={styles.cardLocation}><Icon name="map-marker" size={14} color="#6B7280" /> {hospital.address}</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Icon name="users" size={30} color="#34D399" />
          <Text style={styles.statValue}>2,000+</Text>
          <Text style={styles.statLabel}>patients</Text>
        </View>
        <View style={styles.stat}>
          <Icon name="award" size={30} color="#34D399" />
          <Text style={styles.statValue}>10+</Text>
          <Text style={styles.statLabel}>experience</Text>
        </View>
        <View style={styles.stat}>
          <Icon name="star" size={30} color="#34D399" />
          <Text style={styles.statValue}>{hospital.rating}</Text>
          <Text style={styles.statLabel}>rating</Text>
        </View>
        <View style={styles.stat}>
          <Icon name="comments" size={30} color="#34D399" />
          <Text style={styles.statValue}>{hospital.reviews}</Text>
          <Text style={styles.statLabel}>reviews</Text>
        </View>
      </View>
      {/* about */}
      <Text style={styles.sectionTitle}>About me</Text>
      <Text style={styles.aboutText}>
        Infrastructure and a veteran team of highly-skilled doctors providing comprehensive medical care to
        patients from India and abroad. It offers best-in-class medical services. <Text style={styles.link}>view more</Text>
      </Text>
      {/* Review */}
      <View style={styles.reviewsHeader}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        <Text style={styles.link}>See All</Text>
      </View>

      <View style={styles.reviewItem}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2149915905.jpg?t=st=1731580714~exp=1731584314~hmac=3bd8a3068c2316321b8201d7959993e302104d90ded626aecc1e4ac451b463bd&w=360' }} // Replace with reviewer's image
          style={styles.reviewerImage}
        />
        <View style={styles.reviewContent}>
          <Text style={styles.reviewerName}>Emily Anderson</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.ratingNumber}>5.0</Text>
            <Icon name="star" size={16} color="#F8C21E" />
          </View>
          <Text style={styles.reviewText}>
            Dr. Patel is a true professional who genuinely cares about his patients. I highly recommend Dr. Patel to
            anyone seeking exceptional cardiac care.
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllDoctor')}>
        <Text style={styles.buttonText}>All Doctors</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  aboutText: {
    color: '#666',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  aboutText: {
    color: '#666',
    marginBottom: 16,
  },
  link: {
    color: '#3686ff',
    textDecorationLine: 'underline',
  },
  ratingNumber: {
    marginRight: 4,
    color: '#333',
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  reviewItem: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  reviewerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    marginBottom: 16,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  cardContent: {
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  cardSubtitle: {
    color: '#6B7280',
  },
  cardLocation: {
    color: '#6B7280',
    marginTop: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  statLabel: {
    color: '#6B7280',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  sectionContent: {
    color: '#6B7280',
  },
  link: {
    color: '#3B82F6',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  review: {
    flexDirection: 'row',
    marginTop: 16,
  },
  reviewImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  reviewContent: {
    marginLeft: 16,
  },
  reviewAuthor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  reviewRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  reviewRatingValue: {
    color: '#FBBF24',
  },
  reviewStars: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  reviewText: {
    color: '#6B7280',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#34D399',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default DoctorDetails;