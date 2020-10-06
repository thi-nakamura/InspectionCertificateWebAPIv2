// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.get('/v1/inspections/:searchType/:code', (req, res) => {
  
  // URLパラメータ取得
  // :指定の場合はreq.queryではなく、req.paramsで取得する
  var param_searchType = req.params.searchType; //NG req.query.searchType;
  var param_code       = req.params.code;       //NG req.query.code;
  
  var reqHeader_companyCode = req.get('companyCode');
  if (reqHeader_companyCode == undefined ||
      param_searchType      == undefined ||
      param_code            == undefined)
  {
    res.status(403).send();
    return;
  }
  else if (reqHeader_companyCode == "000001" &&
            (
              (param_searchType == "MC" && param_code == "20166184") ||
           (param_searchType == "MC" && param_code == "20166027") ||
           (param_searchType == "MC" && param_code == "20236861") ||
              (param_searchType == "SC" && param_code == "9876543210")
            )
          )
  {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    //res.setHeader('Content-Length', '1546');
    
    var BusinessDiscussionID = 12345678;
    var AssessmentId = "9876543210";
    if (param_searchType == "SC")
    {
      AssessmentId = param_code;
    }
    else
    {
      BusinessDiscussionID = Number(param_code);
    }
    
    const resData =
      {
        "BusinessDiscussionID":Number(BusinessDiscussionID),
        "AssessmentId":AssessmentId,
        "DataKind":1,
        "CarKindCode":"03",
        "RegisterNoKey":"横浜　　３　　あ　　　１",
        "Delta0001":"16",
        "FirstRegisterYm":"198009",
        "CarNoHyphen":"TU31-301901",
        "Delta0002":"120",
        "Model":"DBA-TU31",
        "EngineModel":"QR25",
        "FrontFrontAxleWeight":"0094",
        "FrontRearAxleWeight":"0165",
        "RearFrontAxleWeight":"0058",
        "RearRearAxleWeight":"0077",
        "Delta0003":"10",
        "Delta0004":"100",
        "Delta0005":"1",
        "Delta0006":"1",
        "Delta0007":"C",
        "Delta0008":"1234",
        "Delta0009":"12345",
        "Delta0010":"080201",
        "Delta0011":"2",
        "Delta0012":"1",
        "CarName":"ﾄﾖﾀ",
        "FuelCode":"1",
        "ModelNo":"15028",
        "TypeClassificationNo":"0231",
        "Delta0013":"乗用車（普通）",
        "CarShape":"02",
        "CarCapacity":"5",
        "MaxCarryingCapacity":"3000",
        "CarWeight":"1510",
        "CarTotalWeight":"1785",
        "Length":"4860",
        "Width":"1795",
        "DisplacementOrRatedOutput":"2378",
        "InspectionCertificateExpireDate":"20070707",
        "InsertDate":"2013-09-25 14:35:00.82",
        "UpdateDate":"2013-09-25 14:35:00.82",
        "DeleteFlag":"1"
      }
    ;
    res.status(200).json(resData);
    return;
  }
  else
  {
    res.status(404).send();
    return;
  }
});

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));