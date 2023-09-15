import { ReactNode } from "react";
import { Button as BaseButton } from "antd";

interface Props {
    children: ReactNode;
    type?: 'default' | 'primary';
    htmlType?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

const Button = ({type, htmlType, children, onClick} : Props) => {

    return (
        <BaseButton type={type} htmlType={htmlType} onClick={onClick}>
            {children}
        </BaseButton>
    )  
}

export default Button