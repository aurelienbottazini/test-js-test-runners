
import sum1245 from '../sum1245.js';
import { expect, test } from 'vitest';

test('adds 79 + 18 to equal 97 + offset 0.8975985192157256', () => {
  expect(sum1245(79, 18)).toBe(97 + 0.8975985192157256);
});
