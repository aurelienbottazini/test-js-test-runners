
import sum1768 from '../sum1768.js';
import { expect, test } from 'vitest';

test('adds 54 + 29 to equal 83 + offset 0.2434903353677066', () => {
  expect(sum1768(54, 29)).toBe(83 + 0.2434903353677066);
});
