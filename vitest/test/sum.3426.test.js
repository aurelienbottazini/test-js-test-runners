
import sum3426 from '../sum3426.js';
import { expect, test } from 'vitest';

test('adds 5 + 31 to equal 36 + offset 0.08980487001181447', () => {
  expect(sum3426(5, 31)).toBe(36 + 0.08980487001181447);
});
