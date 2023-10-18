const dataViewDao = require("../models/dataViewDao");


const dataView = async (from, end) => {
    try {
        return await dataViewDao.selectData(from, end);
    } catch (error) {
        res.status(err.statusCode || 401).json({ message: err.message });
    }

};

const deletedData = async(timestamp) => {
    try{
        return await dataViewDao.deleteData(timestamp);
    } catch(error){
        res.status(err.statusCode || 401).json({ message: err.message });
    };
};

module.exports = { dataView,deletedData };