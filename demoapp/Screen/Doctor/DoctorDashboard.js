import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const MyBookingsScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  // Sample data with status field
  const bookings = [
    {
      id: '1',
      date: 'May 22, 2023 - 10.00 AM',
      name: 'James Robinson',
      specialty: 'Orthopedic Surgery',
      clinic: 'Elite Ortho Clinic, USA',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      status: 'Upcoming',
    },
    {
      id: '2',
      date: 'June 14, 2023 - 3.00 PM',
      name: 'Daniel Lee',
      specialty: 'Gastroenterologist',
      clinic: 'Digestive Institute, USA',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      status: 'Completed',
    },
    {
      id: '3',
      date: 'June 21, 2023 - 10.00 AM',
      name: 'Nathan Harris',
      specialty: 'Cardiologist',
      clinic: 'HeartCare Clinic, USA',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      status: 'Canceled',
    },
  ];

  const handleNavigateToSupport = () => {
    navigation.navigate('HelpSupport'); // Navigates to Help and Support screen
  };

  // Render items for FlatList based on activeTab
  const renderBookingItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.cardBody}>
        <Image source={{ uri: item.image }} style={styles.avatar} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.specialty}>{item.specialty}</Text>
          <View style={styles.location}>
            <Icon name="map-marker" size={16} color="#6c757d" />
            <Text style={styles.clinic}>{item.clinic}</Text>
          </View>
        </View>
      </View>
      <View style={styles.actions}>
        {activeTab === 'Upcoming' && (
          <>
            <TouchableOpacity style={styles.cancelButton} onPress={handleNavigateToSupport}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rescheduleButton} onPress={handleNavigateToSupport}>
              <Text style={styles.rescheduleText}>Reschedule</Text>
            </TouchableOpacity>
          </>
        )}
        {activeTab === 'Completed' && (
          <>
            <TouchableOpacity style={styles.cancelButton} onPress={handleNavigateToSupport}>
              <Text style={styles.cancelText}>Re-book</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rescheduleButton} onPress={handleNavigateToSupport}>
              <Text style={styles.rescheduleText}>Add Review</Text>
            </TouchableOpacity>
          </>
        )}
        {activeTab === 'Canceled' && (
          <TouchableOpacity style={styles.cancelButton} onPress={handleNavigateToSupport}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  // Filter data based on activeTab
  const filteredBookings = bookings.filter((item) => item.status === activeTab);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Appointments</Text>

      
      <View style={styles.tabs}>
        {['Upcoming', 'Completed', 'Canceled'].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}>
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredBookings}
        keyExtractor={(item) => item.id}
        renderItem={renderBookingItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>No bookings available</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',  // Light grey background for contrast
    padding: 20, // Increase padding for a more spacious feel
  },
  title: {
    fontSize: 28, // Larger title size
    fontWeight: '700', // Bold title for emphasis
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Darker text for readability
    borderBottomWidth: 3, 
    borderBottomColor: '#28a745', // Green border for style
    paddingBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
  },
  activeTab: {
    backgroundColor: '#28a745',  // Green active tab
  },
  tabText: {
    fontSize: 18,
    color: '#6c757d',
  },
  activeTabText: {
    color: '#fff',  // White text for active tab
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 20,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#999', // Greyed-out empty state text
    marginTop: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 4,  // Subtle shadow for a floating effect
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
  },
  cardHeader: {
    marginBottom: 12,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    color: '#777',
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,  // Round image
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#28a745',  // Border around the avatar for emphasis
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  specialty: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 6,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clinic: {
    fontSize: 14,
    color: '#6c757d',
    marginLeft: 6,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#f44336', // Red background for cancel
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '45%',
  },
  cancelText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rescheduleButton: {
    backgroundColor: '#28a745',  // Green background for reschedule
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '45%',
  },
  rescheduleText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default MyBookingsScreen;
