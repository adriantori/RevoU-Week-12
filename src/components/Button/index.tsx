import { CSSProperties, ReactNode } from "react";
import { Button as BaseButton } from "antd";
import styles from "./style.module.css"

interface Props {
    children: ReactNode;
    type?: 'default' | 'primary';
    htmlType?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    style?: CSSProperties;
}

const Button = ({type, htmlType, children, onClick, style } : Props) => {

    return (
        <BaseButton type={type} htmlType={htmlType} onClick={onClick} style={style} className={styles.margin}>
            {children}
        </BaseButton>
    )  
}

export default Button