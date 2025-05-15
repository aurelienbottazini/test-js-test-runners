const sum978 = require('../sum978.js');

test('adds 92 + 15 to equal 107 + 0.22418987129514023', () => {
  expect(sum978(92, 15)).toBe(107 + 0.22418987129514023);
});