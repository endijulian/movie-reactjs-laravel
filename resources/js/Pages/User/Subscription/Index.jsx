import React from 'react'
import Authenticated from '@/Layouts/Authenticated/Index'
import { Head } from '@inertiajs/react'
import SubscriptionCard from '@/Components/SubscriptionCard'
import { router } from '@inertiajs/react'

export default function SubscriptionPlan({auth, subscriptionPlans}) {

    const selectSubscription = (id) => {
        // alert(id);
        router.post(route('user.dashboard.subscription.userSubscribe',{
            subscription: id,
       }))
    }

  return (
    <Authenticated  user={auth.user}>
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
                    {
                        subscriptionPlans.map((subscriptionPlan) => (
                            <SubscriptionCard
                            key={subscriptionPlan.id}
                            name={subscriptionPlan.name}
                            price={subscriptionPlan.price}
                            durationInMonth={subscriptionPlan.active_period_in_month}
                            features={JSON.parse(subscriptionPlan.features)}
                            isPremium={subscriptionPlan.name === 'Premium'}
                            onSelectSubscription={() => selectSubscription(subscriptionPlan.id)}
                            ></SubscriptionCard>
                        ))

                    }
                </div>
            </div>
    </Authenticated>
  )
}