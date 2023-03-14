import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { IShippingRecord } from "./types/api_types";
import SearchBar from "./components/SearchBar";
import { RecordTable } from "./components/RecordTable";

function App() {
  // You will need to use more of these!
  // const [classList, setClassList] = useState<IUniversityClass[]>([]);
  const [records, setRecords] = useState<IShippingRecord[]>([]);
  // const [dropdownClassList, setDropdownClassList] = useState<{ label: string, value: string }[]>([{ label: "loading...", value: "loading..." }]);
  // const [selectMessage, setSelectMessage] = useState<string>("loading...");

  // /* 
  // fetch default semester class list
  //  */
  // const fetchClassList = async () => {
  //   // construct url to query class by semester
  //   var url = APPEND_BU_ID(BASE_API_URL + URL_EXTENSION_CLASS_LIST_BY_SEMESTER)
  //   // fetch url with custom headers
  //   const chaos = await fetch(url, {
  //     method: "GET",
  //     headers: GET_DEFAULT_HEADERS()
  //   })
  //     .then(res => res.json())
  //     // update classlist
  //     .then(cl => setClassList(cl))
  //     // update dropdown message
  //     .then(() => setSelectMessage("select a class"));
  //   return chaos
  // }

  // /* 
  // calculate all grades
  //  */
  // const calculate_grade = async () => {
  //   await calcAllFinalGrade(currClassId)
  //     .then(res => setRecords(res))
  // }

  // // initial load
  // useEffect(() => { fetchClassList().catch(console.error) }, [])

  // // rerender page with new classList 
  // useEffect(() => {
  //   const dropdownClassList = classList.map(x => ({ label: x.title, value: x.classId }));
  //   setDropdownClassList(dropdownClassList);
  // }, [selectMessage])

  // // rerender with calculated grade
  // useEffect(() => { calculate_grade().catch(console.error) }, [currClassId]);

  // // trigger hook when item selected
  // const itemSelected = (event: SelectChangeEvent) => {
  //   setCurrClassId(event.target.value);
  // }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Grid container spacing={2} style={{ padding: "1rem" }}>
        <Grid xs={12} container alignItems="center" justifyContent="center">
          <Typography variant="h2" gutterBottom>
            Spark Assessment
          </Typography>
        </Grid>
        <Grid xs={12} md={4}>
          <Typography variant="h4" gutterBottom>
          {process.env.APPLICATION_SECRET}
          {process.env.REACT_APP_SECRET}
          </Typography>
          <div style={{ width: "100%" }}>
            <SearchBar></SearchBar>
            {/* <Select fullWidth={true}
              label="Class"
              onChange={itemSelected}
              defaultValue={''}
              displayEmpty={true}
              renderValue={(val) => { return (val === '') ? selectMessage : dropdownClassList.find(({ value: klassID }) => klassID === val)?.label }}>
              {
                dropdownClassList.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>{label}</MenuItem>))
              }
            </Select> */}
          </div>
        </Grid>
        <Grid xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Final Grades
          </Typography>
          <div style={{ height: 600, width: '100%' }}>
            {/* Place the grade table here */}
            {/* DONE: GradeTable as JSX.Element */}
            <RecordTable data={records}/>
            {/* {GradeTable(grades)} */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
