import { Button, Container } from '../../components';

interface FinishOutput {
    onPrev: () => void;
}

const FormFinish: React.FC<FinishOutput> = ({ onPrev }) => {

    return (
        <Container>
            <h2>Your submission has been saved</h2>
            <Button type={'default'} htmlType='submit' onClick={onPrev}>Previous</Button>
        </Container>
    )
}

export default FormFinish;