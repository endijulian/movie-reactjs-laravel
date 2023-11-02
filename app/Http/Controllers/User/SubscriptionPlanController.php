<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        $subscriptionPlan = SubscriptionPlan::get();

        // return $subscriptionPlan;
        return Inertia::render(
            'User/Subscription/Index',
            [
                'subscriptionPlans' => $subscriptionPlan,
            ]
        );
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscription)
    {
        $data = [
            'user_id' => Auth::user()->id,
            'subscription_plan_id' => $subscription->id,
            'price' => $subscription->price,
            'expired_date' => Carbon::now()->addMonths($subscription->active_period_in_month),
            'payment_status' => 'paid',
        ];

        UserSubscription::create($data);
        return redirect(route('user.dashboard.index'));
    }
}
