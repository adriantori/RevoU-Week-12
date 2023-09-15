import { useState } from "react";
import { Divider, Steps } from "antd"
import { FormPersonal, FormAddress, FormAccount, FormFinish } from "..";
import styles from './styles.module.css'

const steps = [
    {
        title: 'Personal',
        content: 'First-contents',
    },
    {
        title: 'Address',
        content: 'Second-contents',
    },
    {
        title: 'Account',
        content: 'Last-contents',
    }
];

const FormWrapper = () => {
    const [step, setStep] = useState<number>(1);
    const [topStep, setTopStep] = useState<number>(0)

    const handleNext = () => {
        if (step < steps.length + 1) {
            setStep((prevStep) => prevStep + 1);
            setTopStep((prevTopStep) => prevTopStep + 1);
        }

        return
    }

    const handlePrev = () => {
        if (step > 1) {
            setStep((prevStep) => prevStep - 1);
            setTopStep((prevTopStep) => prevTopStep - 1);
        }

        return
    }

    const onChange = (value: number) => {
        if (value < topStep) {
            setStep(value + 1);
            setTopStep(value);
        }
    };


    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    return (
        <>
            <Steps
                current={topStep}
                items={items}
            />
            <Divider />
            <div className={styles.flexbox}>
                <div>
                    <Steps
                        current={topStep}
                        onChange={onChange}
                        direction="vertical"
                        items={[
                            {
                                
                            },
                            {
                                
                            },
                            {
                                
                            },
                        ]}
                    />
                </div>
                <div>
                    {step === 1 && (
                        <FormPersonal onNext={handleNext} />
                    )}
                    {step === 2 && (
                        <FormAddress onNext={handleNext} onPrev={handlePrev} />
                    )}
                    {step === 3 && (
                        <FormAccount onNext={handleNext} onPrev={handlePrev} />
                    )}
                    {step === 4 && (
                        <FormFinish onPrev={handlePrev} />
                    )}
                </div>
            </div>
        </>
    )
}

export default FormWrapper;