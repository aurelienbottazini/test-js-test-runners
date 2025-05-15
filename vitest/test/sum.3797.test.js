
import sum3797 from '../sum3797.js';
import { expect, test } from 'vitest';

test('adds 14 + 5 to equal 19 + offset 0.012090464272186852', () => {
  expect(sum3797(14, 5)).toBe(19 + 0.012090464272186852);
});
