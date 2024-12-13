import React, { useState } from "react";
import { Button, Table, Input } from "antd";

const newsData = [
  {
    index: 1, // Số thứ tự thay cho id
    title: "New Year Festival Announcement",
    content: "Details about the upcoming New Year festival...",
    isDeleted: false,
    festival: "Music Festival",
    createdAt: "2024-12-01T10:00:00",
    updatedAt: "2024-12-02T14:00:00",
  },
  {
    index: 2,
    title: "Food Festival Highlights",
    content: "A sneak peek at the food festival this December...",
    isDeleted: false,
    festival: "Food Festival",
    createdAt: "2024-12-05T09:30:00",
    updatedAt: "2024-12-06T11:30:00",
  },
  {
    index: 3,
    title: "Film Festival Review",
    content: "Review of the recently concluded film festival...",
    isDeleted: true, // Đánh dấu là đã xóa
    festival: "Film Festival",
    createdAt: "2024-12-10T08:00:00",
    updatedAt: "2024-12-12T13:45:00",
  },
];

export default function NewsManagement() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredNews = newsData.filter(
    (news) =>
      news.title.toLowerCase().includes(search.toLowerCase()) ||
      news.content.toLowerCase().includes(search.toLowerCase())
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
      title: "Festival",
      dataIndex: "festival",
      key: "festival",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
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
          News Management
        </h1>
        <Button type="primary">Add New News</Button>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Input
          value={search}
          onChange={handleSearchChange}
          placeholder="Search news..."
          style={{ width: "300px" }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={filteredNews}
        rowKey="index" // Dùng số thứ tự làm key
        pagination={false}
      />
    </div>
  );
}
