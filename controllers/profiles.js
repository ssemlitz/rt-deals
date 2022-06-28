import { Deal } from "../models/deal.js"
import { Profile } from "../models/profile.js"

function saveDeal(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    Deal.findById(req.body.dealId)
    .then(deal => {
      profile.savedDeals.push(req.body.dealId)
      profile.save()
      .then(() => {
        res.redirect('/')
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/deals')
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('savedDeals')
  .then(profile => {
    res.render('profiles/show', {
      profile,
      title: 'Profile'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/deals')
  })
}

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: "Dealers"
    })
  })
}

export {
  saveDeal,
  show,
  index
}