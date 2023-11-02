<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans  = [
            [
                'name'  => 'Basic',
                'price' => 200000,
                'active_period_in_month' => 3,
                'features'  => json_encode(['Fetaure 1', 'Feature 2', 'Feature 3']),
                'created_at'    => Date::now(),
                'updated_at'    => Date::now(),
                'deleted_at'    => 1,
            ],
            [
                'name'  => 'Premium',
                'price' => 800000,
                'active_period_in_month' => 6,
                'features'  => json_encode(['Fetaure 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6']),
                'created_at'    => Date::now(),
                'updated_at'    => Date::now(),
                'deleted_at'    => 1,
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
