import React, { useEffect, useState } from "react";

const API_URL = "https://jsd5-mock-backend.onrender.com/members";

const AdminTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [editId, setEditId] = useState(null); // Track editing ID

  // Fetch data from API
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Handle Create & Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMember = { name, role };

    try {
      if (editId) {
        // Update Member
        await fetch(`${API_URL}/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMember),
        });
      } else {
        // Create Member
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMember),
        });
      }

      setName("");
      setRole("");
      setEditId(null);
      refreshData();
    } catch (error) {
      console.error("Error saving member:", error);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      refreshData();
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  // Refresh data after CRUD operations
  const refreshData = async () => {
    setLoading(true);
    const res = await fetch(API_URL);
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Manage User Here</h2>

      {/* Form for Adding/Editing Members */}
      <form onSubmit={handleSubmit} className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      {/* Show loading while fetching */}
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300">ID</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Role</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((member) => (
              <tr key={member.id} className="bg-white border-b hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300 text-center">{member.id}</td>
                <td className="px-4 py-2 border border-gray-300">{member.name}</td>
                <td className="px-4 py-2 border border-gray-300">{member.role}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => {
                      setName(member.name);
                      setRole(member.role);
                      setEditId(member.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(member.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminTable;
