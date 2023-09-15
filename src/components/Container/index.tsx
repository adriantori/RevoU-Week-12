import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const Container = ({children} : Props) => {

    return (
        <div style={{height:'100%'}}>
            {children}
        </div>
    )  
}

export default Container