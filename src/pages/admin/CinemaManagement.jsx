import React, { useState } from "react";
import { Button, Table, Input } from "antd";

const cinemas = [
  {
    index: 1, // Số thứ tự thay cho id
    name: "Cineplex 1",
    address: "123 Cinema Street, City A",
    phoneNumber: "123-456-7890",
    isDeleted: false,
    createdDate: "2023-01-01",
    updatedDate: "2023-12-01",
  },
  {
    index: 2,
    name: "Cineplex 2",
    address: "456 Movie Avenue, City B",
    phoneNumber: "234-567-8901",
    isDeleted: false,
    createdDate: "2022-05-15",
    updatedDate: "2023-11-25",
  },
  {
    index: 3,
    name: "Cineplex 3",
    address: "789 Film Road, City C",
    phoneNumber: "345-678-9012",
    isDeleted: true, // Đánh dấu là đã xóa
    createdDate: "2021-08-10",
    updatedDate: "2023-10-30",
  },
];

export default function CinemaManagement() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCinemas = cinemas.filter(
    (cinema) =>
      cinema.name.toLowerCase().includes(search.toLowerCase()) ||
      cinema.address.toLowerCase().includes(search.toLowerCase()) ||
      cinema.phoneNumber.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      title: "STT", // Hiển thị số thứ tự thay cho ID
      dataIndex: "index", // Chứa số thứ tự
      key: "index",
    },
    {
      title: "Cinema Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Created Date",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Updated Date",
      dataIndex: "updatedDate",
      key: "updatedDate",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <span>
          <Button type="link" style={{ marginRight: 8 }}>
            Edit
          </Button>
          <Button type="link" danger>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Cinema Management
        </h1>
        <Button type="primary">Add New Cinema</Button>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Input
          value={search}
          onChange={handleSearchChange}
          placeholder="Search cinemas..."
          style={{ width: "300px" }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={filteredCinemas}
        rowKey="index" // Sử dụng index làm khóa cho dòng
        pagination={false}
      />
    </div>
  );
}
