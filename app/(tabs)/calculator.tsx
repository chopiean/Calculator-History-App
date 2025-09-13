import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export let historyData: string[] = []; // shared history storage

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const router = useRouter();

  const handleOperation = (operator: string) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return;

    let res = 0;
    let record = "";

    if (operator === "+") {
      res = a + b;
      record = `${a} + ${b} = ${res}`;
    } else {
      res = a - b;
      record = `${a} - ${b} = ${res}`;
    }

    setResult(res);
    historyData.unshift(record);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={num1}
        onChangeText={setNum1}
        placeholder="Enter first number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={num2}
        onChangeText={setNum2}
        placeholder="Enter second number"
        keyboardType="numeric"
      />

      <Button title="Add" onPress={() => handleOperation("+")} />
      <Button title="Subtract" onPress={() => handleOperation("-")} />

      {result !== null && <Text style={styles.result}>Result: {result}</Text>}

      <Button title="Go to History" onPress={() => router.push("/history")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  input: { borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 5 },
  result: { marginTop: 10, fontSize: 18, fontWeight: "bold" },
});
