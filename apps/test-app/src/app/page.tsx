export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-semibold">Test App</h1>
      <div className="my-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <NavLink
          href="/grid"
          title="CSS Grid Example"
          subtitle="A newspaper redesigned with CSS grid"
        />
      </div>
    </main>
  )
}

function NavLink({
  href,
  title,
  subtitle,
}: {
  href: string
  title: string
  subtitle: string
}) {
  return (
    <a
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{subtitle}</p>
    </a>
  )
}
