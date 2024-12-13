import React, { useState } from "react";
import { Button, Table, Input, Select } from "antd";
import {
  User,
  MessageSquare,
  Calendar,
  Film,
  ThumbsUp,
  Flag,
} from "lucide-react";

const { Option } = Select;

const comments = [
  {
    id: 1,
    user: "John Doe",
    movie: "Avengers: Endgame",
    content: "Great movie! Loved every minute of it.",
    date: "2023-06-15",
    likes: 15,
    status: "Approved",
  },
  {
    id: 2,
    user: "Jane Smith",
    movie: "Jurassic World",
    content: "The special effects were amazing!",
    date: "2023-06-16",
    likes: 8,
    status: "Pending",
  },
  {
    id: 3,
    user: "Bob Johnson",
    movie: "The Lion King",
    content: "A classic reimagined beautifully.",
    date: "2023-06-17",
    likes: 20,
    status: "Flagged",
  },
];

export default function CommentsManagement() {
  const [search, setSearch] = useState("");
  const [movieFilter, setMovieFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleMovieFilterChange = (value) => {
    setMovieFilter(value);
  };

  const handleStatusFilterChange = (value) => {
    setStatusFilter(value);
  };

  const filteredComments = comments.filter(
    (comment) =>
      (comment.user.toLowerCase().includes(search.toLowerCase()) ||
        comment.movie.toLowerCase().includes(search.toLowerCase()) ||
        comment.content.toLowerCase().includes(search.toLowerCase())) &&
      (movieFilter ? comment.movie === movieFilter : true) &&
      (statusFilter ? comment.status === statusFilter : true)
  );

  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (text) => (
        <span>
          <User style={{ width: 16, height: 16, marginRight: 8 }} />
          {text}
        </span>
      ),
    },
    {
      title: "Movie",
      dataIndex: "movie",
      key: "movie",
      render: (text) => (
        <span>
          <Film style={{ width: 16, height: 16, marginRight: 8 }} />
          {text}
        </span>
      ),
    },
    {
      title: "Comment",
      dataIndex: "content",
      key: "content",
      render: (text) => (
        <span>
          <MessageSquare style={{ width: 16, height: 16, marginRight: 8 }} />
          {text.length > 50 ? `${text.substring(0, 50)}...` : text}
        </span>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <span>
          <Calendar style={{ width: 16, height: 16, marginRight: 8 }} />
          {text}
        </span>
      ),
    },
    {
      title: "Likes",
      dataIndex: "likes",
      key: "likes",
      render: (text) => (
        <span>
          <ThumbsUp style={{ width: 16, height: 16, marginRight: 8 }} />
          {text}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        const statusStyles = {
          Approved: "green",
          Pending: "yellow",
          Flagged: "red",
        };
        return (
          <span
            style={{
              backgroundColor: `${statusStyles[text]}100`,
              color: `${statusStyles[text]}800`,
              padding: "2px 8px",
              borderRadius: "12px",
              fontSize: "12px",
            }}
          >
            {text === "Flagged" && (
              <Flag style={{ width: 16, height: 16, marginRight: 4 }} />
            )}
            {text}
          </span>
        );
      },
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
          Comment Management
        </h1>
        <Button type="primary">Add New Comment</Button>
      </div>
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Input
          value={search}
          onChange={handleSearchChange}
          placeholder="Search comments..."
          style={{ width: "300px" }}
        />
        <div style={{ display: "flex", gap: "16px" }}>
          <Select
            value={movieFilter}
            onChange={handleMovieFilterChange}
            style={{ width: 200 }}
            placeholder="All Movies"
          >
            <Option value="">All Movies</Option>
            <Option value="Avengers: Endgame">Avengers: Endgame</Option>
            <Option value="Jurassic World">Jurassic World</Option>
            <Option value="The Lion King">The Lion King</Option>
          </Select>
          <Select
            value={statusFilter}
            onChange={handleStatusFilterChange}
            style={{ width: 200 }}
            placeholder="All Status"
          >
            <Option value="">All Status</Option>
            <Option value="Approved">Approved</Option>
            <Option value="Pending">Pending</Option>
            <Option value="Flagged">Flagged</Option>
          </Select>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={filteredComments}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
