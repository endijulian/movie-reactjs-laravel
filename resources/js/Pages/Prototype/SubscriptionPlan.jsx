import React from 'react'
import Authenticated from '@/Layouts/Authenticated/Index'
import { Head } from '@inertiajs/react'
import SubscriptionCard from '@/Components/SubscriptionCard'

export default function SubscriptionPlan() {
  return (
    <Authenticated>
        <Head>
            <title>Payments</title>
        </Head>

        <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                 {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                     {/* Basic */}
                    <SubscriptionCard
                     name="Basic"
                     price={299000}
                     durationInMonth={3}
                     features={["Feature 1", "Feature 2", "Feature 3"]}
                     ></SubscriptionCard>

                     {/* For Greatest */}
                     <SubscriptionCard
                     isPremium
                     name="For Greatest"
                     price={399000}
                     durationInMonth={6}
                     features={["Feature 1", "Feature 2", "Feature 3", "Feature 5", "Feature 8"]}
                     ></SubscriptionCard>
                </div>
                 {/* /Pricing Card */}
            </div>
    </Authenticated>
  )
}
