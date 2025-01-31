import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Divider, PaperProvider, Text } from "react-native-paper";
import { students } from "./StudentsDb";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

export default function StudentList({route}) {
    const [fstudent, setFstudent] = useState(students);
    const [rerender, setRerender] = useState(false);
    React.useEffect(() => {
        if (route.params?.newStudent) {
            const {newStudent} = route.params;
            setFstudent((prev) => [...prev, { ...newStudent }]);
        }
        if(route.params?.updateStudent){
            const {updateStudent} = route.params;
            let index=0;
            let count =0;
          students.forEach((stu)=>{   
            if(stu.id == updateStudent.id){
                index =count;
            }
            count++;
           });
           students[index]=updateStudent;
           setFstudent(students);
           setRerender(!rerender);
        }
      }, [route.params?.newStudent,route.params?.updateStudent]);
    

    const navigation = useNavigation();
    return (
        <PaperProvider>
            <View style={styles.container}>
                <View style={styles.imagepad}>
                    <Image source={require('../assets/uovlogo.png')} style={styles.headerimage} />
                    <Divider />
                </View>
                <View style={styles.body}>
                    <FlatList
                        data={fstudent}
                        keyExtractor={item => item.id}
                        extraData={rerender}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Profile', { student: item });
                            }} style={styles.card}>
                                <Image source={item.profile_pic} style={styles.image} />
                                <Text style={styles.name}>{item.name}</Text>
                            </TouchableOpacity>
                        }
                        contentContainerStyle={styles.list}
                    />
                    <View style={styles.buttoncontainer}>
                        <Button mode="contained" onPress={() => navigation.navigate('ADD')} style={styles.addbutton} contentStyle={styles.content}>
                            +
                        </Button>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={{ color: "#ffff", margin: 'auto' }} variant="labelLarge">UoV © 2024</Text>
                </View>
            </View>
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
        flex: 1,
        marginBottom: 15,
        marginTop: 5
    },
    headerimage: {
        width: '80%',
        height: 73,
    },
    header: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        padding: 5,
        marginBottom: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        textAlign: 'center',
    },
    body: {
        flex: 8,
        width: "100%"
    },
    footer: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        backgroundColor: '#4b0150'
    },
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },
    list: {
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 12,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    buttoncontainer: {
        flex: 1,
        justifyContent: 'flex-end', // Aligns the button to the bottom
        alignItems: 'flex-end', // Aligns the button to the right
        padding: 16, // Adds padding to avoid edge clipping
        backgroundColor: '#f9f9f9',
    },
    addbutton: {
        width: 60, // Square dimensions
        height: 60,
        borderRadius: 8, // Slightly rounded corners
        backgroundColor:'#4b0150'
    },
    content: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});