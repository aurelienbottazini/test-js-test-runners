
import sum4457 from '../sum4457.js';
import { expect, test } from 'vitest';

test('adds 37 + 98 to equal 135 + offset 0.8715675452325905', () => {
  expect(sum4457(37, 98)).toBe(135 + 0.8715675452325905);
});
