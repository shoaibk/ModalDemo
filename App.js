import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-paper";
import Modal from "react-native-modal";

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Press the FAB to show the modal</Text>
        {/* Modal */}
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is a modal!</Text>
          </View>
        </Modal>
      </View>

      {/* Floating Action Button */}
      <FAB style={styles.fab} icon="plus" onPress={toggleModal} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalView: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default App;
