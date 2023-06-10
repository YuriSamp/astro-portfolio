import { PostTypes } from '../../interface/posts';
import { Post } from './post';

const response = await fetch('https://dev.to/api/articles/me/published', {
  method: 'GET',
  headers: { 'api-key': import.meta.env.DEVTO_KEY }
});

const data: PostTypes[] = await response.json();

export function Posts() {

  return (
    <section className='flex flex-col pb-10'>
      <h2 className='text-4xl py-4 mb-10 text-center'>My Articles</h2>
      <div
        className='grid xl:grid-cols-2 gap-x-52 gap-y-10 place-items-center pb-14 min-h-[670px]'
      >
        {data.map((article) => (
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
    </section>
  )
}
