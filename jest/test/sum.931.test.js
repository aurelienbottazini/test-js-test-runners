const sum931 = require('../sum931.js');

test('adds 58 + 15 to equal 73 + offset 0.10342522485928185', () => {
  expect(sum931(58, 15)).toBe(73 + 0.10342522485928185);
});