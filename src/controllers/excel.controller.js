const db = require("../models");
const Nservice = db.nservices;
const readXlsxFile = require("read-excel-file/node");

const upload = async (req, res) => {
  try {
    // if (req.file == undefined) {
    //   return res.status(400).send("Please upload an excel file!");
    // }
    
    let path =__basedir + "\\resources\\static\\assets\\uploads\\users.xlsx";
    let nameFile = path.split('\\').pop();

    readXlsxFile(path).then((rows) => {
      rows.shift();

      let nservices = [];

      rows.forEach((row) => {
        let nservice = {
          User_ID: row[0],
          User_Name: row[1],
          Date: row[2],
          Punch_In: row[3],
          Punch_Out: row[4]
        };
        nservices.push(nservice);
      });

      Nservice.bulkCreate(nservices, {ignoreDuplicates: true})
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + nameFile,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + nameFile,
    });
  }
};

const getNservices = (req, res) => {
    Nservice.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

module.exports = {
  upload,
  getNservices,
};