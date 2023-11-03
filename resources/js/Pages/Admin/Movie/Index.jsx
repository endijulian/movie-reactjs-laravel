import React from 'react'
import Authenticated from '@/Layouts/Authenticated/Index'
import Button from '@/Components/Button'
import { Head, Link, useForm } from '@inertiajs/react'
import FlashMessage from '@/Components/FlashMessage'

export default function Index({auth, flashMessage, movies}) {

    const {delete: destroy, put} = useForm();

  return (
    <Authenticated user={auth.user}>

        <Head title='List of Movie'></Head>
        <Link href={route('admin.dashboard.movie.create')}>
            <Button type='button' className='w-[150px] mb-8'>Insert New Movie</Button>
        </Link>

        {flashMessage?.message &&( <FlashMessage messgae={flashMessage.message}></FlashMessage>)}

        <table className='table-fixed w-full text-center'>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map(( movie) => (
                        <tr key={movie.id}>
                            <td>
                                <img src={`/storage/${movie.thumbnail}`} className='w-32 rounded-md'/>
                            </td>
                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating.toFixed(1)}</td>
                            <td>
                                <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                                    <Button type='button' variant='warning'>
                                        Edit
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                <div onClick={() => {
                                    movie.deleted_at
                                    ?
                                    put(route('admin.dashboard.movie.restore', movie.id))
                                    :
                                    destroy(route('admin.dashboard.movie.destroy', movie.id));
                                }}>
                                    <Button type='button' variant='danger' className='w-auto'>
                                       {
                                        movie.deleted_at ? 'Restore' : 'Delete'
                                       }
                                    </Button>
                                </div>
                            </td>
                        </tr>
                        ))
                }
            </tbody>
        </table>
    </Authenticated>
  )
}
