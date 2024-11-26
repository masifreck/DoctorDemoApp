import React,{useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Doctor = ({ route, navigation }) => {
  const { doctor } = route.params;
  const [imageError, setImageError] = useState(false);
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIcon}>
          <AntDesign name="arrowleft" size={25} color="#6B7280" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doctor Details</Text>
        <View style={{width: 24}}></View>
      </View>

      {/* Profile Card */}
      <View style={styles.card}>
        <View style={styles.profile}>
          {/* <Image style={styles.profileImage} source={{ uri: doctor.image }} /> */}
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{doctor.name}</Text>
            <Text style={styles.profileSpecialty}>{doctor.specialty}</Text>
            <Text style={styles.profileLocation}>
              <Icon name="map-marker" size={14} color="#6B7280" /> {doctor.location}
            </Text>
          </View>
        </View>
      </View>

      {/* Stats Section */}
      {/* <View style={styles.stats}>
        <View style={styles.stat}>
          <View style={styles.statIcon}>
            <Icon name="star" size={20} color="#10B981" />
          </View>
          <Text style={styles.statValue}>{doctor.rating}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.stat}>
          <View style={styles.statIcon}>
            <Icon name="comments" size={20} color="#10B981" />
          </View>
          <Text style={styles.statValue}>{doctor.reviews}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
        <View style={styles.stat}>
          <View style={styles.statIcon}>
            <Icon name="users" size={20} color="#10B981" />
          </View>
          <Text style={styles.statValue}>{doctor.experience}+</Text>
          <Text style={styles.statLabel}>Experience</Text>
        </View>
        <View style={styles.stat}>
          <View style={styles.statIcon}>
            <Icon name="trophy" size={20} color="#10B981" />
          </View>
          <Text style={styles.statValue}>10+</Text>
          <Text style={styles.statLabel}>Awards</Text>
        </View>
      </View> */}

      {/* About Me Section */}
      {/* <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>
          {doctor.name}, a skilled {doctor.specialty}, is dedicated to providing excellent care at{' '}
          {doctor.location}. <Text style={styles.link}>View more</Text>
        </Text>
      </View> */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>
          {doctor.name}, a skilled {doctor.specialty}, is dedicated to providing excellent care at{' '}
          {doctor.location}. <Text style={styles.link}>View more</Text>
        </Text>
      </View>

      {/* Hospital Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Followership</Text>
        <Text style={styles.hospitalName}>{doctor.Followership}</Text>
        <Text style={styles.hospitalHours}>{doctor.Degree}</Text>
      </View>

      {/* Reviews Section */}
      <View style={styles.section}>
        <View style={styles.reviewsHeader}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          <Text style={styles.link}>See All</Text>
        </View>
        <View style={styles.review}>
          <Image
            style={styles.reviewImage}
            source={{
              uri : imageError
              ? 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
              : 'https://ayurvaid.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-13-at-11.39.54-AM.jpeg'
            }}
            onError={() => setImageError(true)}
          />
          <View style={styles.reviewContent}>
            <Text style={styles.reviewName}>Emily Anderson</Text>
            <View style={styles.reviewRating}>
              <Text style={styles.reviewRatingValue}>5.0</Text>
              <View style={styles.reviewStars}>
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" size={14} color="#FBBF24" />
                ))}
              </View>
            </View>
            <Text style={styles.reviewText}>
              Dr. Patel is a true professional who genuinely cares...
            </Text>
          </View>
        </View>
      </View>

      {/* Book Appointment Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DateTime', { doctor })}
      >
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
   
  },
  headerIcon: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    elevation: 3,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },
  profileSpecialty: {
    color: '#6B7280',
    fontSize: 16,
  },
  profileLocation: {
    color: '#6B7280',
    marginTop: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statIcon: {
    backgroundColor: '#D1FAE5',
    padding: 10,
    borderRadius: 30,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 4,
  },
  statLabel: {
    color: '#6B7280',
    fontSize: 14,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  sectionContent: {
    color: '#6B7280',
    marginTop: 8,
  },
  link: {
    color: '#3B82F6',
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 8,
  },
  hospitalHours: {
    color: '#6B7280',
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  review: {
    flexDirection: 'row',
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
    color: '#1F2937',
  },
  reviewRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  reviewRatingValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  reviewStars: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  reviewText: {
    color: '#6B7280',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: 8,
    margin: 16,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Doctor;
