import React, { useEffect, useState } from "react";
import "../App.css";

export default function Data() {
  let users = [
    {
      userID: "u-1",
      displayName: "Jone",
      picture: "",
      score: 157000,
    },
    {
      userID: "u-2",
      displayName: "Victoria",
      picture: "",
      score: 46200,
    },
    {
      userID: "u-3",
      displayName: "Joy",
      picture: "",
      score: 38800,
    },
    {
      userID: "u-4",
      displayName: "Quinn",
      picture: "",
      score: 33400,
    },
    {
      userID: "u-5",
      displayName: "Sheenalo",
      picture: "",
      score: 31600,
    },
    {
      userID: "u-6",
      displayName: "Charlene",
      picture: "",
      score: 30800,
    },
    {
      userID: "u-7",
      displayName: "LeonaBaby",
      picture: "",
      score: 22300,
    },
  ];
  
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers((numbers) => Math.floor(Math.random() * 234233));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <h2 className="text-center">User List</h2>
        <div className="container">
          <table className="table table-background">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((val, index) => (
                <tr key={index}>
                  <th>{val.userID}</th>
                  <th className="font-color">{val.displayName}</th>
                  <td className="number_css">{numbers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
