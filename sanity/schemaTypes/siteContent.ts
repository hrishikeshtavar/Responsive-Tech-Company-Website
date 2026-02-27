import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteContentType = defineType({
  name: 'siteContent',
  title: 'Site Content',
  type: 'document',
  fields: [
    defineField({
      name: 'navbarLinks',
      title: 'Navbar Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'name', type: 'string'}),
            defineField({name: 'href', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({name: 'titlePrefix', type: 'string'}),
        defineField({name: 'titleHighlight', type: 'string'}),
        defineField({name: 'subtitle', type: 'string'}),
        defineField({name: 'yearsValue', type: 'string'}),
        defineField({name: 'yearsLabel', type: 'string'}),
        defineField({name: 'paragraph1', type: 'text'}),
        defineField({name: 'paragraph2', type: 'text'}),
        defineField({name: 'highlights', type: 'array', of: [defineArrayMember({type: 'string'})]}),
        defineField({
          name: 'values',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'icon', type: 'string'}),
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'description', type: 'string'}),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services Section',
      type: 'object',
      fields: [
        defineField({name: 'titlePrefix', type: 'string'}),
        defineField({name: 'titleHighlight', type: 'string'}),
        defineField({name: 'subtitle', type: 'string'}),
        defineField({name: 'ctaText', type: 'string'}),
        defineField({name: 'ctaHref', type: 'string'}),
        defineField({
          name: 'items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'icon', type: 'string'}),
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'description', type: 'text'}),
                defineField({name: 'color', type: 'string'}),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'iot',
      title: 'IoT Showcase Section',
      type: 'object',
      fields: [
        defineField({name: 'titlePrefix', type: 'string'}),
        defineField({name: 'titleHighlight', type: 'string'}),
        defineField({name: 'subtitle', type: 'string'}),
        defineField({name: 'implementationTitle', type: 'string'}),
        defineField({name: 'implementationDescription', type: 'text'}),
        defineField({name: 'applicationAreaTitle', type: 'string'}),
        defineField({
          name: 'features',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'icon', type: 'string'}),
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'description', type: 'text'}),
              ],
            }),
          ],
        }),
        defineField({name: 'useCases', type: 'array', of: [defineArrayMember({type: 'string'})]}),
      ],
    }),
    defineField({
      name: 'portfolio',
      title: 'Portfolio Section',
      type: 'object',
      fields: [
        defineField({name: 'titlePrefix', type: 'string'}),
        defineField({name: 'titleHighlight', type: 'string'}),
        defineField({name: 'subtitle', type: 'string'}),
        defineField({name: 'categories', type: 'array', of: [defineArrayMember({type: 'string'})]}),
        defineField({name: 'ctaText', type: 'string'}),
        defineField({name: 'ctaHref', type: 'string'}),
        defineField({
          name: 'items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'id', type: 'number'}),
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'category', type: 'string'}),
                defineField({name: 'description', type: 'text'}),
                defineField({name: 'tags', type: 'array', of: [defineArrayMember({type: 'string'})]}),
                defineField({name: 'icon', type: 'string'}),
                defineField({name: 'gradient', type: 'string'}),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'blog',
      title: 'Blog Section',
      type: 'object',
      fields: [
        defineField({name: 'titlePrefix', type: 'string'}),
        defineField({name: 'titleHighlight', type: 'string'}),
        defineField({name: 'subtitle', type: 'string'}),
        defineField({name: 'categories', type: 'array', of: [defineArrayMember({type: 'string'})]}),
        defineField({
          name: 'posts',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'id', type: 'number'}),
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'excerpt', type: 'text'}),
                defineField({name: 'author', type: 'string'}),
                defineField({name: 'date', type: 'date'}),
                defineField({name: 'readTime', type: 'string'}),
                defineField({name: 'category', type: 'string'}),
                defineField({name: 'slug', type: 'string'}),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'research',
      title: 'Research Section',
      type: 'object',
      fields: [
        defineField({name: 'titlePrefix', type: 'string'}),
        defineField({name: 'titleHighlight', type: 'string'}),
        defineField({name: 'subtitle', type: 'string'}),
        defineField({name: 'labTitle', type: 'string'}),
        defineField({name: 'labDescription', type: 'text'}),
        defineField({name: 'publicationSectionTitle', type: 'string'}),
        defineField({
          name: 'areas',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'icon', type: 'string'}),
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'description', type: 'text'}),
                defineField({name: 'publications', type: 'number'}),
                defineField({name: 'color', type: 'string'}),
              ],
            }),
          ],
        }),
        defineField({
          name: 'publications',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'journal', type: 'string'}),
                defineField({name: 'year', type: 'string'}),
                defineField({name: 'authors', type: 'string'}),
                defineField({name: 'type', type: 'string'}),
              ],
            }),
          ],
        }),
        defineField({
          name: 'achievements',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'icon', type: 'string'}),
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'description', type: 'string'}),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        defineField({name: 'titlePrefix', type: 'string'}),
        defineField({name: 'titleHighlight', type: 'string'}),
        defineField({name: 'subtitle', type: 'string'}),
        defineField({
          name: 'items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'id', type: 'number'}),
                defineField({name: 'name', type: 'string'}),
                defineField({name: 'position', type: 'string'}),
                defineField({name: 'organization', type: 'string'}),
                defineField({name: 'content', type: 'text'}),
                defineField({name: 'rating', type: 'number'}),
              ],
            }),
          ],
        }),
        defineField({
          name: 'stats',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'number', type: 'string'}),
                defineField({name: 'label', type: 'string'}),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({name: 'titlePrefix', type: 'string'}),
        defineField({name: 'titleHighlight', type: 'string'}),
        defineField({name: 'subtitle', type: 'string'}),
        defineField({name: 'infoTitle', type: 'string'}),
        defineField({name: 'infoDescription', type: 'string'}),
        defineField({name: 'responseTitle', type: 'string'}),
        defineField({name: 'responseText', type: 'string'}),
        defineField({
          name: 'items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'type', type: 'string'}),
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'content', type: 'string'}),
                defineField({name: 'link', type: 'string'}),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer Section',
      type: 'object',
      fields: [
        defineField({name: 'description', type: 'text'}),
        defineField({name: 'quickLinks', type: 'array', of: [defineArrayMember({type: 'string'})]}),
        defineField({name: 'services', type: 'array', of: [defineArrayMember({type: 'string'})]}),
        defineField({
          name: 'socialLinks',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'platform', type: 'string'}),
                defineField({name: 'link', type: 'string'}),
              ],
            }),
          ],
        }),
        defineField({
          name: 'legalLinks',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'label', type: 'string'}),
                defineField({name: 'href', type: 'string'}),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'trustedBy',
      title: 'Trusted By Section',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', type: 'string'}),
        defineField({name: 'titlePrefix', type: 'string'}),
        defineField({name: 'titleHighlight', type: 'string'}),
        defineField({name: 'subtitle', type: 'text'}),
        defineField({name: 'badgeText', type: 'string'}),
      ],
    }),
  ],
})
