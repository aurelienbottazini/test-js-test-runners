const sum4728 = require('../sum4728.js');

test('adds 33 + 46 to equal 79 + 0.21930028188735717', () => {
  expect(sum4728(33, 46)).toBe(79 + 0.21930028188735717);
});