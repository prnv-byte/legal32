// sanity/schemaTypes/postType.ts
import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Legal Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // Add this field inside the fields array
defineField({
  name: 'excerpt',
  title: 'Excerpt',
  type: 'text',
  description: 'A short summary of the article (appears on the homepage)',
  validation: (rule) => rule.max(200),
}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'content',
      title: 'Body Content',
      type: 'array',
      of: [{type: 'block'}], // This allows for rich text (bold, links, etc.)
    }),
  ],
})