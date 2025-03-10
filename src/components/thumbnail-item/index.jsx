import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
      <p>{node.frontmatter.date}</p>
      <p>{node.frontmatter.description}</p>
      {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
    </div>
  </Link>
)
