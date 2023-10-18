const dataViewService = require("../services/dataViewService");

const dataView = async(req,res) => {
    const from = req.query.from;
    const end = req.query.end || Math.floor(Date.now() / 1000);
    if (!from) {
        res.status(400).json({ error: ' 시작시간이 필수입니다' });
        return;
      }
    try{ 
        const view = await dataViewService.dataView(from,end);
        res.status(201).json(view);
    }catch (err){
        res.status(err.statusCode || 401).json({ message: err.message });
    }
};

const deletedData =async (req,res) => {
    const timestamp =req.query.timestamp;
    try{ 
       await dataViewService.deletedData(timestamp);
       res.json({message:'success'});
    }catch(error){
        console.log("데이터 삭제 중 오류 발생:",error);
        res.status(500).json({message:'fail'});
    }
};






module.exports={dataView,deletedData};