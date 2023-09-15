import { useState } from "react";
import { FormPersonal, FormAddress, FormAccount, FormFinish } from "..";

const FormWrapper = () => {
    const [step, setStep] = useState<number>(1);

    const handleNext = () => {
        if (step === 1 || step === 2 || step === 3) {
            setStep((prevStep) => prevStep + 1);
        }

        return
    }

    const handlePrev = () => {
        if (step === 2 || step === 3 || step === 4) {
            setStep((prevStep) => prevStep - 1);
        }

        return
    }

    return (
        <>
            {step === 1 && (
                <FormPersonal onNext={handleNext} />
            )}
            {step === 2 && (
                <FormAddress onNext={handleNext} onPrev={handlePrev}/>
            )}
            {step === 3 && (
                <FormAccount onNext={handleNext} onPrev={handlePrev}/>
            )}
            {step === 4 && (
                <FormFinish onPrev={handlePrev}/>
            )}

        </>
    )
}

export default FormWrapper;