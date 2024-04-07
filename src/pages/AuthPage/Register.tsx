import { useForm } from 'react-hook-form';
interface RegisterFormValues {
    email: string;
    password: string;
}

export const Register = () => {
    const { register, handleSubmit } = useForm<RegisterFormValues>();
    const onSubmit = handleSubmit(async (data) => {
        console.log(data)
    });

    return (
        <form onSubmit={onSubmit}>
            <input {...register('email')} />
            <input {...register('password')} />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;