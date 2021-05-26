import React, { useState } from "react";
import {Text, StyleSheet, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const Checkboxs = ({style}) => {
  const [isSelected, setSelection] = useState(false);

  return (

      <View style={styles.checkboxContainer}>
      <View style={styles.container}>

        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={[styles.checkbox, style]}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

});

export default Checkboxs;
