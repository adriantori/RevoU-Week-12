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
}

const initalValues = {
    name: 'John Doe',
    email: 'John@doe.com',
    dob: new Date('1945-8-17')
}

const validationSchema = yup.object({
    name: yup.string().required('Full name must exist'),
    email: yup.string().email().required('Email must exist with email format (a@b.c)'),
    dob: yup.date().max(new Date(Date.now() - 567648000000), 'You must be at least 18 years old').required('Date cannot be empty')
})

const FormPersonal: React.FC<PersonalOutput> = ({ onNext }) => {

    const handleSubmit = (values: Personal) => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues: initalValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    const handleNext = () => {
        formik.handleSubmit();
        if (formik.isValid) {
            onNext();
        }
    };

    return (
        <Container>
            <Form onFinish={formik.handleSubmit} style={{position:'relative', height:'100%'}}>
                <div>
                    <Text>Full Name:</Text>
                    <Input
                        name={'name'}
                        value={formik.values.name}
                        onChange={formik.handleChange('name')}
                        status={formik.errors.name && 'error'}
                    />
                    {formik.errors.name && (
                        <Text type='danger'>{formik.errors.name}</Text>
                    )}
                </div>
                <div>
                    <Text>Email Address:</Text>
                    <Input
                        name={'email'}
                        value={formik.values.email}
                        onChange={formik.handleChange('email')}
                        status={formik.errors.email && 'error'}
                    />
                    {formik.errors.email && (
                        <Text type='danger'>{formik.errors.email}</Text>
                    )}
                </div>
                <div>
                    <Text>Date of Birth:</Text><br />
                    <DatePicker
                        name={'dob'}
                        value={formik.values.dob ? dayjs(formik.values.dob) : undefined}
                        onChange={(date) => { formik.setFieldValue('dob', date?.toDate() || null) }}
                        status={formik.errors.dob && 'error'}
                    />
                    {formik.errors.dob && (
                        <Text type='danger'>{formik.errors.dob as string}</Text>
                    )}
                </div>
                <Button type={'primary'} htmlType='submit' onClick={handleNext} style={{background:'#0b1e1e', position: 'absolute', bottom:'32px', left:'128px'}}>Next</Button>
            </Form>
        </Container>
    )
}

export default FormPersonal;