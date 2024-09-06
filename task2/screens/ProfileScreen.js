import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleFirstName,
  handleLastName,
  handleMobileNumber,
  handleEmail,
} from '../redux/profile/profileActions';

export default function ProfileScreen() {
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const mobileNo = useSelector((state) => state.mobileNo);
  const email = useSelector((state) => state.email);

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold' }}>User Details Form :</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Enter your first name"
        onChangeText={(firstName) => dispatch(handleFirstName(firstName))}
        value={firstName}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Enter your last name"
        onChangeText={(lastName) => dispatch(handleLastName(lastName))}
        value={lastName}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Enter your Mobile number"
        onChangeText={(mobileNo) => dispatch(handleMobileNumber(mobileNo))}
        value={mobileNo}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Enter your email"
        onChangeText={(email) => dispatch(handleEmail(email))}
        value={email}
      />

      <Pressable
        style={styles.submitBtn}
        onPress={() =>
          alert(
            `First Name : ${firstName} \n Last Name : ${lastName}
             \n  Mobile Number : ${mobileNo}
            Email : ${email}`
          )
        }>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    padding: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  submitBtn: {
    padding: 10,
    width: 70,
    height: 40,
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
});
