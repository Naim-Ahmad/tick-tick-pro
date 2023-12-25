import emailjs from '@emailjs/browser';
import { Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import Lottie from 'react-lottie';
import Swal from 'sweetalert2';

import animationData from '../../assets/contact.json';
import supportAnimation from '../../assets/support.json';
import defaultOptions from '../../config/lottieFiles.config';


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
        <Container maxWidth="xl">
            <Grid container spacing={4} minHeight={"80svh"} alignItems="center">
                <Grid item sm={12} md={6}>
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h2" sx={{ fontSize: { xs: 40, sm: 60 } }} fontWeight={900}>
                            We Are Free to get your feedback
                        </Typography>

                        <Typography variant="subtitle1" fontSize={18} my="1.5rem">
                            Join millions of people to capture ideas, organize life, and do something creative everyday.
                        </Typography>


                    </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                    <figure>
                        <Lottie
                            options={defaultOptions(animationData)}
                            height={400}
                            width={400}
                        />
                    </figure>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Lottie
                        options={defaultOptions(supportAnimation)}
                        height={400}
                        width={400}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <TextField {...register('user_name')} label="Name" variant="filled" fullWidth mb={3} />
                            <TextField {...register('user_email')} label="Email" variant="filled" fullWidth mb={3} />
                            <TextField {...register('user_subject')} label="Subject" variant="filled" fullWidth mb={3} />
                            <TextField {...register('user_message')} label="message" variant="filled" fullWidth mb={3} />
                            <Button variant="contained" style={{ marginTop: '1rem' }} type='submit' onClick={handleSubmit(handleForm)}>Sent</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}