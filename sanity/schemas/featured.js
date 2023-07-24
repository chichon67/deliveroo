import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featured',
    title: 'Featured Menu Categories',
    type: 'document',
    fields: [

        defineField({
            name: 'name',
            title: 'Featured Category name',
            type: 'string',

        }),
        defineField({
            name: 'short_description',
            title: 'Short description',
            type: 'string',
        }),
        defineField({
            name: 'restaurants',
            title: 'Restaurants',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: "restaurant" }] }]
        }),
        defineField({
            name: "image",
            type: "image",
            title: 'Image of the Dish',
        })
        ,],

})
