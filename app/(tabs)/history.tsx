import { FlatList, StyleSheet, Text, View } from "react-native";
import { historyData } from "./calculator";

export default function History() {
  return (
    <View style={styles.container}>
      <FlatList
        data={historyData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});
