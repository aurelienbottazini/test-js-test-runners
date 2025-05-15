
import sum1964 from '../sum1964.js';
import { expect, test } from 'vitest';

test('adds 50 + 62 to equal 112 + offset 0.7365520752736081', () => {
  expect(sum1964(50, 62)).toBe(112 + 0.7365520752736081);
});
