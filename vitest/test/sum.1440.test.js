
import sum1440 from '../sum1440.js';
import { expect, test } from 'vitest';

test('adds 84 + 23 to equal 107 + offset 0.8233154072534803', () => {
  expect(sum1440(84, 23)).toBe(107 + 0.8233154072534803);
});
