const sum4315 = require('../sum4315.js');

test('adds 11 + 72 to equal 83 + offset 0.08446439482815571', () => {
  expect(sum4315(11, 72)).toBe(83 + 0.08446439482815571);
});