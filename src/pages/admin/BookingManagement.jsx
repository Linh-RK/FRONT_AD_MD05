import React, { useState } from "react";
import { Button, Table, Input, Select } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EyeInvisibleOutlined,
  UserOutlined,
} from "@ant-design/icons";

const bookings = [
  {
    index: 1, // Số thứ tự thay vì id
    user: { name: "John Doe" }, // Giả sử bạn có một đối tượng user với thuộc tính name
    movie: { title: "Avengers: Endgame" }, // Giả sử bạn có một đối tượng showtime với thuộc tính movie
    date: "2023-06-15",
    time: "19:00",
    totalPrice: 20.5, // Thêm thông tin về giá trị tổng cộng
    totalSeat: 3, // Thêm thông tin về số ghế
    status: "Confirmed", // Trạng thái của booking
    isDeleted: false, // Trạng thái xóa (tương ứng với isDeleted)
  },
  {
    index: 2,
    user: { name: "Jane Smith" },
    movie: { title: "Jurassic World" },
    date: "2023-06-16",
    time: "20:30",
    totalPrice: 25.0,
    totalSeat: 2,
    status: "Pending",
    isDeleted: false,
  },
  {
    index: 3,
    user: { name: "Bob Johnson" },
    movie: { title: "The Lion King" },
    date: "2023-06-17",
    time: "18:00",
    totalPrice: 18.0,
    totalSeat: 4,
    status: "Cancelled",
    isDeleted: true, // Đánh dấu đã bị hủy
  },
];

export default function BookingsManagement() {
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const handleStatusChange = (value) => {
    setStatusFilter(value);
  };

  const handleDateChange = (e) => {
    setDateFilter(e.target.value);
  };

  const filteredBookings = bookings.filter((booking) => {
    return (
      (statusFilter === "" ||
        booking.status.toLowerCase() === statusFilter.toLowerCase()) &&
      (dateFilter === "" || booking.date === dateFilter)
    );
  });

  const columns = [
    {
      title: "No.",
      dataIndex: "index",
      key: "index",
      render: (_, record, index) => index + 1, // Hiển thị số thứ tự
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (user) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <UserOutlined style={{ marginRight: 8 }} />
          {user?.name} {/* Giả sử 'name' là thuộc tính của User */}
        </div>
      ),
    },
    {
      title: "Movie",
      dataIndex: "movie",
      key: "movie",
      render: (showtime) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <UserOutlined style={{ marginRight: 8 }} />
          {showtime?.movie?.title}{" "}
          {/* Giả sử 'movie' là thuộc tính của ShowTime */}
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (showtime) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <CalendarOutlined style={{ marginRight: 8 }} />
          {showtime?.date} {/* Giả sử 'date' là thuộc tính của ShowTime */}
        </div>
      ),
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (showtime) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <ClockCircleOutlined style={{ marginRight: 8 }} />
          {showtime?.time} {/* Giả sử 'time' là thuộc tính của ShowTime */}
        </div>
      ),
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (totalPrice) => <span>{totalPrice?.toFixed(2)} USD</span>,
    },
    {
      title: "Total Seat",
      dataIndex: "totalSeat",
      key: "totalSeat",
      render: (totalSeat) => <span>{totalSeat}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (isDeleted) => (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "2px 8px",
            borderRadius: "12px",
            backgroundColor: isDeleted ? "#f7d4d4" : "#d4f7d4",
            color: isDeleted ? "#f44336" : "#4CAF50",
            fontSize: "12px",
          }}
        >
          {isDeleted ? (
            <EyeInvisibleOutlined style={{ marginRight: "4px" }} />
          ) : (
            <EyeOutlined style={{ marginRight: "4px" }} />
          )}
          {isDeleted ? "Inactive" : "Active"}
        </span>
      ),
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
          Booking Management
        </h1>
        <Button type="primary">Add New Booking</Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Input placeholder="Search bookings..." style={{ width: "200px" }} />
        <div style={{ display: "flex", gap: "16px" }}>
          <Input
            type="date"
            value={dateFilter}
            onChange={handleDateChange}
            style={{ width: "200px" }}
          />
          <Select
            value={statusFilter}
            onChange={handleStatusChange}
            style={{ width: "200px" }}
          >
            <Select.Option value="">All Status</Select.Option>
            <Select.Option value="confirmed">Confirmed</Select.Option>
            <Select.Option value="pending">Pending</Select.Option>
            <Select.Option value="cancelled">Cancelled</Select.Option>
          </Select>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={filteredBookings}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
