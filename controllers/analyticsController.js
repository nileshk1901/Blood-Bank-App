const {mongoose } = require("mongoose");
const inventoryModel = require("../models/inventoryModel");

//get blood data
const bloodGroupDetailsController=async(req,res)=>{
    try {
        const bloodGroups=['A-','A+','B+','B-','AB+','AB-','O+','O-'];
        const bloodGroupData = [];
    const organisation = new mongoose.Types.ObjectId(req.body.userId);
    //get single blood group
    await Promise.all(
      bloodGroups.map(async (bloodGroup) => {
        //COunt TOTAL IN
        const totalIn = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "in",
              organisation,
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$quantity" },
            },
          },
        ]);
        //COunt TOTAL OUT
        const totalOut = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "out",
              organisation,
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$quantity" },
            },
          },
        ]);
        //CALCULATE TOTAL
        const availabeBlood =
          (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0);

        //PUSH DATA
        bloodGroupData.push({
          bloodGroup,
          totalIn: totalIn[0]?.total || 0,
          totalOut: totalOut[0]?.total || 0,
          availabeBlood,
        });
      })
    );

    return res.status(200).send({
      success: true,
      message: "Blood Group Data Fetch Successfully",
      bloodGroupData,
    });
  
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'error in get blood group data analytics api'
        })
    }

}
module.exports={bloodGroupDetailsController}