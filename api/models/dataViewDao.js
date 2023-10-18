const { initializeInflux } = require("./dataSource");
const influx =  initializeInflux();

const selectData = async(from,end) =>{
    const selectdata = await influx.query(
          `
          from(bucket: "test_table_second")
          |> range(start: ${from}, stop: ${end})
          `
        )
        return selectdata;
   };
 
 
 const deleteData = async(timestamp) =>{
   const deletedata = await influx.query(
        `
        from(bucket: "your_bucket")
      |> range(start: 0, stop: ${timestamp})
      |> filter(fn: (r) => r._time == ${timestamp})
      |> delete()
        `
    )
     return deletedata;
 };
 
 
     module.exports={selectData,deleteData};
 