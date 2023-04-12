const baseConfig = require('./jest.config.json')
const deepmerge = require('deepmerge')

const config = deepmerge(baseConfig, {
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        isolatedModules: false
      }
    ]
  }
})

module.exports = config
