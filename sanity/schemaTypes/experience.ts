import {defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'jobImage',
      title: 'Company Logo',
      type: 'image',
    }),
    defineField({
      name: 'jobName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'techImages',
      title: 'Technolgies Used',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'string',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'string',
    }),
    defineField({
      name: 'jobDescription',
      title: 'Description',
      type: 'text',
    }),
  ],
})
