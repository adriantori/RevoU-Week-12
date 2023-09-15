import { Input, DatePicker, Form } from 'antd';
import { Button, Container, Text } from '../../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import dayjs from 'dayjs';

interface Personal {
    name: string;
    email: string;
    dob: Date;
}

interface PersonalOutput {
    onNext: () => void;
    onPrev: () => void;
}

const initalValues = {
    name: 'John Doe',
    email: 'John@doe.com',
    dob: new Date('1945-8-17')
}

const validationSchema = yup.object({
    name: yup.string().required('Full name must exist'),
    email: yup.string().email().required('Email must exist with email format (a@b.c)'),
    dob: yup.date().max(new Date(Date.now() - 567648000000)).required('You must be at least 18 years old')
})

const FormAddress: React.FC<PersonalOutput> = ({ onNext, onPrev }) => {

    const handleSubmit = (values: Personal) => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues: initalValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
        <Container>
            <Form onFinish={formik.handleSubmit}>
                <Text>Full Name:</Text>
                <Input
                    name={'fullName'}
                    value={formik.values.name}
                    onChange={formik.handleChange('name')}
                    status={formik.errors.name && 'error'} />
                <Text>Email Address:</Text>
                <Input
                    name={'fullName'}
                    value={formik.values.email}
                    onChange={formik.handleChange('email')}
                    status={formik.errors.email && 'error'} />
                <Text>Date of Birth:</Text>
                <DatePicker
                    name={'dateOfBirth'}
                    value={formik.values.dob ? dayjs(formik.values.dob) : undefined}
                    onChange={(date) => { formik.setFieldValue('dob', date?.toDate() || null) }}
                    status={formik.errors.dob && 'error'}
                /><br/>
                <Button type={'default'} htmlType='submit' onClick={onPrev}>Previous</Button>
                <Button type={'primary'} htmlType='submit' onClick={onNext}>Next</Button>
            </Form>
        </Container>
    )
}

export default FormAddress;