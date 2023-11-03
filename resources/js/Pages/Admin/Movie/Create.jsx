import Authenticated from '@/Layouts/Authenticated/Index'
import {React} from 'react'
import { Head, useForm } from '@inertiajs/react';
import Input from '@/Components/Input';
import InputLabel from '@/Components/Label';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import Button from '@/Components/Button';

export default function Create({auth}) {

    const {  setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: "",
    });


    const onHandleChange = (event) => {
        setData(event.target.name,event.target.type === 'file' ? event.target.files[0] : event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.movie.store'));
    };

  return (
    <Authenticated user={auth.user}>
        <Head title='Admin - Create Movie'></Head>
        <h1 className='text-xl'>Insert a new movie</h1>
        <hr className='mb-4'/>

        <form onSubmit={submit}>
            <InputLabel value="Name"></InputLabel>
            <Input
                type='text'
                name="name"
                variant='primary-outline'
                handleChange={onHandleChange}
                placeholder="Enter the name of the movie"
                isError={errors.name}
                className='w-1/2'
            ></Input>
            <InputError message={errors.name} className="mt-2" />

            <InputLabel value="Category" className='mt-4'></InputLabel>
            <Input
                type='text'
                name="category"
                variant='primary-outline'
                handleChange={onHandleChange}
                placeholder="Enter the category of the movie"
                isError={errors.category}
                className='w-1/2'
            ></Input>
            <InputError message={errors.category} className="mt-2" />

            <InputLabel value="Video URL" className='mt-4'></InputLabel>
            <Input
                type='text'
                name="video_url"
                variant='primary-outline'
                handleChange={onHandleChange}
                placeholder="Enter the video url of the movie"
                isError={errors.video_url}
                className='w-1/2'
            ></Input>
            <InputError message={errors.video_url} className="mt-2" />

            <InputLabel value="Thumbnail" className='mt-4'></InputLabel>
            <Input
                type='file'
                name="thumbnail"
                variant='primary-outline'
                handleChange={onHandleChange}
                placeholder="Enter the video url of the movie"
                isError={errors.thumbnail}
                className='w-1/2'
            ></Input>
            <InputError message={errors.thumbnail} className="mt-2" />

            <InputLabel value="Rating" className='mt-4'></InputLabel>
            <Input
                type='text'
                name="rating"
                variant='primary-outline'
                handleChange={onHandleChange}
                placeholder="Enter the rating of the movie"
                isError={errors.rating}
                className='w-1/2'
            ></Input>
            <InputError message={errors.rating} className="mt-2" />

            <div className='flex flex-row mt-4 items-center'>
                <InputLabel value="Is Featured" className='mr-3 mt-1'></InputLabel>
                <Checkbox
                    name="is_featured"
                    handleChange={(e) => setData("is_featured", e.target.checked)}
                ></Checkbox>
            </div>

            <Button type='submit' className='mt-4' processing={processing}>
                Save
            </Button>
        </form>
    </Authenticated>
  )
}
