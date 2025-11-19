import Image from "next/image"

const Home = () => {  

  return (
    <div className=' min-h-screen w-full px-72 py-16 font-stack relative'>
      <div  className=" absolute border w-full left-0 top-100 border-[#f1f1f1] dark:border-[#0c0c0c]"/>
       <Image   src="/star.svg"
              alt="svg-pic"
              width={20}
              height={20}
              color="yellow"
              className="  absolute -rotate-25 top-4/5"
            /><Image 
            src="/star.svg"
            alt="svg-pic"
            width={20}
            height={20}
            color="yellow"
            className="  absolute rotate-25 top-1/3 right-68 "
          />
        <div className="  space-y-6  ">
          <div className=" border-black rounded-lg flex gap-2 items-end">
            <Image 
              src="/pfp.PNG"
              alt="profile-pic"
              width={400}
              height={600}
              className=" border h-40 w-40 object-cover object-top rounded-2xl dark:hidden"
            />
            <Image 
              src="/batman1.png"
              alt="profile-pic-dark"
              width={400}
              height={600}
              className=" border h-40 w-40 object-cover object-top rounded-2xl hidden dark:block"
            />
            <span className=" font-bold text-sm text-neutral-400 dark:text-neutral-200 dark:hidden">(__Pookie mode)</span>
            <span className=" font-bold text-sm text-neutral-400 dark:text-neutral-600 hidden dark:inline">(__Batman mode)</span>
          </div>
          <h1 className=" text-6xl font-black text-neutral-700 dark:text-neutral-50">HIE, my name is <span className="text-[#c562fa] dark:text-[#626161]">PRIYANshu</span></h1>
          <div className=" space-y-6 mt-10">
            <h3 className=" text-5xl text-neutral-600 dark:text-neutral-300"> I am a Full Stack Dev.</h3>
          
            <div className=" space-y-2">
            <p className=" text-neutral-400    dark:text-neutral-300">Full-stack developer focused on interactive UI, scalable backend systems, and applied GenAI.
React, Next.js, Motion.dev, Node.js, FastAPI, PostgreSQL, Docker.
Always building, always improving.
            </p>
          <p className=" text-neutral-400    dark:text-neutral-300">
          </p>
          </div>

          </div>
        </div>

    </div>
  )
}

export default Home