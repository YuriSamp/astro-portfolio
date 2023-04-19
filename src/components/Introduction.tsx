import { BsLinkedin, BsTwitter, BsGithub, BsMedium } from 'react-icons/bs';
import perfil from '../images/perfil.png'

export default function Introduction() {
  return (
    <section className='py-60 flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center'>
      <div className=' flex flex-col gap-5'>
        <h2 className='text-6xl text-center lg:text-left'>Yuri</h2>
        <p className='text-xl'>Front-end developer from Brazil</p>
        <ul className='flex justify-center lg:justify-start gap-7'>
          <li>
            <a
              href='https://twitter.com/Yuri_Sampa'
              rel='noreferrer'
              target='_blank'
            >
              <BsTwitter className='w-7 h-7 hover:fill-gray-400' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/yurisamp/'
              rel='noreferrer'
              target='_blank'
            >
              <BsLinkedin className='w-7 h-7 hover:fill-gray-400' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/YuriSamp'
              rel='noreferrer'
              target='_blank'
            >
              <BsGithub className='w-7 h-7 hover:fill-gray-600' />
            </a>
          </li>
          <li>
            <a
              href='https://medium.com/@yurisamp123'
              rel='noreferrer'
              target='_blank'
            >
              <BsMedium className='w-7 h-7 hover:fill-gray-600' />
            </a>
          </li>
        </ul>
      </div>
      <img src={perfil} alt='' className='w-96 pr-10 lg:pr-0' />
    </section>
  );
}
