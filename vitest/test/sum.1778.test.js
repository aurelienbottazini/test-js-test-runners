
import sum1778 from '../sum1778.js';
import { expect, test } from 'vitest';

test('adds 69 + 3 to equal 72 + offset 0.7521745534763008', () => {
  expect(sum1778(69, 3)).toBe(72 + 0.7521745534763008);
});
