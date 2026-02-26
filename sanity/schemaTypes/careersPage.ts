import {defineArrayMember, defineField, defineType} from 'sanity'

export const careersPageType = defineType({
  name: 'careersPage',
  title: 'Careers Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Build The Future With Zenture IT',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'positions',
      title: 'Open Positions',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'position',
          fields: [
            defineField({name: 'id', title: 'ID', type: 'string'}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'department', title: 'Department', type: 'string'}),
            defineField({name: 'location', title: 'Location', type: 'string'}),
            defineField({
              name: 'type',
              title: 'Employment Type',
              type: 'string',
              options: {
                list: ['Full-time', 'Part-time', 'Contract', 'Internship'],
              },
            }),
            defineField({name: 'experience', title: 'Experience', type: 'string'}),
            defineField({name: 'summary', title: 'Summary', type: 'text', rows: 2}),
            defineField({
              name: 'requirements',
              title: 'Requirements',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
            }),
            defineField({
              name: 'responsibilities',
              title: 'Responsibilities',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
            }),
            defineField({name: 'applyUrl', title: 'Apply URL', type: 'url'}),
            defineField({
              name: 'postedDate',
              title: 'Posted Date',
              type: 'date',
              options: {dateFormat: 'YYYY-MM-DD'},
            }),
          ],
        }),
      ],
    }),
  ],
})
