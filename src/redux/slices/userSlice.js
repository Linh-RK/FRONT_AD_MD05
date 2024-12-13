import { changeUserStatus, fetchUsers } from "@/services/userService";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload.content; // Dữ liệu người dùng từ API
        state.totalUsers = action.payload.totalElements; // Số người dùng tổng cộng
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Thay đổi trạng thái người dùng
      .addCase(changeUserStatus.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const index = state.users.findIndex(
          (user) => user.id === updatedUser.id
        );
        if (index !== -1) {
          state.users[index] = updatedUser; // Cập nhật trạng thái người dùng
        }
      });
  },
});

export default userSlice.reducer;
