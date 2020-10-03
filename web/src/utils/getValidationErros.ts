import { ValidationError } from "yup";

interface Errors {
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError) {
  const validationErros: Errors = {};

  err.inner.forEach((error) => {
    validationErros[error.path] = error.message;
  });

  return validationErros;
}
