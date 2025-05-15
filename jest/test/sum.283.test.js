const sum283 = require('../sum283.js');

test('adds 93 + 35 to equal 128 + 0.9735039854729002', () => {
  expect(sum283(93, 35)).toBe(128 + 0.9735039854729002);
});