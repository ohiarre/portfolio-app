import {defineField, defineType} from 'sanity'

export const skillsType = defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'skillName',
      title: 'Skill Name',
      type: 'string',
    }),
    defineField({
      name: 'skillImage',
      title: 'Skill Image',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'skillPercentage',
      title: 'Skill Percentage',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
