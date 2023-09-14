import { ReactNode } from "react";
import { Form as BaseForm} from 'antd'

interface Props {
    title?: string;
    children: ReactNode
}

const Form = ({title, children} : Props) => {

    return (
        <BaseForm title={title}>
            {children}
        </BaseForm>
    )  
}

export default Form