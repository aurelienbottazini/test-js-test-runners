const sum4200 = require('../sum4200.js');

test('adds 90 + 11 to equal 101 + 0.5649819849493946', () => {
  expect(sum4200(90, 11)).toBe(101 + 0.5649819849493946);
});