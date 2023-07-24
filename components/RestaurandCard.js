import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapIcon } from 'react-native-heroicons/outline'





const RestaurandCard = ({
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

}) => {
    return (
        <TouchableOpacity className='bg-white mr-3 shadow '>
            <Image
                source={{
                    uri: imgUrl,
                }}
                className='h-36 w-64 rounded-sm'
            />
            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-2 '>{title}</Text>
                <View className='flex-row space-x-1 items-center'>
                    <StarIcon color='green' opacity={0.5} size={22}></StarIcon>
                    <Text className='text-gray-500 text-xs'>
                        <Text className='text-green-500'>{rating}</Text> · {genre}
                    </Text>
                </View>

                <View className='flex-row space-x-1 items-center mt-1'>
                    <MapIcon color='gray' opacity={0.4} size={22} />
                    <Text className=''>Nearby · {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurandCard