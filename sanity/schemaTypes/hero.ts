import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Badge Text',
      type: 'string',
      initialValue: 'Innovative IT Solutions',
    }),
    defineField({
      name: 'titleLine1',
      title: 'Heading Line 1',
      type: 'string',
      initialValue: 'Transform Your Ideas Into',
    }),
    defineField({
      name: 'titleHighlight',
      title: 'Heading Highlight',
      type: 'string',
      initialValue: 'Digital Reality',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'primaryButtonLink',
      title: 'Primary Button Link',
      type: 'string',
      initialValue: '#contact',
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      initialValue: 'Our Services',
    }),
    defineField({
      name: 'secondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'string',
      initialValue: '#services',
    }),
  ],
})
