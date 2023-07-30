import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice'



const DishRow = ({ key, id, name, description, price, image }) => {

    const [isPressed, setIsPressed] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector((state) => selectBasketItemsWithId(state, id))

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))

    }

    //i console.log id and it's undefined, meaning the id is already undefined before coming here. 
    console.log(id)

    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`border p-4 border-gray-200 bg-white ${isPressed && 'border-b-0'}`}>
                <View className='flex-row'>
                    <View className='flex-1 space-y-2'>
                        <Text className='font-bold text-lg' >{name}</Text>
                        <Text className='text-gray-400'>{description}</Text>
                        <Text className='text-gray-400' >{price}€</Text>
                    </View>
                    <View>
                        <Image source={{
                            uri: urlFor(image).width(200).url()
                        }}
                            style={{
                                borderWidth: 1,
                                borderColor: '#F3F3F4',

                            }
                            }
                            className='w-20 h-20'
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed &&
                (
                    <View className='flex-row items-center space-x-2 pb-3'>
                        <View>
                            <TouchableOpacity>
                                <MinusCircleIcon color={'#00CCBB'} size={40} />
                            </TouchableOpacity>

                        </View>

                        <Text>{items.length}</Text>

                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon color={'#00CCBB'} size={40} />
                        </TouchableOpacity>


                    </View >

                )}
        </>
    )
}

export default DishRow