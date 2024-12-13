import React, { useState } from "react";
import { Button, Table, Input } from "antd";

const festivals = [
  {
    index: 1, // Số thứ tự thay cho id
    title: "Music Festival",
    image: "music-festival.jpg",
    isDeleted: false,
    startTime: "2024-12-15",
    endTime: "2024-12-17",
  },
  {
    index: 2,
    title: "Food Festival",
    image: "food-festival.jpg",
    isDeleted: false,
    startTime: "2024-12-20",
    endTime: "2024-12-22",
  },
  {
    index: 3,
    title: "Film Festival",
    image: "film-festival.jpg",
    isDeleted: true, // Đánh dấu là đã xóa
    startTime: "2024-12-10",
    endTime: "2024-12-14",
  },
];

export default function FestivalManagement() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredFestivals = festivals.filter(
    (festival) =>
      festival.title.toLowerCase().includes(search.toLowerCase()) ||
      festival.image.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      title: "STT", // Hiển thị số thứ tự thay cho ID
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
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
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Festival Management</h1>
        <Button type="primary">Add New Festival</Button>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Input
          value={search}
          onChange={handleSearchChange}
          placeholder="Search festivals..."
          style={{ width: "300px" }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={filteredFestivals}
        rowKey="index" // Dùng số thứ tự làm key
        pagination={false}
      />
    </div>
  );
}
