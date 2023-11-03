<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Movie\StoreRequest;
use App\Http\Requests\Admin\Movie\UpdateRequest;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;
use PhpParser\Node\Stmt\Return_;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movie::withTrashed()->orderBy('deleted_at')->get();
        return Inertia::render('Admin/Movie/Index', [
            'movies' => $movies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
        $data['slug'] = Str::slug($data['name']);
        $data['is_featured'] = $request->is_featured != null ?  $request->is_featured : 0;

        $movie = Movie::create($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'type' => 'success',
            'message' => "Berhasil menambahkan film dengan judul {$movie->name}"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        // return $movie;
        return Inertia::render('Admin/Movie/Edit', ['movie' => $movie]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Movie $movie)
    {
        $data = $request->validated();
        if ($request->file('thumbnail')) {
            $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
            Storage::disk('public')->delete($movie->thumbnail);
        } else {
            $data['thumbnail'] = $movie->thumbnail;
        }

        $movie->update($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'type' => 'success',
            'message' => "Berhasil mengubah data film dengan judul {$movie->name}"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        $movie->delete();
        return back()->with([
            'type' => 'success',
            'message' => "Berhasil menghapus data film dengan judul {$movie->name}",
        ]);
    }

    public function restore($movie)
    {
        Movie::withTrashed()->find($movie)->restore();
        return back()->with([
            'type' => 'success',
            'message' => 'Data berhasil direstore'
        ]);
    }
}
