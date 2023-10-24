import React from 'react'
import { useEffect } from 'react';
import InputLabel from '@/Components/Label'
import Input from '@/Components/Input'
import InputError from '@/Components/InputError';
import Button from '@/Components/Button'
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

  return (
    <>
    <Head title='Sign Up'></Head>
    <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
    <div className="fixed top-[-50px] hidden lg:block">
        <img src="/images/signup-image.png"
            className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
    </div>
    <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
        <div>
            <img src="/images/moonton-white.svg" alt=""/>
            <div className="my-[70px]">
                <div className="font-semibold text-[26px] mb-3">
                    Sign Up
                </div>
                <p className="text-base text-[#767676] leading-7">
                    Explore our new movies and get <br/>
                    the better insight for your life
                </p>
            </div>
            <form className="w-[370px]" onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div>
                        {/* <label className="text-base block mb-2">Full Name</label> */}
                        <InputLabel value="Full Name"></InputLabel>
                        <Input
                            id="name"
                            value={data.name}
                            type='text'
                            name="name"
                            placeholder="Your name..."
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        ></Input>
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel value="Email Adress"></InputLabel>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            placeholder="Your Email Address"
                            handleChange={onHandleChange}
                            required
                         ></Input>
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel value="Password"></InputLabel>
                        <Input
                            placeholder="Your password.."
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                            required
                        ></Input>
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel value="Confirm Password"></InputLabel>
                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                            required
                        ></Input>
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>
                </div>
                <div className="grid space-y-[14px] mt-[30px]">
                    <Button type='submit' disabled={processing} className="rounded-2xl bg-alerange py-[13px] text-center">
                        <span className="text-base font-semibold">Sign Up</span>
                    </Button>
                    <Link href={route('login')}>
                        <Button variant='light-outline' className="rounded-2xl border border-white py-[13px] text-center">
                            <span className="text-base text-white">
                                Sign In to My Account
                            </span>
                        </Button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
</div>
    </>
  )
}
