
import sum2289 from '../sum2289.js';
import { expect, test } from 'vitest';

test('adds 34 + 17 to equal 51 + offset 0.1456418416470875', () => {
  expect(sum2289(34, 17)).toBe(51 + 0.1456418416470875);
});
