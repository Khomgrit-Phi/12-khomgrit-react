import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]); // Store fetched data
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch data from API when component mounts
  useEffect(() => {
    fetch("https://jsd5-mock-backend.onrender.com/members") // Example API
      .then((response) => response.json())
      .then((json) => {
        setData(json); // Store data in state
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">User Data</h2>
      {loading ? (
        <p>Loading...</p> // Show loading message
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300">ID</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="bg-white border-b">
                <td className="px-4 py-2 border border-gray-300">{user.id}</td>
                <td className="px-4 py-2 border border-gray-300">{user.name}</td>
                <td className="px-4 py-2 border border-gray-300">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
