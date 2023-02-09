import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup"
import { Button } from 'semantic-ui-react'
import MyTextInput from '../utilities/customFormControls/MyTextInput'

export default function ProductAdd() {

    const initialValues = { model: "", proName: "", plaName: "", cusName: "", verId: 0 }

    const schema = Yup.object({
        model: Yup.string().required("Model girmek zorunludur"),
        verId: Yup.number().required("versiyon bilgisi zorunludur")
    })

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values) => { console.log(values) }}>
                <Form className="ui form">
                    <MyTextInput name="model" placeholder='model' />
                    <MyTextInput name="verId" placeholder='verId' />
                    {/* <FormField>
                        <Field name="model" placeholder='model'></Field>
                        <ErrorMessage name="model" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField> 
                    <FormField>
                        <Field name="verId" placeholder='VerId'></Field>   
                        <ErrorMessage name="verId" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>                     
                    </FormField>   */}
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>

        </div>


    )
}
