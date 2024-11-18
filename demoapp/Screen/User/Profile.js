import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerLeft}>
          <AntDesign name="arrowleft" size={25} color="#6B7280" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.headerRight} />
      </View>

      <View style={styles.menu}>
        <MenuItem
          icon="person-outline"
          text="Edit Profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        {/* <MenuItem
          icon="heart-outline"
          text="Favourites"
          onPress={() => navigation.navigate('Favourites')}
        /> */}
        <MenuItem
          icon="notifications-outline"
          text="Notifications"
          onPress={() => navigation.navigate('Notification')}
        />
        {/* <MenuItem
          icon="list-outline"
          text="Medical Report"
          onPress={() => navigation.navigate('MedicalReport')}
        /> */}
        <MenuItem
          icon="help-circle-outline"
          text="Help and Support"
          onPress={() => navigation.navigate('HelpSupport')}
        />
        {/* <MenuItem
          icon="location-outline"
          text="Travel/Hotel Details"
          onPress={() => navigation.navigate('TravelHotelDetails')}
        /> */}
        <MenuItem
          icon="log-out-outline"
          text="Log Out"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

// MenuItem component to handle navigation
const MenuItem = ({icon, text, onPress}) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Icon name={icon} size={24} color="#4A4A4A" />
    <Text style={styles.menuText}>{text}</Text>
    <Icon name="chevron-forward-outline" size={20} color="#4A4A4A" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    
  },
 header: {
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  phone: {
    fontSize: 14,
    color: '#666',
  },
  menu: {
    marginTop: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#4A4A4A',
    marginLeft: 15,
  },
});

export default ProfileScreen;
