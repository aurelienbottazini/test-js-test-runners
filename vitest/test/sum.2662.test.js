
import sum2662 from '../sum2662.js';
import { expect, test } from 'vitest';

test('adds 86 + 1 to equal 87 + offset 0.2602848541037228', () => {
  expect(sum2662(86, 1)).toBe(87 + 0.2602848541037228);
});
