import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { ColumnsProps, Loader, Pagination, Table, TableProps } from '../src';
// import { Filter } from '../src/table/table';

export default {
  title: 'Example/Table',
  component: Table,
  argTypes: {},
} as Meta;

const Template: Story<TableProps> = (args) => (
  <div>
    {/* <Filter
      dataFilter={[
        { FilterComponent: <div>ducnh</div> },
        { FilterComponent: <div>ducnh</div> },
        { FilterComponent: <div>ducnh</div> },
      ]}
    /> */}
    <Table {...args} />
  </div>
);
type DefaultDataType = {
  id: number;
  fullname: string;
  mobile: string;
  email: string;
  address: string;
  status: string;
  created_at: string;
  updated_at: string;
};
const ColumnsAdminList: ColumnsProps[] = [
  { field: 'id', title: '#', canSort: true },
  { field: 'fullname', title: 'NAME', canSort: true },
  { field: 'mobile', title: 'PHONE' },
  { field: 'email', title: 'EMAIL' },
  { field: 'address', title: 'ADDRESS' },
  { field: 'status', title: 'STATUS' },
  { field: 'created_at', title: 'CREATED_AT' },
  { field: 'updated_at', title: 'UPDATED_AT' },
];
const defaultLoader: Loader<DefaultDataType, { keyword: string }> = {
  fetch: (input) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    }).then(() => {
      const items = [
        {
          id: 1,
          fullname: 'Nguyễn Văn A',
          mobile: '0123456789',
          email: 'nguyenvana@gmail.com',
          address: 'Hà Nội - Việt Nam',
          status: 'ACTIVE',
          created_at: '03/02/2021 15:33',
          updated_at: '03/02/2021 15:33',
        },
        {
          id: 2,
          fullname: 'Nguyễn Văn B',
          mobile: '0123456789',
          email: 'nguyenvana@gmail.com',
          address: 'Hà Nội - Việt Nam',
          status: 'ACTIVE',
          created_at: '03/02/2021 15:33',
          updated_at: '03/02/2021 15:33',
        },
        {
          id: 3,
          fullname: 'Nguyễn Văn C',
          mobile: '0123456789',
          email: 'nguyenvana@gmail.com',
          address: 'Hà Nội - Việt Nam',
          status: 'ACTIVE',
          created_at: '03/02/2021 15:33',
          updated_at: '03/02/2021 15:33',
        },
        {
          id: 4,
          fullname: 'Nguyễn Văn D',
          mobile: '0123456789',
          email: 'nguyenvana@gmail.com',
          address: 'Hà Nội - Việt Nam',
          status: 'ACTIVE',
          created_at: '03/02/2021 15:33',
          updated_at: '03/02/2021 15:33',
        },
        {
          id: 5,
          fullname: 'Nguyễn Văn E',
          mobile: '0123456789',
          email: 'nguyenvana@gmail.com',
          address: 'Hà Nội - Việt Nam',
          status: 'ACTIVE',
          created_at: '03/02/2021 15:33',
          updated_at: '03/02/2021 15:33',
        },
      ];

      const result: Pagination<DefaultDataType> = {
        data: items,
        pagination: {
          currentPage: 1, // input.page,
          perPage: 5, // input.size,
          totalItems: 5,
          totalPages: 1,
        },
      };

      return result;
    });
  },
  render: (data, field) => {
    return <span>{data[field] ?? 'Unknown'}</span>;
  },
};

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  loader: defaultLoader,
  columns: ColumnsAdminList,
  prefix: 'default',
};
