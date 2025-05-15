const sum807 = require('../sum807.js');

test('adds 71 + 77 to equal 148 + offset 0.8806778863877145', () => {
  expect(sum807(71, 77)).toBe(148 + 0.8806778863877145);
});