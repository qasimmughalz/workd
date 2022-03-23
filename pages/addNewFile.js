import { RadioGroup } from '@headlessui/react';
import { ContentLayout } from '../components/ContentLayout';
import { Layout } from '../components/Layout';

const InputGroup = ({ label, placeholder }) => {
  return (
    <div className="flex justify-between items-center">
      <label htmlFor="id" className="mr-4 w-1/4">
        {label}
      </label>
      <input className="input w-3/4" placeholder={placeholder} />
    </div>
  );
};

const handleSubmit = (e) => {
  e.preventDefault();
  // submitForm(values);
};

const AddNewFilePage = () => {
  return (
    <Layout>
      <ContentLayout header="Add New File">
        <form className="" onSubmit={handleSubmit}>
          {/* section one */}
          <div className="card mb-8 ">
            <p className="mb-4">Please fill all the required fields below to add the product.</p>
            <div className="max-w-screen-lg flex justify-between gap-x-8">
              <div className="flex flex-col gap-y-4 w-full">
                <InputGroup label="ID" placeholder="Enter Unique ID here" />
                <InputGroup label="Name" placeholder="Enter CNIC here" />
                <InputGroup label="Phone No" placeholder="Enter phone number here" />
                <InputGroup label="Email" placeholder="Enter email here" />
                <InputGroup label="Address" placeholder="Enter address here" />
                <InputGroup label="Website" placeholder="Enter website here" />
              </div>
              <div className="flex flex-col gap-y-4 w-full">
                <InputGroup label="Type" placeholder="Select type" />
                <InputGroup label="Owner Phone No" placeholder="Enter phone number here" />
                <InputGroup
                  label="Owner Previous Projects"
                  placeholder="Enter previous projects here (if any)"
                />

                <RadioGroup className="flex justify-between">
                  <RadioGroup.Label className="w-1/4 mr-4">Legal Status</RadioGroup.Label>

                  <div className="w-3/4 mx-4 flex justify-start">
                    <RadioGroup.Option className="flex items-center justify-between mr-8">
                      <span className="w-5 h-5 rounded-full mr-2 border"></span>
                      Certified
                    </RadioGroup.Option>
                    <RadioGroup.Option className="flex items-center justify-between">
                      <span className="w-5 h-5 rounded-full mr-2 border"></span>
                      Not Certified
                    </RadioGroup.Option>
                  </div>
                </RadioGroup>

                <InputGroup label="Area" placeholder="Enter area" />

                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="id" className="mr-4 w-1/4">
                      Map
                    </label>
                    <div className="flex items-center">
                      <input className=" w-3/4" type="file" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section two */}
          <div className="card mb-8">
            <h2 className="text-lg font-semibold mb-4">Development company</h2>
            <div>
              <div className="flex justify-between gap-x-8 max-w-screen-lg">
                <div className="flex flex-col gap-y-4 w-full">
                  <InputGroup label="Name" placeholder="Enter Company Name here" />
                  <InputGroup label="Phone" placeholder="Enter phone number here" />
                  <InputGroup
                    label="Previous Projects"
                    placeholder="Enter previous projects here (if any)"
                  />
                </div>
                <div className="flex flex-col gap-y-4 w-full">
                  <InputGroup label="Email" placeholder="Enter Company Name here" />
                  <InputGroup label="Address" placeholder="Enter phone number here" />
                </div>
              </div>
              <div className="flex justify-end my-4 max-w-screen-lg">
                <button className="button" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </ContentLayout>
    </Layout>
  );
};

export default AddNewFilePage;
