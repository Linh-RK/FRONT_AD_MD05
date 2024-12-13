import React, { useState } from "react";
import { Button, Table, Input, Select } from "antd";

// Dữ liệu giả lập cho các phòng (rooms)
const rooms = [
  {
    id: 1,
    roomName: "Room 1",
    status: "Available",
    cinema: "Cineplex Downtown",
    isDeleted: false,
    rowSeat: "A",
    colSeat: 20,
  },
  {
    id: 2,
    roomName: "Room 2",
    status: "Occupied",
    cinema: "Cineplex Downtown",
    isDeleted: false,
    rowSeat: "B",
    colSeat: 15,
  },
  {
    id: 3,
    roomName: "VIP Room",
    status: "Available",
    cinema: "Starlight Multiplex",
    isDeleted: true, // Đánh dấu phòng đã xóa
    rowSeat: "C",
    colSeat: 10,
  },
];

export default function RoomsManagement() {
  const [search, setSearch] = useState("");
  const [cinemaFilter, setCinemaFilter] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleCinemaChange = (value) => {
    setCinemaFilter(value);
  };

  // Lọc các phòng theo tìm kiếm và cinema
  const filteredRooms = rooms.filter(
    (room) =>
      (room.roomName.toLowerCase().includes(search.toLowerCase()) ||
        room.cinema.toLowerCase().includes(search.toLowerCase())) &&
      (cinemaFilter === "" ||
        room.cinema.toLowerCase().includes(cinemaFilter.toLowerCase()))
  );

  const columns = [
    {
      title: "STT", // Hiển thị số thứ tự thay cho ID
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => index + 1, // Số thứ tự (STT)
    },
    {
      title: "Room Name",
      dataIndex: "roomName",
      key: "roomName",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Cinema",
      dataIndex: "cinema",
      key: "cinema",
    },
    {
      title: "Row Seat",
      dataIndex: "rowSeat",
      key: "rowSeat",
    },
    {
      title: "Column Seat",
      dataIndex: "colSeat",
      key: "colSeat",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button className="mr-2 text-blue-500">Edit</Button>
          <Button className="mr-2 text-red-500" disabled={record.isDeleted}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Room Management</h1>
        <Button type="primary">Add New Room</Button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Input
          className="max-w-sm"
          placeholder="Search rooms..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Select
          className="border rounded p-2"
          defaultValue=""
          onChange={handleCinemaChange}
          style={{ width: 200 }}
        >
          <Select.Option value="">All Cinemas</Select.Option>
          <Select.Option value="cineplex">Cineplex Downtown</Select.Option>
          <Select.Option value="starlight">Starlight Multiplex</Select.Option>
          <Select.Option value="golden">Golden Screen Cinema</Select.Option>
        </Select>
      </div>
      <Table
        columns={columns}
        dataSource={filteredRooms}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
