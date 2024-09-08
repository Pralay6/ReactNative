import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstName,
  setLastName,
  setEmail,
  setMobile,
} from "../redux/profile/profileSlice";

export default function ProfileScreen() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontWeight: "bold" }}>User Details Form :</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Enter your first name"
        onChangeText={(firstName) => dispatch(setFirstName(firstName))}
        value={profile.firstName}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Enter your last name"
        onChangeText={(lastName) => dispatch(setLastName(lastName))}
        value={profile.lastName}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Enter your Mobile number"
        onChangeText={(mobile) => dispatch(setMobile(mobile))}
        value={profile.mobile}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Enter your email"
        onChangeText={(email) => dispatch(setEmail(email))}
        value={profile.email}
      />

      <Pressable
        style={styles.submitBtn}
        onPress={() =>
          alert(
            `First Name : ${profile.firstName} \n Last Name : ${profile.lastName} \n Mobile Number : ${profile.mobile}
                Email : ${profile.email}`
          )
        }
      >
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    padding: 10,
    fontWeight: "bold",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  submitBtn: {
    padding: 10,
    width: 70,
    height: 40,
    backgroundColor: "lightblue",
    borderRadius: 10,
  },
});
