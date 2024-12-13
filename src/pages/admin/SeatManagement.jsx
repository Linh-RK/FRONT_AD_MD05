import React, { useState } from "react";
import { Button, Table, Input, Select } from "antd";
import { Armchair } from "lucide-react";

// Dữ liệu giả lập cho các ghế (seats)
const seats = [
  {
    id: 1,
    rowNumber: "A",
    seatNumber: 1,
    type: "Standard",
    room: "Room 1",
    status: "Available",
    isDeleted: false,
  },
  {
    id: 2,
    rowNumber: "B",
    seatNumber: 3,
    type: "VIP",
    room: "VIP Room",
    status: "Occupied",
    isDeleted: false,
  },
  {
    id: 3,
    rowNumber: "C",
    seatNumber: 5,
    type: "Standard",
    room: "Room 2",
    status: "Maintenance",
    isDeleted: false,
  },
];

export default function SeatsManagement() {
  const [search, setSearch] = useState("");
  const [roomFilter, setRoomFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleRoomChange = (value) => {
    setRoomFilter(value);
  };

  const handleTypeChange = (value) => {
    setTypeFilter(value);
  };

  // Lọc các ghế theo tìm kiếm, phòng và loại
  const filteredSeats = seats.filter(
    (seat) =>
      (seat.room.toLowerCase().includes(search.toLowerCase()) ||
        seat.rowNumber.toLowerCase().includes(search.toLowerCase())) &&
      (roomFilter === "" ||
        seat.room.toLowerCase().includes(roomFilter.toLowerCase())) &&
      (typeFilter === "" ||
        seat.type.toLowerCase().includes(typeFilter.toLowerCase()))
  );

  const columns = [
    {
      title: "Seat Number",
      dataIndex: "seatNumber",
      key: "seatNumber",
      render: (text, record) => `${record.rowNumber}${text}`, // Hiển thị ghế theo format "Row + Seat Number"
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Room",
      dataIndex: "room",
      key: "room",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            status === "Available"
              ? "bg-green-100 text-green-800"
              : status === "Occupied"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          <Armchair className="w-4 h-4 mr-1" />
          {status}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button type="default" className="mr-2" disabled={record.isDeleted}>
            Edit
          </Button>
          <Button type="danger" disabled={record.isDeleted}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Seat Management</h1>
        <Button type="primary">Add New Seat</Button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Input
          className="max-w-sm"
          placeholder="Search seats..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="space-x-2">
          <Select
            className="border rounded p-2"
            defaultValue=""
            onChange={handleRoomChange}
            style={{ width: 200 }}
          >
            <Select.Option value="">All Rooms</Select.Option>
            <Select.Option value="room1">Room 1</Select.Option>
            <Select.Option value="room2">Room 2</Select.Option>
            <Select.Option value="vip">VIP Room</Select.Option>
          </Select>
          <Select
            className="border rounded p-2"
            defaultValue=""
            onChange={handleTypeChange}
            style={{ width: 200 }}
          >
            <Select.Option value="">All Types</Select.Option>
            <Select.Option value="standard">Standard</Select.Option>
            <Select.Option value="vip">VIP</Select.Option>
          </Select>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={filteredSeats}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
