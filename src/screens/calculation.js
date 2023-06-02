import React, {useLayoutEffect} from 'react'
import { Text,View,TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';

const sign = {
  'add':'+',
  'subtract':'-',
  'multiply':'X',
  'divide':'%'}

export const Calculation = ({route}) => {
  const navigation=useNavigation()
  const {control,handleSubmit,formState:{errors}} = useForm()
  const { operator } = route.params


  const [secondNumber,setSecondNumber] = useState(numberOne = Math.floor(Math.random()*50));
  const [firstNumber,setFirstNumber] = useState(numberOne = secondNumber + Math.floor(Math.random()*50));
  const [points,setPoints] = useState(0)


  if(secondNumber == 0 && sign == 'divide'){
    secondNumber = 1
  }




  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:true,
        title:operator.toUpperCase()
    })
},[])

const handleNumberChange = (text) => {
  // Remove any non-digit characters from the input
  let correctAnswer = 0
  try{
    const cleanedText = text.replace(/[^0-9]/g, '');
    if(operator == 'add' ) correctAnswer = firstNumber + secondNumber 
    else if(operator == 'subtract' ) correctAnswer = firstNumber - secondNumber 
    else if(operator == 'multiply' ) correctAnswer = firstNumber * secondNumber 
    else correctAnswer = firstNumber / secondNumber

    if(parseInt(cleanedText) == correctAnswer){
      let increasePoint = points+1
      setPoints(increasePoint)
      alert('correct')
      setSecondNumber(numberOne = Math.floor(Math.random()*50));
      setFirstNumber(numberOne = secondNumber + Math.floor(Math.random()*50));
    }
  }catch(e){
    console.log(e)
  }
};


  return (
    <SafeAreaView>
      <View className='flex w-full h-full px-2 items-center justify-center'>
        <Text  className='text-5xl mb-2'>{`${firstNumber}  ${sign[operator]} ${secondNumber} = ` }</Text>
        <Controller
        control={control}
        name='answer'
        rules={
          { required:'(answer is required)' }
        }
        render={({field: {value,onChange,onBlur},fieldState:{error}})=>(
          <>
            <View className='flex-row space-x-2 items-center'>
              { error && <Text className='text-red-500'>{error.message || 'Error'}</Text>}
            </View>
            <TextInput 
                keyboardType="numeric"
                value={value} 
                secureTextEntry={false}
                onChangeText={handleNumberChange}
                onBlur={onBlur}
                placeholder=''
                className={
                  error ? 'bg-gray-200 min-w-full py-1 border-2 border-red-300 pl-3 rounded shadow-md' : 'bg-gray-200 min-w-full py-1 border-2 border-green-300 pl-3 rounded shadow-md'
                } />
          </>
          
        )}/>
      </View>
    </SafeAreaView>
  )
}