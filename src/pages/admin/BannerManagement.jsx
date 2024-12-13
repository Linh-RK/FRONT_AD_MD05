import React, { useState } from "react";
import { Button, Table, Input, Select, Image } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const banners = [
  {
    key: 1,
    bannerName: "Summer Sale",
    url: "https://i.pinimg.com/736x/cb/bd/e0/cbbde00811bc0c4882f7476519c3293c.jpg",
    type: "IMAGE",
    position: "Top",
    isDeleted: false,
  },
  {
    key: 2,
    bannerName: "New Movie Release",
    url: "https://i.pinimg.com/736x/cb/bd/e0/cbbde00811bc0c4882f7476519c3293c.jpg",
    type: "VIDEO",
    position: "Bottom",
    isDeleted: true,
  },
  // More data here...
];

export default function BannersManagement() {
  const [statusFilter, setStatusFilter] = useState("");

  const handleStatusChange = (value) => {
    setStatusFilter(value);
  };

  const filteredBanners = banners.filter((banner) => {
    if (statusFilter === "") return true;
    return statusFilter === "active" ? banner.active : !banner.active;
  });

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      render: (text, record, index) => index + 1, // Thay id bằng số thứ tự
    },
    {
      title: "Banner Name",
      dataIndex: "bannerName",
      key: "bannerName",
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      className: "w-[80px]",
      render: (url) => <Image src={url}></Image>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type) => (type === "IMAGE" ? "Image" : "Video"), // Enum type (IMAGE, VIDEO)
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Status",
      dataIndex: "isDeleted",
      key: "isDeleted",
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
      render: (text, record) => (
        <span>
          <Button type="link" style={{ marginRight: "8px" }}>
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
          Banner Management
        </h1>
        <Button type="primary">Add New Banner</Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Input placeholder="Search banners..." style={{ width: "200px" }} />
        <Select
          defaultValue=""
          style={{ width: "200px" }}
          onChange={handleStatusChange}
        >
          <Select.Option value="">All Status</Select.Option>
          <Select.Option value="active">Active</Select.Option>
          <Select.Option value="inactive">Inactive</Select.Option>
        </Select>
      </div>
      <Table
        columns={columns}
        dataSource={filteredBanners}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
