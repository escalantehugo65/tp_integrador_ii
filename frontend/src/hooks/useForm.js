import { useState } from "react";

function useForm(initialValues){

    const [form, setForm] = useState(initialValues)

    function handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;
        
        setForm((previousForm)=>{
            return {...previousForm, [name]:value}
        })
    }
    function handleReset(){
        setForm(initialValues)
    }
    return {
        form,
        handleInputChange,
        handleReset
    }
}

export default useForm;