import Link from 'next/link'

export default function Page() {
  return (
    <div className="container mx-auto py-10 px-1.5">
      <div className="mx-auto w-full pl-10 w500:pl-3 lg:w-[754px] mb-20">
        <div className="mb-3 flex flex-col items-start gap-2 w500:flex-row">
          <label className='text-slate-700' htmlFor="first_name">first name: </label>
          <input
            className="border rounded-lg py-0.5 px-2 text-stone-600 font-medium focus:outline focus:outline-blue-300 focus:border-blue-400 focus:border border-slate-700"
            name="first_name"
            id="first_name"
            type="text"
          />
        </div>
        <div className="mb-3 flex flex-col items-start gap-2 w500:flex-row">
          <label htmlFor="last_name">last name: </label>
          <input
            className="border rounded-lg py-0.5 px-2 text-stone-600 font-medium focus:outline focus:outline-blue-300 focus:border-blue-400 focus:border border-slate-700"
            name="last_name"
            id="last_name"
            type="text"
          />
        </div>
        <div className="mb-3 flex flex-col items-start gap-2 w500:flex-row">
          <label htmlFor="home_country">home country: </label>
          <input
            className="border rounded-lg py-0.5 px-2 text-stone-600 font-medium focus:outline focus:outline-blue-300 focus:border-blue-400 focus:border border-slate-700"
            name="home_country"
            id="home_country"
            type="text"
          />
        </div>
        <div className="mb-3 flex flex-col items-start gap-2 w500:flex-row">
          <label htmlFor="location_now">location now: </label>
          <input
            className="border rounded-lg py-0.5 px-2 text-stone-600 font-medium focus:outline focus:outline-blue-300 focus:border-blue-400 focus:border border-slate-700"
            name="location_now"
            id="location_now"
            type="text"
          />
        </div>
        <div className="mb-3 flex flex-col items-start gap-2 w500:flex-row">
          <label htmlFor="birth_day">birth day: </label>
          <input
            className="border rounded-lg py-0.5 px-2 text-stone-600 font-medium focus:outline focus:outline-blue-300 focus:border-blue-400 focus:border border-slate-700"
            name="birth_day"
            id="birth_day"
            type="date"
          />
        </div>
        <div className='text-center'>
          <button
            className="bg-rose-700 hover:bg-rose-600 rounded-md active:scale-110 inline-block transition text-rose-100 py-1 px-3"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="text-center">
        <Link
          className="bg-slate-700 rounded-md active:scale-110 inline-block transition text-amber-100 py-1 px-3"
          href="/"
        >
          Home
        </Link>
      </div>
    </div>
  )
}
