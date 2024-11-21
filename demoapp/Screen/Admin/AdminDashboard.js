import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AdminDashboard = ({navigation}) => {
  const dashboardItems = [
    {icon: 'calendar-outline', label: 'Reschedule', screen: 'RescheduleScreen'},
    {icon: 'people-outline', label: 'Total Users', screen: 'TotalUser'},
    {icon: 'document-text-outline', label: 'Approve/reject', screen: 'ApproveRejectScreen'},
    {icon: 'person-remove-outline', label: 'Activate/Deactivate', screen: 'ActivateDeactivateScreen'},
    {icon: 'pie-chart-outline', label: 'Reports', screen: 'ReportsScreen'},
    {icon: 'calendar', label: 'Appointment', screen: 'AppointmentScreen'},
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Admin Dashboard</Text>
        {/* <Icon name="settings-outline" size={24} color="#000" style={styles.settingsIcon} /> */}
       <TouchableOpacity onPress={() => navigation.navigate('AdminProfile')} >
       <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png', // Replace with user profile image
          }}
          style={styles.profileImage}
        />
       </TouchableOpacity>
      </View>

      {/* Subheader */}
      <Text style={styles.subHeader}>All Booking</Text>

      {/* Dashboard Items */}
      <View style={styles.gridContainer}>
        {dashboardItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate(item.screen)}>
            <View style={styles.iconContainer}>
              <Icon name={item.icon} size={40} color="#4CAF50" />
            </View>
            <Text style={styles.cardLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  settingsIcon: {
    marginHorizontal: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6F4EA',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  cardLabel: {
    fontSize: 14,
    color: '#4A5568',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default AdminDashboard;
