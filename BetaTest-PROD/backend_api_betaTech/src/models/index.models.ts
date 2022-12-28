export const User = require('./user.models')
export const Assets = require('./assets.models')
export const Loans = require('./loans.model')

Loans.belongsTo(User, {foreignKey :"idNumber"})
User.hasOne(Loans, {foreignKey :"idNumber"})

Loans.belongsTo(Assets, {foreignKey :"codeAssets"})
Assets.hasOne(Loans, {foreignKey :"codeAssets"})

