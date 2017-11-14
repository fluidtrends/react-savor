var commands = require('savor/bin/commands')

var coverageBin = "./node_modules/.bin/babel-node";
var coverageLocalArgs = ['./node_modules/.bin/istanbul', 'cover', './node_modules/.bin/_mocha', '--', '--require', './node_modules/react-savor/res/includes.js', '--report', 'lcovonly', '--recursive', 'test/specs/**/*.js'];
var nativeCoverageLocalArgs = ['./node_modules/.bin/istanbul', 'cover', './node_modules/.bin/_mocha', '--', '--require', 'react-native-mock/mock', '--require', './node_modules/react-savor/res/includes.js', '--report', 'lcovonly', 'test/specs/**/*.js'];

var testBin = "./node_modules/.bin/mocha"
var testArgs = ['--compilers', 'js:babel-core/register', '--recursive', 'test/specs/**/*.js']
var nativeTestArgs = ['--require', 'react-native-mock/mock', '--require', './node_modules/react-savor/res/includes.js', '--compilers', 'js:babel-core/register', '--recursive', 'test/specs/**/*.js']

commands.test = [{
  bin: testBin,
  args: testArgs
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
