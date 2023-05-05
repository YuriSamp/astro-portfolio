import { PostTypes } from '../../interface/posts';

type props = Pick<PostTypes, 'title' | 'description' | 'tag_list' | 'url' | 'cover_image'>

export function Post({ title, description, tag_list, cover_image, url }: props) {
  return (
    <article
      className='border bg-white lg:w-[600px] border-black  rounded-lg flex relative after:rounded-lg after:top-2 after:left-2 after:right-[-8px] after:bottom-[-8px] after:-z-10 after:absolute after:bg-black hover:after:top-0 hover:after:left-0 hover:after:bottom-0 hover:after:right-0 hover:translate-x-1 hover:translate-y-1 hover:after:bg-transparent cursor-pointer'
    >
      <a href={url} target='_blank'>
        <img src={cover_image} alt='article photo' className='w-full rounded-t-lg' />
        <div className='px-6 py-6'>
          <h3 className='text-left text-3xl'>{title}</h3>
          <div className='flex items-center justify-between'>
            <p className='w-full py-8'>
              {description.slice(0, 400)}
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-3'>
            {tag_list.map(tag => (
              <div
                className='border border-black px-2 h-8 bg-cyan-400 rounded-lg flex justify-center items-center '
              >
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </a>
    </article>

  )
}
