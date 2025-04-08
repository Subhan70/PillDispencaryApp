import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList, TouchableOpacity, Alert, StyleSheet } from "react-native";

const App = () => {
  const [medications, setMedications] = useState([
    { id: "1", name: "Aspirin", time: "08:00 AM" },
    { id: "2", name: "Metformin", time: "12:00 PM" },
    { id: "3", name: "Ibuprofen", time: "06:00 PM" },
  ]);

  const [newMedName, setNewMedName] = useState("");
  const [newMedTime, setNewMedTime] = useState("");

  const addMedication = () => {
    if (newMedName && newMedTime) {
      setMedications([
        ...medications,
        { id: Date.now().toString(), name: newMedName, time: newMedTime },
      ]);
      setNewMedName("");
      setNewMedTime("");
      Alert.alert("Success", "Medication added successfully!");
    } else {
      Alert.alert("Error", "Please enter medication name and time.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pill Dispenser</Text>

      {/* Medication List */}
      <FlatList
        data={medications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Reminder", `Take ${item.name} at ${item.time}`)
            }
          >
            <View style={styles.medicationItem}>
              <Text style={styles.medName}>{item.name}</Text>
              <Text style={styles.medTime}>Time: {item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Add Medication Form */}
      <TextInput
        style={styles.input}
        placeholder="Medication Name"
        value={newMedName}
        onChangeText={setNewMedName}
      />
      <TextInput
        style={styles.input}
        placeholder="Time (e.g., 08:00 AM)"
        value={newMedTime}
        onChangeText={setNewMedTime}
      />
      <Button title="Add Medication" onPress={addMedication} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  medicationItem: {
    padding: 15,
    backgroundColor: "#e3f2fd",
    marginBottom: 10,
    borderRadius: 5,
  },
  medName: {
    fontSize: 18,
  },
  medTime: {
    fontSize: 14,
    color: "gray",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default App;

