const sum1732 = require('../sum1732.js');

test('adds 74 + 29 to equal 103 + offset 0.20956048434937413', () => {
  expect(sum1732(74, 29)).toBe(103 + 0.20956048434937413);
});