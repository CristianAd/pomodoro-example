import { StyleSheet, Text, View, Button, Touchable, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Header1 from './src/components/Header';
import Timer from './src/components/Timer';
import {Audio} from "expo-av"



const colors = ["#F9839F", "#7BF986", "#F6B13E"]
export default function App() {
  const [isWorking, setisWorking] = useState(false)
  const [time, setTime] = useState(25*60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setisActive] = useState(false)

  useEffect(()=>{
      let interval = null;
      if (isActive) {
        interval = setInterval(()=>{setTime(time - 1)}, 1000)
      } else {
        clearInterval(interval)
      }
      if (time === 0) {
        setisActive(false);
        setisWorking((prev)=> !prev);
        setTime(isWorking ? 300: 1500);
      }
      return ()=> clearInterval(interval)
  }, [isActive, time])
  
  function startOrOstop() {
    playSound();
   setisActive(!isActive)
  }

  async function playSound() {
    const {sound} = await Audio.Sound.createAsync(
      require("./assets/ronroneo.mp3")
    );
    await sound.playAsync();
  }

  return (
    <View style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <Text style={styles.titulos}>Pomodoro</Text>
     
      
      <Header1 
        setCurrentTime ={setCurrentTime}
        currentTime = {currentTime}
        setTime = {setTime}
        />
        <Timer time={time} />
        <TouchableOpacity onPress={startOrOstop} style={styles.buttonn}>
          <Text style={{color: "white", fontWeight: "bold"}}>
            {isActive ? "STOP" : "START"}
            </Text>
          </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
    borderWidth: 3
 
  },
  titulos:{
    fontSize: 20, 
    fontWeight: "bold", 

  }, 
  buttonn:{
    backgroundColor: "#333333",
    padding: 15, 
    marginTop: 15,
    borderRadius: 15, 
    alignItems: "center"
  }
});
