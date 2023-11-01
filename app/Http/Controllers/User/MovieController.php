<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function show(Movie $movie)
    {
        return Inertia::render(
            'User/Movie/Show',
            [
                'movie' => $movie,
            ]
        );
    }
}
