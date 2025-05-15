const sum3532 = require('../sum3532.js');

test('adds 20 + 40 to equal 60 + 0.16526323188567804', () => {
  expect(sum3532(20, 40)).toBe(60 + 0.16526323188567804);
});