
import sum1451 from '../sum1451.js';
import { expect, test } from 'vitest';

test('adds 20 + 77 to equal 97 + offset 0.9314354804076702', () => {
  expect(sum1451(20, 77)).toBe(97 + 0.9314354804076702);
});
