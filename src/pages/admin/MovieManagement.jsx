import React, { useState } from "react";
import { Button, Table, Input } from "antd";

const movies = [
  {
    index: 1, // Số thứ tự thay cho id
    title: "Avengers: Endgame",
    duration: 181,
    releaseDate: "2019-04-26",
    language: "English",
    ageRating: "PG-13",
    director: "Anthony Russo, Joe Russo",
    cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
    country: "USA",
    status: "Released",
    type: "Action, Adventure, Drama",
    posterUrl: "https://link-to-poster.jpg",
    trailerUrl: "https://link-to-trailer.mp4",
  },
  {
    index: 2,
    title: "Jurassic World",
    duration: 124,
    releaseDate: "2015-06-12",
    language: "English",
    ageRating: "PG-13",
    director: "Colin Trevorrow",
    cast: "Chris Pratt, Bryce Dallas Howard, Vincent D'Onofrio",
    country: "USA",
    status: "Released",
    type: "Action, Adventure, Sci-Fi",
    posterUrl: "https://link-to-poster.jpg",
    trailerUrl: "https://link-to-trailer.mp4",
  },
  {
    index: 3,
    title: "The Lion King",
    duration: 88,
    releaseDate: "1994-06-15",
    language: "English",
    ageRating: "G",
    director: "Roger Allers, Rob Minkoff",
    cast: "Matthew Broderick, Jeremy Irons, James Earl Jones",
    country: "USA",
    status: "Released",
    type: "Animation, Adventure, Drama",
    posterUrl: "https://link-to-poster.jpg",
    trailerUrl: "https://link-to-trailer.mp4",
  },
];

export default function MovieManagement() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.director.toLowerCase().includes(search.toLowerCase()) ||
      movie.cast.toLowerCase().includes(search.toLowerCase()) ||
      movie.country.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    {
      title: "STT", // Hiển thị số thứ tự thay cho ID
      dataIndex: "index", // Chứa số thứ tự
      key: "index",
    },
    {
      title: "Movie Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Duration (min)",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      key: "releaseDate",
    },
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
    },
    {
      title: "Age Rating",
      dataIndex: "ageRating",
      key: "ageRating",
    },
    {
      title: "Director",
      dataIndex: "director",
      key: "director",
    },
    {
      title: "Cast",
      dataIndex: "cast",
      key: "cast",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Poster",
      dataIndex: "posterUrl",
      key: "posterUrl",
      render: (url) => (
        <img src={url} alt="Poster" style={{ width: "100px" }} />
      ),
    },
    {
      title: "Trailer",
      dataIndex: "trailerUrl",
      key: "trailerUrl",
      render: (url) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Watch Trailer
        </a>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <span>
          <Button type="link" style={{ marginRight: 8 }}>
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
          Movie Management
        </h1>
        <Button type="primary">Add New Movie</Button>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Input
          value={search}
          onChange={handleSearchChange}
          placeholder="Search movies..."
          style={{ width: "300px" }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={filteredMovies}
        rowKey="index" // Sử dụng index làm khóa cho dòng
        pagination={false}
      />
    </div>
  );
}
