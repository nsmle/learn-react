import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import AppLayout from './../layouts/AppLayout'
import { ButtonPrimary } from './../components/Buttons'
import * as yup from "yup";
import FormInput from './../components/Form/FormInput'
import FormTextArea from './../components/Form/FormTextArea'

const contactSchema = yup.object({
  name: yup.string().min(1).required(),
  subject: yup.string().min(4).required(),
  email: yup.string().email().max(255).required(),
  message: yup.string().min(8).required(),
}).required();

const Contact = () => {
  const methods = useForm({
    resolver: yupResolver(contactSchema)
  });
  
  const onSubmit = (contactData) => {
    console.log(contactData);
  };
  
  return (
    <AppLayout>
      <h1 className="mt-12 text-center text-3xl text-teal-500 font-bold underline">
        Contact Us
      </h1>
      
      <div className="mx-6 md:mx-4 my-8">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="my-4">
              <FormInput name="name" type="text" label="Name" placeholder="Name" required="true" />
              <FormInput name="subject" type="subject" label="Subject" placeholder="Subject" required="true" />
              <FormInput name="email" type="email" label="Email" placeholder="Email" required="true" />
              <FormTextArea  name="message" rows="4" label="Message" placeholder="Write your message..." required="true" />
            </div>
            <div className="flex justify-end">
              <ButtonPrimary type="submit">
                Submit
              </ButtonPrimary>
            </div>
          </form>
        </FormProvider>
      </div>
    </AppLayout>
  )
}

export default Contact;