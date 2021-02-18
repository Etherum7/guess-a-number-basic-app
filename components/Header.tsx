import React from "react";
import { StyleSheet, Text, View } from "react-native";
interface IHeaderProps {
  title: string;
}
const Header = ({ title }: IHeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    header:{

    },
    headerTitle:{
        
    }
});
