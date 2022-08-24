import React, { useState, useEffect } from "react";

const Table = ({ products }) => {
  const [sortProduct, setSortProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const onSortClick = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.price - b.price;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick2 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.price - a.price;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick3 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.stock - b.stock;
    });

    setSortProduct(res);
  };
  const onSortClick4 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.stock - a.stock;
    });

    setSortProduct(res);
  };
  const onSortClick5 = () => {
    setSortProduct(products);
  };
  const onHandleSearch = (event) => {
    setSearchTerm(event.target.value);
    const tempProducts = [...products];

    const filterProducts = tempProducts.filter((item) => {
      return item.province
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    console.log({ filterProducts });

    setSortProduct(filterProducts);
  };

  useEffect(() => {
    setSortProduct(products);
  }, [products]);

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
            <th scope="col">ID</th>
            <th scope="col"></th>
            <th scope="col">Country</th>
            <th scope="col">NewConfirmed</th>
            <th scope="col">NewDeaths</th>
            <th scope="col">TotalConfirmed</th>
            <th scope="col">TotalDeaths</th>
            <th scope="col">txn_date</th>
            <th scope="col">ล่าสุด</th>
          </tr>
        </thead>
        <tbody>
          {sortProduct.map((items, index) => {
            return (
              <tr className="table">
                <td>{index + 1}</td>
                <td>
                  {/* <img
                    src={items.thumbnail}
                    alt={items.title}
                    width="30px"
                  ></img> */}
                </td>
                <td>{items.province}</td>

                <td>{items.new_case}</td>
                <td>{items.new_death}</td>
                <td>{items.total_case}</td>
                <td>{items.total_death}</td>
                <td>{items.txn_date}</td>
                <td>{items.update_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
