// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// v2です
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
  else if (reqHeader_companyCode == "000002" &&
            (
              (param_searchType == "MC" && param_code == "20166184") ||
           (param_searchType == "MC" && param_code == "20166027") ||
           (param_searchType == "MC" && param_code == "20236861") ||
    (param_searchType == "MC" && param_code == "20163423") ||
    (param_searchType == "MC" && param_code == "20165645") ||
    (param_searchType == "MC" && param_code == "20165678") ||
    (param_searchType == "MC" && param_code == "20174043") ||
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
        "CarKindCode":1,
        "RegisterNoKey":"横浜　　３　　あ　　　１",
        "ExportArrangementNumber":"16",
        "FirstRegisterYm":"0710",
        "CarNoHyphen":"TU31-301901",
        "ShadaiNumStampingPosition":"120",
        "Model":"DBA-TU31",
        "EngineModel":"QR25",
        "FrontFrontAxleWeight":"0094",
        "FrontRearAxleWeight":"0165",
        "RearFrontAxleWeight":"0058",
        "RearRearAxleWeight":"0077",
        "NoiseRegulation":"10",
        "ProximityExhustNoiseLimits":"100",
        "DriveSystem":"1",
        "MeasurementCarOpashimeta":"1",
        "MesurementModeNOxPM":"C",
        "NOxValue":"1234",
        "PMValue":"12345",
        "SecurityStandardsAppliedDate":"080201",
        "NumberPlateSize":"2",
        "ReportType":"1",
        "CarName":"ﾄﾖﾀ",
        "FuelCode":"1",
        "ModelNo":"15028",
        "TypeClassificationNo":"0231",
        "UseType":"乗用車（普通）",
        "CarShape":"02",
        "CarCapacity":"5",
        "MaxCarryingCapacity":"3000",
        "CarWeight":"1510",
        "CarTotalWeight":"1785",
        "Length":"4860",
        "Width":"1795",
        "Height":"1420",
        "DisplacementOrRatedOutput":"2378",
        "InspectionCertificateExpireDate":"190509",
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