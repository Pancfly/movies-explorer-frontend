import React, { useCallback } from "react";

export default function useFormValidator() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsFormValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback((restValues = {}, resetErrors = {}, resetIsFormValid = false) => {
    setValues(restValues);
    setErrors(resetErrors);
    setIsFormValid(resetIsFormValid);
    }, [setValues, setErrors, setIsFormValid]);

    return { values, setValues, errors, isFormValid, handleChange, resetForm };
}
