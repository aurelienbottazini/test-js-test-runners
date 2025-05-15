
import sum1791 from '../sum1791.js';
import { expect, test } from 'vitest';

test('adds 32 + 24 to equal 56 + offset 0.5335972189077691', () => {
  expect(sum1791(32, 24)).toBe(56 + 0.5335972189077691);
});
