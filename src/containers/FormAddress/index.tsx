import { Input, Form } from 'antd';
import { Button, Container, Text } from '../../components';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

interface AddressOutput {
    onNext: () => void;
    onPrev: () => void;
}

const initalValues = {
    street: 'Jalan',
    city: 'Kota',
    state: 'Provinsi',
    zipCode: '12345'
}

const validationSchema = yup.object({
    street: yup.string().required('Street must exist'),
    city: yup.string().required('City must exist'),
    state: yup.string().required('State must exist'),
    zipCode: yup.string().length(5, 'Zip Code must be 5 digits')
        .matches(/^[0-9]{5}/, 'Zip Code must be 5 numeric (12345)')
        .required('Zip Code must exist')
})

const FormAddress: React.FC<AddressOutput> = ({ onNext, onPrev }) => {

    const handleSubmit = (values: Address) => {
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
            <Form onFinish={formik.handleSubmit}>
                <div>
                    <Text>Street Address:</Text>
                    <Input
                        name={'address'}
                        value={formik.values.street}
                        onChange={formik.handleChange('street')}
                        status={formik.errors.street && 'error'}
                    />
                    {formik.errors.street && (
                        <Text type='danger'>{formik.errors.street}</Text>
                    )}
                </div>
                <div>
                    <Text>City</Text>
                    <Input
                        name={'city'}
                        value={formik.values.city}
                        onChange={formik.handleChange('city')}
                        status={formik.errors.city && 'error'}
                    />
                    {formik.errors.city && (
                        <Text type='danger'>{formik.errors.city}</Text>
                    )}
                </div>
                <div>
                    <Text>State</Text>
                    <Input
                        name={'state'}
                        value={formik.values.state}
                        onChange={formik.handleChange('state')}
                        status={formik.errors.state && 'error'}
                    />
                    {formik.errors.state && (
                        <Text type='danger'>{formik.errors.state}</Text>
                    )}
                </div>
                <div>
                    <Text>Zip Code</Text>
                    <Input
                        name={'zipCode'}
                        value={formik.values.zipCode}
                        onChange={formik.handleChange('zipCode')}
                        status={formik.errors.zipCode && 'error'}
                    />
                    {formik.errors.zipCode && (
                        <Text type='danger'>{formik.errors.zipCode}</Text>
                    )}
                </div>

                <Button type={'default'} htmlType='submit' onClick={onPrev}>Previous</Button>
                <Button type={'primary'} htmlType='submit' onClick={handleNext}>Next</Button>
            </Form>
        </Container>
    )
}

export default FormAddress;