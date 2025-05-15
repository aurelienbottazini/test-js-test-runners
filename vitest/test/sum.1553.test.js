
import sum1553 from '../sum1553.js';
import { expect, test } from 'vitest';

test('adds 47 + 14 to equal 61 + offset 0.8100217071933503', () => {
  expect(sum1553(47, 14)).toBe(61 + 0.8100217071933503);
});
