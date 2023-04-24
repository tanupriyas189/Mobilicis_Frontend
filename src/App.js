import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import {
  findAllMaleUsersWithPhonePriceMoreThen10000,
  findAllUsersLastNameWithMQouteLenthGT15EmailIncludesLastName,
  findAllUsersWhoseCarAreBMQMercedesAudiAndEmailDoesntIncludeDigits,
  findAllWithIncomeLessThen5AndBWAndMercedes,
  showTheDataOfTheTop10CitiesWithTheHighestNumberOfUsersAndTheirAverageIncome,
} from "./api";
import Table from "./components/Table";
import Table2 from "./components/Table2";

function App() {
  const [t1Data, setT1Data] = useState();
  const [t2Data, setT2Data] = useState();
  const [t3Data, setT3Data] = useState();
  const [t4Data, setT4Data] = useState();
  const [t5Data, setT5Data] = useState();
  const getTableOneData = async (page, limit) => {
    const tableOneData = await findAllWithIncomeLessThen5AndBWAndMercedes(
      page,
      limit
    );
    console.log(tableOneData);
    setT1Data(tableOneData.data);
  };
  const getTableTwoData = async (page, limit) => {
    const tableTwoData = await findAllMaleUsersWithPhonePriceMoreThen10000(
      page,
      limit
    );
    setT2Data(tableTwoData.data);
    console.log(tableTwoData);
  };
  const getTableThreeData = async (page, limit) => {
    const tableThreeData =
      await findAllUsersLastNameWithMQouteLenthGT15EmailIncludesLastName(
        page,
        limit
      );
    setT3Data(tableThreeData.data);
    console.log(tableThreeData);
  };
  const getTableFourData = async (page, limit) => {
    const tableFourData =
      await findAllUsersWhoseCarAreBMQMercedesAudiAndEmailDoesntIncludeDigits(
        page,
        limit
      );
    setT4Data(tableFourData.data);
    console.log(tableFourData);
  };
  const getTableFiveData = async () => {
    const tableFiveData =
      await showTheDataOfTheTop10CitiesWithTheHighestNumberOfUsersAndTheirAverageIncome();
    setT5Data(tableFiveData.data);
    console.log(tableFiveData);
  };
  useEffect(() => {
    getTableOneData(1, 10);
    getTableTwoData(1, 10);
    getTableThreeData(1, 10);
    getTableFourData(1, 10);
    getTableFiveData();
  }, []);
  return (
    <div>
      <main className="p-8">
        <h1 className="text-3xl pb-4 font-semibold ">Mobilicis</h1>
        <h2 className="text-xl font-semibold">Table 1</h2>
        <Table tableData={t1Data && t1Data.data} />

        <Pagination
          count={t1Data && t1Data.pages}
          variant="outlined"
          onChange={(event, value) => {
            console.log(value);
            getTableOneData(value, 10);
          }}
        />

        <h2 className="text-xl font-semibold">Table 2</h2>
        <Table tableData={t2Data && t2Data.data} />
        <Pagination
          count={t2Data && t2Data.pages}
          variant="outlined"
          onChange={(event, value) => {
            console.log(value);
            getTableTwoData(value, 10);
          }}
        />
        <h2 className="text-xl font-semibold">Table 3</h2>
        <Table tableData={t3Data && t3Data.data} />
        <Pagination
          count={t3Data && t3Data.pages}
          variant="outlined"
          onChange={(event, value) => {
            console.log(value);
            getTableThreeData(value, 10);
          }}
        />
        <h2 className="text-xl font-semibold">Table 4</h2>
        <Table tableData={t4Data && t4Data.data} />
        <Pagination
          count={t4Data && t4Data.pages}
          variant="outlined"
          onChange={(event, value) => {
            console.log(value);
            getTableFourData(value, 10);
          }}
        />
        <h2 className="text-xl font-semibold">Table 5</h2>
        <Table2 tableData={t5Data} />
      </main>
    </div>
  );
}

export default App;
