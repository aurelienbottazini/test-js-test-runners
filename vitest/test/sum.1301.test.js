
import sum1301 from '../sum1301.js';
import { expect, test } from 'vitest';

test('adds 18 + 24 to equal 42 + offset 0.13646509673044405', () => {
  expect(sum1301(18, 24)).toBe(42 + 0.13646509673044405);
});
