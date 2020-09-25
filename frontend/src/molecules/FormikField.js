import React from 'react';
import { useField } from 'formik';

import { Field } from './Field';

export function FormikField({ name, ...props }) {
  const [field, meta] = useField(name);

  const error = meta.touched && meta.error;

  return <Field {...field} error={error} {...props} />;
}
