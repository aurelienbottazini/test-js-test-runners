const sum3375 = require('../sum3375.js');

test('adds 70 + 48 to equal 118 + 0.11518512095061428', () => {
  expect(sum3375(70, 48)).toBe(118 + 0.11518512095061428);
});