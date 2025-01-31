import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button, Card, Divider, PaperProvider, Text } from "react-native-paper";
import { students } from "./StudentsDb";
import { useNavigation } from "@react-navigation/native";
export default function Profile({ route }) {
    const { student } = route.params;
    // console.log(student);
    const navigation = useNavigation();
    //const student = students.filter((stu)=>stu.id==studentid);
    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.imagepad}>
                        <Image source={require('../assets/uovlogo.png')} style={styles.image} />
                        <Divider />
                    </View>
                    <View style={styles.body}>
                        <Card style={styles.card}>
                            {/* Profile Picture */}
                            <View style={styles.profilePicContainer}>
                                <Image source={student.profile_pic} style={styles.profilePic} />
                            </View>
                            {/* Basic Details */}
                            <Text style={styles.name} variant="headlineMedium">
                                {student.name}
                            </Text>
                            <Text style={styles.info} variant="bodyMedium">
                                Age: {student.age} | Gender: {student.gender}
                            </Text>
                            <Divider style={styles.divider} />
                            {/* Contact Information */}
                            <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Information</Text>
                                <Text>ID: {student.id}</Text>
                                <Text>Gender: {student.gender}</Text>
                                <Text>Age: {student.age}</Text>
                                <Text>Course: {student.course_name}</Text>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.buttoncontainer}>
                                <Button  mode="contained" icon="account-edit" onPress={() => navigation.navigate('Update', { student })} style={[styles.addbutton,{backgroundColor:"#77B254"}]} contentStyle={styles.content}></Button>
                                <Button  mode="contained" icon="home" onPress={() => navigation.popTo('Studentlist', { updateStudent: student })} style={styles.addbutton} contentStyle={styles.content}></Button>
                            </View>
                        </Card>
                    </View>
                    <View style={styles.footer}>
                        <Text style={{ color: "#ffff", margin: 'auto' }} variant="labelLarge">UoV © 2024</Text>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        flexGrow: 1,
        justifyContent: 'space-between',
        padding: 10
    },
    imagepad: {
        padding: 8,
        alignItems: 'center',
        flex: 2,
        marginBottom: 10
    },
    image: {
        width: '80%',
        height: 73,
    },
    profile: {
        width: 200,
        height: 200,

    },
    header: {
        flex: 3,
        width: "100%",
        alignItems: 'center',
        padding: 5,
        marginBottom: 2
    },
    body: {
        flex: 5,
        width: "100%",
        alignItems: "center"
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: 'center',
        backgroundColor: '#4b0150'
    },
    input: {
        padding: 8,
        marginBottom: 7
    },
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },
    card: {
        margin: 8,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#fff',
        width: '90%'
    },
    profilePicContainer: {
        marginBottom: 16,
        alignItems: "center"
    },
    profilePic: {
        width: 160,
        height: 160,
        borderRadius: 60,
    },
    name: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    info: {
        textAlign: 'center',
        marginBottom: 16,
    },
    divider: {
        marginVertical: 16,
        width: '90%',
    },
    section: {
        alignItems: 'flex-start',
        marginBottom: 8,
        width: '100%',
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    buttoncontainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start', // Aligns the button to the bottom
        //alignItems: 'center', // Aligns the button to the right
        padding: 16, // Adds padding to avoid edge clipping
        backgroundColor: '#f9f9f9',
    },
    addbutton: {
        height: 60,
        width: 60,
        borderRadius: 8, // Slightly rounded corners
        backgroundColor: '#4b0150',
        margin: 2
    },
    content: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});