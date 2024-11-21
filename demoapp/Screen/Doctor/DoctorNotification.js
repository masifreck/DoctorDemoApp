import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const notifications = [
  {
    id: "1",
    title: "Appointment Success",
    description: "You have successfully booked your appointment with Dr. Emily Walker.",
    time: "1h",
    type: "success",
    date: "Today",
  },
  {
    id: "2",
    title: "Appointment Cancelled",
    description: "You have successfully cancelled your appointment with Dr. David Patel.",
    time: "2h",
    type: "cancelled",
    date: "Today",
  },
  {
    id: "3",
    title: "Scheduled Changed",
    description: "You have successfully changed your appointment with Dr. Jesica Turner.",
    time: "8h",
    type: "changed",
    date: "Today",
  },
  {
    id: "4",
    title: "Appointment Success",
    description: "You have successfully booked your appointment with Dr. David Patel.",
    time: "1d",
    type: "success",
    date: "Yesterday",
  },
];

const DoctorNotification = () => {
  const renderItem = ({ item }) => {
    const iconData = {
      success: { name: "calendar-check", color: "#4CAF50" },
      cancelled: { name: "calendar-remove", color: "#F44336" },
      changed: { name: "calendar-edit", color: "#FFC107" },
    };

    return (
      <View style={styles.notificationCard}>
        <View style={[styles.iconContainer, { backgroundColor: iconData[item.type].color + "20" }]}>
          <Icon name={iconData[item.type].name} size={24} color={iconData[item.type].color} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    );
  };

  const groupByDate = (data) =>
    data.reduce((acc, curr) => {
      acc[curr.date] = acc[curr.date] ? [...acc[curr.date], curr] : [curr];
      return acc;
    }, {});

  const groupedData = groupByDate(notifications);
  const sectionData = Object.keys(groupedData).map((date) => ({
    title: date,
    data: groupedData[date],
  }));

  return (
    <FlatList
      data={notifications}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Notification</Text>
          <TouchableOpacity>
            <Text style={styles.markRead}>Mark all as read</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  markRead: {
    fontSize: 14,
    color: "#4CAF50",
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: "#999",
  },
});

export default DoctorNotification;
