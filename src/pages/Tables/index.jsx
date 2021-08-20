import React from "react";
import DataTable from "../../components/DataTable";

const Tables = () => {
  const columns = [
    {
      name: "Dataset 1",
      selector: "data1",
      width: "200px",
    },
    {
      name: "Dataset 2",
      selector: "data2",
      // action: (row: any) => row.data2,
    },
    {
      name: "Action",
      selector: "action",
      width: "50px",
      action: (row) => (
        <div
          onClick={() => alert(JSON.stringify(row))}
          style={{
            cursor: "pointer",
            backgroundColor: "mediumseagreen",
            color: "white",
            padding: 4,
            borderRadius: 4,
          }}
        >
          alert
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="breadcrumb">
        <div className="bread-nav">home / tables</div>
        <hr />
        <div className="title">Table</div>
      </div>
      <div className="card">
        <div className="card-header">Table Title</div>
        <div className="card-body">
          <DataTable
            columns={columns}
            loading={false}
            data={data}
            pagination={true}
          />
        </div>
      </div>
    </>
  );
};

const data = [
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 5",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 7",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 8",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 9",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 10",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 11",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 12",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 13",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 14",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 15",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 16",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 17",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 18",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 7",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 5",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 7",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 8",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 9",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 10",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 11",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 12",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 13",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 14",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 15",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 16",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 17",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 18",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 7",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 5",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 7",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 8",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 9",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 10",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 11",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 12",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 13",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 14",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 15",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 16",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 17",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 18",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 7",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 5",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 7",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 8",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 9",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 10",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 11",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 12",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 13",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 14",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 15",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 16",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 17",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 18",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 7",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 5",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 7",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 8",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 9",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 10",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 11",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 12",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 13",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 14",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 15",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 16",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 17",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 18",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 7",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 5",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 7",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 8",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 9",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 10",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 11",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 12",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 13",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 14",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 15",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 16",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 17",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 18",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 7",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 5",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 7",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 8",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 9",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 10",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 11",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 12",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 13",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 14",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 15",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 16",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 17",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 18",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 7",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 5",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 7",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 8",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 9",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 10",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 11",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 12",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 13",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 14",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 15",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 16",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 17",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. 18",
  },
  {
    data1: "abc",
    data2: "Lorem ipsum dolor sit amet. 1",
    data3: "yyy",
  },
  {
    data1: "abcd",
    data2: "Lorem ipsum dolor sit amet. 2",
  },
  {
    data1: "abcxxx",
    data2: "Lorem ipsum dolor sit amet. 3",
  },
  {
    data1: "abcr",
    data2: "Lorem ipsum dolor sit amet. 4",
  },
  {
    data1: "abct",
    data2: "Lorem ipsum dolor sit amet. 6",
  },
  {
    data1: "abcy",
    data2: "Lorem ipsum dolor sit amet. end",
  },
];

export default Tables;
