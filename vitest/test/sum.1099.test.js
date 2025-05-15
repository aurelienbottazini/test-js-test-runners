
import sum1099 from '../sum1099.js';
import { expect, test } from 'vitest';

test('adds 13 + 81 to equal 94 + offset 0.9685099149412073', () => {
  expect(sum1099(13, 81)).toBe(94 + 0.9685099149412073);
});
