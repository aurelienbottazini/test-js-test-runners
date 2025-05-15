
import sum1510 from '../sum1510.js';
import { expect, test } from 'vitest';

test('adds 35 + 24 to equal 59 + offset 0.620970962076491', () => {
  expect(sum1510(35, 24)).toBe(59 + 0.620970962076491);
});
