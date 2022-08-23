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
      return item.title
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

      <table className="table table-secondarytable-striped shadow">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"></th>
            <th scope="col">Title</th>
            <th scope="col">Brand</th>
            <th scope="col">description</th>
            <th scope="col" style={{ width: "200px" }}>
              Price{" "}
              <span role="button" className="" onClick={onSortClick}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick2}>
                ⬇️
              </span>
            </th>
            <th scope="col">
              Stock
              <span role="button" className="" onClick={onSortClick3}>
                ⬆️
              </span>
              <span role="button" className="" onClick={onSortClick4}>
                ⬇️
              </span>
              </th>
              <th scope="col">
              Restore
              <span role="button" className="" onClick={onSortClick5}>
                😊
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortProduct.map((items, index) => {
            return (
              <tr className="table-info">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={items.thumbnail}
                    alt={items.title}
                    width="30px"
                  ></img>
                </td>
                <td>{items.title}</td>

                <td>{items.brand}</td>
                <td>{items.description}</td>
                <td>{items.price}</td>
                <td>{items.stock}</td>
                <td>{items.restore}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
