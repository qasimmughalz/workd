import { Field } from 'formik';
import { FieldContainer } from './FieldContainer';

export const RadioField = ({ label, values, name }) => {
  const renderValues = () => {
    return values.map((value) => {
      return (
        <div key={value.label} className="flex items-center">
          <label className="mr-2">{value.label}</label>
          <Field className="form-check-input" type="radio" name={name} value={value.label} />
        </div>
      );
    });
  };
  return (
    <FieldContainer label={label}>
      <div className="flex gap-x-4 ">{renderValues()}</div>
    </FieldContainer>
  );
};
