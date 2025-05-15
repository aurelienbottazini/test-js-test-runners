
import sum1684 from '../sum1684.js';
import { expect, test } from 'vitest';

test('adds 49 + 59 to equal 108 + offset 0.008517136383262458', () => {
  expect(sum1684(49, 59)).toBe(108 + 0.008517136383262458);
});
