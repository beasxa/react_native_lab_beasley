import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import selfie from './assets/selfie.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={selfie} style={styles.photo}/>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameAndPronouns}>Beasley (she/her)</Text>
      </View>
      <View style={styles.allBlurbsContainer}>
        <View>
          <Text style={styles.blurb}>
            This is my first blurb.. blurbing away.... saying more stuff... trying to make double line... say more... peaches... 
            </Text>
        </View>
        <View>
          <Text style={styles.blurb2}>This is my second blurb...... more blurb... another second line... testing... need way more text.... almost lunch.... say more.... blurb blurb blurb.... almost there.... next line pls....</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightpink",
    padding: 1,
  },
  nameContainer: {
    flex: .2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  allBlurbsContainer: {
    flex: .5,
    backgroundColor: "lavenderblush",
    justifyContent: "center",
    alignItems: "center",
  },
  blurbContainer: {
    flex: 1,
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
    fontFamily: "AvenirNext-Medium",
  },
  blurb: {
    fontSize: 35,
    fontFamily: "AvenirNext-Medium",
    textAlign: "center",
  },
  blurb2: {
    fontSize: 20,
    fontFamily: "AvenirNext-Medium",
    textAlign: "center",
  },
});
