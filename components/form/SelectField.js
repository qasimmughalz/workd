import { Field } from 'formik';
import Select from 'react-select';
import ArrowDown from '../../public/icons/arrowDown.svg';
import ArrowUp from '../../public/icons/arrowUp.svg';
import { FieldContainer } from './FieldContainer';

const CustomDropdownIndicator = (props, { innerRef, innerProps }) => {
  return (
    <div ref={innerRef} {...innerProps} className="pl-2">
      {props.selectProps.menuIsOpen ? <ArrowUp /> : <ArrowDown />}
    </div>
  );
};
const CustomControl = (props, { innerRef, innerProps }) => {
  console.log(props);
  const { menuIsOpen, onMenuOpen, onMenuClose } = props.selectProps;
  return (
    <div
      onClick={menuIsOpen ? onMenuClose : onMenuOpen}
      className="input form-input flex justify-between"
      ref={innerRef}
      {...innerProps}
    >
      {props.children}
    </div>
  );
};

const MySelect = ({ options, field, form, placeholder }) => {
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      height: '2.5rem',
      fontSize: '0.875rem',
      fontFamily: 'inherit',
      outline: 'none',
      paddingLeft: '0',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: 'rgb(107,114,128)',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      border: 'none',
      padding: '0',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      padding: 0,
    }),
  };
  return (
    <Select
      components={{
        Control: CustomControl,
        DropdownIndicator: CustomDropdownIndicator,
        IndicatorSeparator: () => null,
      }}
      styles={customStyles}
      placeholder={placeholder}
      isSearchable={false}
      options={options}
      name={field.name}
      value={options ? options.find((option) => option.value === field.value) : ''}
      onChange={(option) => form.setFieldValue(field.name, option.value)}
      onBlur={field.onBlur}
    />
  );
};

export const SelectField = ({ label, placeholder, name, options }) => {
  return (
    <FieldContainer label={label}>
      <Field name={name} component={MySelect} options={options} placeholder={placeholder} />
    </FieldContainer>
  );
};
