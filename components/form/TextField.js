import { Field } from 'formik';
import { FieldContainer } from './FieldContainer';

export const TextField = ({ label, placeholder, name, type, as, errors, touched }) => {
  return (
    <FieldContainer label={label}>
      <Field
        className={`input form-input  ${errors && touched ? 'border-red-500' : 'border-gray-300'}`}
        as={as ? as : 'input'}
        type={type ? type : 'text'}
        name={name}
        placeholder={placeholder}
      />
      {errors && touched && <div className="text-xs pt-1 text-red-600">{errors}</div>}
    </FieldContainer>
  );
};
