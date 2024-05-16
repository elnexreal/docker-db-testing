import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <div className="bg-gradient-to-b bg-stone-800 py-8 px-16 text-white border-b-stone-500 border-b-2">
        <h1 className="text-3xl font-bold">
          Docker Database Testing!
        </h1>
        <p className="opacity-50">
          Stupidly basic website just for testing
        </p>
      </div>
      <div className="flex justify-stretch h-full">
        <div className="flex-1 flex flex-col bg-stone-800 border-r-stone-500 border-r-2 py-4 items-center text-white">
          <h1 className="text-4xl text-center underline">Products</h1>
          <div>
            a
          </div>
        </div>
        <div className="flex-[4] flex">
          a
        </div>
      </div>
    </main>
  )
}
