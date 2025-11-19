import Link from 'next/link'
import ThemeToggle from './ui/theme-toggle'

const Navbar = () => {
  return (
    <div className=' z-50 w-full h-12   flex justify-center border font-stack font-light text-neutral-700 dark:text-neutral-300 top-0 sticky border-neutral-100 dark:border-neutral-900 dark:bg-black bg-[#fdfcff]'>
      <div className=' h-full border absolute left-[16.62%] dark:border-neutral-950 border-[#f4f3f3]'/>
      <div className=' h-full border absolute right-[16.62%] dark:border-neutral-950 border-[#f4f3f3]'/>
      <div className='  w-4/6 px-2  flex justify-end gap-6 items-center  '>
      <Link href={''} className=' uppercase'>About</Link>
      <Link href={''} className=' uppercase'>Projects</Link>
      <Link href={''} className=' uppercase'>Contact</Link>

      <ThemeToggle/></div>
      </div>
  )
}

export default Navbar