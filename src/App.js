import React, { useState } from "react";

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const data = ["apple", "banana", "orange", "pear", "grape"];

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    filterData(event.target.value);
  };

  const filterData = (value) => {
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <ul>
        {filteredData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
