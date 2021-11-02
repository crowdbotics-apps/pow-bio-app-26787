import React, { useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";

import { Facebook, Instagram, LinkedIn } from '../../../../Components/Icons';
import SocialMediaButton from '../../../../Components/SocialMediaButton';
import { ContactUsFormContainer, Heading, Paragraph, Section } from './styles';
import SubmitButton from '../../../../Components/SubmitButton';
import { useDispatch, useSelector } from 'react-redux';
import { apiContactUsRequest } from '../../../../Redux/actions/contactUs';

const ContactUs = () => {

    const { control, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    const state = useSelector(state => state.contactUs);

    const onSubmit = (data) => {
        console.log("Data: ", data);
        dispatch(apiContactUsRequest(data));
    }

    useEffect(() => {
        console.log("State: ", state);
        if (state.success) {
            reset({
                name: "",
                phone: "",
                email: "",
                message: ""
            });
        }
    }, [state]);

    return <Section>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div>
                        <Heading>How can we help you?</Heading>
                        <Paragraph>
                            Venenatis faucibus tortor felis scelerisque est accumsan purus pellentesque tempus ultricies quam eu, tellus nibh vel mattis amet velit, facilisis
                        </Paragraph>
                        <div className="mt-4 mb-4">
                            <div className="mt-3">
                                <SocialMediaButton
                                    text="Instagram"
                                    icon={<Instagram />}
                                />
                            </div>
                            <div className="mt-3">
                                <SocialMediaButton
                                    text="Facebook"
                                    icon={<Facebook />}
                                />
                            </div>
                            <div className="mt-3">
                                <SocialMediaButton
                                    text="LinkedIn"
                                    icon={<LinkedIn />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <ContactUsFormContainer>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "This field is required.",
                                        minLength: { value: 2, message: "Name must be more than two characters." },
                                        maxLength: { value: 255, message: "Name should be less than 255 characters." }
                                    }}
                                    render={({ field }) => <input {...field} style={{ border: '1px solid #F2F2F2' }} className="form-control" placeholder="Name" />}
                                />
                                {errors.name && <div className="invalid-feedback" style={{ color: 'darkred' }}>{errors.name.message}</div>}
                            </div>

                            <div className="mb-3">
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "This field is required.",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Enter a valid e-mail address",
                                        },
                                        maxLength: { value: 320, message: "Email should be less than 320 characters." }
                                    }}
                                    render={({ field }) => <input {...field} style={{ border: '1px solid #F2F2F2' }} className="form-control" placeholder="Email" />}
                                />
                                {errors.email && <div className="invalid-feedback" style={{ color: 'darkred' }}>{errors.email.message}</div>}
                            </div>

                            <div className="mb-3">
                                <Controller
                                    name="phone"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "This field is required.",
                                        maxLength: { value: 15, message: "Phone number should be less than 15 characters." }
                                    }}
                                    render={({ field }) => <input {...field} style={{ border: '1px solid #F2F2F2' }} className="form-control" placeholder="Phone" />}
                                />
                                {errors.phone && <div className="invalid-feedback" style={{ color: 'darkred' }}>{errors.phone.message}</div>}
                            </div>

                            <div className="mb-3">
                                <Controller
                                    name="message"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "This field is required.",
                                        maxLength: { value: 5000, message: "Message should not be more than 5000 characters." }
                                    }}
                                    render={({ field }) => <textarea {...field} style={{ border: '1px solid #F2F2F2' }} class="form-control" rows="3" placeholder="Message"></textarea>}
                                />

                                {errors.message && <div className="invalid-feedback" style={{ color: 'darkred' }}>{errors.message.message}</div>}
                            </div>

                            <div className="mt-3">
                                <SubmitButton style={{ width: "100%", background: '#000093', border: 'none' }} type="submit" loading={state.isLoading}>submit</SubmitButton>
                            </div>

                            { (state.success === true) || (state.error !== null) ?
                                <div className="mt-3">
                                    <div className={`alert text-center ${state.success ? 'alert-success' : 'alert-danger'}`} role="alert">
                                        {state.success ?
                                            'Your inquiry has been submitted successfully.'
                                            : state.error.message}
                                    </div>
                                </div>
                                : <></> }

                        </form>
                    </ContactUsFormContainer>
                </div>
            </div>
        </div>

    </Section>
}

export default ContactUs;
