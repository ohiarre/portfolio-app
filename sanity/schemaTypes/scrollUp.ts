import {defineField, defineType} from 'sanity'

export const scrollUpType = defineType({
  name: 'scrollUp',
  title: 'ScrollUp',
  type: 'document',
  fields: [
    defineField({
      name: 'scrollUpTitle',
      title: 'ScrollUp Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
})
