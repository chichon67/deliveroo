import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'


const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='relative mr-2'>
      <Image
        source={{
          uri: urlFor(imgUrl).width(200).url(),
        }}
        className='w-20 h-20  rounded'
      />
      <Text className='absolute bottom-1 text-white'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard