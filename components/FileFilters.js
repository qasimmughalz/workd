import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import { TextField } from './form/TextField';
import { TableFilters } from './TableFilters';

export const FileFilters = () => {
  return (
    <TableFilters>
      <div className="flex divide-x-2 gap-x-4">
        <div className="flex gap-x-4">
          <TextField placeholder="Project Name" />
          <TextField placeholder="Status" />
          <TextField placeholder="Type" />
        </div>
        <div className="flex pl-2">
          <button className="underline">Show advanced filters</button>
        </div>
      </div>
    </TableFilters>
  );
};
