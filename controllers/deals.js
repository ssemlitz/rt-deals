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

function newDeal(req, res) {
  res.render('deals/new', {
    title: 'Add Deal'
  })
}

function create(req, res) {
  console.log('CREATE A DEAL')
}

export {
  index,
  create,
  newDeal as new,
}