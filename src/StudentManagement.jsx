import { Table } from "antd";
import Column from "antd/es/table/Column";
import axios from "axios";
import React, { useEffect, useState } from "react";

function StudentManagement() {
  const [students, setStudents] = useState([]);
  const api = "https://66e987d287e417609449d601.mockapi.io/Student";

  //lay du lieu tu back-end bat dau tu fetch
  const fetchStudent = async () => {
    //promise : function bat dong bo => can thoi gian de thuc hien
    //await : doi toi khi api tra ve ket qua
    const response = await axios.get(api);
    console.log(response.data);
    setStudents(response.data);
    //GET lay du lieu
  };

  //[] : dependency array
  //() => {} : function
  useEffect(() => {
    //hanh dong chay mot cai gi do khi [](load lan dau), [number](chay khi number thay doi)
    fetchStudent();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
  ];

  return (
    <div>
      <h1>Student Managerment</h1>
      <Table columns={columns} dataSource={students} />
    </div>
  );
}

export default StudentManagement;
