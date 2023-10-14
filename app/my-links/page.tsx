import { Metadata } from "next";
import Image from "next/image";

const links: { name: string, url: string }[] = [
  { name: 'Website', url: 'https://andregama.dev' },
  { name: 'GitHub', url: 'https://github.com/andregamma' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/andregamma/' },
  { name: 'Twitter', url: 'https://twitter.com/_andregamma' },
  { name: 'Instagram', url: 'https://www.instagram.com/_andreg.16/' },
]

export const metadata: Metadata = {
  title: 'Links | André Gama',
  description: 'André Gama\'s links',
}

export default function MyLinks() {
  return (
    <main className="flex items-center justify-center">
      <section className="w-full md:w-1/2 xl:w-1/3">
        <section className="flex flex-col items-center space-y-4">
          <Image src={'/images/avatar2.jpg'} title='That&apos;s me!' className='transition-all duration-200 border-2 border-transparent rounded-full hover:border-amber-400' alt='me wearing glasses and a green shirt' width={180} height={180} quality={100} />
          <h1 className="text-3xl font-bold text-center">André Gama</h1>
        </section>
        <section className="flex flex-col mt-16 space-y-2">
          {links.map((link) => (
            <a key={link.name} href={link.url} className="p-4 transition-colors duration-200 border border-gray-600 rounded hover:border-amber-400">
              <p className="text-lg font-bold text-amber-400">{link.name}</p>
              <p className="text-sm break-all">{link.url}</p>
            </a>
          ))}
        </section>
      </section>
    </main>
  )
}