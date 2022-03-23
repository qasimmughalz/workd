import { Form, Formik } from 'formik';
import { Button } from './Button';

export const TableFilters = ({ initialValues, children }) => {
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={(values) => onFormSubmit(values)}>
        <Form className=" mb-4 card border-2 shadow">
          <h1 className="py-2 text-lg font-semibold">Search Filter</h1>
          <div className="flex  gap-y-4 gap-x-4 justify-between">
            <div className="flex gap-x-4 gap-y-4 flex-wrap w-full">{children}</div>
            <div className="flex justify-end w-48 items-center">
              <Button color="black">Filter</Button>
              <button className="underline ml-4" onClick={(e) => {}}>
                Reset All
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
