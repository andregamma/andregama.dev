import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'André Gama',
  description: 'André Gama\'s personal website',
}

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-y-16 xl:gap-y-0 xl:gap-x-16 xl:grid-cols-4">
      <aside className='self-start w-full col-span-1 p-8 border border-gray-600 xl:sticky xl:top-5'>
        <div className='flex flex-col items-center text-center'>
          <Image src={'/images/avatar2.jpg'} title='That&apos;s me!' className='transition-all duration-200 border-2 border-transparent rounded-full hover:border-amber-400' alt='Profile Picture' width={180} height={180} quality={100} />
          <h1 className='mt-4 text-xl font-bold'>André Gama</h1>

          <nav className='flex flex-col mt-8 space-y-2'>
            <a href='#about' className='text-amber-400'>About me</a>
            <a href='#projects' className='text-amber-400'>Projects</a>
            <a href='#contact' className='text-amber-400'>Contact</a>
          </nav>
        </div>
      </aside>
      <main className='col-span-3 p-8 space-y-8 prose text-white border border-gray-600 rounded prose-amber max-w-none prose-a:text-amber-400 prose-a:font-semibold'>
        <section id='about'>
          <h1 className='text-amber-400'>About me</h1>
          <p>
            I&apos;m a software developer from Brazil, currently working at <a href='https://www.imagineapps.com.br/'>Imagine Apps</a> as a Frontend Engineer.
          </p>
          <p>
            With the objective of learning more about entrepreneurship and improve my skills in software development, I started a graduation of Information System in 2023.
          </p>
          <p>
            Currently, I&apos;m working with Next.js, Angular, and TailwindCSS. I&apos;m also learning about design systems and UI/UX.
          </p>
        </section>
        <section id='projects'>
          <h1 className='text-amber-400'>Projects</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className='flex flex-col border border-gray-600 rounded'>
              <div className="p-4 bg-black rounded-t">
                <span className='font-medium text-white'>Cineshop 3D</span>
              </div>
              <div className="flex flex-col justify-between h-full p-4 space-y-8">
                <div className="text-sm prose text-white max-w-none">
                  <p>
                    The cinema website of my city in the time was very simple, using Wordpress and a theme that was not very good.
                  </p>
                  <p>At the time I was already making some experiments with React and decided to start developing a cinema site with him.</p>
                  <p>
                    With 17 years old, I started to develop the website. The idea was to make a website with a good user experience, with a good design and that was fast.
                  </p>
                  <p>
                    With the website finished, I was thinking in offering the website to the cinema, but I haven&apos;t any know-how of sales and I was very shy.
                  </p>
                  <p>
                    I haven&apos;t sold the website, neither finished the project. But I learned a lot about requisitions, React, and HeadlessCMS.
                  </p>
                </div>
                <div className='flex justify-between'>
                  <span className='text-sm'>
                    {new Date('2019-12-16').toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </span>
                  <a href='https://github.com/andregamma/cineshop-react' className='text-amber-400'>Visit repository</a>
                </div>
              </div>
            </div>
            <div className='flex flex-col border border-gray-600 rounded'>
              <div className="p-4 bg-white rounded-t">
                <span className='font-medium text-[#1e3a8a]'>ChamaForte</span>
              </div>
              <div className="flex flex-col justify-between h-full p-4 space-y-8">
                <div className="text-sm prose text-white max-w-none">
                  <p>
                    In late 2020, a friend contacted me asking me to work on a new project with him. A repair company wanted us to build a new website, a management platform, and a service order mobile app that employees could use to mark orders as finished, ask for supplies, and see the contact information of the clients.
                  </p>
                  <p>
                    I developed the frontend for the website and management system using Next.js and TailwindCSS.
                  </p>
                  <p>The mobile app was developed using React Native.</p>
                </div>
                <div className='flex justify-between'>
                  <span className='text-sm'>
                    {new Date('2020-12-16').toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </span>
                  <a href='https://chamaforte.com/' className='text-amber-400'>Visit</a>
                </div>
              </div>
            </div>
            <div className='flex flex-col border border-gray-600 rounded'>
              <div className="bg-[#3b6bad] p-4 rounded-t">
                <span className='font-medium text-white'>Grupo Report</span>
              </div>
              <div className="flex flex-col justify-between h-full p-4 space-y-8">
                <div className="prose-sm prose text-white max-w-none">
                  <p>
                    ImagineApps and Grupo Report become partners to develop a new ESG management platform.
                  </p>
                  <p>
                    The platform is developed using Angular and TailwindCSS.
                  </p>
                  <p>
                    As this is a closed project, I can&apos;t share any links. But you can check the Imagine Apps&apos;s website where there are more info and some images of the UI in early stages of development.
                  </p>
                </div>
                <div className='flex justify-between'>
                  <span className='text-sm'>
                    {new Date('2021-8-21').toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </span>
                  <a href='https://imagineapps.com.br/works/report/' className='text-amber-400'>More info</a>
                </div>
              </div>
            </div>
            <div className='flex flex-col border border-gray-600 rounded'>
              <div className="p-4 bg-[#18191a] rounded-t">
                <span className='font-medium text-white'>Brasil Gaming Realista</span>
              </div>
              <div className="flex flex-col justify-between h-full p-4 space-y-8">
                <div className="prose-sm prose text-white max-w-none">
                  <p>
                    I friend wanted me to develop his MTA server&apos;s website. He wanted a front page that displays both his two servers&apos; players count and a links for each server with more info.
                  </p>
                  <p>
                    The platform is developed using Next.js and TailwindCSS.
                  </p>
                </div>
                <div className='flex justify-between'>
                  <span className='text-sm'>
                    {new Date('2021-12-12').toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </span>
                  <a href='https://brasilgamingrealista.com/' className='text-amber-400'>Visit</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="awards">
          <h1 className='text-amber-400'>Awards</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className='flex flex-col border border-gray-600 rounded'>
              <div className="p-4 bg-[#6707a6] rounded-t">
                <span className='font-medium text-white'>2nd place in the Startup Weekend Governador Valadares</span>
              </div>
              <div className="flex flex-col justify-between h-full p-4 space-y-8">
                <div className="text-sm prose text-white max-w-none">
                  <p>
                    In 2023, I participated in the Startup Weekend Governador Valadares. The event was a 54-hour ideathon where the participants had to develop a startup idea.
                  </p>
                  <p>
                    A friend has an idea of a platform that sells boxes of food from local producers. Me and 7 other people joined him to develop the idea.
                  </p>
                  <p>
                    The event was very intense, but we had a lot of fun. Was a great experience to work with people that I&apos;ve never met before, and learn about idea validation, business model, and pitching.
                  </p>
                  <p>
                    After all the work, we got the 2nd place in the event.
                  </p>
                </div>
                <div className='flex justify-between'>
                  <span className='text-sm'>
                    {new Date('2023-05-1').toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col border border-gray-600 rounded'>
              <div className="p-4 bg-[#e96f3f] rounded-t">
                <span className='font-medium text-white'>1st place in the Campus Tech Week Governador Valadares</span>
              </div>
              <div className="flex flex-col justify-between h-full p-4 space-y-8">
                <div className="text-sm prose text-white max-w-none">
                  <p>
                    My first ideathon was the Campus Tech Week Governador Valadares. Within 54 hours, we had to develop a solution for &quot;How to improve the communication between the public and the government?&quot;.
                  </p>
                  <p>
                    At first, we have some trouble to find an problem to solve. But, based on an experience of one of the members of the team, we decided to improve the current ombudsman platform of the city.
                  </p>
                  <p>
                    To confirm the problem, we interviewed some people, created a public form, and collected some data. After that, we started to develop the solution.
                  </p>
                  <p>
                    The final solution was a platform that automatizes the delivery of reclamations and suggestions to the city&apos;s ombudsman. The platform also has a dashboard that shows the most common problems and the status of each one.
                  </p>
                  <p>
                    After a 3-minute pitch, we got the 1st place in the event.
                  </p>
                </div>
                <div className='flex justify-between'>
                  <span className='text-sm'>
                    {new Date('2023-04-1').toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='contact'>
          <h1 className='text-amber-400'>Contact</h1>
          <p>
            You can contact me by email at <a href='mailto:andre_gama@outlook.com.br'>andre_gama@outlook.com.br</a> or by <a href='https://www.linkedin.com/in/andre-gama/'>LinkedIn</a>.
          </p>
          <p>
            * Although I&apos;m not looking for a full-time job, I&apos;m open to front-end freelance jobs.
          </p>
        </section>
      </main>
    </div>
  )
}
