
import sum1180 from '../sum1180.js';
import { expect, test } from 'vitest';

test('adds 42 + 33 to equal 75 + offset 0.13912631345007398', () => {
  expect(sum1180(42, 33)).toBe(75 + 0.13912631345007398);
});
