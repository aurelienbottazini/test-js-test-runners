
import sum1707 from '../sum1707.js';
import { expect, test } from 'vitest';

test('adds 0 + 19 to equal 19 + offset 0.389233747243253', () => {
  expect(sum1707(0, 19)).toBe(19 + 0.389233747243253);
});
