
import sum1792 from '../sum1792.js';
import { expect, test } from 'vitest';

test('adds 28 + 73 to equal 101 + offset 0.3080553695333871', () => {
  expect(sum1792(28, 73)).toBe(101 + 0.3080553695333871);
});
