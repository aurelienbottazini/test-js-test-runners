const sum4697 = require('../sum4697.js');

test('adds 41 + 32 to equal 73 + 0.5325270546147925', () => {
  expect(sum4697(41, 32)).toBe(73 + 0.5325270546147925);
});