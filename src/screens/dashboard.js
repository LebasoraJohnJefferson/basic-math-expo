import React, {useLayoutEffect} from 'react'
import { Text,View,TouchableOpacity,ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'


const operators = ['add','subtract','multiply','divide']

export const Dashboard = () => {

    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])


  return (
    <SafeAreaView>
        <ScrollView>
        <View className='w-full h-screen flex items-center px-3 justify-around'>
            {
                operators.map((operator)=>{
                    return (
                        <TouchableOpacity key={operators.indexOf(operator)} className='rounded shadow-lg bg-blue-200 w-full mx-3 flex justify-center items-center h-32' onPress={
                            ()=>{
                                navigation.navigate('Calculation',{'operator':operator})
                            }
                        }>
                            <Text className='text-blue-600 font-bold text-xl'>{operator.toUpperCase()}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}
