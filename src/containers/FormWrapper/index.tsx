import { useState } from "react";
import { FormPersonal, FormAddress } from "..";

const FormWrapper = () => {
    const [step, setStep] = useState<number>(1);

    const handleNext = () => {
        if (step === 1) {
            setStep((prevStep) => prevStep + 1);
        }

        return
    }

    const handlePrev = () => {
        if (step === 2) {
            setStep((prevStep) => prevStep - 1);
        }

        return
    }

    return (
        <>
            {step === 1 && (
                <FormPersonal onNext={handleNext} onPrev={handlePrev} />
            )}
            {step === 2 && (
                <FormAddress  onNext={handleNext} onPrev={handlePrev}/>
            )}

        </>
    )
}

export default FormWrapper;