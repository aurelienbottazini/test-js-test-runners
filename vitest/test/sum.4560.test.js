
import sum4560 from '../sum4560.js';
import { expect, test } from 'vitest';

test('adds 45 + 98 to equal 143 + offset 0.7843841641424047', () => {
  expect(sum4560(45, 98)).toBe(143 + 0.7843841641424047);
});
