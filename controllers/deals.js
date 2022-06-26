import { Deal } from "../models/deal.js"

function index(req, res) {
  Deal.find({})
  .then(deals => {
    res.render('deals/index', {
      deals,
      title: 'All Deals'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index
}