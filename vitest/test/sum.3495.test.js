
import sum3495 from '../sum3495.js';
import { expect, test } from 'vitest';

test('adds 99 + 23 to equal 122 + offset 0.2654232417594711', () => {
  expect(sum3495(99, 23)).toBe(122 + 0.2654232417594711);
});
