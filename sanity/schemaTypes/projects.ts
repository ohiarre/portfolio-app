import {defineField, defineType} from 'sanity'

export const ProjectType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    }),
    defineField({
      name: 'projectTitle',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
    }),
  ],
})
