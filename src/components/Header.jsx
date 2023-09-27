import { View, Text, TouchableOpacity, StyleSheet} from "react-native"

const segmentos= ["PART1", "PART2" , "PART3"]

export default function Header1({setTime, currentTime , setCurrentTime}) {
    function handlePress(index) {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index)
        
        setTime(newTime * 60)
    
    }

    return <View style={{ flexDirection: "row"}}> 

            {segmentos.map((item, index)=>
                <TouchableOpacity
                 key={index} 
                 onPress={()=> handlePress(index)} 
                 style={[estilos.bordes,
                    currentTime !== index && {borderColor: "transparent"} ]}
                 
                 >
                    <Text style={{fontWeight: "bold"}}>{item}</Text>
                </TouchableOpacity>
                )}
    </View>
}


const estilos = StyleSheet.create({
    bordes:{
        width: "33%",
       borderWidth: 3,
       padding: 5,
       borderRadius: 10,
       alignItems:"center",
        marginVertical: 20
    }
})