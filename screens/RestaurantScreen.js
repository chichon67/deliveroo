import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow'





const RestaurantScreen = () => {

    const navigation = useNavigation()

    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,

        },
    } = useRoute()


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })



    return (

        <ScrollView>
            <View className='relative'>
                <Image
                    source={{
                        uri: urlFor(imgUrl).url()
                    }}
                    className='h-56 w-full bg-gray-300 p-4'
                />
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
                    <ArrowLeftIcon size={20} color='#00CCBB' />

                </TouchableOpacity>
            </View>

            <View className='bg-white'>
                <View className='px-4 pt-4'>
                    <Text className='font-bold text-3xl'>{title}</Text>
                    <View className='flex-row  space-x-2 my-1'>
                        <View className='flex-row items-center space-x-2'>
                            <StarIcon color='green' opacity={0.5} size={22} />
                            <Text className='text-gray-500 text-xs'>
                                <Text className='text-green-500'>{rating}</Text> · {genre}
                            </Text>
                        </View>

                        <View className='flex-row items-center space-x-2'>
                            <MapPinIcon color='green' opacity={0.5} size={22} />
                            <Text className='text-gray-500 text-xs'>Nearby · {address} </Text>
                        </View>

                    </View>
                    <Text className='text-gray-500 mt-2 pb-4' >{short_description}</Text>
                </View>

                <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300 '>
                    <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} />
                    <Text className='font-bold flex-1 pl-2'>Have a food allergy?</Text>
                    <ChevronRightIcon color='#00CCBB' />
                </TouchableOpacity>
            </View>

            <View>
                <Text className='font-bold text-xl p-4'>Menu</Text>
                {dishes?.map(dish => (
                    <DishRow
                        key={dish._id}
                        id={dish._id}
                        name={dish.name}
                        description={dish.short_description}
                        price={dish.price}
                        image={dish.image}


                    />
                ))}
            </View>

        </ScrollView>

    )
}

export default RestaurantScreen