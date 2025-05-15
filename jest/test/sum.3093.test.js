const sum3093 = require('../sum3093.js');

test('adds 18 + 93 to equal 111 + 0.2395035207237577', () => {
  expect(sum3093(18, 93)).toBe(111 + 0.2395035207237577);
});