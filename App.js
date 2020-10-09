/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import CCode from "react-native-ccode";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                React Native C++ Code Example
              </Text>
              <Text
                style={styles.sectionDescription}
                onPress={async () => {
                  try {
                    const res = await CCode.createFingerPrint(
                      [0.0, 0.0, 100.0, 100.0, 0.0, 100.0],
                      [
                        10.0,
                        10.0,
                        10.0,
                        10.0,
                        10.0,
                        10.0,
                        10.0,
                        10.0,
                        20.0,
                        20.0,
                        20.0,
                        20.0,
                        20.0,
                        20.0,
                        20.0,
                        20.0,
                        30.0,
                        30.0,
                        30.0,
                        30.0,
                        30.0,
                        30.0,
                        30.0,
                        30.0,
                        40.0,
                        40.0,
                        40.0,
                        40.0,
                        40.0,
                        40.0,
                        40.0,
                        40.0,
                      ],
                      {
                        refs: [0.0, 0.0, 100.0, 100.0, 0.0, 100.0],
                        points: [
                          15.0,
                          15.0,
                          15.0,
                          15.0,
                          15.0,
                          15.0,
                          15.0,
                          15.0,
                          20.0,
                          20.0,
                          20.0,
                          20.0,
                          20.0,
                          20.0,
                          20.0,
                          20.0,
                          37.0,
                          37.0,
                          37.0,
                          37.0,
                          37.0,
                          37.0,
                          37.0,
                          37.0,
                          40.0,
                          40.0,
                          40.0,
                          40.0,
                          40.0,
                          40.0,
                          40.0,
                          40.0,
                        ],
                      }
                    );
                    alert(res.result);
                  } catch (e) {
                    console.warn(e.message || e);
                  }
                }}
              >
                **Click** for the magic result
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

export default App;
