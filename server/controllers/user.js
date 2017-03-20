'use strict'
const user = require('../models/user')

const getUserInfo = function* () {
  const id = this.params.id;
  const result = yield user.getUserById(id);
  this.body = result;
}
module.exports = {
  auth: (router) => {
    router.get('/user/:id',getUserInfo)
  }
}
