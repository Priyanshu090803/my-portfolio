'use client'
import { useTheme } from 'next-themes'
import { Button } from './button'
import { Moon, SunDim } from 'lucide-react'

const ThemeToggle = () => {
    const {theme,setTheme}=useTheme()
    function handleTheme(){
      const audio = new Audio("/click2.mp3");
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setTheme(theme==="light"?"dark":"light")

    }
  return (
    <Button onClick={handleTheme} className=' rounded-lg h-8 w-8 cursor-pointer' variant={'outline'}>
        <SunDim className='absolute    scale-100 dark:rotate-90 rotate-0 dark:scale-0'></SunDim>
        <Moon className=' absolute     scale-0 dark:rotate-0 rotate-90 dark:scale-100'></Moon>
    </Button>    
)
}

export default ThemeToggle