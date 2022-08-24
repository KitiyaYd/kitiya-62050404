import React, { useState, useEffect } from "react";

const Table = ({ ID }) => {
  const [sortID, setSortID] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const onHandleSearch = (event) => {
    setSearchTerm(event.target.value);
    const tempID = [...ID];

    const filterID = tempID.filter((item) => {
      return item.ID
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    console.log({ filterID });

    setSortID(filterID);
  };

  useEffect(() => {
    setSortID(ID);
  }, [ID]);

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="search..."
          value={searchTerm}
          onChange={onHandleSearch}
        />
      </div>

      <table className="table table-danger table-striped shadow">
        <thead>
          <tr>
          
            <th scope="col">Country</th>
            <th scope="col">TotalConfirme</th>
            <th scope="col">TotalDeaths</th>
            <th scope="col" style={{ width: "200px" }}>
            TotalRecovered
            </th>
          </tr>
        </thead>
        <tbody>
        <td>Afghanistan</td>
        <td>191247</td>
        <td>7768</td>
        <td>0</td>

        
          {sortID.map((items, index) => {
            return (
              <tr className="table-info">
                <td>{index + 1}</td>
                <td>{items.Country}</td>
                <td>{items.TotalConfirme}</td>
                <td>{items.TotalDeaths}</td>
                <td>{items.TotalRecovered}</td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
