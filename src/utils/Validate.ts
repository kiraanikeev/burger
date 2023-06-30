import React, { ChangeEvent } from "react";
import { useCallback } from "react";

export function useValidation() {
  const [values, setValues] = React.useState<Record<string, string>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isValid, setIsValid] = React.useState<boolean>(false);

  const handleChange = (event:ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    const targetForm = target.closest("form") as HTMLFormElement | null
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(targetForm?.checkValidity() as boolean);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setIsValid };
}