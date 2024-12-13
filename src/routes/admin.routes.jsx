import { Spin } from "antd";
import React, { Suspense } from "react";
import Dashboard from "../pages/admin/DashBoard";
import FestivalManagement from "../pages/admin/FestivalManagement";
import MovieManagement from "../pages/admin/MovieManagement";
import NewsManagement from "../pages/admin/NewsManagement";
import PaymentsManagement from "../pages/admin/PaymentManagement";
import RoomsManagement from "../pages/admin/RoomManagement";
import ShowTimesManagement from "../pages/admin/ShowTimeManagement";
import BookingsManagement from "../pages/admin/BookingManagement";
import CategoriesManagement from "../pages/admin/CategoryManagement";
import CinemasManagement from "../pages/admin/CinemaManagement";
import CommentsManagement from "../pages/admin/CommentManagement";
import TicketPricesManagement from "../pages/admin/TicketManagement";
import SnacksManagement from "../pages/admin/SnackManagement";
import SeatsManagement from "../pages/admin/SeatManagement";
import BannersManagement from "../pages/admin/BannerManagement";

const AdminLayout = React.lazy(() => import("@/layouts/AdminLayout"));
const UsersManagement = React.lazy(() =>
  import("@/pages/admin/userManagement")
);

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
const LazyLoad = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Spin tip="Loading" size="large">
          {content}
        </Spin>
      }
    >
      {children}
    </Suspense>
  );
};

const adminRouters = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "users",
        element: (
          <LazyLoad>
            <UsersManagement />
          </LazyLoad>
        ),
      },

      {
        path: "banner",
        element: (
          <LazyLoad>
            <BannersManagement />
          </LazyLoad>
        ),
      },
      {
        path: "booking",
        element: (
          <LazyLoad>
            <BookingsManagement />
          </LazyLoad>
        ),
      },
      {
        path: "categories",
        element: (
          <LazyLoad>
            <CategoriesManagement />
          </LazyLoad>
        ),
      },
      {
        path: "cinema",
        element: (
          <LazyLoad>
            <CinemasManagement />
          </LazyLoad>
        ),
      },
      {
        path: "comment",
        element: (
          <LazyLoad>
            <CommentsManagement />
          </LazyLoad>
        ),
      },
      {
        // path: "/",
        index: true,
        element: (
          <LazyLoad>
            <Dashboard />
          </LazyLoad>
        ),
      },

      {
        path: "festival",
        element: (
          <LazyLoad>
            <FestivalManagement />
          </LazyLoad>
        ),
      },
      {
        path: "movie",
        element: (
          <LazyLoad>
            <MovieManagement />
          </LazyLoad>
        ),
      },
      {
        path: "news",
        element: (
          <LazyLoad>
            <NewsManagement />
          </LazyLoad>
        ),
      },
      {
        path: "payment",
        element: (
          <LazyLoad>
            <PaymentsManagement />
          </LazyLoad>
        ),
      },
      {
        path: "room",
        element: (
          <LazyLoad>
            <RoomsManagement />
          </LazyLoad>
        ),
      },
      {
        path: "seat",
        element: (
          <LazyLoad>
            <SeatsManagement />
          </LazyLoad>
        ),
      },
      {
        path: "showtime",
        element: (
          <LazyLoad>
            <ShowTimesManagement />
          </LazyLoad>
        ),
      },
      {
        path: "snack",
        element: (
          <LazyLoad>
            <SnacksManagement />
          </LazyLoad>
        ),
      },
      {
        path: "ticket-price",
        element: (
          <LazyLoad>
            <TicketPricesManagement />
          </LazyLoad>
        ),
      },
    ],
  },
];

export default adminRouters;
