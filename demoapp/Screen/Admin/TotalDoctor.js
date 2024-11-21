import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TotalDoctor = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F9FAFB'}}>
      <View style={{ padding: 16 }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="#374151" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#111827' }}>Admin All Doctors</Text>
          <View />
        </View>

        {/* Search Bar */}
        <View style={{ position: 'relative', marginBottom: 16 }}>
          <TextInput
            style={{
              width: '100%',
              paddingLeft: 40,
              paddingVertical: 10,
              borderRadius: 8,
              backgroundColor: '#E5E7EB',
              color: '#6B7280',
              fontSize: 14,
            }}
            placeholder="Search Doctor, Name, Email..."
            placeholderTextColor="#9CA3AF"
          />
          <Icon name="search" size={20} color="#9CA3AF" style={{ position: 'absolute', left: 12, top: 10 }} />
        </View>

        {/* Filter Buttons */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
          {['All', 'Schedule', 'Active', 'New'].map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: filter === 'All' ? '#10B981' : '#FFFFFF',
                borderColor: '#10B981',
                borderWidth: 1,
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: filter === 'All' ? '#FFFFFF' : '#10B981', fontWeight: '500' }}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Doctor Cards */}
        {Array(2)
          .fill()
          .map((_, index) => (
            <View
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 12,
                padding: 16,
                marginBottom: 16,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 10,
                elevation: 2,
              }}
            >
              {/* Card Header */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
                <Text style={{ color: '#6B7280', fontSize: 14 }}>May 22, 2023 - 10:00 AM</Text>
                <TouchableOpacity onPress={() => navigation.navigate(index === 0 ? 'AdminTabs' : 'Admindoctor')}>
                  <Text style={{ color: '#3B82F6', fontSize: 14, fontWeight: '500' }}>View Details</Text>
                </TouchableOpacity>
              </View>

              {/* Doctor Info */}
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpNgQoWK8D1zAzVMaPAS2ATw1Vv-twGXUxQ&s',
                  }}
                  style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16 }}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: '700', color: '#111827' }}>James Robinson</Text>
                  <Text style={{ fontSize: 14, color: '#6B7280', marginVertical: 4 }}>Orthopedic Surgery</Text>
                  <Text style={{ fontSize: 13, color: '#6B7280' }}>
                    <Icon name="map-marker" size={14} color="#6B7280" /> Elite Ortho Clinic, USA
                  </Text>
                </View>
              </View>

              {/* Actions */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
                {index === 0 ? (
                  <>
                    <TouchableOpacity
                      style={{
                        borderColor: '#10B981',
                        borderWidth: 1,
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        borderRadius: 20,
                      }}
                    >
                      <Text style={{ color: '#10B981', fontWeight: '500' }}>Upcoming</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#10B981',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        borderRadius: 20,
                      }}
                    >
                      <Text style={{ color: '#FFFFFF', fontWeight: '500' }}>Reschedule</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#E5E7EB',
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                      borderRadius: 20,
                    }}
                  >
                    <Text style={{ color: '#6B7280', fontWeight: '500' }}>Canceled</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default TotalDoctor;
