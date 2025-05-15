const sum4149 = require('../sum4149.js');

test('adds 60 + 88 to equal 148 + 0.2762453840714282', () => {
  expect(sum4149(60, 88)).toBe(148 + 0.2762453840714282);
});