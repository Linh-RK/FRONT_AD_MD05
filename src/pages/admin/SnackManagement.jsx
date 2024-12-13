import { Button, Table, Input } from "antd";

const snacks = [
  { id: 1, name: "Popcorn", price: 5.99, type: "Snack", isDeleted: false },
  { id: 2, name: "Soda", price: 3.99, type: "Drink", isDeleted: false },
  { id: 3, name: "Nachos", price: 6.99, type: "Snack", isDeleted: false },
  { id: 4, name: "Candy", price: 4.99, type: "Snack", isDeleted: false },
];

export default function SnacksShowTimesManagement() {
  const columns = [
    {
      title: "STT", // Changed from 'id' to 'stt'
      dataIndex: "stt", // This is the row index
      key: "stt",
      render: (_, __, index) => index + 1, // Display row number as STT
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button type="default" className="mr-2">
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
        <h1 className="text-3xl font-bold">Snack Management</h1>
        <Button type="primary">Add New Snack</Button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Input
          className="max-w-sm"
          placeholder="Search snacks..."
          onChange={(e) => {
            // Add search logic here
          }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={snacks}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
