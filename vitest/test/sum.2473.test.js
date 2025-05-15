
import sum2473 from '../sum2473.js';
import { expect, test } from 'vitest';

test('adds 20 + 40 to equal 60 + offset 0.7272013308844832', () => {
  expect(sum2473(20, 40)).toBe(60 + 0.7272013308844832);
});
