import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={require("./assets/selfie.JPG")} style={styles.photo} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameAndPronouns}>Beasley (she/her)</Text>
      </View>
      <View style={styles.blurbContainer}>
        <Text style={styles.blurb}>This is my first blurb..</Text>
        <Text style={styles.blurb2}>This is my second blurb......</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photoContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    padding: 30,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blurbContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    resizeMode: "center",
    width: "100%",
    padding: "10%",
  },
  nameAndPronouns: {
    fontSize: 50,
  },
  blurb: {
    fontSize: 35,
  },
  blurb2: {
    fontSize: 20,
  },
});
