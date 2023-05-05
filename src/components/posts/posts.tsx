import { useState } from 'react';
import { PostTypes } from '../../interface/posts';
import { Button } from './button';
import { Post } from './post';

const response = await fetch('https://dev.to/api/articles/me/published', {
  method: 'GET',
  headers: { 'api-key': import.meta.env.DEVTO_KEY }
});

const data: PostTypes[] = await response.json();

export function Posts() {
  const pagination = new Array(Math.ceil(data.length / 4)).fill('')
  const [page, setPage] = useState<number>(0)


  console.log(data)
  return (
    <section className='flex flex-col pb-10'>
      <h2 className='text-3xl py-4 text-center'>My Articles</h2>
      <div
        className='grid xl:grid-cols-2 gap-x-52 gap-y-10 place-items-center pb-14 min-h-[670px]'
      >
        {data.slice(0 + (4 * page), 4 * (page + 1)).map((article, i) => (
          <Post
            description={article.description}
            title={article.title}
            tag_list={article.tag_list}
            cover_image={article.cover_image}
            url={article.url}
            key={article.title}
          />
        ))}
      </div>
      <menu className='flex justify-center gap-4'>
        {pagination.map((_, i) => (
          <Button
            key={i}
            index={i}
            setPage={setPage}
          />
        ))
        }
      </menu>
    </section>
  )
}
