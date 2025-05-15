const sum4341 = require('../sum4341.js');

test('adds 60 + 20 to equal 80 + 0.2095708380787914', () => {
  expect(sum4341(60, 20)).toBe(80 + 0.2095708380787914);
});