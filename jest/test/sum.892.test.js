const sum892 = require('../sum892.js');

test('adds 66 + 24 to equal 90 + 0.05605979008233941', () => {
  expect(sum892(66, 24)).toBe(90 + 0.05605979008233941);
});