import baseUrl from "@/api/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Thao tác lấy danh sách người dùng với các tham số (search, phân trang)
export const fetchUsers = createAsyncThunk("admin/users", async (params) => {
  const response = await baseUrl.get(`admin/users?search=${params.search}`);
  return response.data; // Trả về dữ liệu từ API
});

// Thao tác thay đổi trạng thái của người dùng
export const changeUserStatus = createAsyncThunk(
  "users/changeStatus",
  async (userId) => {
    const response = await baseUrl.put(`admin/users/${userId}`, userId);
    console.log(response);
    return response.data; // Trả về kết quả cập nhật trạng thái người dùng
  }
);
