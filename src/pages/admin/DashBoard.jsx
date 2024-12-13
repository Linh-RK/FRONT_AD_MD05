import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import { Users, Film, Ticket, CreditCard } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for chart
const data = [
  { name: "Jan", users: 4000, movies: 2400, tickets: 2400, revenue: 2400 },
  { name: "Feb", users: 3000, movies: 1398, tickets: 2210, revenue: 2210 },
  { name: "Mar", users: 2000, movies: 9800, tickets: 2290, revenue: 2290 },
  { name: "Apr", users: 2780, movies: 3908, tickets: 2000, revenue: 2000 },
  { name: "May", users: 1890, movies: 4800, tickets: 2181, revenue: 2181 },
  { name: "Jun", users: 2390, movies: 3800, tickets: 2500, revenue: 2500 },
  { name: "Jul", users: 3490, movies: 4300, tickets: 2100, revenue: 2100 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Cards for Metrics */}
      <Row gutter={16}>
        <Col span={24} md={12}>
          <Card>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium">Total Users</h4>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <Statistic value={1234} />
          </Card>
        </Col>
        <Col span={24} md={12}>
          <Card>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium">Active Movies</h4>
              </div>
              <Film className="h-4 w-4 text-muted-foreground" />
            </div>
            <Statistic value={56} />
          </Card>
        </Col>
        <Col span={24} md={12}>
          <Card>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium">Tickets Sold</h4>
              </div>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </div>
            <Statistic value={5678} />
          </Card>
        </Col>
        <Col span={24} md={12}>
          <Card>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium">Revenue</h4>
              </div>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </div>
            <Statistic value={123456} prefix="$" />
          </Card>
        </Col>
      </Row>

      {/* Chart Section */}
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Monthly Performance Overview">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#8884d8" />
                <Line type="monotone" dataKey="movies" stroke="#82ca9d" />
                <Line type="monotone" dataKey="tickets" stroke="#ff7300" />
                <Line type="monotone" dataKey="revenue" stroke="#ff0000" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
