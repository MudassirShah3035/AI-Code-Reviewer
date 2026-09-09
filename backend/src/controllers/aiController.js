const { resource } = require('../app');
const aiService = require('../services/ai.service.js')


const GenContent = async(req, res) =>{
  try {
    const {code} = req.body

    if(!code){
      return res.status(400).json("Code is required")
    }
    const response = await aiService(code);

    return res.status(200).json({
      success : true,
      response : response
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success : false,
      message : error.message
    })
  }
}

module.exports = GenContent