const sum307 = require('../sum307.js');

test('adds 73 + 14 to equal 87 + offset 0.14375910073418796', () => {
  expect(sum307(73, 14)).toBe(87 + 0.14375910073418796);
});