import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Facebook, Instagram, LinkedIn } from '../../../../Components/Icons';
import SocialMediaButton from '../../../../Components/SocialMediaButton';
import { ContactUsFormContainer, Heading, Paragraph, Section } from './styles';
import SubmitButton from '../../../../Components/SubmitButton';

const ContactUs = () => {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Data: ", data);
    }

    return <Section>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div>
                        <Heading>How can we help you?</Heading>
                        <Paragraph>
                            Venenatis faucibus tortor felis scelerisque est accumsan purus pellentesque tempus ultricies quam eu, tellus nibh vel mattis amet velit, facilisis
                        </Paragraph>
                        <div className="mt-4">
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
                                        required: "This field is required."
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
                                        }
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
                                        required: "This field is required."
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
                                        required: "This field is required."
                                    }}
                                    render={({ field }) => <textarea {...field} style={{ border: '1px solid #F2F2F2' }} class="form-control" rows="3" placeholder="Message"></textarea>}
                                />

                                {errors.message && <div className="invalid-feedback" style={{ color: 'darkred' }}>{errors.message.message}</div>}
                            </div>

                            <div className="mt-3">
                                <SubmitButton style={{ width: "100%", background: '#000093', border: 'none' }} type="submit">submit</SubmitButton>
                            </div>
                        </form>
                    </ContactUsFormContainer>
                </div>
            </div>
        </div>
    </Section>
}

export default ContactUs;
