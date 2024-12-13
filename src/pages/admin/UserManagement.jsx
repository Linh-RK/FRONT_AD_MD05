import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Table, message } from "antd";
import { changeUserStatus, fetchUsers } from "@/services/userService";
import { RefreshCw, X } from "lucide-react";

export default function UsersManagement() {
  const dispatch = useDispatch();
  const { users, status, error, totalUsers } = useSelector(
    (state) => state.users
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [pagination, setPagination] = useState({
    page: 0,
    size: 5,
  });

  useEffect(() => {
    const params = {
      search: searchTerm,
      role: roleFilter,
      page: pagination.page,
      size: pagination.size,
    };
    dispatch(fetchUsers(params));
  }, [searchTerm, roleFilter, pagination]);

  const handleSearchSubmit = (values) => {
    setSearchTerm(values.search); // Cập nhật giá trị tìm kiếm
    console.log("Search submitted:", values.search);
    console.log("Search submitted:");
  };

  const handleChangeStatus = (userId) => {
    dispatch(changeUserStatus(userId)) // Gọi action thay đổi trạng thái người dùng
      .then(() => {
        message.success("User status changed successfully");
      })
      .catch(() => {
        message.error("Failed to change user status");
      });
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <div
          className={
            record.status
              ? `bg-blue-500 text-white p-2 rounded-md text-center`
              : `bg-red-500 text-white p-2 rounded-md text-center`
          }
        >
          {record.status ? "Active" : "Block"}
        </div>
      ),
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (_, record) => (
        <img src={record.avatar} alt="" className="w-[50px]" />
      ),
    },

    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button type="danger" onClick={() => handleChangeStatus(record.id)}>
            Change Status
          </Button>
        </div>
      ),
    },
  ];

  const handleTableChange = (pagination) => {
    setPagination({
      ...pagination,
      page: pagination.current - 1, // Set lại trang hiện tại
    });
  };

  return (
    <div className="container p-3">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">User Management</h1>
        </div>
        <div className="flex justify-start items-center space-x-4">
          {" "}
          {/* Thêm space-x-4 để tạo khoảng cách giữa các phần tử */}
          <Form
            onFinish={handleSearchSubmit}
            initialValues={{ search: "" }} // Giá trị mặc định
          >
            <Form.Item name="search" className="m-0">
              {" "}
              {/* Sử dụng m-0 để loại bỏ margin tự động */}
              <Input
                className="max-w-sm"
                placeholder="Search users..."
                allowClear
                value={searchTerm} // Gán giá trị từ state
              />
            </Form.Item>
          </Form>
          <Button
            type="default"
            icon={<RefreshCw />} // Sử dụng icon refresh từ lucide-react
            onClick={() => {
              setSearchTerm(""); // Xóa nội dung tìm kiếm
              setRoleFilter(""); // Reset bộ lọc (nếu cần)
              setPagination({ page: 0, size: 5 }); // Reset phân trang
              dispatch(fetchUsers({ page: 0, size: 5 })); // Gọi API để tải lại danh sách gốc
            }}
          />
          <Button
            type="default"
            icon={<X />} // Sử dụng icon xóa từ lucide-react
            onClick={() => {
              setSearchTerm(""); // Xóa nội dung tìm kiếm
              setRoleFilter(""); // Reset bộ lọc (nếu cần)
              setPagination({ page: 0, size: 5 }); // Reset phân trang
              dispatch(fetchUsers({ page: 0, size: 5 })); // Gọi API để tải lại danh sách gốc
            }}
          />
          {/* Add Role filter input here if needed */}
        </div>
        {users && users.length > 0 ? (
          <Table
            columns={columns}
            dataSource={users}
            rowKey="id"
            pagination={{
              current: pagination.page + 1, // Lấy trang hiện tại
              pageSize: pagination.size,
              total: users.length > 0 ? users.length : state.totalUsers, // Tổng số người dùng từ API
            }}
            onChange={handleTableChange} // Phản hồi khi người dùng thay đổi phân trang
          />
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}
