// write your custom hook here to control your checkout form
import react, {useState} from 'react'

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

  export const useForm = () =>{
    const [showSuccess, setShowSuccess] = useState(false);
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) =>{
        setValues({...valaues, [e.target.name]: e.target.value})
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        setShowSuccess(true)
    }
    return [values, showSuccess, handleChanges, handleSubmit]
  }