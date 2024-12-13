import { Button, Table, Input } from "antd";

const ticketPrices = [
  {
    id: 1,
    movieType: "REGULAR", // Enum value for movie type (adjust as necessary)
    seatType: "STANDARD", // Enum value for seat type (adjust as necessary)
    dayType: "WEEKDAY", // Enum value for day type (adjust as necessary)
    timeSlot: "EVENING", // Enum value for time slot (adjust as necessary)
    price: 12.99,
    isDeleted: false,
  },
  {
    id: 2,
    movieType: "REGULAR",
    seatType: "STANDARD",
    dayType: "WEEKDAY",
    timeSlot: "AFTERNOON",
    price: 8.99,
    isDeleted: false,
  },
  {
    id: 3,
    movieType: "PREMIUM",
    seatType: "VIP",
    dayType: "WEEKEND",
    timeSlot: "EVENING",
    price: 10.99,
    isDeleted: false,
  },
  {
    id: 4,
    movieType: "REGULAR",
    seatType: "STANDARD",
    dayType: "WEEKEND",
    timeSlot: "MORNING",
    price: 11.99,
    isDeleted: false,
  },
];

export default function TicketPricesManagement() {
  const columns = [
    {
      title: "Movie Type",
      dataIndex: "movieType",
      key: "movieType",
      render: (movieType) => movieType, // Render the movie type (Enum)
    },
    {
      title: "Seat Type",
      dataIndex: "seatType",
      key: "seatType",
      render: (seatType) => seatType, // Render the seat type (Enum)
    },
    {
      title: "Day Type",
      dataIndex: "dayType",
      key: "dayType",
      render: (dayType) => dayType, // Render the day type (Enum)
    },
    {
      title: "Time Slot",
      dataIndex: "timeSlot",
      key: "timeSlot",
      render: (timeSlot) => timeSlot, // Render the time slot (Enum)
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toFixed(2)}`, // Render the price with a dollar sign
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
        <h1 className="text-3xl font-bold">Ticket Price Management</h1>
        <Button type="primary">Add New Ticket Type</Button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Input
          className="max-w-sm"
          placeholder="Search ticket types..."
          onChange={(e) => {
            // Add search logic here
          }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={ticketPrices}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
