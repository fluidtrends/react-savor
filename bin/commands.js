var commands = require('savor/bin/commands')

var coverageBin = "./node_modules/.bin/nyc";
var coverageLocalArgs = ['--reporter=lcov', 'npm', 'run', 'test'];
var nativeCoverageLocalArgs = ['./node_modules/.bin/istanbul', 'cover', './node_modules/.bin/_mocha', '--', '--require', 'react-native-mock/mock', '--require', './node_modules/react-savor/res/includes.js', '--report', 'lcovonly', 'test/specs/**/*.js'];

var testBin = "./node_modules/.bin/mocha"
var testArgs = ['--require', './node_modules/react-savor/res/setup.js', '--require', '@babel/register', '--recursive', 'test/specs/**/*.js']
var nativeTestArgs = ['--require', 'react-native-mock/mock', '--require', './node_modules/react-savor/res/includes.js', '--require', 'babel-core/register', '--recursive', 'test/specs/**/*.js']

commands.test = [{
  bin: testBin,
  args: testArgs
}]

commands.testing = [{
  bin: testBin,
  args: testArgs.concat(['-g', 'savoring'])
}]

commands.coverage = [{
  bin: coverageBin,
  args: coverageLocalArgs
}]

commands.nativetest = [{
  bin: testBin,
  args: nativeTestArgs
}]

commands.nativecoverage = [{
  bin: coverageBin,
  args: nativeCoverageLocalArgs
}]

module.exports = commands
