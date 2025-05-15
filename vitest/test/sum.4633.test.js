
import sum4633 from '../sum4633.js';
import { expect, test } from 'vitest';

test('adds 67 + 73 to equal 140 + offset 0.40937429302575223', () => {
  expect(sum4633(67, 73)).toBe(140 + 0.40937429302575223);
});
