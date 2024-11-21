import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TotalUser = ({navigation}) => {
  const users = [
    {
      id: 1,
      name: 'James Robinson',
      role: 'Orthopedic Surgery',
      location: 'Elite Ortho Clinic, USA',
      date: 'May 22, 2023',
      time: '10:00 AM',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/330px-Outdoors-man-portrait_%28cropped%29.jpg',
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'Pediatric Specialist',
      location: 'City Children Clinic, USA',
      date: 'May 23, 2023',
      time: '11:00 AM',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/330px-Outdoors-man-portrait_%28cropped%29.jpg',
    },
  ];

  const renderUserCard = ({item}) => (
    <View style={styles.card}>
      <View style={styles.dateAndDetails}>
        <Text style={styles.cardDate}>{item.date} - {item.time}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Adminuserdetails')}>
          <Text style={styles.detailsButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContent}>
        <Image source={{uri: item.image}} style={styles.cardImage} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{item.name}</Text>
          <Text style={styles.cardRole}>{item.role}</Text>
          <Text style={styles.cardLocation}>
            <Icon name="location-outline" size={14} color="#6B7280" /> {item.location}
          </Text>
        </View>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.activateButton}>
          <Text style={styles.activateButtonText}>Activate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deactivateButton}>
          <Text style={styles.deactivateButtonText}>Deactivate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Management</Text>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#6B7280" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search users..."
          placeholderTextColor="#9CA3AF"
        />
      </View>
      <View style={styles.filterContainer}>
        {['All', 'Patients', 'Active', 'New'].map((filter, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.filterButton, index === 0 && styles.filterButtonActive]}>
            <Text
              style={[styles.filterButtonText, index === 0 && styles.filterButtonTextActive]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={renderUserCard}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
    color: '#000'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  filterButtonActive: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#6B7280',
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    elevation: 2,
  },
  dateAndDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardDate: {
    fontSize: 14,
    color: '#6B7280',
  },
  detailsButtonText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
  },
  cardContent: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardRole: {
    fontSize: 14,
    color: '#6B7280',
    marginVertical: 4,
  },
  cardLocation: {
    fontSize: 12,
    color: '#6B7280',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  activateButton: {
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  deactivateButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  activateButtonText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
  },
  deactivateButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default TotalUser;
