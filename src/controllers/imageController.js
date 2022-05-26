const { StatusCodes } = require('http-status-codes');
const path = require('path');

const sendImage = (req, res, next) => {
  try {
    const { name } = req.params;
    const pathFile = path.join(__dirname, '../images', name);

    return res.status(StatusCodes.OK).sendFile(pathFile);
  } catch (error) {
    console.log(`IMAGE ${error}`);
    return next(error);
  }
};

module.exports = sendImage;
