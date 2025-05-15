
import sum1064 from '../sum1064.js';
import { expect, test } from 'vitest';

test('adds 8 + 18 to equal 26 + offset 0.7506774632377043', () => {
  expect(sum1064(8, 18)).toBe(26 + 0.7506774632377043);
});
