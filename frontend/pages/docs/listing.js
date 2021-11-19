import React from 'react';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

function Lista({posts}) {
    return (
        <div className="container">
            <main>
            {posts.map((post, id) => (
              <div key={id} >
                {post.frontMatter.title}
                <Link href={`/docs/` + post.frontMatter.slug}>{post.frontMatter.slug}</Link>
              </div>
            ))}
    
          </main>
        </div>
    );
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('arqs/docs'));
  
    const posts = files.map(filename => {
      const markdownWithMeta = fs.readFileSync(path.join('arqs/docs', filename), 'utf-8');
      const { data: frontMatter } = matter(markdownWithMeta);
  
      return {
        frontMatter,
        slug: filename.split('.')[0]
      }
    })
  
    return {
      props: {
        posts
      }
    }
  }

export default Lista;