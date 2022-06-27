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
  req.body.author = req.user.profile._id
  Deal.create(req.body)
  .then(deal => {
    res.redirect('/deals')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/deals')
  })
}

function show(req, res) {
  Deal.findById(req.params.id)
  .populate()
  .then(deal => {
    res.render('deals/show', {
      deal,
      title: 'Deal Details'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/deals')
  })
}

function edit(req, res) {
  Deal.findById(req.params.id)
  .then(deal => {
    res.render('deals/edit', {
      deal,
      title: 'Edit Deal'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/deals')
  })
}

function update(req, res) {
  Deal.findByIdAndUpdate(req.params.id, req.body)
  .then(deal => {
    res.redirect(`/deals/${deal._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/deals')
  })
}

function deleteDeal(req, res) {
  Deal.findById(req.params.id)
  .then(deal => {
    if (deal.author.equals(req.user.profile._id)) {
      deal.delete()
      .then(() => {
        res.redirect('/deals')
      })
    } else {
      throw new Error ('NOT AUTHORIZED')
    }
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
  show,
  edit,
  update,
  deleteDeal as delete
}