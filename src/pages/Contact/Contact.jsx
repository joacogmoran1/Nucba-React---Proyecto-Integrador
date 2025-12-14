import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

// Icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Formik
import { initialValues } from "../../components/Formik/initialValues";
import { validationSchema } from "../../components/Formik/validationShema";

// Style
import style from './Contact.module.css';




export default function Contact() {

    const [isSubmitting, setIsSubmitting] = useState();

    const handleSubmit = (values, { resetForm }) => {
     
        setIsSubmitting(true);
        setTimeout(
            () => {
                setIsSubmitting(false);
                alert('Mensaje enviado!');
                resetForm();
            }, 1000
        );
    }

    return (
        <>
            <section className={style.contact_section}>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className={style.contact_section_form}>
                        <div className={style.contact_section_form_container}>
                            <Field className={style.contact_section_form_container_input} name="firstName" type="text" placeholder="Nombre" />
                            <ErrorMessage className={style.contact_section_form_container_error} component="span" name="firstName" />
                        </div>

                        <div className={style.contact_section_form_container}>
                            <Field className={style.contact_section_form_container_input} name="lastName" type="text" placeholder="Apellido" />
                            <ErrorMessage className={style.contact_section_form_container_error} component="span" name="lastName" />
                        </div>

                        <div className={style.contact_section_form_container}>
                            <Field className={style.contact_section_form_container_input} name="email" type="email" placeholder="Email" />
                            <ErrorMessage className={style.contact_section_form_container_error} component="span" name="email" />
                        </div>

                        <div className={style.contact_section_form_container}>
                            <Field className={style.contact_section_form_textarea} name="subject" as="textarea" placeholder="Consulta" />
                            <ErrorMessage className={style.contact_section_form_container_error} component="span" name="subject" />
                        </div>

                        <button className={!isSubmitting? style.contact_section_form_btn : [style.contact_section_form_btn, style.disable].join(' ')} type="submit" disabled={isSubmitting}>
                            {
                                !isSubmitting? 'Enviar'
                                : <AiOutlineLoading3Quarters className={style.contact_section_form_btn_icon} />
                            }
                        </button>
                    </Form>
                </Formik>
            </section>
        </>
    )
}