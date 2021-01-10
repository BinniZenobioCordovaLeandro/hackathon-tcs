import React, { useRef } from 'react';
import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
  StatusBar as DefaultStatusBar,
  Switch as DefaultSwitch
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type StatusBarProps = ThemeProps & DefaultStatusBar['props'];
export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type PickerSelectProps = ThemeProps & RNPickerSelect['props'];
export type SwitchProps = ThemeProps & DefaultSwitch['props'];

export function StatusBar(props: StatusBarProps) {
  const { barStyle, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultStatusBar barStyle={barStyle} {...otherProps} />;
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultTextInput style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function PickerSelect(props: PickerSelectProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <RNPickerSelect style={{ inputAndroid: { backgroundColor, color }, inputIOS: { backgroundColor, color }, inputWeb: { backgroundColor, color }, ...style }} {...otherProps} />;
}

export function Switch(props: SwitchProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const tintColor = useThemeColor({ light: lightColor, dark: darkColor }, 'tint');
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultSwitch trackColor={{ false: backgroundColor, true: tintColor }} style={[style]} {...otherProps} />;
}