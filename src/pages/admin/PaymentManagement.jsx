import { Button, Table, Input, Select, DatePicker } from "antd";
import { CreditCard, DollarSign, Calendar, User } from "lucide-react";

const payments = [
  {
    id: 1,
    transactionId: "T001",
    user: "John Doe",
    amount: 25.99,
    date: "2023-06-15",
    method: "Credit Card",
    status: "Completed",
  },
  {
    id: 2,
    transactionId: "T002",
    user: "Jane Smith",
    amount: 42.5,
    date: "2023-06-16",
    method: "PayPal",
    status: "Pending",
  },
  {
    id: 3,
    transactionId: "T003",
    user: "Bob Johnson",
    amount: 15.0,
    date: "2023-06-17",
    method: "Debit Card",
    status: "Failed",
  },
];

export default function PaymentsManagement() {
  const handleSearch = (value) => {
    // Handle search logic
  };

  const handleDateChange = (date, dateString) => {
    // Handle date change logic
  };

  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (user) => (
        <div className="flex items-center">
          <User className="w-4 h-4 mr-2" />
          {user}
        </div>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => (
        <div className="flex items-center">
          <DollarSign className="w-4 h-4 mr-2" />${amount.toFixed(2)}
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => (
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </div>
      ),
    },
    {
      title: "Method",
      dataIndex: "method",
      key: "method",
      render: (method) => (
        <div className="flex items-center">
          <CreditCard className="w-4 h-4 mr-2" />
          {method}
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            status === "Completed"
              ? "bg-green-100 text-green-800"
              : status === "Pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button type="default" className="mr-2">
            Edit
          </Button>
          <Button type="danger">Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Payment Management</h1>
        <Button type="primary">Add New Payment</Button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Input
          className="max-w-sm"
          placeholder="Search payments..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="space-x-2">
          <DatePicker
            className="inline-block w-auto"
            onChange={handleDateChange}
          />
          <Select className="border rounded p-2" defaultValue="">
            <Select.Option value="">All Status</Select.Option>
            <Select.Option value="completed">Completed</Select.Option>
            <Select.Option value="pending">Pending</Select.Option>
            <Select.Option value="failed">Failed</Select.Option>
          </Select>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={payments}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
