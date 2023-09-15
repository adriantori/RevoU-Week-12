import { useState } from "react";
import { Divider, Steps, Layout } from "antd"
import { FormPersonal, FormAddress, FormAccount, FormFinish } from "..";
import styles from './styles.module.css'

const { Sider } = Layout;

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
            <div style={{padding:'5vh 20vw'}}>
                <Steps
                    className={styles.horizontal}
                    current={topStep}
                    items={items}
                    direction="horizontal"
                />
                <Divider />
                <Layout style={{ padding: '24px 0', height: '60vh', display: 'relative' }}>
                    <Sider style={{ background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '32px' }} width={50}>
                        <Steps
                            current={topStep}
                            onChange={onChange}
                            direction="vertical"
                            items={[
                                {},
                                {},
                                {},
                            ]}
                        />
                    </Sider>
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
                </Layout>
            </div>
        </>
    )
}

export default FormWrapper;