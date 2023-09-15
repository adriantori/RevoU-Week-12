import { Input, Form } from 'antd';
import { Button, Container, Text } from '../../components';
import { useFormik } from 'formik';
import * as yup from 'yup';


interface Account {
    username: string;
    password: string;
}

interface AccountOutput {
    onNext: () => void;
    onPrev: () => void;
}

const initalValues = {
    username: 'user',
    password: 'Abc12345!'
}

const validationSchema = yup.object({
    username: yup.string().required('Username must exist'),
    password: yup.string().required('Password must exist')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
})

const FormAccount: React.FC<AccountOutput> = ({ onNext, onPrev }) => {

    const handleSubmit = (values: Account) => {
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
                <Text>Username:</Text>
                <Input
                    name={'username'}
                    value={formik.values.username}
                    onChange={formik.handleChange('username')}
                    status={formik.errors.username && 'error'}
                />
                {formik.errors.username && (
                    <Text type='danger'>{formik.errors.username}</Text>
                )}
                </div>
                <div>
                <Text>Password:</Text>
                <Input
                    name={'password'}
                    type={'password'}
                    value={formik.values.password}
                    onChange={formik.handleChange('password')}
                    status={formik.errors.password && 'error'}
                />
                {formik.errors.password && (
                    <Text type='danger'>{formik.errors.password}</Text>
                )}
                </div>
                <Button type={'primary'} htmlType='submit' onClick={onPrev} style={{background:'#7e3030', position: 'absolute', bottom:'32px'}}>Previous</Button>
                <Button type={'primary'} htmlType='submit' onClick={handleNext} style={{background:'#0b1e1e', position: 'absolute', bottom:'32px', left:'128px'}}>Next</Button>
            </Form>
        </Container>
    )
}

export default FormAccount;