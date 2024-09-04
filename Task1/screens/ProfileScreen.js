import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react';

export default function ProfileScreen() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
            <Text style={{ fontWeight: 'bold' }}>
                User Details Form :
            </Text>
            <TextInput
                style={styles.textinput}
                placeholder="Enter your first name"
                onChangeText={fname => setFname(fname)}
                value={fname}
            />
            <TextInput
                style={styles.textinput}
                placeholder="Enter your last name"
                onChangeText={lname => setLname(lname)}
                value={lname}
            />
            <TextInput
                style={styles.textinput}
                placeholder="Enter your Mobile number"
                onChangeText={mobile => setMobile(mobile)}
                value={mobile}

            />
            <TextInput
                style={styles.textinput}
                placeholder="Enter your email"
                onChangeText={email => setEmail(email)}
                value={email}

            />

            <Pressable
                style={styles.submitBtn}
                onPress={() => alert(
                    `First Name : ${fname} \n Last Name : ${lname} \n Mobile Number : ${mobile}
                Email : ${email}`
                )}
            >
                <Text>
                    Submit
                </Text>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    textinput: { padding: 10, fontWeight: 'bold', borderWidth: 1, marginTop: 10, borderRadius: 5 },
    submitBtn: { padding: 10, width: 70, height: 40, backgroundColor: "lightblue", borderRadius: 10 }
})
