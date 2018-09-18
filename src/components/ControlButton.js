import React, {
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import Color from '../services/color';

export default function ControlButton(props) {
  const {
    active,
    onPress,
    children,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.container, active ? styles.active : null]}
      onPress={onPress}
    >
      <Text
        style={[styles.text, active ? styles.activeText : null]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
ControlButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    margin: 30,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 14,
  },
  active: {
    backgroundColor: Color.Aqua,
  },
  activeText: {
    color: Color.White,
  },
});
