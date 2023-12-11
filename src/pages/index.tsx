export default function Page() {
  return (
  <>

    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-[10px] sm:py-[15px] lg:py-[15px]">
        <div className="text-center">
          <h1 className="text-[48px] font-bold tracking-tight text-gray-900 sm:text-6xl">
            Recipe catalog website
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            By Oleksandr Avramenko
            <br />Student of BYU-Idaho 
            <br />Course WDD-430 
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/links/recipes/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Recipes catalog
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
