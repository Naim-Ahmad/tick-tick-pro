import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


export default function Contacts() {

    const { handleSubmit, register, formState: { errors } } = useForm()

    const handleForm = (data) => {

        console.log(data)
        emailjs.send('service_ov9xwqc', 'template_0fu4sfy', data)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: "Sent",
                    text: "Message Sent Successfully",
                    timer: 1800,
                    showConfirmButton: false
                })
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: "Error",
                    text: err.message,
                    timer: 1800,
                    showConfirmButton: false
                })
            })

    }

    return (
        <>

        </>
    )
}