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
    backgroundColor: '#fff',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#000',
    borderBottomWidth: 2, // Add bottom border
    borderBottomColor: '#e6e6e6', // Use a green color for the border
    paddingBottom: 8, // Add padding to space out the title and border
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  activeTab: {
    borderColor: '#28a745',
  },
  tabText: {
    fontSize: 16,
    color: '#6c757d',
  },
  activeTabText: {
    color: '#28a745',
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6c757d',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    margin: 6,
    borderColor: '#d4e6ff',
    borderWidth: 1,
  },
  cardHeader: {
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    fontWeight: '600',
    color: '#343a40',
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343a40',
  },
  specialty: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 4,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clinic: {
    fontSize: 14,
    color: '#6c757d',
    marginLeft: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cancelButton: {
    backgroundColor: '#dee2e6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cancelText: {
    color: '#495057',
    fontWeight: 'bold',
  },
  rescheduleButton: {
    backgroundColor: '#28a745',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  rescheduleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MyBookingsScreen;
