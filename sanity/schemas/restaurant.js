import { defineField, defineType } from 'sanity'
import { Rule } from '@sanity/validation';



export default defineType({
  name: 'restaurant',
  title: 'Reataurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant adress',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Enter a Rating from (1-5 Stars',
      type: 'number'
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{ type: "category" }]
    }),
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    }
  ],
})
