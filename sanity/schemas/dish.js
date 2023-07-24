import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [

    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',

    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Pirce of the dish in EUR',
      type: 'number',
    }),
    defineField({
      name: "image",
      type: "image",
      title: 'Image of the Dish',
    })
    ,],

})
