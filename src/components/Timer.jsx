import { View, Text, StyleSheet } from "react-native";


export default function Timer({time}) {
    const formatTime = `${Math.floor(time / 60).toString().padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}
  `;
    


  
        return <View style={estiloss.contenido}>
             <Text style={estiloss.time}>{formatTime}</Text>
            </View>
}




const estiloss= StyleSheet.create({
    contenido: {
        flex: 0.3,
        justifyContent: "center",
        backgroundColor: "white",
        padding: 15, 
        borderRadius: 15,
        
    },
    time:{
        fontSize: 80,
        fontWeight: "700",
        textAlign: "center"

    }
})