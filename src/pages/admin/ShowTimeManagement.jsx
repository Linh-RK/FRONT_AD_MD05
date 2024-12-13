import { Button, Table, Input, Select } from "antd";

const showtimes = [
  {
    id: 1,
    movie: "Avengers: Endgame", // Reference to Movie entity
    cinema: "Cineplex Downtown", // Reference to Cinema entity
    room: "Room 1", // Reference to Room entity
    startTime: "2023-06-15T19:00:00", // ISO 8601 format for start time
    endTime: "2023-06-15T21:30:00", // Calculated based on movie duration
  },
  {
    id: 2,
    movie: "Jurassic World", // Reference to Movie entity
    cinema: "Starlight Multiplex", // Reference to Cinema entity
    room: "Room 2", // Reference to Room entity
    startTime: "2023-06-15T20:30:00",
    endTime: "2023-06-15T22:30:00",
  },
  {
    id: 3,
    movie: "The Lion King", // Reference to Movie entity
    cinema: "Golden Screen Cinema", // Reference to Cinema entity
    room: "VIP Room", // Reference to Room entity
    startTime: "2023-06-16T18:00:00",
    endTime: "2023-06-16T20:00:00",
  },
];

export default function ShowTimesManagement() {
  const handleSearch = (value) => {
    // Handle search logic
  };

  const handleCinemaChange = (value) => {
    // Handle cinema filter change logic
  };

  const handleDateChange = (value) => {
    // Handle date filter change logic
  };

  const columns = [
    {
      title: "Movie",
      dataIndex: "movie",
      key: "movie",
    },
    {
      title: "Cinema",
      dataIndex: "cinema",
      key: "cinema",
    },
    {
      title: "Room",
      dataIndex: "room",
      key: "room",
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
        <h1 className="text-3xl font-bold">Showtime Management</h1>
        <Button type="primary">Add New Showtime</Button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Input
          className="max-w-sm"
          placeholder="Search showtimes..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="space-x-2">
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
          <Input
            type="date"
            className="inline-block w-auto"
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={showtimes}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
