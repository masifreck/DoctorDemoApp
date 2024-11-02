import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import StatsCard from './card';
import { dates, primarycolor } from './utils';
import SwipeBtn from './SwipeBTN';
import SwipeButton from './SwipeBTN';

const Book = () => {
  const [selectedDate, setSelectedDate] = useState('Tue 08');
  const [availability, setAvailability] = useState('4PM - 9PM');
  

  // Availability mapping based on selected date
  const availabilityMapping = {
    'Mon 07': '9AM - 5PM',
    'Tue 08': '4PM - 9PM',
    'Wed 09': '10AM - 3PM',
    'Thu 10': '1PM - 6PM',
    'Fri 11': '11AM - 8PM',
    'Sat 12': '10AM - 4PM',
    'Sun 13': 'Closed',
  };

  const handleDateSelect = (day, date) => {
    const selected = `${day} ${date}`;
    setSelectedDate(selected);
    setAvailability(availabilityMapping[selected] || 'Unavailable');
  };

  const rating = 4.8;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 > 0 ? 1 : 0;

  return (
    <ImageBackground
      source={require('../assests/bglog.jpg')}
      style={styles.container}
    >
      {/* Doctor Info */}
      <View style={styles.doctorInfo}>
        <View style={styles.avatarPlaceholder}>
          <Icon name="user-circle" size={60} color="#ccc" />
        </View>
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorName}>Dr. Shirley Igimo, MD</Text>
          <Text style={styles.specialty}>Cardiologist at <Text style={{ color: 'gold' }}>Lux Hospital</Text></Text>
          <View style={styles.stars}>
            {[...Array(fullStars)].map((_, index) => (
              <Text key={index} style={styles.star}>★</Text>
            ))}
            {halfStar ? <Text style={styles.star}>☆</Text> : null}
            {[...Array(5 - fullStars - halfStar)].map((_, index) => (
              <Text key={index + fullStars + halfStar} style={styles.star}>☆</Text>
            ))}
            <Text style={[styles.patients, { marginTop: 5, marginLeft: 10, fontWeight: 'bold' }]}>
              (120)
            </Text>
          </View>
        </View>
      </View>
      <StatsCard />
      
      {/* Experience Section */}
      <View style={styles.experienceSection}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.sectionDescription}>
        Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.
        </Text>
      </View>

      {/* Date Selector */}
      <View style={styles.dateSelector}>
        <Text style={{color:'#38435E',fontSize:16,marginBottom:10,fontWeight:'bold'}}>Appoinment date</Text>
        <FlatList
          data={dates}
          horizontal
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.dateItem,
                selectedDate === `${item.day} ${item.date}` && styles.selectedDate,
              ]}
              onPress={() => handleDateSelect(item.day, item.date)}
            >
              <Text style={styles.dateText}>{item.day}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Availability */}
      <View style={styles.availabilitySection}>
        <View style={{borderRadius:10,borderWidth:0.5,borderColor:'#8394A840',justifyContent:'center',alignItems:'center',
          padding:10
        }}>
      <Icon name="clock-o" size={50} color="#8394A840" style={styles.clockIcon} />
      </View>
       <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.availabilityText}>Availability</Text>
        <Text style={styles.availabilityTime}>{availability}</Text>
        </View>
        <Icon1 name="arrow-forward-ios" size={30} color="#8394A840" style={styles.arrowIcon} /> 
      </View>

      {/* Book Now Button 
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>*/}

<SwipeButton onSwipeSuccess={() => navigation.navigate('Login')} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // Background color similar to the screenshot
  },
  doctorInfo: {
    flexDirection: 'row',
    padding: 10,
  },
  avatarPlaceholder: {
    marginRight: 10,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#38435E'
  },
  specialty: {
    color: '#949BA7',
  },
  stars: {
    flexDirection: 'row',
    marginRight: 10,
  },
  star: {
    color: 'gold', // Golden color for stars
    fontSize: 18,
  },
  rating: {
    color: '#000',
  },
  separator: {
    marginHorizontal: 5,
  },
  experience: {
    color: '#000',
  },
  patients: {
    color: '#000',
  },
  experienceSection: {
    marginTop: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#38435E',
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  dateSelector: {
    marginBottom: 20,
  },
  dateItem: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
   elevation:4,
    marginRight: 10,width:60,
    height:75,
    marginBottom:5,
    marginTop:5
  },
  selectedDate: {
    backgroundColor: primarycolor, // Blue color for the selected date
  },
  dateText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  availabilitySection: {
    height:120,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
elevation:4,
    marginBottom: 20,
    flexDirection: 'row', // Added for horizontal alignment
    justifyContent: 'space-between', // Space between items
    gap:10
  },
  availabilityText: {
    fontSize: 16,
    color: '#515151',
    marginBottom: 5,
    fontWeight:'bold'
  },
  availabilityTime: {
    borderRadius:15,
    fontSize: 14,
    color: 'white',
    backgroundColor:'#64BE93',
    width:90,
    height:30,
    padding:5,
    textAlign:'center',
    justifyContent:'center',
    marginBottom:5,
    fontWeight:'bold'
  },
  bookButton: {
    padding: 15,
    backgroundColor: '#4B82F1',
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowIcon: {
    marginRight: 10,
    marginLeft:50
  },
  clockIcon: {
    marginLeft: 10,
    textAlign:'center',
    marginRight:10
  },
});

export default Book;
