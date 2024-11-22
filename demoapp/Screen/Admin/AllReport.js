import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const screenWidth = Dimensions.get('window').width;

export default function ReportScreen({navigation}) {
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    useShadowColorFromDataset: false,
  };

  const data1 = [
    { name: "Upcoming", population: 40, color: "#FF6F61", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Cancel", population: 30, color: "#000", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Complete", population: 30, color: "#6A5ACD", legendFontColor: "#7F7F7F", legendFontSize: 12 },
  ];

  const data2 = [
    { name: "Weekly", population: 20, color: "#2E8B57", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Monthly", population: 50, color: "#B0C4DE", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Annually", population: 30, color: "#FFA500", legendFontColor: "#7F7F7F", legendFontSize: 12 },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity  onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}> Admin Report</Text>
      </View>
      {/* Chart Section */}
      <View style={styles.chartSection}>
        <Text style={styles.chartTitle}> All Bookings</Text>
        <View style={styles.chartContainer}>
          <PieChart
            data={data1}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"10"}
            center={[10, 10]}
            absolute
          />
          <View style={styles.actions}>
            <TouchableOpacity>
              <MaterialIcons name="export" size={24} color="#6A5ACD" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="filter-list" size={24} color="#6A5ACD" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.chartTitle}>Appointment Bookings</Text>
        <View style={styles.chartContainer}>
          <PieChart
            data={data2}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"10"}
            center={[10, 10]}
            absolute
          />
          <View style={styles.actions}>
            <TouchableOpacity>
              <MaterialIcons name="export" size={24} color="#6A5ACD" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="filter-list" size={24} color="#6A5ACD" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  newBadge: {
    backgroundColor: '#6A5ACD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  chartSection: {
    marginHorizontal: 20,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
