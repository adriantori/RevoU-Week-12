import { Text } from '..'

type FormValues = {
    name?: string;
    email?: string;
    dob?: Date;
};

type FormikErrorsType = {
    [key in keyof FormValues]?: string;
};

const TextError = (errors: FormikErrorsType) => {
    if (errors && typeof errors === 'object') {
        return Object.values(errors).map((error, index) => (
            <Text type="danger" key={index}>
                {error}
            </Text>
        ));
    }
    return null;
};

export default TextError