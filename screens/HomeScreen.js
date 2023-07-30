import { View, Text, SafeAreaView, Image, TextInput, ScrollViewBase } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import { client } from '../sanity'




const HomeScreen = () => {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {

    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  useEffect(() => {
    client.fetch(
      `
      *[_type == "featured"] {
        ...,
       restaurants[] ->{
         ...,
         dishes[] ->{
         }
       }
     }
      `
    ).then(data => {
      setFeaturedCategories(data);
    })
  }, [])



  return (
    <SafeAreaView className='bg-white pt-5'>

      {/* header */}
      <View className='flex-row px-4 pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />

        <View className='flex-1'>
          <Text className='text-xs text-gray-400'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>Current Location
            <ChevronDownIcon size={20} color={'#00CCBB'} />
          </Text>
        </View>

        <UserIcon size={35} color={'#00CCBB'} />
      </View>


      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4 px-4'>
        <View className='flex-row flex-1  p-3 space-x-2 bg-gray-200'>
          <MagnifyingGlassIcon color='gray' />
          <TextInput placeholder='Restaurants and Cuisines' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon size={35} color={'#00CCBB'} />
      </View>


      {/* Body */}
      <ScrollView className='bg-gray-50'>

        {/* Categories */}
        <Categories />

        {/* Features Rows  */}
        {featuredCategories?.map(category => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />

        ))}


        {/* Featured Rows */}

      </ScrollView>
    </SafeAreaView >

  )
}

export default HomeScreen