const Result = require('./result.model');

module.exports.sendresults = async (req, res) => {
let testsTesult = []
for (let i=0; i<req.body.results.length; i++) {
  testsTesult.push(
    {
      reportid: req.body.reportid,
      project: req.body.project,
      component: req.body.component,
      title: req.body.results[i].title,
      link: req.body.results[i].link,
      result: req.body.results[i].result
    }
  )
}

  const result = Result.insertMany(
    testsTesult
  )
  res.json(result);
};



module.exports.getresults = async (req, res) => {
  let findReq = {
    reportid:  req.body.reportid,
    project: req.body.project
  }
  if (req.body.component !== undefined) {
    findReq.component = req.body.component
  }
  console.log(findReq)
  const result = await Result.find(findReq).skip(req.body.offset).limit(req.body.count);
  res.json(result);
};