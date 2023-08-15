import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Alert} from 'react-native';
import { Input, Button } from '@rneui/base';
import { auth, db } from '../firebase';
import { getAuth ,createUserWithEmailAndPassword } from 'firebase/auth';
import LoginScreen from './LoginScreen';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
 
  // const signUp = async () => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //     console.log(email);
  //     navigation.navigate("LoginScreen");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const handleRegister = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
  
      // Save the user data to Firestore
      await db.collection('users').doc(user.uid).set({
        email: user.email,
      });
  
      Alert.alert('Register success');
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Register failed', error);
      Alert.alert('Register failed', error.message);
    }
  };
  

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Images/cat.jpg')}
      />
      <Text style={styles.title}>Register</Text>
      <Input
        label="Username"
        onChangeText={setUsername}
        value={username}
        keyboardType="default"
        labelStyle={styles.label}
        inputStyle={styles.input}
        leftIcon={{ type: 'font-awesome', name: 'user', color: '#6D8299' }}
      />
      <Input
        label="email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        labelStyle={styles.label}
        inputStyle={styles.input}
        leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#6D8299' }}
      />
      <Input
        label="password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        labelStyle={styles.label}
        inputStyle={styles.input}
        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#6D8299' }}
      />
      <Button
        title="Register"
        onPress={handleRegister}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
      />
      <Button
        title="Already have an account? Login"
        type="clear"
        onPress={() => navigation.navigate('Login')}
        titleStyle={styles.loginText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    color: '#6D8299',
  },
  input: {
    color: '#2C3A4A',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1F8ECD',
  },
  loginText: {
    color: '#6D8299',
  },
});

export default RegisterScreen;