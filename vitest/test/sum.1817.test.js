
import sum1817 from '../sum1817.js';
import { expect, test } from 'vitest';

test('adds 67 + 2 to equal 69 + offset 0.5597715551897419', () => {
  expect(sum1817(67, 2)).toBe(69 + 0.5597715551897419);
});
