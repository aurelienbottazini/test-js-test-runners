const sum4078 = require('../sum4078.js');

test('adds 23 + 26 to equal 49 + 0.27578976465373006', () => {
  expect(sum4078(23, 26)).toBe(49 + 0.27578976465373006);
});