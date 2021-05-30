import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { Input, Button } from "react-native-elements";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState('');
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState('');
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="sign in" style={styles.button} />
      <Button title="register" style={styles.button} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
    },
    button: {
    width: 200,
    marginTop: 10
    }
    })
