import { FieldContainer } from './FieldContainer';
import SearchIcon from '../../public/icons/search.svg';
import { Field } from 'formik';

export const SearchField = ({ label, placeholder, name }) => {
  return (
    <FieldContainer label={label}>
      <div className="input flex justify-between items-center">
        <Field
          type="text"
          className=" w-full form-input border-none  placeholder:italic  text-sm placeholder:text-gray-500 focus:outline-none border-transparent focus:border-transparent focus:ring-0"
          placeholder={placeholder}
          name={name}
        />
        <SearchIcon />
      </div>
    </FieldContainer>
  );
};
