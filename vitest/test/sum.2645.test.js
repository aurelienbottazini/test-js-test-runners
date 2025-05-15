
import sum2645 from '../sum2645.js';
import { expect, test } from 'vitest';

test('adds 99 + 44 to equal 143 + offset 0.2284340515221901', () => {
  expect(sum2645(99, 44)).toBe(143 + 0.2284340515221901);
});
