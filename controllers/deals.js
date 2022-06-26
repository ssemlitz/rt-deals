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
  req.body.owner = req.user.profile_id
  console.log('HERE IS THE REQ BODY******', req.body)
  Deal.create(req.body)
  .then(deal => {
    res.redirect('/deals')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/deals')
  })
}

export {
  index,
  create,
  newDeal as new,
}