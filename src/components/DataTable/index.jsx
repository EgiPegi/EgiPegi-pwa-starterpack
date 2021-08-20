import { useEffect, useState } from "react";

const DataTable = (props) => {
  const { columns, data, pagination, loading } = props;
  const [PerPage, setPerPage] = useState(5);
  const [dataTable, setdataTable] = useState([]);
  const [Page, setPage] = useState(1);
  const [Pa, setPa] = useState([]);

  useEffect(() => {
    const slicePage = Page - 1;
    const firstData = PerPage * slicePage;
    const endPage = PerPage * Page;
    const tmp = [];
    for (let index = 0; index < data.length; index++) {
      if (PerPage * index <= data.length) {
        tmp.push(index + 1);
      }
    }
    if (PerPage > 15) {
      if (Page >= PerPage / 10) {
        setPa(tmp.slice(Page - PerPage / 10, Page + 2));
      } else {
        setPa(tmp.slice(Page - Page, 5));
      }
    } else {
      if (Page >= PerPage / 2) {
        setPa(tmp.slice(Page - PerPage / 2, Page + 2));
      } else {
        setPa(tmp.slice(Page - Page, 5));
      }
    }
    setdataTable(data.slice(firstData, endPage));
  }, [PerPage, data, Page]);

  const changePage = (e) => {
    setPage(parseInt(e.target.value));
  };

  return (
    <div className="table_component">
      {loading ? (
        <div className="loading">
          <div className="loader-md" />
        </div>
      ) : null}
      <table id="custum_table">
        <thead>
          <tr>
            {columns.map((row) => {
              return <th key={row.name}>{row.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataTable.map((col, i) => {
            return (
              <tr key={i}>
                {columns.map((row, key) => {
                  if (row.action) {
                    return (
                      <td key={key} width={row.width}>
                        {row.action(col)}
                      </td>
                    );
                  } else {
                    return (
                      <td key={key} width={row.width}>
                        {col[row.selector]}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {!pagination ? null : (
        <div className="pagination">
          {data.length} /{" "}
          <select
            onChange={(e) => {
              setPerPage(parseInt(e.target.value));
              setPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={data.length}>full</option>
          </select>
          <li onClick={() => setPage(1)}>&laquo;</li>
          {Pa.map((pg) => (
            <li
              value={pg}
              key={pg}
              className={Page === pg ? "active" : ""}
              onClick={changePage}
            >
              {pg}
            </li>
          ))}
          <li onClick={() => setPage(Math.ceil(data.length / PerPage))}>
            &raquo;
          </li>
        </div>
      )}
    </div>
  );
};

export default DataTable;
