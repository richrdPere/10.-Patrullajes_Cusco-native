import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OptionItem = ({ iconName, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
      <Icon name={iconName} size={24} color="#000" style={styles.icon} />
      <Text style={styles.optionLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const OptionsList = ({options}) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <OptionItem
          key={index}
          iconName={option.iconName}
          label={option.label}
          onPress={option.onPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 10,
  },
  optionLabel: {
    fontSize: 18,
  },
});

export default OptionsList;
