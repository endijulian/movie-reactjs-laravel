import { Link } from '@inertiajs/react'
import React from 'react'
import SubscriptionDetail from './SubscriptionDetail'
import MenuItem from './MenuItem'
import { UserMenu, UserOther } from './MenuList'

export default function Sidebar({activePlan}) {
  return (
    <>
         <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt=""/>
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">

                    {/* <!-- Menu --> */}
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {
                            UserMenu.map((menu, index) => (
                                <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                />
                            ))
                        }
                    </div>
                    {/* <!-- ./Menu --> */}

                    {/* <!-- Others --> */}
                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {
                            UserOther.map((menu, index) => (
                                <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                method={menu.method}
                                />
                            ))
                        }

                    </div>
                    {/* <!-- ./Others --> */}

                    {/* <!-- Subscription details --> */}
                    {/* <SubscriptionDetail isPremium/> */}
                    {
                        activePlan && (
                            <SubscriptionDetail
                            name={activePlan.name}
                            isPremium={activePlan.name === 'Premium'}
                            remainingActiveDays={activePlan.remainingActiveDays}
                            activeDays={activePlan.activeDays}
                            />
                        )
                    }

                </div>
            </div>
        </aside>
    </>
  )
}
