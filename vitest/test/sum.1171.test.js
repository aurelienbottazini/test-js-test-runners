
import sum1171 from '../sum1171.js';
import { expect, test } from 'vitest';

test('adds 10 + 94 to equal 104 + offset 0.32054087237358964', () => {
  expect(sum1171(10, 94)).toBe(104 + 0.32054087237358964);
});
