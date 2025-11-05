// src/components/Pricing.jsx

 export default function Pricing(){
  return (
    <section className="relative w-full bg-black py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            No hidden fees. Choose the plan that's right for your store's growth.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {/* Starter Plan */}
          <div className="relative bg-zinc-900/80 p-8 rounded-2xl shadow-xl sm:rounded-3xl lg:z-10 lg:rounded-r-none">
            <h3 className="text-lg font-semibold leading-8 text-white">Starter</h3>
            <p className="mt-4 text-sm leading-6 text-gray-300">For new stores getting their first wave of customer feedback.</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">$29</span>
              <span className="text-sm font-semibold leading-6 text-gray-300">/month</span>
            </p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
              <li className="flex gap-x-3">✓ Up to 500 reviews/month</li>
              <li className="flex gap-x-3">✓ Sentiment Analysis</li>
              <li className="flex gap-x-3">✓ Email support</li>
            </ul>
            <a href="#" className="mt-8 block rounded-md bg-zinc-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-zinc-600">Get started</a>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="relative bg-zinc-900 p-8 rounded-3xl ring-2 ring-purple-500 sm:p-10">
            <h3 className="text-lg font-semibold leading-8 text-purple-400">Pro</h3>
            <p className="mt-4 text-sm leading-6 text-gray-300">For growing stores that need deeper insights and integrations.</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">$79</span>
              <span className="text-sm font-semibold leading-6 text-gray-300">/month</span>
            </p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
              <li className="flex gap-x-3">✓ Up to 2,500 reviews/month</li>
              <li className="flex gap-x-3">✓ Sentiment & Trend Analysis</li>
              <li className="flex gap-x-3">✓ Automated Tagging</li>
              <li className="flex gap-x-3">✓ Priority support</li>
            </ul>
            <a href="#" className="mt-8 block rounded-md bg-purple-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500">Get started</a>
          </div>
        </div>
      </div>
    </section>
  );
}

//export default Pricing;